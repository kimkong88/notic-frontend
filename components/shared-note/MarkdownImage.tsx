"use client";

import React, { useState } from "react";

/**
 * Custom img component for markdown: images are external (e.g. CloudFront).
 * Client Component so we can use onError for load fallback.
 */
export function MarkdownImage({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [loadFailed, setLoadFailed] = useState(false);

  return (
    <span className="my-3 block">
      {!loadFailed && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt ?? ""}
          loading="lazy"
          decoding="async"
          className="max-h-[70vh] w-full object-contain rounded-md"
          referrerPolicy="no-referrer"
          onError={() => setLoadFailed(true)}
          {...props}
        />
      )}
      {loadFailed && (
        <span
          className="block text-sm text-[var(--text-muted)]"
          aria-hidden
        >
          Image could not be loaded
        </span>
      )}
    </span>
  );
}
