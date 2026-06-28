import React from 'react';

const Projects: React.FC = () => {
  const portfolioProjects = [
    {
      title: "LeftoverMagics",
      description: "An AI-powered web application integrating the Spoonacular API. Designed to combat food waste by generating creative recipes based specifically on a user's available surplus ingredients.",
      tech: ["React", "AI Integration", "Spoonacular API"]
    },
    {
      title: "LIKHA ERP",
      description: "A modular Enterprise Resource Planning system. I architected the Procurement and Supply Chain modules, focusing heavily on 'Three-Way Match' logic and engineering the print flow lifecycle for sales invoices.",
      tech: ["Vue", "Pinia", "Strapi"]
    },
    {
      title: "GenuProject",
      description: "A secure, full-stack application featuring robust user authentication and post management. Successfully configured CORS and deployed the backend/frontend utilizing Render and Vercel.",
      tech: ["Full-Stack", "Auth", "Deployment"]
    },
    {
      title: "Brave Bound",
      description: "A highly interactive travel and tour website. Focused on the frontend experience by implementing smooth GSAP animations and a custom-engineered sticky header.",
      tech: ["Web Dev", "GSAP", "UI/UX"]
    },
    {
      title: "Devfolio System Architecture",
      description: "Comprehensive system documentation project, featuring meticulous logic verification and standardized naming conventions for Level 0 and Level 1 Data Flow Diagrams.",
      tech: ["Systems Analysis", "DFD", "Documentation"]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Featured Projects
        </h2>
        <div className="h-1 grow bg-linear-to-r from-blue-600 to-transparent rounded-full opacity-20"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioProjects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            {/* Top accent line that reveals on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
              {project.title}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold tracking-wide rounded-full border border-blue-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;