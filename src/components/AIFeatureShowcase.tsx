import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, FileText, Briefcase, Users } from 'lucide-react';

const AIFeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      id: 'cv-optimization',
      title: 'CV Optimization',
      icon: <FileText className="h-6 w-6 text-pink-400" />,
      description: 'Our AI analyzes your CV against thousands of successful finance applications to identify gaps and optimization opportunities.',
      image: '/images/cv-optimization.jpg',
      fallbackImage: 'https://placehold.co/800x600/8b5cf6/FFFFFF?text=CV+Optimization',
      bullets: [
        'Keyword optimization for ATS systems',
        'Industry-specific formatting suggestions',
        'Experience highlighting recommendations',
        'Skills gap analysis and suggestions'
      ]
    },
    {
      id: 'job-matching',
      title: 'Smart Job Matching',
      icon: <Briefcase className="h-6 w-6 text-purple-400" />,
      description: 'Get matched with the perfect finance opportunities based on your unique skills, experience, and career goals.',
      image: '/images/job-matching.jpg',
      fallbackImage: 'https://placehold.co/800x600/ec4899/FFFFFF?text=Job+Matching',
      bullets: [
        'Personalized job recommendations',
        'Opportunity fit scoring',
        'Career path visualization',
        'Compensation insights and analytics'
      ]
    },
    {
      id: 'interview-prep',
      title: 'Interview Preparation',
      icon: <Users className="h-6 w-6 text-blue-400" />,
      description: 'Practice with our AI interviewer trained on real finance interview questions from top firms.',
      image: '/images/interview-prep.jpg',
      fallbackImage: 'https://placehold.co/800x600/3b82f6/FFFFFF?text=Interview+Prep',
      bullets: [
        'Industry-specific interview simulations',
        'Real-time feedback and improvement suggestions',
        'Customized question sets based on role',
        'Body language and communication analysis'
      ]
    }
  ];

  const nextFeature = () => {
    setActiveTab((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveTab((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className="flex flex-col">
      {/* Feature Selector Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/10">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md' 
                  : 'text-blue-100/70 hover:text-white'
              }`}
            >
              {feature.icon}
              <span className="ml-2 hidden sm:inline">{feature.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Feature Content */}
      <div className="relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-purple-600/10 to-pink-500/10 backdrop-blur-md border border-white/10">
        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
          <button 
            onClick={prevFeature}
            className="h-10 w-10 rounded-full bg-white/10 shadow-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
          <button 
            onClick={nextFeature}
            className="h-10 w-10 rounded-full bg-white/10 shadow-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Decorative orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row overflow-hidden"
          >
            <div className="lg:w-1/2 p-8 lg:p-12 relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center shadow-md">
                  {features[activeTab].icon}
                </div>
                <h3 className="text-2xl font-bold ml-4 text-white">
                  {features[activeTab].title}
                </h3>
              </div>
              <p className="text-blue-100/70 mb-8 text-lg">
                {features[activeTab].description}
              </p>
              <ul className="space-y-4">
                {features[activeTab].bullets.map((bullet, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                  >
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-600/30 flex items-center justify-center mt-0.5 mr-3 shadow-sm">
                      <ChevronRight size={14} className="text-pink-400" />
                    </div>
                    <span className="text-blue-100/80">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 h-72 lg:h-auto relative overflow-hidden">
              <motion.img 
                key={features[activeTab].image}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                src={features[activeTab].image} 
                alt={features[activeTab].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = features[activeTab].fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/80 via-purple-900/40 to-transparent"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Feature Navigation Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeTab === index ? 'w-10 bg-gradient-to-r from-pink-500 to-purple-600 shadow-md shadow-purple-500/30' : 'w-2.5 bg-white/10'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AIFeatureShowcase;
