import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Flix',
    description: 'Social media web-app for sharing and rating movies & TV shows with friends. Utilizes generative AI to provide personalized recommendations for users and groups to find common media interests.',
    tech: ['ReactJS', 'AWS', 'GenAI', 'REST API'],
    gradient: 'from-blue-500/20 to-slate-500/20',
    features: [
      'AI-powered group recommendations',
      'Social sharing and rating system',
      'Real-time updates with AWS infrastructure',
      'Personalized content discovery'
    ]
  },
  {
    title: 'BBBlog',
    description: 'Full-stack blogging platform with user authentication, admin privileges, async comments, and a modern responsive design. Complete end-to-end web application with back-end APIs and session management.',
    tech: ['Node.js', 'Express', 'MySQL', 'Pug'],
    gradient: 'from-slate-500/20 to-slate-600/20',
    features: [
      'User registration and login with sessions',
      'Admin-only post management',
      'Asynchronous comment system with Fetch API',
      'Pagination and responsive design'
    ]
  },
  {
    title: 'Drone Delivery Simulation',
    description: '3D simulation of drone package delivery on a virtual UMN campus. Implements optimal routing using BFS, DFS, and A* search algorithms with agile scrum methodology.',
    tech: ['C++', 'Design Patterns', '3D Graphics'],
    gradient: 'from-blue-400/20 to-blue-500/20',
    features: [
      'Multiple pathfinding algorithms',
      'Factory, Strategy, and Decorator patterns',
      'Interactive 3D environment',
      'Agile scrum development'
    ]
  },
  {
    title: 'E-Commerce Web Server',
    description: 'Full-featured e-commerce backend with RESTful API endpoints for order management. Includes user authentication, cookies, and dynamic front-end updates.',
    tech: ['ExpressJS', 'MongoDB', 'REST API', 'SQL'],
    gradient: 'from-slate-600/20 to-slate-700/20',
    features: [
      'RESTful API for CRUD operations',
      'User session management with cookies',
      'Dynamic updates via Fetch API',
      'Database order persistence'
    ]
  },
  {
    title: 'Destinations',
    description: 'Travel destination tracker for finding and monitoring cheapest flights from MSP. Integrates with Google Flights API to help discover affordable travel options.',
    tech: ['NextJS', 'JavaScript', 'Python', 'Tailwind CSS'],
    gradient: 'from-blue-600/20 to-slate-600/20',
    features: [
      'Google Flights API integration',
      'Price tracking and alerts',
      'Scalable airport support',
      'Beautiful, responsive UI'
    ]
  },
  {
    title: 'TA Time Recorder',
    description: 'Desktop productivity software for recording weekly teaching assistant tasks and managing work hours for timesheet submissions.',
    tech: ['Python', 'Desktop App'],
    gradient: 'from-slate-500/20 to-blue-500/20',
    features: [
      'Task logging and tracking',
      'Time increment/decrement controls',
      'Weekly summary generation',
      'Easy timesheet export'
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Creative{" "}
            <span className="text-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development, 
            AI integration, and creative problem-solving.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}