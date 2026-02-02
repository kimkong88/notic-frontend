import React from "react";
import AppHeader from "@/components/layout/AppHeader";

/**
 * Layout for (app) route group: billing, published notes.
 * Uses AppHeader instead of marketing Header.
 */
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <AppHeader />
      {children}
    </div>
  );
}
