"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type AppAuthContextValue = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

const AppAuthContext = createContext<AppAuthContextValue | null>(null);

export function useAppAuth() {
  const ctx = useContext(AppAuthContext);
  if (!ctx) {
    throw new Error("useAppAuth must be used within AppAuthProvider");
  }
  return ctx;
}

export function AppAuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (pathname !== "/billing") {
      queueMicrotask(() => setLoggedIn(false));
      return;
    }
    fetch("/api/auth/session", { credentials: "include" })
      .then((res) => {
        queueMicrotask(() => setLoggedIn(res.ok));
      })
      .catch(() => {
        queueMicrotask(() => setLoggedIn(false));
      });
  }, [pathname]);

  const setLoggedInStable = useCallback((value: boolean) => {
    setLoggedIn(value);
  }, []);

  return (
    <AppAuthContext.Provider value={{ isLoggedIn, setLoggedIn: setLoggedInStable }}>
      {children}
    </AppAuthContext.Provider>
  );
}
