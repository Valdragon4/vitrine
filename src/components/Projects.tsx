'use client';

import { MessageSquare, Server, Code, Database, Globe, Shield, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import TechBadge from './TechBadge';
import { projectsData } from '@/lib/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const handleProjectView = (project: any) => {
    setSelectedProject(project);
  };
  
  const projects = projectsData;

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header amélioré avec mise en avant */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Code className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projets</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Focus sur <span className="font-semibold text-gray-800">Ordely</span> (en production, passage en <span className="font-semibold">SaaS</span> avec démo bientôt),
            et sélection de projets représentatifs de mes compétences (DevOps, Admin Système, Web).
          </p>
        </div>

        {/* Grille de projets avec section mise en avant */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onViewMore={() => handleProjectView(project)}
            />
          ))}
        </div>

        {/* Section compétences techniques améliorée */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Compétences <span className="text-blue-600">Techniques</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des solutions robustes et évolutives
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Code, name: "Développement Web", color: "blue", description: "Frontend & Backend" },
              { icon: Database, name: "Bases de données", color: "green", description: "SQL & NoSQL" },
              { icon: Server, name: "Administration", color: "purple", description: "Linux & Windows" },
              { icon: Globe, name: "DevOps", color: "orange", description: "CI/CD & Cloud" },
              { icon: Shield, name: "Sécurité", color: "red", description: "SSL & Monitoring" },
              { icon: MessageSquare, name: "API", color: "indigo", description: "REST & GraphQL" }
            ].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <IconComponent className="w-10 h-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{skill.name}</h4>
                  <p className="text-sm text-gray-500">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modale améliorée */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in-up">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header de la modale */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-8 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 bg-gradient-to-br ${
                  selectedProject.color === 'violet' ? 'from-violet-500 to-purple-600' :
                  selectedProject.color === 'blue' ? 'from-blue-500 to-cyan-600' :
                  'from-green-500 to-emerald-600'
                } shadow-lg`}>
                  <selectedProject.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                  <p className="text-gray-600 mt-1">{selectedProject.duration}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Contenu de la modale */}
            <div className="p-8 space-y-8">
              {/* Description complète */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Description complète</h4>
                <p className="text-gray-700 leading-relaxed text-lg">{selectedProject.fullDescription}</p>
              </div>

              {/* Fonctionnalités */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Fonctionnalités principales</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center text-gray-700 p-3 bg-blue-50 rounded-xl">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Défis et résultats */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-red-900 mb-4">Défis techniques</h4>
                  <p className="text-red-800 leading-relaxed">{selectedProject.challenges}</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-green-900 mb-4">Résultats obtenus</h4>
                  <p className="text-green-800 leading-relaxed">{selectedProject.results}</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech: string, index: number) => (
                    <TechBadge
                      key={index}
                      name={tech}
                      variant="primary"
                      size="md"
                    />
                  ))}
                </div>
              </div>

              {/* Liens d'actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                {selectedProject.isExperience ? (
                  <div className="text-center p-6 bg-amber-50 rounded-2xl border border-amber-200 flex-1">
                    <p className="text-amber-800 font-semibold text-lg">
                      📋 Expérience professionnelle
                    </p>
                    <p className="text-amber-700 mt-2">
                      Ce projet a été réalisé dans le cadre d'un stage professionnel
                    </p>
                  </div>
                ) : selectedProject.isDemo ? (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Voir la démonstration
                  </a>
                ) : (
                  <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 flex-1">
                    <p className="text-gray-700 font-semibold text-lg">
                      📁 Projet personnel
                    </p>
                    <p className="text-gray-600 mt-2">
                      Démonstration non disponible publiquement
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
