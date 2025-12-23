import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const titleWords = "Software Engineer".split(" ");
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
          {}
          <div className="hidden lg:block lg:flex-1">
            <div className="relative w-full">
              <img
                src="/images/portrait.jpg"
                alt="Portrait decorative"
                className="w-full h-[520px] object-cover rounded-3xl opacity-80"
                style={{ objectPosition: 'center 27%' }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl pointer-events-none" />
            </div>
          </div>

          {}
          <div className="lg:flex-1 text-center lg:text-left relative z-10 max-w-2xl mx-auto">
            {}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-blue-400 text-sm md:text-base tracking-widest uppercase mb-4 lg:text-left text-center"
            >
              Hello, I'm
            </motion.p>

            {}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            >
              Emmet{" "}
              <span className="text-blue-500">
                Hoversten
              </span>
            </motion.h1>

            {}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="text-xl md:text-2xl text-gray-400 font-light"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12"
            >
              {['AI Developer', 'Web Developer', 'Creative Producer'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/ejhover', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/emmethoversten', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:emmethoversten@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 hover:text-blue-400 transition-colors"
        >
          <ChevronDown size={28} />
        </motion.a>
      </motion.div>
    </section>
  );
}