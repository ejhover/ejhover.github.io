import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

// Design 1: Swiss Minimalist - Clean, grid-based, monospace typography
export default function Portfolio() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const bg = theme === 'light' ? 'bg-white' : 'bg-neutral-900';
  const text = theme === 'light' ? 'text-neutral-900' : 'text-neutral-100';
  const textMuted = theme === 'light' ? 'text-neutral-600' : 'text-neutral-400';
  const border = theme === 'light' ? 'border-neutral-200' : 'border-neutral-700';
  const accent = theme === 'light' ? 'bg-neutral-900' : 'bg-neutral-100';
  const accentText = theme === 'light' ? 'text-white' : 'text-neutral-900';

  const projects = [
    {
      title: 'Legal Research Assistant',
      description: 'AI legal research assistant that uses legal documents to accurately answer questions with RAG.',
      tech: ['Python', 'OpenAI API', 'LangChain', 'Vector DB'],
    },
    {
      title: 'Flix',
      description: 'Social web app for sharing and rating movies and TV shows. Implemented GenAI-based recommendations for individuals and groups using AWS and DynamoDB.',
      tech: ['ReactJS', 'AWS', 'DynamoDB', 'GenAI'],
    },
    {
      title: 'LLM Workshop Series',
      description: 'Led technical workshops as VP of Generative AI Club teaching OpenAI APIs, prompt engineering, LangChain, RAG systems, and vector stores to 50+ students.',
      tech: ['OpenAI', 'LangChain', 'RAG', 'Prompt Engineering'],
    },
    {
      title: 'Drone Delivery Simulation',
      description: '3D simulation modeling drone delivery routes with optimal pathfinding. Implemented BFS, DFS, and A* algorithms with design patterns in an Agile workflow.',
      tech: ['C++', 'Algorithms', 'Design Patterns'],
    },
    {
      title: 'E-Commerce Web Server',
      description: 'RESTful API backend for order management with persistent storage. Built clean frontend for browsing and managing orders with real-time updates.',
      tech: ['ExpressJS', 'MongoDB', 'REST API'],
    },
  ];

  const experience = [
    {
      role: 'Software Developer (Contract)',
      company: 'Real Estate Technology — REMAX (Independent Client)',
      location: 'Chaska, MN',
      period: 'Dec 2025 - Present',
      description: 'Built production web applications using React, TypeScript, Node.js, and PostgreSQL. Designed backend APIs, integrated databases for blog content and lead generation, and collaborated with business owners to translate requirements into technical solutions.',
    },
    {
      role: 'Computer Science Teaching Assistant (6 semesters)',
      company: 'University of Minnesota',
      location: 'Minneapolis, MN',
      period: 'Jan 2023 - Dec 2025',
      description: 'Taught Python programming fundamentals to 900+ students across multiple semesters. Led weekly lab sections of 40+ students, graded assignments and provided feedback, and received consistently positive feedback from 100+ students.',
    },
  ];

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-300`}>
      {/* Theme Toggle - moved to bottom left */}
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full ${accent} ${accentText} flex items-center justify-center text-xs font-mono hover:scale-110 transition-transform shadow-lg`}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '●' : '○'}
      </button>

      {/* Header */}
      <header className={`border-b ${border} py-8 px-6`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-mono font-bold mb-2">Emmet Hoversten</h1>
              <p className={`${textMuted} font-mono text-sm`}>AI Engineer / Software Developer</p>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/ejhover" target="_blank" rel="noopener noreferrer" 
                 className={`${textMuted} hover:${text} transition-colors`}>
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/emmet-hoversten-59929a173/" target="_blank" rel="noopener noreferrer"
                 className={`${textMuted} hover:${text} transition-colors`}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:emmethoversten@gmail.com"
                 className={`${textMuted} hover:${text} transition-colors`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-[150px_1fr] gap-8 items-start">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src="/images/profile.jpg"
                  alt="Emmet Hoversten"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div class="${accent} w-full h-full flex items-center justify-center"><span class="${accentText} text-2xl font-mono font-bold">EH</span></div>`;
                  }}
                />
              </div>
              <div className={`text-xs font-mono ${textMuted} space-y-1`}>
                <p>Minneapolis, MN</p>
                <p>University of Minnesota</p>
                <p>B.S. Computer Science</p>
                <p>GPA: 3.96 | Dec 2025</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-mono font-bold mb-4">About</h2>
              <p className={`${textMuted} leading-relaxed mb-6`}>
                Computer Science graduate (B.S., Dec 2025) from the University of Minnesota Twin Cities. 
                I'm focused on transitioning into AI engineering, building intelligent systems with LLMs, 
                machine learning, and generative AI. Recently worked as a contract Software Developer building 
                React + TypeScript frontends and Node.js + PostgreSQL backends, with leadership experience 
                in the Generative AI Club exploring OpenAI APIs, LangChain, and vector databases.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'LangChain', 'OpenAI API', 'React', 'Node.js', 'PostgreSQL', 'AWS'].map(skill => (
                  <span key={skill} className={`px-3 py-1 text-xs font-mono border ${border}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className={`border ${border} p-4`}>
              <h3 className="font-mono font-bold text-sm mb-3">Languages</h3>
              <div className={`${textMuted} text-xs font-mono space-y-1`}>
                <p>Python</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>Java</p>
                <p>SQL</p>
                <p>C++</p>
              </div>
            </div>
            <div className={`border ${border} p-4`}>
              <h3 className="font-mono font-bold text-sm mb-3">AI/ML</h3>
              <div className={`${textMuted} text-xs font-mono space-y-1`}>
                <p>OpenAI API</p>
                <p>LangChain</p>
                <p>PyTorch</p>
                <p>Vector DBs</p>
                <p>RAG Systems</p>
                <p>Prompt Eng.</p>
              </div>
            </div>
            <div className={`border ${border} p-4`}>
              <h3 className="font-mono font-bold text-sm mb-3">Frameworks</h3>
              <div className={`${textMuted} text-xs font-mono space-y-1`}>
                <p>React</p>
                <p>Node.js</p>
                <p>Express</p>
                <p>Flask</p>
              </div>
            </div>
            <div className={`border ${border} p-4`}>
              <h3 className="font-mono font-bold text-sm mb-3">Tools</h3>
              <div className={`${textMuted} text-xs font-mono space-y-1`}>
                <p>PostgreSQL</p>
                <p>MongoDB</p>
                <p>DynamoDB</p>
                <p>AWS</p>
                <p>Git</p>
                <p>Linux</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, i) => (
              <div key={i} className={`border-l-2 ${border} pl-6 hover:border-l-4 hover:pl-5 transition-all cursor-default group`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className={`font-mono font-bold group-hover:${text === 'text-neutral-900' ? 'text-neutral-900' : 'text-white'} transition-colors`}>{job.role}</h3>
                    <p className={`${textMuted} text-sm font-mono`}>{job.company}</p>
                    {job.location && <p className={`${textMuted} text-xs font-mono mt-0.5`}>{job.location}</p>}
                  </div>
                  <span className={`${textMuted} text-xs font-mono`}>{job.period}</span>
                </div>
                <p className={`${textMuted} text-sm`}>{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono font-bold mb-8">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className={`border ${border} p-6 hover:border-2 hover:p-[23px] transition-all cursor-default group`}>
                <h3 className="font-mono font-bold mb-2 group-hover:scale-[1.02] transition-transform origin-left">{project.title}</h3>
                <p className={`${textMuted} text-sm mb-4`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className={`text-xs font-mono ${textMuted}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono font-bold mb-8">Leadership & Activities</h2>
          <div className="space-y-6">
            <div className={`border ${border} p-6 hover:border-2 hover:p-[23px] transition-all cursor-default group`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-mono font-bold">Generative Artificial Intelligence Club</h3>
                  <p className={`${textMuted} text-sm font-mono`}>Vice President & Treasurer</p>
                </div>
                <span className={`${textMuted} text-xs font-mono`}>2024 - Present</span>
              </div>
              <p className={`${textMuted} text-sm`}>
                Led projects and workshops using OpenAI APIs, LangChain, vector stores, and custom tools. 
                Managed club finances and coordinated technical initiatives teaching AI concepts to 50+ members.
              </p>
            </div>
            <div className={`border ${border} p-6 hover:border-2 hover:p-[23px] transition-all cursor-default group`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-mono font-bold">Brazilian Jiu Jitsu Club</h3>
                  <p className={`${textMuted} text-sm font-mono`}>Member</p>
                </div>
                <span className={`${textMuted} text-xs font-mono`}>2023</span>
              </div>
              <p className={`${textMuted} text-sm`}>
                Active participant in club training sessions.
              </p>
            </div>
          </div>
        </section>

        {/* Resume */}
        <section>
          <h2 className="text-2xl font-mono font-bold mb-4">Resume</h2>
          <div className="mb-4 flex gap-4">
            <a
              href="https://docs.google.com/document/d/17Xn1xGJ9gcJJTIxmYmCLU3c0YjkV7ywOep8bdCrsGHA/export?format=pdf"
              download="Emmet_Hoversten_Resume.pdf"
              className={`${accent} ${accentText} px-4 py-2 text-sm font-mono flex items-center gap-2 hover:opacity-80 transition-opacity`}
            >
              <Download size={16} /> Download PDF
            </a>
            <a
              href="https://docs.google.com/document/d/17Xn1xGJ9gcJJTIxmYmCLU3c0YjkV7ywOep8bdCrsGHA/edit"
              target="_blank"
              rel="noopener noreferrer"
              className={`border ${border} px-4 py-2 text-sm font-mono flex items-center gap-2 hover:bg-opacity-5 hover:bg-current transition-colors`}
            >
              <ExternalLink size={16} /> Open in Google Docs
            </a>
          </div>
          <div className={`border ${border} overflow-hidden`}>
            <iframe
              src="https://docs.google.com/document/d/17Xn1xGJ9gcJJTIxmYmCLU3c0YjkV7ywOep8bdCrsGHA/preview"
              className="w-full h-[800px] bg-white"
              title="Resume"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t ${border} py-8 px-6 mt-20`}>
        <div className="max-w-5xl mx-auto text-center">
          <p className={`${textMuted} text-xs font-mono`}>
            © {new Date().getFullYear()} Emmet Hoversten
          </p>
        </div>
      </footer>
    </div>
  );
}