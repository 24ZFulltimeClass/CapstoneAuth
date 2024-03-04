import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = "https://pmjwikmxvxukgfrayekj.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtandpa214dnh1a2dmcmF5ZWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNzgwNTgsImV4cCI6MjAyNDg1NDA1OH0.OKPutR5Z4QXKxx0CReuKpO20yvtTFVqXvp51N9rAksI"

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)