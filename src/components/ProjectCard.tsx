'use client';

import { ExternalLink, Github, Eye, Calendar, User, Briefcase, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: {
    slug?: string;
    title: string;
    description: string;
    details: string;
    benefit: string;
    icon: any;
    technologies: string[];
    color: string;
    duration?: string;
    demo?: string;
    github?: string;
    isDemo?: boolean;
    isExperience?: boolean;
    image?: string;
    badges?: string[];
  };
  onViewMore: () => void;
}

const ProjectCard = ({ project, onViewMore }: ProjectCardProps) => {
  const [showImageModal, setShowImageModal] = useState(false);

  const getIconColor = (color: string) => {
    switch (color) {
      case 'violet':
        return 'from-violet-500 to-purple-600';
      case 'blue':
        return 'from-blue-500 to-cyan-600';
      case 'green':
        return 'from-green-500 to-emerald-600';
      case 'orange':
        return 'from-orange-500 to-amber-600';
      default:
        return 'from-blue-500 to-purple-600';
    }
  };

  const IconComponent = project.icon;

  return (
    <>
      <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
        {/* Image ou gradient de fond - Taille augmentée */}
        <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => project.image && setShowImageModal(true)}>
          {project.image ? (
            <>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
              />
              {/* Overlay d'agrandissement au survol */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <ZoomIn className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${getIconColor(project.color)} opacity-90 group-hover:scale-110 transition-transform duration-500`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <IconComponent className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          )}
          
          {/* Overlay avec badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="flex gap-2">
              {project.isExperience && (
                <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg backdrop-blur-sm">
                  <Briefcase className="w-3 h-3" />
                  Expérience
                </span>
              )}
              {project.isDemo && (
                <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg backdrop-blur-sm">
                  <Eye className="w-3 h-3" />
                  Démo
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-lg">
              <Calendar className="w-3 h-3" />
              {project.duration}
            </div>
          </div>

          {/* Indicateur de clic pour agrandir */}
          {project.image && (
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <ZoomIn className="w-4 h-4 text-gray-700" />
              </div>
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="p-6">
          {/* Titre */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Bénéfice */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6">
            <p className="text-blue-800 font-medium text-sm">
              💡 {project.benefit}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <TechBadge
                  key={index}
                  name={tech}
                  variant="neutral"
                  size="sm"
                  showIcon={false}
                />
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{project.technologies.length - 4} autres
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onViewMore}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              Voir plus
            </button>
            {project.slug && (
              <a
                href={`/projects/${project.slug}`}
                className="px-4 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center"
                title="Détails du projet"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            
            {project.isDemo && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center"
                title="Voir la démonstration"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modale d'agrandissement d'image */}
      {showImageModal && project.image && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in-up"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Bouton de fermeture */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowImageModal(false);
              }}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center transition-all duration-200 shadow-lg"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Image agrandie */}
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Titre de l'image */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
