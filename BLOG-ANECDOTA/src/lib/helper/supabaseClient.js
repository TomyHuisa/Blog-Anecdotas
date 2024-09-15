import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

const supabase = createClient('https://fivawgticowtvnhxifxu.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpdmF3Z3RpY293dHZuaHhpZnh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ3MzIsImV4cCI6MjA0MTQ4MDczMn0.VtQQeKzOeaU5szv2HeMDBDkuHaSQl60vArbIhfZBw38')
export default supabase;