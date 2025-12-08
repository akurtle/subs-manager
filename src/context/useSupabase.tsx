import { useContext } from "react";
import { SupabaseContext } from "./supabaseContext";

export const useSupabase = () => useContext(SupabaseContext);