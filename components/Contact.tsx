import React from 'react';
import { SOCIALS, RESUME_DATA } from '../constants';
import { Mail, ArrowUpRight, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 via-orange-500 to-yellow-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
                <div>
                    <span className="text-brand-400 font-bold uppercase tracking-widest text-sm">Get in Touch</span>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">
                        Let's create something <span className="text-brand-500 underline decoration-4 decoration-brand-500/30 underline-offset-4">viral</span>.
                    </h2>
                </div>
                <p className="text-xl text-slate-400 max-w-md leading-relaxed">
                    Ready to elevate your brand's social presence? I'm available for freelance projects and full-time opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href={`mailto:${RESUME_DATA.contact.email}`}
                        className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-brand-500 hover:bg-brand-600 rounded-full font-bold text-lg text-white transition-transform hover:-translate-y-1 shadow-lg shadow-brand-500/25"
                    >
                        <Mail />
                        Send Email
                    </a>
                    <a
                        href={`tel:${RESUME_DATA.contact.phone}`}
                        className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-transparent border border-slate-700 hover:border-brand-500 text-white rounded-full font-bold text-lg transition-colors hover:text-brand-400"
                    >
                        <Phone size={20} />
                        Call Me
                    </a>
                </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
                {SOCIALS.map((social) => (
                    <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10"
                    >
                        <div className="flex items-center gap-5">
                            <div className="p-4 bg-slate-900 rounded-xl group-hover:bg-brand-500 group-hover:text-white transition-colors text-slate-400 shadow-inner">
                                <social.icon size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold text-lg text-white">{social.platform}</h5>
                                <p className="text-slate-400 text-sm group-hover:text-brand-200 transition-colors">{social.text}</p>
                            </div>
                        </div>
                        <div className="p-2 rounded-full bg-slate-700 group-hover:bg-white group-hover:text-brand-600 transition-colors">
                            <ArrowUpRight size={20} />
                        </div>
                    </a>
                ))}
            </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
            <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
            <p className="flex items-center gap-2">
                Designed with <span className="text-red-500">❤</span> and React
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;