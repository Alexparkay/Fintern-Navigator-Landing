
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Create a Supabase client
const supabaseUrl = "https://mussohmoarxpegzkwcse.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11c3NvaG1vYXJ4cGVnemt3Y3NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5ODA1NzEsImV4cCI6MjA2MjU1NjU3MX0.WTbPynBK__FK78Dmz0-jgIa-MhywFr2DaKC3AuRy18I";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mock email sending function (in real-world, use a service like SendGrid, Mailgun, etc.)
const sendConfirmationEmail = async (email: string, name: string | null, token: string) => {
  console.log(`Sending confirmation email to ${email} with token ${token}`);
  
  // In a real-world scenario, you would call an email service API here
  // This is a mock implementation
  return {
    success: true,
    message: "Email confirmation sent successfully"
  };
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name } = await req.json();
    
    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get the signup record including the token
    const { data, error: fetchError } = await supabase
      .from('early_access_signups')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (fetchError || !data) {
      return new Response(
        JSON.stringify({ error: fetchError?.message || "User not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send confirmation email
    const result = await sendConfirmationEmail(email, data.name, data.confirmation_token);

    // Update the database to mark the confirmation as sent
    const { error: updateError } = await supabase
      .from('early_access_signups')
      .update({ confirmation_sent: true })
      .eq('id', data.id);

    if (updateError) {
      return new Response(
        JSON.stringify({ error: updateError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify(result),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
    
  } catch (error) {
    console.error("Error in send-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
