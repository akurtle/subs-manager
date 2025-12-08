import { useSupabase } from '@/context/useSupabase'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { motion } from "framer-motion";
import LoadingBox from './Loading';

function AuthGate() {
    const { user, loading } = useSupabase();

    const [delayDone, setDelayDone] = useState(false);

    useEffect(() => {
        // force a minimum 2-second loading screen
        const timer = setTimeout(() => {
            setDelayDone(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading || !delayDone) {
        return (

            <LoadingBox/>
        )
    }

    if (!user) {
        return <Navigate to="/auth" replace />;
    }

    return <Outlet />;
}

export default AuthGate