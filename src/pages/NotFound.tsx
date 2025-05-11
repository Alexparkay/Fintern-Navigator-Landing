
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-finter-blue/30 to-finter-yellow/30 p-4">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 -left-64 w-96 h-96 rounded-full bg-finter-blue/50 blur-3xl"></div>
        <div className="absolute top-[60%] -right-64 w-96 h-96 rounded-full bg-finter-yellow/50 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 highlight-section p-8 md:p-12 text-center max-w-lg w-full">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>
        <h1 className="text-4xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-finter-secondary mb-8">Oops! This page doesn't exist yet</p>
        <Button 
          asChild
          className="cta-button inline-flex items-center gap-2"
        >
          <a href="/">
            <ArrowLeft size={18} />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
