import React, { useEffect, useState, Suspense } from 'react';
import { 
  BookOpenCheck, 
  Medal, 
  FileSpreadsheet,
  Bookmark,
  ChevronRight,
  Search,
  Briefcase,
  ArrowRight,
  Clock
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Logo from '@/components/Logo';
import EmailSignupForm from '@/components/EmailSignupForm';
import FeatureCard from '@/components/FeatureCard';
import AnimatedNumber from '@/components/AnimatedNumber';
import TestimonialCard from '@/components/TestimonialCard';
import AIFeatureShowcase from '@/components/AIFeatureShowcase';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import BackgroundBlur from '@/components/BackgroundBlur';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.15 }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-finter-dark">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-64 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px]"></div>
        <div className="absolute top-[60%] -right-64 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-indigo-500/10 blur-[80px]"></div>
      </div>
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-[#050508]/80 backdrop-blur-lg shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center gap-6">
              <Badge 
                variant="outline" 
                className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-blue-100/60 animate-pulse-soft hidden sm:flex"
              >
                Coming Soon
              </Badge>
              <a href="#signup" className="hidden md:flex px-6 py-2 text-sm rounded-full bg-gradient-to-r from-pink-500/80 to-purple-600/80 text-white font-medium hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
          {/* Full width background with #030303 */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#030303]"></div>
            {/* Gradient only on the left side */}
            <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-transparent"></div>
          </div>
          
          {/* 3D Spline Object - moved higher and zoomed in */}
          <div className="absolute top-[-10%] right-0 bottom-0 w-[100%] lg:w-[90%] z-0 overflow-hidden">
            <Suspense fallback={<div className="w-full h-full bg-[#030303]"></div>}>
              <Spline 
                className="w-[280%] h-[280%] translate-y-[-8%] translate-x-[5%] -mr-[15%]"
                scene="https://prod.spline.design/g1EWg36-YdBfiRS7/scene.splinecode" 
              />
            </Suspense>
          </div>
          
          {/* Content overlay with slight darkening for readability */}
          <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full relative z-10">
            <div className="flex items-center h-full -mt-16">
            <motion.div 
                className="max-w-[500px] text-left"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 }
              }}
            >
              <motion.div variants={fadeIn} custom={0}>
                  <Badge className="highlight-badge mb-4 bg-gradient-to-r from-pink-500 to-purple-600 border-none">AI-Powered Career Assistant</Badge>
                </motion.div>
                
                <motion.div
                  variants={fadeIn} 
                  custom={1}
                  className="relative mb-3"
                >
                  <div className="text-xs tracking-widest text-purple-400 uppercase font-bold mb-1">For University Students</div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 transform -skew-y-2">DREAM</span>
                    <span className="inline-block pl-1 text-white transform skew-y-1">INTERNSHIP</span>
                  </h1>
                </motion.div>
                
                <motion.p 
                  className="text-base md:text-lg text-blue-100/80 max-w-md mt-6 mb-4"
                  variants={fadeIn} 
                  custom={2}
                >
                  Your AI-powered assistant that helps university students land prestigious finance internships at Goldman Sachs, JP Morgan, and other top firms in just a few clicks.
                </motion.p>

                <motion.div
                  variants={fadeIn}
                  custom={4}
                  className="mt-6 flex flex-col sm:flex-row gap-4"
                >
                  <a 
                    href="#signup" 
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                  >
                    Secure Your Finance Internship <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-sm text-blue-100/60 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
            >
              <ArrowRight size={20} className="text-blue-100/60 transform rotate-90" />
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section - positioned to overlap more with hero */}
        <section id="features" className="relative py-16 md:py-24 bg-gradient-to-b from-[#050508] via-[#0a0a20] to-[#050508]/95 -mt-36 md:-mt-40 z-50 overflow-hidden">
          {/* Enhanced background gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-600/15 via-blue-600/10 to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-5"></div>
          
          {/* Glass panel overlay for section top */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a20]/80 to-transparent backdrop-blur-sm"></div>
          
          {/* Decorative floating elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-600/15 blur-[80px] animate-float"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-600/15 blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-pink-600/15 blur-[60px] animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-indigo-600/15 blur-[80px] animate-float" style={{ animationDelay: '3s' }}></div>
          
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-30">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white text-sm font-medium backdrop-blur-sm">
                  ✨ The Journey Starts Here ✨
                </span>
              </motion.div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                How Fintern Navigator Works
              </motion.h2>
              <motion.p 
                className="text-lg text-blue-100/60 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our AI-powered platform guides university students through every step of landing prestigious finance internships
              </motion.p>
            </div>

            {/* Timeline Map Journey */}
            <div className="relative pb-12">
              {/* Vertical Timeline Line with animated gradient */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-600 to-blue-500">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500 via-purple-600 to-blue-500 animate-pulse-soft"></div>
              </div>
              
              {/* Timeline Steps */}
              <div className="relative z-10">
                {/* Step 1 */}
                <motion.div 
                  className="flex flex-col md:flex-row items-center mb-24"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring" }}
                >
                  <div className="md:w-1/2 md:pr-12 flex md:justify-end mb-8 md:mb-0 order-2 md:order-1">
                    <div className="glass-panel p-6 rounded-2xl w-full md:max-w-md bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-md shadow-lg shadow-pink-500/15 hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-500 border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 text-white text-xl font-bold shadow-md shadow-pink-500/20">1</div>
                      <h3 className="text-2xl font-semibold text-white mb-3">Upload Your CV & Profile ✨</h3>
                      <p className="text-blue-100/70">Just drag & drop your CV - our AI analyzes it in seconds to understand your finance career goals. No more manual data entry! 🎯</p>
                      <div className="mt-5 flex items-center text-sm text-purple-300">
                        <span className="flex items-center bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                          <Clock size={16} className="mr-2" />
                          Takes only 2 minutes ⚡
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="z-10 order-1 md:order-2">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 border-4 border-[#050508] flex items-center justify-center shadow-2xl shadow-pink-500/30"
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                    >
                      <FileSpreadsheet size={28} className="text-white" />
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3">
                    <motion.div 
                      className="w-full md:max-w-xs"
                      whileInView={{ x: [50, 0], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <img 
                        src="/images/cv-analysis.webp" 
                        alt="CV Analysis" 
                        className="rounded-xl shadow-2xl shadow-purple-500/20 border border-white/10 hover:shadow-purple-500/30 transition-all duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://placehold.co/600x400/3b82f6/FFFFFF?text=CV+Analysis';
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Step 2 */}
                <motion.div 
                  className="flex flex-col md:flex-row items-center mb-24"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring", delay: 0.1 }}
                >
                  <div className="md:w-1/2 md:pr-12 order-3 md:order-1">
                    <motion.div 
                      className="w-full md:max-w-xs md:ml-auto"
                      whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <img 
                        src="/images/job-matching.webp" 
                        alt="Job Matching" 
                        className="rounded-xl shadow-2xl shadow-pink-500/20 border border-white/10 hover:shadow-pink-500/30 transition-all duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://placehold.co/600x400/ec4899/FFFFFF?text=Job+Matching';
                        }}
                      />
                    </motion.div>
                  </div>
                  <div className="z-10 order-1 md:order-2">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 border-4 border-[#050508] flex items-center justify-center shadow-2xl shadow-blue-500/30"
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                    >
                      <Search size={28} className="text-white" />
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 order-2 md:order-3">
                    <div className="glass-panel p-6 rounded-2xl w-full md:max-w-md bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md shadow-lg shadow-blue-500/15 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-500 border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mb-4 text-white text-xl font-bold shadow-md shadow-blue-500/20">2</div>
                      <h3 className="text-2xl font-semibold text-white mb-3">Get Matched with Top Internships 🚀</h3>
                      <p className="text-blue-100/70">Our AI matches you with Goldman Sachs, JP Morgan and other finance internships that fit YOUR unique skills and interests. Say goodbye to endless scrolling! 🔍</p>
                      <div className="mt-5 flex items-center text-sm text-blue-300">
                        <span className="bg-white/10 rounded-full px-3 py-1 flex items-center backdrop-blur-sm">
                          <span className="mr-2">✓</span>
                          95% match accuracy
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Step 3 */}
                <motion.div 
                  className="flex flex-col md:flex-row items-center mb-24"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
                >
                  <div className="md:w-1/2 md:pr-12 flex md:justify-end mb-8 md:mb-0 order-2 md:order-1">
                    <div className="glass-panel p-6 rounded-2xl w-full md:max-w-md bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-md shadow-lg shadow-green-500/15 hover:shadow-xl hover:shadow-green-500/25 transition-all duration-500 border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center mb-4 text-white text-xl font-bold shadow-md shadow-blue-500/20">3</div>
                      <h3 className="text-2xl font-semibold text-white mb-3">Ace Your Interviews Like a Pro 🎭</h3>
                      <p className="text-blue-100/70">Practice with our AI interviewer trained on REAL finance questions from top banks. Get instant feedback on your answers and confidence score! 💪</p>
                      <div className="mt-5 inline-flex items-center text-sm text-green-300 bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                        <span className="mr-1">Student favorite</span> 
                        <span className="ml-1">⭐</span>
                      </div>
                    </div>
                  </div>
                  <div className="z-10 order-1 md:order-2">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-green-500 border-4 border-[#050508] flex items-center justify-center shadow-2xl shadow-green-500/30"
                      whileInView={{ scale: [0.8, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                    >
                      <BookOpenCheck size={28} className="text-white" />
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3">
                    <motion.div 
                      className="w-full md:max-w-xs"
                      whileInView={{ x: [50, 0], opacity: [0, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <img 
                        src="/images/interview-prep.webp" 
                        alt="Interview Preparation" 
                        className="rounded-xl shadow-2xl shadow-blue-500/20 border border-white/10 hover:shadow-green-500/30 transition-all duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://placehold.co/600x400/8b5cf6/FFFFFF?text=Interview+Prep';
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Final Step - Redesigned to be more aesthetic */}
                <motion.div 
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
                >
                  <div className="glass-panel p-10 rounded-3xl max-w-xl text-center relative overflow-hidden group">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-blue-500/20 group-hover:opacity-80 transition-opacity duration-700"></div>
                    
                    {/* Decorative glowing orbs */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-green-500/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                    
                    {/* Content with enhanced styling */}
                    <motion.div 
                      className="relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 mx-auto flex items-center justify-center mb-8 shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/80 via-purple-600/80 to-blue-500/80 flex items-center justify-center">
                          <Briefcase size={36} className="text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-6">Land Your Dream Finance Internship! 🏆</h3>
                      <p className="text-blue-100/80 mb-8 text-lg">Join the 72% of Fintern Navigator users who successfully secured internships at top finance firms last year! 🎉</p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <a 
                          href="#signup" 
                          className="px-10 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                        >
                          Start Your Journey <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Showcase Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#050508]/50 to-[#050508]/90">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Badge className="highlight-badge">AI-Powered Analysis</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                How Fintern Navigator Helps Students
              </h2>
              <p className="text-lg text-blue-100/60 max-w-2xl mx-auto">
                Our advanced AI platform analyzes thousands of successful finance internship applications to guide your path to success
              </p>
            </motion.div>

            {/* Remove CV Optimization section and just use AIFeatureShowcase */}
            <AIFeatureShowcase />
          </div>
        </section>

        {/* Email signup section with urgency elements */}
        <section id="signup" className="relative min-h-[80vh] flex flex-col items-center justify-center py-24 overflow-hidden">
          <BackgroundBlur 
            className="top-[10%] left-[20%] w-[50rem] h-[50rem] bg-purple-600/20" 
            baseDelay={0}
          />
          <BackgroundBlur 
            className="bottom-[10%] right-[20%] w-[50rem] h-[50rem] bg-blue-600/20" 
            baseDelay={0.5}
          />
          
          <div className="container px-4 sm:px-8 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-2xl mx-auto text-center mb-12"
            >
              <motion.div variants={fadeIn} custom={0} className="mb-4">
                <Badge variant="outline" className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-300 text-xs">
                  <span className="animate-pulse">⚡ LIMITED EARLY ACCESS</span>
                </Badge>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" 
                variants={fadeIn}
              >
                Start Your Path to Finance Success Today
              </motion.h2>
              <motion.p 
                className="text-lg text-blue-100/80 mb-8" 
                variants={fadeIn} 
                custom={1}
              >
                Join Fintern Navigator now and get exclusive early access to AI-powered tools that will transform your finance internship search.
              </motion.p>
              
              {/* Urgency Elements */}
              <motion.div 
                variants={fadeIn} 
                custom={1.5}
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-5 rounded-xl border border-purple-500/20 mb-8"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-full max-w-md">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-[36.4%]"></div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-blue-100/70 max-w-md mx-auto">
                  <span>364 students enrolled</span>
                  <span>1,000 limit</span>
                </div>
                <p className="text-sm text-blue-100/60 mt-3 font-semibold">
                  <span className="text-pink-400">Only 636 spots remaining</span> • Early access closing soon
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} custom={2}>
                {/* Simplified Email Form */}
                <div className="dark-input-container mx-auto max-w-md">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="dark-input w-full pr-32 focus:border-purple-500/50"
                    />
                    <button 
                      type="submit" 
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Join Waitlist
                    </button>
                  </div>
                  <p className="text-xs text-blue-100/50 mt-2 text-left">
                    By signing up, you'll receive updates about our launch and early access opportunities.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/5 max-w-4xl mx-auto p-8 md:p-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">✨</span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                      Ready to stand out to top firms?
                  </h2>
                  </div>
                  <p className="text-blue-100/60">
                    Join thousands of university students who've secured finance internships with Fintern Navigator
                  </p>
                </div>
                <a href="#signup" className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center group">
                  Join the Beta <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">FN</div>
                  <h3 className="text-xl font-bold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">FINTERN</span>
                    <span className="text-white">NAVIGATOR</span>
                  </h3>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <a href="#features" className="text-sm text-blue-100/60 hover:text-white transition-colors">Features</a>
                <a href="#" className="text-sm text-blue-100/60 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-sm text-blue-100/60 hover:text-white transition-colors">Terms</a>
                <p className="text-sm text-blue-100/50">
                  © 2025 Fintern Navigator. All rights reserved.
              </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
