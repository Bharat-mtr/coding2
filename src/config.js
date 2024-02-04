import { createClient } from "@supabase/supabase-js";


/** Supabase config */
const privateKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_API_KEY`);
const url = import.meta.env.VITE_SUPABASE_URL;
if (!url) throw new Error(`Expected env var SUPABASE_URL`);
export const supabase = createClient(url, privateKey);