"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useAppAuth } from "@/components/context/AppAuthContext";
import BillingContent from "@/components/billing/BillingContent";
import BillingAuthScreen from "@/components/billing/BillingAuthScreen";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.notelight.app";

type AuthMode = "token" | "jwt" | "none" | null;

export default function BillingPage() {
  const { setLoggedIn } = useAppAuth();
  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [billingToken, setBillingToken] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  /** Sync auth state to app header (Sign out vs Get Notic). */
  useEffect(() => {
    if (authMode === "token" || authMode === "jwt") setLoggedIn(true);
    else if (authMode === "none") setLoggedIn(false);
  }, [authMode, setLoggedIn]);

  /** Pure check: does a cookie-based session exist? (no setState – effect applies state.) */
  const hasCookieSession = useCallback(async (): Promise<boolean> => {
    if (typeof window === "undefined") return false;
    const res = await fetch("/api/auth/session", { credentials: "include" });
    return res.ok;
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token && token.length > 0) {
      queueMicrotask(() => {
        setBillingToken(token);
        setAuthMode("token");
      });
      return;
    }
    hasCookieSession().then((ok) => {
      queueMicrotask(() => {
        setAuthMode(ok ? "jwt" : "none");
      });
    });
  }, [hasCookieSession]);

  const handleAuthSuccess = () => {
    setAuthMode("jwt");
    window.history.replaceState({}, "", "/billing");
  };

  /** Cookie-based JWT: use proxy (/api/billing/*), no headers. Token-based: use API_URL + x-billing-token. */
  const getBillingApiUrl = useCallback(() => {
    if (authMode === "token" && billingToken) return API_URL;
    if (authMode === "jwt" && !accessToken) return "/api"; // cookie session → proxy
    return API_URL;
  }, [authMode, billingToken, accessToken]);

  const getAuthHeaders = useCallback((): HeadersInit => {
    if (authMode === "token" && billingToken) {
      return { "x-billing-token": billingToken };
    }
    if (authMode === "jwt" && accessToken) {
      return { Authorization: `Bearer ${accessToken}` };
    }
    return {};
  }, [authMode, billingToken, accessToken]);

  if (authMode === null) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="animate-pulse text-[var(--text-muted)]">Loading…</div>
      </div>
    );
  }

  if (authMode === "none") {
    const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const error = params?.get("error");

    return (
      <main className="flex flex-1 flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
        {error && (
          <div className="mx-auto mb-6 max-w-md rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
            Sign-in failed. Please try again or open billing from the Notic extension.
          </div>
        )}
        <BillingAuthScreen onSuccess={handleAuthSuccess} apiUrl={API_URL} />
      </main>
    );
  }

  return (
    <main className="flex-1 px-4 pb-20 pt-8 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-[var(--accent)] transition-opacity hover:opacity-80"
        >
          ← Back to Home
        </Link>
        <BillingContent
          apiUrl={getBillingApiUrl()}
          getAuthHeaders={getAuthHeaders}
          onSessionExpired={() => {
            if (authMode === "jwt" && !accessToken) {
              window.location.href = "/api/auth/logout";
              return;
            }
setAuthMode("none");
              setAccessToken(null);
          }}
        />
      </div>
    </main>
  );
}
