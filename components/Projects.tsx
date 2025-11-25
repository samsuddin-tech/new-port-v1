import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Heart, MessageCircle, BarChart2, Hash } from 'lucide-react';

const Projects = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-bold tracking-widest uppercase mb-2">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Recent Work</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Overlay */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Stats Overlay on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center text-white mb-4">
                    <div className="flex items-center gap-1">
                      <Heart size={18} className="text-red-500 fill-red-500" />
                      <span className="font-bold text-sm">{project.stats.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={18} />
                      <span className="font-bold text-sm">{project.stats.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart2 size={18} className="text-brand-400" />
                      <span className="font-bold text-sm">{project.stats.reach}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Below */}
              <div className="p-6 relative bg-white z-10">
                <div className="text-xs font-bold text-brand-500 uppercase tracking-wide mb-1">{project.category}</div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{project.title}</h4>
                <div className="absolute -top-10 right-6 bg-brand-500 text-white p-3 rounded-2xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                   <Hash size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;