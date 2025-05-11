import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Check, Loader } from 'lucide-react';

const EmailSignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Store email in Supabase
      const { data, error } = await supabase
        .from('early_access_signups')
        .insert([{ email, name: name || null }])
        .select()
        .single();

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast({
            title: "Already signed up",
            description: "This email is already on our waitlist!",
            variant: "default",
          });
        } else {
          console.error('Signup error:', error);
          toast({
            title: "Something went wrong",
            description: "Please try again later.",
            variant: "destructive",
          });
        }
        setIsSubmitting(false);
        return;
      }

      // Send confirmation email through edge function
      try {
        const response = await fetch('https://mussohmoarxpegzkwcse.supabase.co/functions/v1/send-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}`
          },
          body: JSON.stringify({ email, name: name || null })
        });

        const result = await response.json();
        
        if (!response.ok) {
          console.warn('Email confirmation warning:', result);
          // We don't show this to the user, just proceed as if signup was successful
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // We don't show this to the user, just proceed as if signup was successful
      }

      // Success
      toast({
        title: "Thank you for signing up!",
        description: "You'll be the first to know when we launch.",
      });
      setEmail('');
      setName('');
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-4 relative z-10 animate-fade-in">
      <div className="flex flex-col gap-3 mb-2">
        <div className="relative">
          <Input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="dark-input text-base bg-white/10 text-white border-white/20 focus:border-finter-accent text-center"
            disabled={isSubmitting}
          />
        </div>
        <div className="relative">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="dark-input text-base bg-white/10 text-white border-white/20 focus:border-finter-accent text-center"
            disabled={isSubmitting}
            required
          />
        </div>
      </div>
      <Button 
        type="submit" 
        className="cta-button !py-4 text-base mx-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <><Loader className="animate-spin mr-2" size={18} /> Signing up...</>
        ) : isSuccess ? (
          <><Check className="mr-2" size={18} /> Added to waitlist</>
        ) : (
          "Get Early Access"
        )}
      </Button>
      <p className="text-sm text-center text-finter-muted">
        Join waitlist to get your 30-day free trial before launch
      </p>
    </form>
  );
};

export default EmailSignupForm;
