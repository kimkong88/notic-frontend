"use client";

import React from "react";

/**
 * Custom img component for markdown: images are external (e.g. CloudFront).
 * Client Component so we can use onError. Use native <img> so any https URL works.
 */
export function MarkdownImage({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <span className="my-3 block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        decoding="async"
        className="max-h-[70vh] w-full object-contain"
        referrerPolicy="no-referrer"
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const fallback = el.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.hidden = false;
        }}
        {...props}
      />
      <span
        hidden
        className="block text-sm text-[var(--text-muted)]"
        aria-hidden
      >
        Image could not be loaded
      </span>
    </span>
  );
}
