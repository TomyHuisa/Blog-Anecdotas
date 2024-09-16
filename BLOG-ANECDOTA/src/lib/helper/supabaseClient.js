import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

const supabase = createClient(
  "https://hszemyfqyfdmxqwuhurs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzemVteWZxeWZkbXhxd3VodXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0NTExOTksImV4cCI6MjA0MjAyNzE5OX0.bj8WwN7xqXQzME6vBIgB3-BDw2NmvpKUKbnM19Ie7KA"
);
export default supabase;
