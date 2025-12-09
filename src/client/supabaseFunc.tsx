import { useSupabase } from '@/context/useSupabase';
import type {Subscription}  from '@/pages/subscriptions/Subscription';
import { supabase } from './supabaseClient';


export type SubscriptionFrequency =
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "quarterly"
    | "custom";



export async function updateSubscription(
  id: string,
  updates: Partial<Subscription>
) {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("subscriptions")
    .update(updates)
    .eq("id", id)
    .eq("user_id", userData.user.id) // ensures user owns it
    .select()
    .single();

  if (error) throw error;
  return data;
}


export async function deleteSubscription(id: string) {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) throw new Error("User not authenticated");

  const { error } = await supabase
    .from("subscriptions")
    .delete()
    .eq("id", id)
    .eq("user_id", userData.user.id);

  if (error) throw error;
  return true;
}

export async function getSubscriptions() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) throw new Error("User not authenticated");

  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .order("next_billing", { ascending: true });

  if (error) throw error;
  return data;
}





export async function addSubscription(params: Subscription) {

    const supabaseClient = supabase 

    const {
        data: { user },
        error: userError,
    } = await supabaseClient.auth.getUser();

    if (userError || !user) {
        throw new Error("User not authenticated");
    }

    // Insert into DB
    const { data, error } = await supabaseClient
        .from("subscriptions")
        .insert({
            user_id: user.id,
            color: params.color,
            name: params.name,
            category: params.category,
            amount: params.amount,
            frequency: params.frequency,
            next_billing: params.nextBilling,
            payment_method: params.paymentMethod,
            status: params.status ?? "active",
        })
        .select()
        .single();

    if (error) throw error;

    return data;
}