import React from "react";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ code: string }>;
};

/**
 * Published note page: markdown notes shared from the Chrome extension.
 * URL: /p/[code]
 * TODO: fetch note by code from API, render markdown.
 */
export default async function PublishedNotePage({ params }: PageProps) {
  const { code } = await params;
  if (!code) notFound();

  // Placeholder: replace with API fetch when backend is ready
  // const note = await fetchPublishedNote(code);
  // if (!note) notFound();

  return (
    <main className="flex-1 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-[var(--text-muted)]">
            Published note: <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 text-sm">{code}</code>
          </p>
          <p className="mt-4 text-[var(--text-secondary)]">
            Content will be loaded from the API and rendered as markdown when the publish flow is connected.
          </p>
        </article>
      </div>
    </main>
  );
}
