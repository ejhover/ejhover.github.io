import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'SQL', 'PHP', 'HTML', 'CSS'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Frameworks',
    skills: ['ReactJS', 'NextJS', 'ExpressJS', 'Flask', 'Node.js', 'Tailwind CSS'],
    color: 'from-slate-500 to-slate-600'
  },
  {
    title: 'Tools & Platforms',
    skills: ['PyTorch', 'MongoDB', 'AWS', 'Git', 'VS Code', 'Jupyter', 'Anaconda'],
    color: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Concepts',
    skills: ['Machine Learning', 'AI', 'REST APIs', 'Agile/Scrum', 'Data Structures', 'Algorithms'],
    color: 'from-slate-400 to-slate-500'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills &{" "}
            <span className="text-blue-500">
              Technologies
            </span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-slate-500/10 border border-white/10"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Algorithms & Data Structures',
              'Machine Learning',
              'Artificial Intelligence',
              'Software Engineering',
              'Operating Systems',
              'Internet Programming',
              'Program Design & Development'
            ].map((course, i) => (
              <motion.span
                key={course}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1.5 rounded-full bg-white/5 text-sm text-gray-400"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}