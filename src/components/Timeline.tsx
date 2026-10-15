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
  parallel?: boolean;
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
      default:
        return Briefcase;
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
      <div className="absolute left-[22px] top-2 bottom-2 w-px bg-ink-800" />

      {items.map((item) => {
        const IconComponent = getIcon(item.type);

        return (
          <div key={item.id} className="relative flex items-start mb-10 last:mb-0">
            {/* Nœud */}
            <div
              className={`relative z-10 flex items-center justify-center w-11 h-11 rounded-lg border bg-ink-900 flex-shrink-0 ${
                item.current ? 'border-signal-500/60' : 'border-ink-700'
              }`}
            >
              <IconComponent
                className={`w-5 h-5 ${item.current ? 'text-signal-400' : 'text-ink-300'}`}
              />
            </div>

            {/* Contenu */}
            <div className="ml-6 flex-1 min-w-0">
              <div className="bg-card rounded-xl border border-ink-800 p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded border border-ink-700 text-ink-300">
                    {getTypeLabel(item.type)}
                  </span>
                  {item.current && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-signal-500/10 border border-signal-500/30 text-signal-400">
                      En cours
                    </span>
                  )}
                  {item.parallel && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded border border-ink-700 text-ink-400">
                      En parallèle
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-ink-100 mb-1.5">
                  {item.title}
                </h3>

                {(item.company || item.institution) && (
                  <div className="flex items-center text-signal-400/90 text-sm font-medium mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    {item.company || item.institution}
                  </div>
                )}

                <div className="flex flex-wrap gap-4 text-xs text-ink-400 mb-4">
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1.5" />
                    {item.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    <span className="tabular">{item.period}</span>
                  </span>
                </div>

                <p className="text-ink-300 leading-relaxed mb-4 text-[0.9375rem] max-w-[36rem]">
                  {item.description}
                </p>

                {item.achievements && item.achievements.length > 0 && (
                  <ul className="space-y-2 mb-4 max-w-[36rem]">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-ink-300">
                        <span className="w-1 h-1 rounded-full bg-signal-500 mr-3 mt-2 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <TechBadge key={i} name={tech} size="sm" />
                    ))}
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
