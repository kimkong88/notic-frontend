"use client";

import React, { useEffect } from "react";
import Link from "next/link";

/**
 * Shown when an error is thrown while loading the shared note (e.g. fetch failed, network error).
 */
export default function PublishedNoteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Published note error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
          Something went wrong
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          We couldn&apos;t load this note. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
          >
            Back to Notic
          </Link>
        </div>
      </div>
    </main>
  );
}
