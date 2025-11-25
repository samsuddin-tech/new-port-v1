import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, TOOLS } from '../constants';
import { CheckCircle2, Cpu, Palette, Zap } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <span className="text-brand-400 font-bold tracking-widest uppercase text-sm border border-brand-500/30 px-4 py-1.5 rounded-full bg-brand-500/10">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-6">My Arsenal</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Marketing Column */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-brand-500/50 hover:bg-slate-800 transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`p-3 rounded-xl ${skill.category === 'Tech' ? 'bg-blue-500/20 text-blue-400' : 'bg-brand-500/20 text-brand-400'}`}>
                                {skill.icon && <skill.icon size={24} />}
                            </div>
                            <div>
                                <h4 className="font-bold text-lg group-hover:text-brand-200 transition-colors">{skill.name}</h4>
                                <span className="text-xs text-slate-500 uppercase tracking-wider">{skill.category}</span>
                            </div>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '90%' }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full ${skill.category === 'Tech' ? 'bg-blue-500' : 'bg-brand-500'}`}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Tools Column */}
            <div className="bg-gradient-to-br from-brand-600 to-orange-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Palette size={120} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="fill-white" />
                    Software Stack
                </h3>
                
                <div className="space-y-4 relative z-10">
                    {TOOLS.map((tool, idx) => (
                        <motion.div
                            key={tool}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
                        >
                            <div className="bg-white/20 p-1 rounded-full">
                                <CheckCircle2 size={12} className="text-white" />
                            </div>
                            <span className="font-medium text-sm tracking-wide">{tool}</span>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20 text-sm opacity-80">
                    Ready to deploy these tools for your brand's growth immediately.
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;