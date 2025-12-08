import './App.css'
import PageOne from './pages/onboarding/page_one'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTwo from './pages/onboarding/page_two';
import PageThree from './pages/onboarding/page_three';
import PageHandler from './pages/pageHandler';
import { ThemeProvider } from './context/ThemeContext';
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from 'react';
import SignUp from './pages/auth/signup/page';
import { SupabaseProvider } from "./context/supabaseContext";
import AuthGate from './pages/auth/AuthGate';
import LoadingBox from './pages/auth/Loading';

function App() {

  return (
    <SupabaseProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/pageTwo" element={<PageTwo />} />
            <Route path="/pageThree" element={<PageThree />} />
            <Route path="/auth" element={<SignUp />} />
            {/* <Route path="/loading" element={<LoadingBox/>}/> */}
            <Route element={<AuthGate/>}>
              <Route path="/pageHandler" element={<PageHandler />} />

            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </SupabaseProvider>
  )
}

export default App
