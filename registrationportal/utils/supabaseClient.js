import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ryqsejxzvycxqqitkemz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5cXNlanh6dnljeHFxaXRrZW16Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTg3NzkwOSwiZXhwIjoyMDQ1NDUzOTA5fQ.U0X8i84hwB4JILvF3jtdaft6H4xcBJmRnhOYTHpKYqU';
export const supabase = createClient(supabaseUrl, supabaseKey);
