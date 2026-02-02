import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownImage } from "@/components/shared-note/MarkdownImage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  params: Promise<{ code: string }>;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.getnotic.io";

/**
 * GFM tables require a delimiter row (e.g. | --- | --- |) after the header.
 * If content has pipe-separated rows but the second line isn't a delimiter, insert one.
 * Only inserts at the start of a table (when previous line is not a table row).
 */
function ensureTableDelimiterRow(content: string): string {
  const lines = content.split("\n");
  const isTableRow = (s: string) => /^\|.+\|/.test(s.trim());
  const isDelimiterRow = (s: string) =>
    /^\|[\s\-:]*\|(\s*[\-\s:]*\|)*\s*$/.test(s.trim());
  const out: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!;
    out.push(line);
    const trimmed = line.trim();
    if (!isTableRow(trimmed)) continue;
    const next = lines[i + 1];
    if (next === undefined) continue;
    const nextTrimmed = next.trim();
    if (!isTableRow(nextTrimmed) || isDelimiterRow(nextTrimmed)) continue;
    const prev = lines[i - 1];
    if (prev !== undefined && isTableRow(prev.trim())) continue; // already in table body
    const pipeCount = (trimmed.match(/\|/g) || []).length;
    const cols = Math.max(1, pipeCount - 1);
    const delimiter = "| " + Array(cols).fill("---").join(" | ") + " |";
    out.push(delimiter);
  }
  return out.join("\n");
}

/** Same rule as extension extractTitle: first line as # heading, else first line (50 chars), else "Untitled". */
function extractTitleFromContent(content: string): string {
  if (!content || content.trim() === "") return "Untitled";
  const firstLine = content.split("\n")[0].trim();
  const headingMatch = firstLine.match(/^#{1,6}\s+(.+)$/);
  if (headingMatch) return headingMatch[1].trim();
  if (firstLine) return firstLine.length > 50 ? firstLine.slice(0, 50) + "…" : firstLine;
  return "Untitled";
}

type SharedNoteResponse =
  | { content: string; displayName: string | null; lastModified: string }
  | { error: string; content: null; displayName: null; lastModified: null };

async function fetchPublishedNote(
  code: string
): Promise<SharedNoteResponse | null> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}/p/${encodeURIComponent(code)}`, {
      cache: "no-store",
    });
  } catch {
    throw new Error("Failed to load note");
  }
  let data: SharedNoteResponse;
  try {
    data = (await res.json()) as SharedNoteResponse;
  } catch {
    if (!res.ok) throw new Error("Failed to load note");
    throw new Error("Failed to load note");
  }
  if (!res.ok) {
    if (res.status === 404 || ("error" in data && data.error === "not_found"))
      return null;
    throw new Error("Failed to load note");
  }
  if ("error" in data && data.error === "not_found") return null;
  return data;
}

export async function generateMetadata({ params }: PageProps) {
  const { code } = await params;
  if (!code) return { title: "Not found" };
  const note = await fetchPublishedNote(code);
  if (!note || !("content" in note) || note.content == null)
    return { title: "Note not found" };
  const title = note.displayName || extractTitleFromContent(note.content);
  const description =
    note.content.slice(0, 160).replace(/\s+/g, " ").trim() + (note.content.length > 160 ? "…" : "");
  return {
    title: `${title} · Notic`,
    description,
  };
}

/**
 * Published note page: markdown notes shared from the Chrome extension.
 * URL: /p/[code]
 * Fetches note by code from API, renders markdown (including external images).
 */
export default async function PublishedNotePage({ params }: PageProps) {
  const { code } = await params;
  if (!code) notFound();

  const note = await fetchPublishedNote(code);
  if (!note || !("content" in note) || note.content == null) notFound();

  const { content, displayName, lastModified } = note;
  const title = displayName || extractTitleFromContent(content);
  const isEmpty = !content || content.trim() === "";

  const formattedDate =
    lastModified &&
    new Date(lastModified).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <main className="publication flex-1 px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-[42rem]">
        <article>
          <header className="publication-header">
            <h1 className="publication-title">{title}</h1>
            {formattedDate && (
              <p className="publication-meta">Last updated {formattedDate}</p>
            )}
          </header>
          <div className="publication-prose [&_pre]:rounded-md [&_pre]:border [&_pre]:border-[var(--border-primary)] [&_pre]:bg-[var(--bg-tertiary)] [&_pre]:p-4 [&_pre]:text-sm [&_ul]:my-4 [&_ol]:my-4 [&_li]:my-0.5">
            {isEmpty ? (
              <p className="text-[var(--text-muted)] italic">
                This note is empty.
              </p>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm as import("unified").Pluggable]}
                components={{
                  img: MarkdownImage,
                }}
              >
                {ensureTableDelimiterRow(content)}
              </ReactMarkdown>
            )}
          </div>
          <footer className="publication-footer">
            <Link
              href="/"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)] no-underline hover:underline underline-offset-2"
            >
              Published with Notic
            </Link>
            {" · "}
            <span>Simple notes in your browser</span>
          </footer>
        </article>
      </div>
    </main>
  );
}
