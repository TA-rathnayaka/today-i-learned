import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ymlceskqbiaqztfqgvjq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltbGNlc2txYmlhcXp0ZnFndmpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyMjE4MDEsImV4cCI6MjAxMDc5NzgwMX0.6F63PLBuLca1O_J46z1ZWTkWzBDVHiiD5gBwUt0wglE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
