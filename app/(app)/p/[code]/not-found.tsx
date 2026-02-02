import React from "react";
import Link from "next/link";

/**
 * Shown when the shared note doesn't exist or has been unpublished (notFound() from page).
 */
export default function PublishedNoteNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
          Note not found
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          This note doesn&apos;t exist or has been unpublished by the author.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
        >
          Back to Notic
        </Link>
      </div>
    </main>
  );
}
