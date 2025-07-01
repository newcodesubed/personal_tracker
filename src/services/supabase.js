import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qijlczopyzitiqcpskly.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpamxjem9weXppdGlxY3Bza2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MDg4MTEsImV4cCI6MjA2NTk4NDgxMX0.YuosEo-pfRUXLpOeIFiXSdTlMQ_jNtqqg7Ecuwjcukk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
