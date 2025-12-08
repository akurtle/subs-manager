import { useSupabase } from '@/context/useSupabase'
import { AuthError, type Session } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react'



function SignUp() {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [session, setSession] = useState<Session | null>(null);


    // Check URL params on initial render
    const params = new URLSearchParams(window.location.search);
    const hasTokenHash = params.get("token_hash");
    const [verifying, setVerifying] = useState(!!hasTokenHash);
    const [authError, setAuthError] = useState<string | null>(null);
    const [authSuccess, setAuthSuccess] = useState(false);

    const supabase = useSupabase().supabase;

    // useEffect(() => {
    //     // Load existing session
    //     supabase.auth.getSession().then(({ data: { session } }) => {
    //         setSession(session);
    //     });

    //     // Listen to auth changes (login / logout)
    //     const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    //         setSession(session);
    //     });

    //     return () => data.subscription.unsubscribe();
    // }, []);

    const handleLogin = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:5173/pageHandler'
            }
        });
        if (error) {
            alert(error.code || error.message);
        }
        setLoading(false);
    };


    // const handleLogOut = async (event: any)


    return (
        <div className="min-h-screen w-full bg-linear-to-b from-gray-950 via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-20">
            <h1>Supabase + React</h1>
            <p>Sign in via magic link with your email below</p>

            <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                {loading ? <span>Loading</span> : <span>Continue with google</span>}
            </button>
        </div>
    );
}

export default SignUp