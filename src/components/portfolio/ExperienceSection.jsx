import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, MessageSquare, Star, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const highlights = [
    { icon: Users, value: '900+', label: 'Students Taught' },
    { icon: MessageSquare, value: '100+', label: 'Positive Reviews' },
    { icon: Calendar, value: '6', label: 'Semesters' },
    { icon: Star, value: '40+', label: 'Students per Lab' },
  ];

  const responsibilities = [
    'Taught Python programming fundamentals to 900+ students across multiple semesters',
    'Led weekly lab sections of 40+ students and supported learning through office hours',
    'Graded assignments, quizzes, and exams and provided actionable feedback',
    'Collaborated with faculty and TAs to improve course content',
    'Received consistently positive feedback from 100+ students',
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Work{" "}
            <span className="text-blue-500">
              Experience
            </span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-blue-500/20">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-blue-400 text-sm">Real Estate Technology — REMAX (Independent Client)</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Software Developer (Contract)
                </h3>
                <p className="text-gray-400">
                  Production web applications and backend systems
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300">Dec 2025 - Present</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Briefcase, value: 'React', label: 'Frontend' },
                { icon: Briefcase, value: 'TypeScript', label: 'Language' },
                { icon: Briefcase, value: 'Node.js', label: 'Backend' },
                { icon: Briefcase, value: 'PostgreSQL', label: 'Database' },
              ].map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/5"
                >
                  <Icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </motion.div>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {[
                  'Built and deployed production web applications using React, TypeScript, Node.js, and PostgreSQL with a focus on performance, usability, and clean design',
                  'Designed and integrated a backend API and database to support blog content and lead generation',
                  'Built custom frontend components and site features to support lead generation and content management',
                  'Collaborated directly with business owners to gather requirements and translate them into technical solutions',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-blue-500/20">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-blue-400 text-sm">University of Minnesota</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Computer Science Teaching Assistant
                  </h3>
                  <p className="text-gray-400">
                    Introduction to Computing and Programming Concepts
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">Jan 2023 - Dec 2025</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {highlights.map(({ icon: Icon, value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-4 rounded-2xl bg-white/5"
                  >
                    <Icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="text-xs text-gray-500">{label}</p>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="absolute -left-3 top-12 w-6 h-6 rounded-full bg-blue-500 hidden md:block" />
          <div className="absolute -left-px top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10"
        >
          <h4 className="text-lg font-semibold text-white mb-4">Leadership & Activities</h4>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 p-4 rounded-xl bg-white/5">
              <p className="text-blue-400 font-medium mb-1">Vice President & Treasurer</p>
              <p className="text-white">Generative AI Club</p>
              <p className="text-sm text-gray-400 mt-2">
                Led projects and workshops using OpenAI APIs, LangChain, vector stores, and custom tools. Managed club finances and coordinated technical initiatives.
              </p>
            </div>
            <div className="flex-1 p-4 rounded-xl bg-white/5">
              <p className="text-slate-400 font-medium mb-1">Member</p>
              <p className="text-white">Brazilian Jiu Jitsu Club</p>
              <p className="text-sm text-gray-400 mt-2">
                Active participant in club training.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}