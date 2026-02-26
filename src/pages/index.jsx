import React, { useState } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [theme, setTheme] = useState("light");
  const [copied, setCopied] = useState(false);

  const bg = theme === "light" ? "bg-white" : "bg-neutral-900";
  const text = theme === "light" ? "text-neutral-900" : "text-neutral-100";
  const textMuted = theme === "light" ? "text-neutral-600" : "text-neutral-400";
  const border =
    theme === "light" ? "border-neutral-200" : "border-neutral-700";
  const accent = theme === "light" ? "bg-neutral-900" : "bg-neutral-100";
  const accentText = theme === "light" ? "text-white" : "text-neutral-900";

  const darkiFrame = theme === "dark" ? "invert hue-rotate-180" : "";

  const projects = [
    {
      title: "Carver County Real Estate Platform",
      description:
        "Full-stack real estate content platform with SSR optimization, relational PostgreSQL schema, custom admin dashboard, and secure/optimized backend with row-level security.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Flix",
      description:
        "Social movie discovery platform with serverless AWS architecture and DynamoDB. Implemented personalized and group-based AI recommendations using user preference embeddings.",
      tech: ["ReactJS", "Python", "AWS", "DynamoDB", "GenAI"],
    },
    {
      title: "LLM Workshop Series",
      description:
        "Designed and led hands-on technical workshops on LLM application development, covering OpenAI APIs, RAG pipelines, vector databases, and system architecture for 50+ students.",
      tech: ["OpenAI API", "LangChain", "RAG", "Vector Stores"],
    },
    {
      title: "Drone Delivery Simulation",
      description:
        "3D drone delivery simulation modeling optimal routing across a virtual campus using BFS, DFS, and A*. Applied object-oriented design patterns within an Agile development cycle.",
      tech: ["C++", "Algorithms", "A*", "Design Patterns"],
    },
    {
      title: "E-Commerce Web Server",
      description:
        "Full-stack e-commerce system with RESTful API backend, persistent MongoDB storage, session management, and dynamic frontend order tracking.",
      tech: ["ExpressJS", "MongoDB", "REST APIs", "JavaScript"],
    },
  ];

  const experience = [
    {
      role: "Software Developer (Contract)",
      company: "Real Estate Technology — REMAX (Independent Client)",
      location: "Chaska, MN",
      period: "Dec 2025 - Present",
      description:
        "Built production web applications using React, TypeScript, Node.js, and PostgreSQL. Designed backend APIs, integrated databases for blog content and lead generation, and collaborated with business owners to translate requirements into technical solutions.",
    },
    {
      role: "Computer Science Teaching Assistant (6 semesters)",
      company: "University of Minnesota",
      location: "Minneapolis, MN",
      period: "Jan 2023 - Dec 2025",
      description:
        "Taught Python programming fundamentals to 900+ students across multiple semesters. Led weekly lab sections of 40+ students, graded assignments and provided feedback, and received consistently positive feedback from 100+ students.",
    },
  ];

  return (
    <div
      className={`min-h-screen ${bg} ${text} transition-colors duration-300`}
    >
      {/* navbar/header */}
      <header className={`border-b ${border} py-8 px-6`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* name/title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-mono font-bold mb-2">
              Emmet Hoversten
            </h1>
            <p className={`${textMuted} font-mono text-sm`}>
              AI Engineer / Software Developer
            </p>
          </div>

          {/* lightswitch */}
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`w-10 h-16 rounded-md shadow-lg border flex items-center justify-center active:scale-95 transition-all duration-300 ${
                  theme === "light"
                    ? "bg-neutral-100 border-neutral-300"
                    : "bg-neutral-800 border-neutral-600"
                }`}
                aria-label="Toggle theme"
              >
                <div
                  className={`relative w-3 h-10 rounded-sm flex items-center justify-center shadow-inner transition-colors duration-300 ${
                    theme === "light" ? "bg-neutral-300" : "bg-neutral-600"
                  }`}
                >
                  <div
                    className={`
                              absolute w-3 h-5 rounded-sm shadow-md
                              transition-all duration-300 ease-in-out
                              origin-center ${theme === "light" ? "-translate-y-4 bg-white" : "translate-y-4 bg-neutral-900"}`}
                  />
                </div>
              </button>

              {/* wall writing */}
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 select-none pointer-events-none w-[120px]">
                <svg
                  width="120"
                  height="60"
                  viewBox="0 0 120 60"
                  className={`transition-colors duration-300 ${theme === "light" ? "opacity-20" : "opacity-15"}`}
                >
                  <defs>
                    <filter id="roughen">
                      <feTurbulence
                        type="turbulence"
                        baseFrequency="0.02"
                        numOctaves="3"
                        result="noise"
                        seed="2"
                      />
                      <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="1.2"
                      />
                    </filter>
                  </defs>

                  <text
                    x="8"
                    y="18"
                    fontSize="11"
                    fill="currentColor"
                    filter="url(#roughen)"
                    style={{
                      fontFamily: "'Segoe UI', cursive",
                      letterSpacing: "0.5px",
                      transform: "rotate(-3deg)",
                      transformOrigin: "60px 30px",
                    }}
                    className={
                      theme === "light"
                        ? "text-neutral-900"
                        : "text-neutral-100"
                    }
                  >
                    {theme === "light" ? "too bright?" : "too scary?"}
                  </text>

                  <path
                    d="M 115,15 C 110,18 118,25 108,28 C 98,31 105,38 95,40 C 85,42 90,48 78,47 C 70,46 65,44 62,43"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#roughen)"
                    className={
                      theme === "light"
                        ? "text-neutral-900"
                        : "text-neutral-100"
                    }
                  />
                  <path
                    d="M 62,43 C 67,39 70,36 69,33"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#roughen)"
                    className={
                      theme === "light"
                        ? "text-neutral-900"
                        : "text-neutral-100"
                    }
                  />
                  <path
                    d="M 62,43 C 67,46 69,50 68,53"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#roughen)"
                    className={
                      theme === "light"
                        ? "text-neutral-900"
                        : "text-neutral-100"
                    }
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* contact icons */}
          <div className="flex items-center gap-4">
            {/* email animation*/}
            <div className="group relative flex items-center px-2 py-2">
              <div className="hidden md:flex overflow-hidden justify-end max-w-0 group-hover:max-w-xs transition-all duration-500 ease-out">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("emmethoversten@gmail.com");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className={`mr-3 text-sm font-mono ${text} whitespace-nowrap overflow-hidden border-r-2 border-current opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-200 group-hover:animate-typing`}
                >
                  emmethoversten [at] gmail [dot] com
                </button>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("emmethoversten@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className={`${textMuted} hover:${text} transition-all duration-300`}
              >
                <Mail size={20} />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${textMuted} md:hidden ${copied ? "opacity-100" : ""}`}
              >
                {copied ? "Copied!" : ""}
              </div>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${textMuted} hidden md:block`}
              >
                {copied ? "Copied!" : "Click to copy"}
              </div>
            </div>

            {/* github */}
            <a
              href="https://github.com/ejhover"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textMuted} hover:${text} transition-all duration-300 px-2`}
            >
              <Github size={20} />
            </a>

            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/emmet-hoversten-59929a173/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textMuted} hover:${text} transition-all duration-300 px-2`}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* profile  */}
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
                Computer Science graduate (B.S., Dec 2025) from the University
                of Minnesota Twin Cities. I'm focused on transitioning into AI
                engineering, building intelligent systems with LLMs, machine
                learning, and generative AI. Recently worked as a contract
                Software Developer building React + TypeScript frontends and
                Node.js + PostgreSQL backends, with leadership experience in the
                Generative AI Club exploring OpenAI APIs, LangChain, and vector
                databases.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "PyTorch",
                  "LangChain",
                  "OpenAI API",
                  "React",
                  "Node.js",
                  "PostgreSQL",
                  "AWS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-mono border ${border}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* skills */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono font-bold mb-8">
            Technical Skills
          </h2>
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

        {/* experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, i) => (
              <div
                key={i}
                className={`border-l-2 ${border} pl-6 hover:border-l-4 hover:pl-5 transition-all cursor-default group`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className={`font-mono font-bold group-hover:${text === "text-neutral-900" ? "text-neutral-900" : "text-white"} transition-colors`}
                    >
                      {job.role}
                    </h3>
                    <p className={`${textMuted} text-sm font-mono`}>
                      {job.company}
                    </p>
                    {job.location && (
                      <p className={`${textMuted} text-xs font-mono mt-0.5`}>
                        {job.location}
                      </p>
                    )}
                  </div>
                  <span className={`${textMuted} text-xs font-mono`}>
                    {job.period}
                  </span>
                </div>
                <p className={`${textMuted} text-sm`}>{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`border ${border} p-6 hover:border-2 hover:p-[23px] transition-all cursor-default group`}
              >
                <h3 className="font-mono font-bold mb-2 group-hover:scale-[1.02] transition-transform origin-left">
                  {project.title}
                </h3>
                <p className={`${textMuted} text-sm mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-mono ${textMuted}`}
                    >
                      | {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* activities */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono font-bold mb-8">
            Leadership & Activities
          </h2>
          <div className="space-y-6">
            <div
              className={`border ${border} p-6 hover:border-2 hover:p-[23px] transition-all cursor-default group`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-mono font-bold">
                    Generative Artificial Intelligence Club
                  </h3>
                  <p className={`${textMuted} text-sm font-mono`}>
                    Vice President & Treasurer
                  </p>
                </div>
                <span className={`${textMuted} text-xs font-mono`}>
                  2024 - Present
                </span>
              </div>
              <p className={`${textMuted} text-sm`}>
                Led projects and workshops using OpenAI APIs, LangChain, vector
                stores, and custom tools. Managed club finances and coordinated
                technical initiatives teaching AI concepts to 50+ members.
              </p>
            </div>
            <div
              className={`border ${border} p-6 hover:border-2 hover:p-[23px] transition-all cursor-default group`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-mono font-bold">
                    Brazilian Jiu Jitsu Club
                  </h3>
                  <p className={`${textMuted} text-sm font-mono`}>Member</p>
                </div>
                <span className={`${textMuted} text-xs font-mono`}>
                  2022-2024
                </span>
              </div>
              <p className={`${textMuted} text-sm`}>
                Active participant in club training sessions. Achieved rank of
                blue belt.
              </p>
            </div>
          </div>
        </section>

        {/* resume iframe*/}
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
              className={`w-full h-[800px] bg-white ${darkiFrame}`}
              title="Resume"
            />
          </div>
        </section>
      </main>

      {/* footer */}
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
