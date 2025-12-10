import { useContext } from "react";
import { supabaseContext } from "./supabaseContext";


console.log("Context?")
export const useSupabase = () => useContext(supabaseContext);