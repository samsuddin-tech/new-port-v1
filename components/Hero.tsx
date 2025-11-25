import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MousePointerClick, TrendingUp, Users, Award } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-brand-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob" />
      <div className="absolute top-0 right-1/4 -z-10 w-[600px] h-[600px] bg-orange-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-0 -z-10 w-[600px] h-[600px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Social Media Marketing Executive
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1]">
            I Turn <span className="relative inline-block text-brand-600">
              Content
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-brand-600">Conversions</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed border-l-4 border-brand-400 pl-6">
            {RESUME_DATA.tagline} Combining data analytics with creative strategy to scale brands.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:samsuddin79786@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-brand-500 to-orange-500 text-white rounded-full font-bold shadow-lg shadow-brand-500/30 flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Start a Project
              <ArrowRight size={20} />
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 hover:border-brand-400 hover:text-brand-600 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-slate-200/60">
            <div className="flex items-center gap-3">
               <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                  <TrendingUp size={24} />
               </div>
               <div>
                  <p className="text-2xl font-bold text-slate-900">Growth</p>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Focused</p>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                  <Users size={24} />
               </div>
               <div>
                  <p className="text-2xl font-bold text-slate-900">Engagement</p>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Expert</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Content - Social Media Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
           {/* Abstract Phone/Card Container */}
           <div className="relative z-10 w-full max-w-[380px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-900 overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              {/* Header Image */}
              <div className="h-32 bg-gradient-to-r from-brand-400 to-orange-500 relative">
                 <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                    <div className="w-28 h-28 rounded-full border-4 border-white bg-slate-200 shadow-md overflow-hidden">
                       {/* REPLACE THE SRC BELOW WITH YOUR REAL IMAGE URL */}
                       <img 
                          src="https://placehold.co/400x500/png?text=Upload+Your+Photo" 
                          alt="Samsuddin Khan" 
                          className="w-full h-full object-cover"
                       />
                    </div>
                 </div>
              </div>
              
              {/* Profile Body */}
              <div className="pt-14 pb-8 px-6 text-center">
                 <h3 className="text-2xl font-bold text-slate-900">{RESUME_DATA.name}</h3>
                 <p className="text-brand-600 font-medium text-sm mb-4">{RESUME_DATA.role}</p>
                 
                 <div className="flex justify-center gap-4 mb-6 text-center">
                    <div>
                        <span className="block font-bold text-lg text-slate-900">12+</span>
                        <span className="text-xs text-slate-500">Projects</span>
                    </div>
                    <div className="w-px bg-slate-200"></div>
                    <div>
                        <span className="block font-bold text-lg text-slate-900">4yr</span>
                        <span className="text-xs text-slate-500">Exp</span>
                    </div>
                    <div className="w-px bg-slate-200"></div>
                    <div>
                        <span className="block font-bold text-lg text-slate-900">100%</span>
                        <span className="text-xs text-slate-500">Growth</span>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Award size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-slate-900">Certified Pro</p>
                            <p className="text-xs text-slate-500">Digital Marketing</p>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <TrendingUp size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-bold text-slate-900">ROI Focused</p>
                            <p className="text-xs text-slate-500">Analytics Driven</p>
                        </div>
                    </div>
                 </div>

                 <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-brand-600 transition-colors">
                    Follow for Growth
                 </button>
              </div>
           </div>

           {/* Floating Elements */}
           <div className="absolute top-20 -right-4 lg:right-10 bg-white p-4 rounded-2xl shadow-xl animate-float z-20">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                     <Users size={20} />
                  </div>
                  <div>
                     <p className="font-bold text-slate-900">Engagement</p>
                     <p className="text-green-500 text-sm font-bold">+125% 🚀</p>
                  </div>
               </div>
           </div>

           <div className="absolute bottom-20 -left-4 lg:left-10 bg-white p-4 rounded-2xl shadow-xl animate-float animation-delay-2000 z-20">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                     <MousePointerClick size={20} />
                  </div>
                  <div>
                     <p className="font-bold text-slate-900">CTR Rate</p>
                     <p className="text-green-500 text-sm font-bold">High Performing</p>
                  </div>
               </div>
           </div>

           {/* Decorative Blobs behind phone */}
           <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200 rounded-full opacity-30 animate-spin-slow" style={{ animationDuration: '20s' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;