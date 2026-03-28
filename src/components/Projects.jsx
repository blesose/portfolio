import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../utils/constants';
import ProjectModal from './ProjectModal';

const Projects = ({ showToast }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleGithubClick = (e, url) => {
    e.stopPropagation();
    showToast('Opening GitHub repository (Demo)');
    // window.open(url, '_blank');
  };

  return (
    <>
      <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="text-primary-500 font-mono text-sm tracking-wider">CHAPTER 03</span>
              <h2 className="section-header mt-2">Featured Projects</h2>
            </div>
            <a
              href="https://github.com/blesose"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 flex items-center gap-2 text-sm font-medium"
            >
              View All on GitHub
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="project-card group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                    <button
                      onClick={(e) => handleGithubClick(e, project.githubUrl)}
                      className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-pill">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          showToast={showToast}
        />
      )}
    </>
  );
};

export default Projects;