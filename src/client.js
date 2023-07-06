import { createClient } from '@supabase/supabase-js';

const URL = 'https://jtylszlxuodagpcbbgpy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0eWxzemx4dW9kYWdwY2JiZ3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2MTg1ODMsImV4cCI6MjAwNDE5NDU4M30.T1zOidH8Jn2aGQCMiUUYIkrDCdDSlPwoHC4bjQHcWCc';
const supabase = createClient(URL, API_KEY);

export const supabase = createClient(URL, API_KEY);