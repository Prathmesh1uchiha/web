import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lsvrwhdyylzyjfzizukv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzdnJ3aGR5eWx6eWpmeml6dWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NzAxMDIsImV4cCI6MjA5NzI0NjEwMn0.5KTrB6LxlIxhW6AJqCoS18weF51oynBwmWFP5qgaGRo"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);