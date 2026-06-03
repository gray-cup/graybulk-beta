"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthCtx {
  authed: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthCtx>({
  authed: false,
  login: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem("gb_admin") === "1");
  }, []);

  function login(u: string, p: string) {
    if (u === "admin" && p === "graybulk@2024") {
      sessionStorage.setItem("gb_admin", "1");
      setAuthed(true);
      return true;
    }
    return false;
  }

  function logout() {
    sessionStorage.removeItem("gb_admin");
    setAuthed(false);
  }

  return <AuthContext.Provider value={{ authed, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { authed } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authed && sessionStorage.getItem("gb_admin") !== "1") {
      router.replace("/admin");
    }
  }, [authed, router]);

  if (!authed && typeof window !== "undefined" && sessionStorage.getItem("gb_admin") !== "1") {
    return null;
  }

  return <>{children}</>;
}
