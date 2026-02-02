"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

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
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/api/auth/session", { credentials: "include" })
      .then((res) => {
        if (res.ok) setLoggedIn(true);
      })
      .catch(() => {});
  }, []);

  const setLoggedInStable = useCallback((value: boolean) => {
    setLoggedIn(value);
  }, []);

  return (
    <AppAuthContext.Provider value={{ isLoggedIn, setLoggedIn: setLoggedInStable }}>
      {children}
    </AppAuthContext.Provider>
  );
}
