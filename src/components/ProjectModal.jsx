import React from 'react';
import { X, Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectModal = ({ project, onClose, showToast }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGithubClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
      showToast('Opening GitHub repository...');
    } else {
      showToast('GitHub repository not available');
    }
  };

  const handleLiveDemoClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
      showToast('Opening live demo...');
    } else {
      showToast('Live demo not available yet');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleOutsideClick}
    >
      <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
          <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          {/* Project Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                <Calendar className="w-4 h-4" />
                <span>{project.year || '2025'}</span>
                <Tag className="w-4 h-4 ml-4" />
                <span className="capitalize">{project.category}</span>
              </div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                {project.fullDescription || project.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                {project.features ? (
                  project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      {feature}
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      RESTful API with Swagger documentation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      Responsive mobile-first design
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      MongoDB database integration
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <button
              onClick={handleGithubClick}
              className="btn-outline flex items-center gap-2 flex-1 justify-center"
              disabled={!project.githubUrl}
              style={!project.githubUrl ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
            >
              <Github className="w-4 h-4" />
              View Code
            </button>
            <button
              onClick={handleLiveDemoClick}
              className="btn-primary flex items-center gap-2 flex-1 justify-center"
              disabled={!project.liveUrl}
              style={!project.liveUrl ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
          </div>
          
          {/* Live Demo URL Display (optional) */}
          {project.liveUrl && (
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-4">
              Live URL: {project.liveUrl}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;