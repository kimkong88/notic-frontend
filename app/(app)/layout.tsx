import React from "react";
import { AppAuthProvider } from "@/components/context/AppAuthContext";
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
    <AppAuthProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] pt-16">
        <AppHeader />
        {children}
      </div>
    </AppAuthProvider>
  );
}
