import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA, EDUCATION } from '../constants';
import { GraduationCap, MapPin, Award, User, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm bg-brand-50 px-3 py-1 rounded-full">Discover</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Col: Image/Visual */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="aspect-square rounded-[3rem] bg-slate-100 overflow-hidden relative shadow-2xl border-8 border-white">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                        alt="Workspace" 
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <p className="text-lg font-medium opacity-80">Based in</p>
                            <p className="text-2xl font-bold flex items-center gap-2">
                                <MapPin className="text-brand-400" />
                                {RESUME_DATA.contact.location}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-xl"></div>
            </motion.div>

            {/* Right Col: Text */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                    A Tech-Savvy <span className="text-brand-600">Marketer</span> with Engineering Roots.
                </h3>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                    {RESUME_DATA.about}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            <Code size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Technical</h4>
                            <p className="text-sm text-slate-500">Web Dev & Data Analytics background</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                        <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                            <User size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Social</h4>
                            <p className="text-sm text-slate-500">Community engagement specialist</p>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <GraduationCap className="text-brand-500" />
                        Education
                    </h4>
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-200 transition-colors">
                         <div className="flex justify-between items-start">
                             <div>
                                 <h5 className="font-bold text-lg text-slate-800">{EDUCATION.degree}</h5>
                                 <p className="text-brand-600">{EDUCATION.school}</p>
                             </div>
                             <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">
                                 {EDUCATION.year}
                             </span>
                         </div>
                         <p className="mt-2 text-sm text-slate-500">{EDUCATION.details}</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;