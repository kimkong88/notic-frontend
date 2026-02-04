"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Check, CreditCard, ExternalLink, Loader2 } from "lucide-react";

type BillingStatus = {
  plan: "free" | "pro";
  status?: string;
  expiredAt?: string | null;
};

type BillingContentProps = {
  apiUrl: string;
  getAuthHeaders: () => HeadersInit;
  onSessionExpired: () => void;
};

export default function BillingContent({
  apiUrl,
  getAuthHeaders,
  onSessionExpired,
}: BillingContentProps) {
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<"checkout" | "portal" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const fetchStatus = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiUrl}/billing/status`, {
        headers: getAuthHeaders(),
      });
      if (res.status === 401) {
        onSessionExpired();
        return;
      }
      if (!res.ok) {
        setError("Could not load billing status.");
        return;
      }
      const data = (await res.json()) as BillingStatus;
      setStatus(data);
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  }, [apiUrl, getAuthHeaders, onSessionExpired]);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      setCheckoutSuccess(true);
      window.history.replaceState({}, "", window.location.pathname);
      fetchStatus();
      const retry = setTimeout(() => fetchStatus(), 2500);
      const clearBanner = setTimeout(() => setCheckoutSuccess(false), 5000);
      return () => {
        clearTimeout(retry);
        clearTimeout(clearBanner);
      };
    }
  }, [fetchStatus]);

  const handleCheckout = async () => {
    setActionLoading("checkout");
    setError(null);
    try {
      const returnUrl = typeof window !== "undefined" ? window.location.origin + "/billing" : "/billing";
      const res = await fetch(`${apiUrl}/billing/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify({
          successUrl: returnUrl,
          cancelUrl: returnUrl,
        }),
      });
      if (res.status === 401) {
        onSessionExpired();
        return;
      }
      if (!res.ok) {
        setError("Could not start checkout.");
        return;
      }
      const data = (await res.json()) as { url?: string };
      if (typeof data?.url === "string") {
        window.location.href = data.url;
        return;
      }
      setError("Invalid checkout response.");
    } catch {
      setError("Network error.");
    } finally {
      setActionLoading(null);
    }
  };

  const handlePortal = async () => {
    setActionLoading("portal");
    setError(null);
    try {
      const returnUrl = typeof window !== "undefined" ? window.location.origin + "/billing" : "/billing";
      const res = await fetch(`${apiUrl}/billing/create-portal-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify({ returnUrl }),
      });
      if (res.status === 401) {
        onSessionExpired();
        return;
      }
      if (!res.ok) {
        setError("Could not open billing portal.");
        return;
      }
      const data = (await res.json()) as { url?: string };
      if (typeof data?.url === "string") {
        window.location.href = data.url;
        return;
      }
      setError("Invalid portal response.");
    } catch {
      setError("Network error.");
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--accent)]" aria-hidden />
      </div>
    );
  }

  if (error && !status) {
    return (
      <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 text-center">
        <p className="text-[var(--text-secondary)] mb-4">{error}</p>
        <button
          type="button"
          onClick={fetchStatus}
          className="text-[var(--accent)] hover:underline font-medium cursor-pointer"
        >
          Try again
        </button>
      </div>
    );
  }

  const isPro = status?.plan === "pro";
  const expiredAt = status?.expiredAt ? new Date(status.expiredAt) : null;
  const hasAccess = isPro && (!expiredAt || expiredAt > new Date());

  const freeIncludes = [
    "Unlimited notes and folders locally",
    "Sync up to 10 notes to the cloud (then sync pauses)",
    "2 tabs in the editor",
  ];
  const proIncludes = [
    "Unlimited cloud sync",
    "Unlimited editor tabs",
    "Publish & share",
    "Integrations",
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
        Billing
      </h1>

      {checkoutSuccess && (
        <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 px-4 py-3 text-sm text-emerald-800 dark:text-emerald-200">
          Payment successful. Your Pro access is now active.
        </div>
      )}

      <div className="card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center">
            <CreditCard className="text-[var(--accent)] w-6 h-6" />
          </div>
          <div>
            <p className="text-lg font-semibold text-[var(--text-primary)]">
              {hasAccess ? "Pro" : "Free"}
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              {hasAccess
                ? "You have access to all Pro features."
                : "Your current plan. Upgrade anytime for unlimited sync and more."}
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border-primary)] pt-4 mt-4 space-y-4">
          <p className="text-sm font-medium text-[var(--text-primary)]">
            {hasAccess ? "Pro includes" : "Free includes"}
          </p>
          <ul className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
            {(hasAccess ? proIncludes : freeIncludes).map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                  <Check className="w-3 h-3 text-[var(--accent)]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          {!hasAccess && (
            <>
              <p className="text-sm font-medium text-[var(--text-primary)] pt-2">
                Pro adds
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
                {proIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                      <Check className="w-3 h-3 text-[var(--accent)]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {status?.expiredAt && expiredAt && expiredAt > new Date() && (
          <p className="text-sm text-[var(--text-muted)] mt-4">
            Access until {expiredAt.toLocaleDateString()}.
          </p>
        )}

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400 mt-4">{error}</p>
        )}

        <div className="pt-6">
          {!hasAccess ? (
            <button
              type="button"
              onClick={handleCheckout}
              disabled={!!actionLoading}
              className="w-full py-3 px-4 rounded-xl font-semibold bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {actionLoading === "checkout" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  Upgrade to Pro
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePortal}
              disabled={!!actionLoading}
              className="w-full py-3 px-4 rounded-xl font-semibold border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            >
              {actionLoading === "portal" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <ExternalLink className="w-5 h-5" />
                  Manage subscription
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
