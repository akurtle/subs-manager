import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../client/supabaseClient";
import type { Session, User } from "@supabase/supabase-js";


type SupabaseContextType = {
  supabase: typeof supabase;
  session: Session | null;
  user: User | null;
  loading: boolean
};


export const SupabaseContext = createContext<SupabaseContextType>({
  supabase,
  session: null,
  user: null,
  loading: true,
});


export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data }) => {
        setSession(data.session);
        setUser(data.session?.user ?? null);
        setLoading(false);
        });

        // Listen for auth changes
        const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        }
        );

        return () => listener.subscription.unsubscribe();
    }, []);

    
  return (
    <SupabaseContext.Provider value={{ supabase, session, user,loading }}>
      {children}
    </SupabaseContext.Provider>
  );
};

