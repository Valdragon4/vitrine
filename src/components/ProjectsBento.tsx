import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projectsData, type ProjectItem } from '@/lib/projectsData';
import Parallax from './Parallax';

/**
 * Le poids d'une carte dit son importance. Ordely occupe quatre fois la
 * surface d'une petite carte parce qu'il porte quatre fois plus de preuve.
 *
 * La hauteur minimale mobile n'est pas décorative : en une seule colonne,
 * sans elle, toutes les cartes retombent à la même taille et la hiérarchie
 * — la seule vraie structure de la page — disparaît sur le support
 * majoritaire.
 */
const spanFor = (size: ProjectItem['size']) => {
  if (size === 'large') return 'min-h-[360px] md:min-h-0 md:col-span-2 md:row-span-2';
  if (size === 'medium') return 'min-h-[260px] md:min-h-0 md:col-span-1 md:row-span-2';
  return 'min-h-[200px] md:min-h-0 md:col-span-1 md:row-span-1';
};

const ProjectsBento = () => {
  return (
    <section id="projets" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="relative z-10 max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
        <Parallax speed={0.1}>
          <div className="mb-16 max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 tracking-tight text-balance">
              Onze projets en service, pas des maquettes
            </h2>
            <p className="mt-5 text-lg text-zinc-300 leading-relaxed max-w-[36rem]">
              Applications en production, infrastructure qui les héberge et
              contributions open source. Chaque projet a sa page : le problème,
              ce qui a coincé, et ce que ça donne aujourd&apos;hui.
            </p>
          </div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-[210px]">
          {projectsData.map((project) => {
            const Icon = project.icon;
            const isLarge = project.size === 'large';

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group relative rounded-xl overflow-hidden border border-zinc-800 bg-[#0c0c0e] transition-colors duration-300 hover:border-zinc-600 focus-visible:border-amber-500 ${spanFor(
                  project.size
                )}`}
              >
                {project.image && (
                  <div className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover object-top opacity-50 transition-opacity duration-700 ease-out group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/75 to-[#0a0a0b]/20" />
                  </div>
                )}

                {!project.image && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.09]">
                    <Icon className="w-28 h-28 text-white" strokeWidth={1.25} />
                  </div>
                )}

                <div className="relative h-full p-5 sm:p-6 flex flex-col justify-between gap-4">
                  {/* Rangée haute : nature du projet, et l'affordance de sortie */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-[11px] uppercase tracking-wider px-2 py-0.5 rounded border border-zinc-700/80 bg-zinc-950/70 text-zinc-300"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-zinc-600 flex-shrink-0 transition-[color,transform] duration-300 group-hover:text-amber-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Rangée basse : le titre mène, la transformation suit */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </span>
                      <h3
                        className={`font-semibold text-white tracking-tight ${
                          isLarge ? 'text-2xl sm:text-3xl' : 'text-lg'
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {isLarge && (
                      <p className="text-zinc-300 leading-relaxed max-w-[34rem] pt-1">
                        {project.description}
                      </p>
                    )}

                    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[13px] leading-snug">
                      <span className="text-zinc-400 line-through decoration-zinc-600">
                        {project.problem}
                      </span>
                      <span className="text-amber-400/90 font-medium">
                        {project.result}
                      </span>
                    </p>

                    {isLarge && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] px-2 py-0.5 rounded border border-zinc-800 bg-zinc-950/60 text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsBento;
