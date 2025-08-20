'use client';

import { Calendar, MapPin, Building, GraduationCap, Briefcase } from 'lucide-react';
import TechBadge from './TechBadge';

interface TimelineItem {
  id: string;
  title: string;
  company?: string;
  institution?: string;
  location: string;
  period: string;
  type: 'education' | 'experience' | 'project';
  description: string;
  achievements?: string[];
  technologies?: string[];
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'experience':
        return Briefcase;
      case 'project':
        return Building;
      default:
        return Briefcase;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-green-500 to-green-600';
      case 'experience':
        return 'from-blue-500 to-blue-600';
      case 'project':
        return 'from-amber-500 to-amber-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education':
        return 'Formation';
      case 'experience':
        return 'Expérience';
      case 'project':
        return 'Projet';
      default:
        return 'Expérience';
    }
  };

  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
      
      {items.map((item, index) => {
        const IconComponent = getIcon(item.type);
        const colorClass = getTypeColor(item.type);
        
        return (
          <div key={item.id} className="relative flex items-start mb-12 last:mb-0">
            {/* Icône timeline */}
            <div className={`
              relative z-10 flex items-center justify-center w-16 h-16 
              bg-gradient-to-br ${colorClass} rounded-2xl shadow-lg
              ${item.current ? 'ring-4 ring-blue-200 animate-pulse' : ''}
            `}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            
            {/* Contenu */}
            <div className="ml-8 flex-1">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`
                        px-3 py-1 text-xs font-semibold rounded-full text-white
                        bg-gradient-to-r ${colorClass}
                      `}>
                        {getTypeLabel(item.type)}
                      </span>
                      {item.current && (
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                          En cours
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    
                    {(item.company || item.institution) && (
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {item.company || item.institution}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Réalisations principales
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Technologies */}
                {item.technologies && item.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Technologies & Compétences
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <TechBadge
                          key={techIndex}
                          name={tech}
                          variant={item.type === 'education' ? 'accent' : 'primary'}
                          size="sm"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
