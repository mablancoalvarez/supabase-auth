import { createContext, useEffect, useState } from "react";
import { client } from "../api/client";
import { Session, AuthChangeEvent } from "@supabase/supabase-js";

export interface AuthContextType {
  user: Session["user"] | null;
  auth: boolean;
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Session["user"] | null>(null);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const { data } = client.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event === "SIGNED_IN" || event === "INITIAL_SESSION") {
          setUser(session?.user || null);
          setAuth(!!session);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          setAuth(false);
        }
      }
    );
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
  console.log("user post", user);

  return (
    <AuthContext.Provider value={{ user, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
