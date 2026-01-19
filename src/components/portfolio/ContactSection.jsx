import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'emmethoversten@gmail.com', href: 'mailto:emmethoversten@gmail.com' },
    { icon: Phone, label: 'Phone', value: '612-747-5701', href: 'tel:612-747-5701' },
    { icon: MapPin, label: 'Location', value: 'Minneapolis, MN', href: null },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/ejhover' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/emmet-hoversten-59929a173/' },
    { icon: Globe, label: 'Website', href: '/' },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's{" "}
            <span className="text-blue-500">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, 
            or ways to contribute to your team.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {href ? (
                  <a
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
                  >
                    <div className="p-3 rounded-xl bg-blue-500/20">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">{label}</p>
                      <p className="text-white group-hover:text-blue-400 transition-colors">{value}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="p-3 rounded-xl bg-blue-500/20">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{label}</p>
                      <p className="text-white">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          {}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-slate-500/10 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Follow My Work</h3>
              <p className="text-gray-400 mb-6">
                Check out my latest projects and contributions on these platforms.
              </p>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Emmet Hoversten. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}