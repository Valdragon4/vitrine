import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projectsData';
import TechBadge from '@/components/TechBadge';
import { ExternalLink } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const Icon = project.icon;

  return (
    <main className="min-h-screen py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="mt-6 text-4xl font-bold text-gray-900">{project.title}</h1>
          <p className="mt-2 text-gray-600">{project.description}</p>
          {project.badges && (
            <div className="mt-4 flex gap-2 flex-wrap">
              {project.badges.map((b, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200">{b}</span>
              ))}
            </div>
          )}
        </div>

        {project.image && (
          <div className="mb-10 overflow-hidden rounded-3xl shadow-xl">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        )}

        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Présentation</h2>
            <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Fonctionnalités</h3>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, i) => (
                <TechBadge key={i} name={t} variant="primary" size="sm" />
              ))}
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-700">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                  <ExternalLink className="w-4 h-4" /> Code source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:underline">
                  <ExternalLink className="w-4 h-4" /> Démo
                </a>
              )}
            </div>
          </aside>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-red-900 mb-4">Défis</h3>
            <p className="text-red-800 leading-relaxed">{project.challenges}</p>
          </div>
          <div className="bg-green-50 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Résultats</h3>
            <p className="text-green-800 leading-relaxed">{project.results}</p>
          </div>
        </section>
      </div>
    </main>
  );
}


