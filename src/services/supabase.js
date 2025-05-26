
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://akoaatkzvpnpbmmnczok.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrb2FhdGt6dnBucGJtbW5jem9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNjE3MjIsImV4cCI6MjA2MjczNzcyMn0.cnh8jap2qRiB_7QXO7_lo8-9WF5HGg6kxX7aZYh1u3g';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
