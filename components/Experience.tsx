import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm bg-white border border-slate-200 px-3 py-1 rounded-full">Career Path</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
            {EXPERIENCE.map((job, index) => (
                <div key={job.id} className="relative pl-8 md:pl-0">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-200 -ml-[0.5px]"></div>
                    
                    {/* Connecting Line (Mobile) */}
                    <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-brand-200"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`md:flex items-center justify-between gap-10 mb-12 ${
                            index % 2 === 0 ? 'flex-row-reverse' : ''
                        }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-white shadow-md z-10 mt-6 md:mt-0"></div>

                        {/* Date Side */}
                        <div className={`hidden md:block w-1/2 text-center ${index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-600 font-bold text-sm shadow-sm">
                                <Calendar size={14} />
                                {job.type}
                             </div>
                        </div>

                        {/* Card Side */}
                        <div className="md:w-1/2">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:border-brand-200 transition-all relative">
                                <div className="md:hidden absolute -top-3 left-4 px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full">
                                    {job.type}
                                </div>
                                
                                <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                                <p className="text-brand-600 font-medium mb-4 flex items-center gap-2">
                                    <Briefcase size={16} />
                                    {job.company}
                                </p>
                                
                                <ul className="space-y-3">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                                            <span className="mt-1.5 min-w-[6px] w-1.5 h-1.5 rounded-full bg-brand-400" />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            ))}
            
            <div className="text-center pt-8">
                <p className="text-slate-400 text-sm">...and more to come!</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;