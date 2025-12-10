import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../client/supabaseClient";
import type { Session, User } from "@supabase/supabase-js";
import type { Subscription } from "@/pages/subscriptions/Subscription";


type supabaseContextType = {
  supabase: typeof supabase;
  session: Session | null;
  user: User | null;
  loading: boolean;
  subscriptions: Subscription[] | null,
  setSubscriptions: any,
};


export const supabaseContext = createContext<supabaseContextType>({
  supabase,
  session: null,
  user: null,
  loading: true,
  subscriptions: [],
  setSubscriptions: null
});


export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {

  // setting all the user data once in the context so it can be used everywhere eliminating the need
  // to fetch everywhere?

    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const [subscriptions, setSubscriptions] = useState<Subscription[] | null>([]);

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


    useEffect(() => {
    console.log(subscriptions)
    if (!user || subscriptions!==null) return;

    const fetchSubs = async () => {
      const { data, error } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id)
        .order("next_billing", { ascending: true });
  

      console.log(data)
      if (!error) setSubscriptions(data || null);
    };

    // Fetch subscriptions only when user logs in
    fetchSubs();
  }, [user]);

    
  return (
    <supabaseContext.Provider value={{ supabase, session, user,loading, subscriptions, setSubscriptions }}>
      {children}
    </supabaseContext.Provider>
  );
};

