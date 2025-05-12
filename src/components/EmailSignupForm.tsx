import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Check, Loader, ArrowRight, Sparkles } from 'lucide-react';

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

    // Validate name is provided
    if (!name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to webhook
      const response = await fetch('https://hook.eu2.make.com/9om2mkg6p889wmvk6m4sghklc9eq10wm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          name
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-6 relative z-10 animate-fade-in">
      <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-white/10 shadow-lg">
        <div className="flex flex-col gap-4 mb-6">
          <div className="relative group">
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 dark-input text-base bg-white/10 text-white border-white/20 focus:border-purple-500 rounded-xl pl-4"
              disabled={isSubmitting}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          <div className="relative group">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 dark-input text-base bg-white/10 text-white border-white/20 focus:border-purple-500 rounded-xl pl-4"
              disabled={isSubmitting}
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
        
        <div className="relative group">
          <Button 
            type="submit" 
            className="w-full h-14 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white font-semibold text-lg shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center overflow-hidden"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <><Loader className="animate-spin mr-2" size={18} /> Processing...</>
            ) : isSuccess ? (
              <><Check className="mr-2" size={18} /> Added to waitlist</>
            ) : (
              <>
                {/* Glassmorphic overlay effect */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300"></div>
                
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                
                {/* Content */}
                <div className="relative flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles size={18} className="text-yellow-300 animate-pulse" />
                  Join Waitlist
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 via-purple-600/30 to-blue-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </>
            )}
          </Button>
          
          {/* Pulsing circles for extra emphasis */}
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-pink-500 rounded-full animate-ping opacity-30"></div>
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      <p className="text-sm text-center text-finter-muted px-4">
        Join waitlist to get your 30-day free trial before launch
      </p>
    </form>
  );
};

export default EmailSignupForm;
