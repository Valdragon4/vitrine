import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, getProjectSlugs, projectsData } from '@/lib/projectsData';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import BackButton from '@/components/BackButton';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/** Les onze pages sont rendues au build : elles existent pour être indexées. */
export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Projet introuvable' };

  const title = `${project.title} — Valentin Marot`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `https://valentin-marot.fr/projects/${project.slug}` },
    openGraph: {
      title,
      description: project.description,
      type: 'article',
      url: `https://valentin-marot.fr/projects/${project.slug}`,
      ...(project.image
        ? { images: [{ url: `https://valentin-marot.fr${project.image}` }] }
        : {}),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const Icon = project.icon;
  const others = projectsData.filter((p) => p.slug !== project.slug).slice(0, 4);

  return (
    <>
      <div className="border-b border-ink-800">
        <div className="max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 gap-4">
            <Link href="/" aria-label="Retour à l’accueil" className="rounded-lg">
              <Logo variant="full" size="md" />
            </Link>
            <BackButton />
          </div>
        </div>
      </div>

      <main className="max-w-[100rem] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        {/* En-tête */}
        <header className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="text-xs font-medium px-2 py-0.5 rounded border border-ink-700 text-ink-300"
              >
                {badge}
              </span>
            ))}
            <span className="text-[13px] text-ink-400 tabular ml-1">
              {project.duration}
            </span>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-xl border border-ink-700 bg-ink-900 flex items-center justify-center flex-shrink-0 mt-1">
              <Icon className="w-6 h-6 text-signal-400" aria-hidden="true" />
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-50 tracking-tight text-balance">
              {project.title}
            </h1>
          </div>

          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-[36rem]">
            {project.description}
          </p>

          {(project.demo || project.github) && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold bg-signal-500 text-ink-950 hover:bg-signal-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Voir en ligne
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold border border-ink-700 text-ink-200 hover:border-ink-500 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  Code source
                </a>
              )}
            </div>
          )}
        </header>

        {project.image && (
          <div className="mt-14 rounded-2xl overflow-hidden border border-ink-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`Capture d’écran du projet ${project.title}`}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Galerie — images complémentaires, avec ce qu'elles montrent */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-12 grid gap-8 sm:grid-cols-2">
            {project.gallery.map((img) => (
              <figure key={img.src} className="m-0">
                <div className="rounded-2xl overflow-hidden border border-ink-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full h-auto" />
                </div>
                <figcaption className="mt-3 text-[13px] text-ink-400 leading-relaxed max-w-[36rem]">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </section>
        )}

        {/* Corps */}
        <div className="mt-16 grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-12 xl:gap-20">
          <div>
            <section>
              <h2 className="font-display text-2xl font-bold text-ink-50 tracking-tight mb-5">
                Ce que c&apos;est
              </h2>
              <p className="text-ink-300 leading-relaxed max-w-[36rem]">
                {project.fullDescription}
              </p>
            </section>

            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold text-ink-50 tracking-tight mb-5">
                Ce que ça fait
              </h2>
              <ul className="space-y-3 max-w-[36rem]">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3.5 text-ink-300">
                    <span
                      className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-signal-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold text-ink-50 tracking-tight mb-5">
                Ce qui a coincé
              </h2>
              <p className="text-ink-300 leading-relaxed max-w-[36rem]">
                {project.challenges}
              </p>
            </section>

            <section className="mt-14">
              <h2 className="font-display text-2xl font-bold text-ink-50 tracking-tight mb-5">
                Où ça en est
              </h2>
              <p className="text-ink-300 leading-relaxed max-w-[36rem]">
                {project.results}
              </p>
            </section>
          </div>

          {/* Pile technique */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="font-display text-base font-semibold text-ink-400 mb-4">
              Pile technique
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="text-[13px] px-2.5 py-1 rounded border border-ink-800 bg-ink-900/60 text-ink-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-ink-800">
              <p className="text-base font-semibold text-ink-100">
                Un besoin comparable&nbsp;?
              </p>
              <p className="mt-1.5 text-[13px] text-ink-400 leading-relaxed">
                Réponse sous 24 h, avec un périmètre et un prix.
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-lg text-sm font-semibold bg-signal-500 text-ink-950 hover:bg-signal-400 transition-colors"
              >
                Me contacter
              </Link>
            </div>
          </aside>
        </div>

        {/* Suite */}
        <nav className="mt-24 pt-12 border-t border-ink-800" aria-label="Autres projets">
          <h2 className="font-display text-base font-semibold text-ink-400 mb-6">
            Autres projets
          </h2>
          <ul className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {others.map((other) => {
              const OtherIcon = other.icon;
              return (
                <li key={other.slug}>
                  <Link
                    href={`/projects/${other.slug}`}
                    className="group flex flex-col h-full gap-2 rounded-xl border border-ink-800 bg-card p-5 hover:border-ink-600 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <OtherIcon
                        className="w-4 h-4 text-signal-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-semibold text-ink-100 group-hover:text-white transition-colors">
                        {other.title}
                      </span>
                    </span>
                    <span className="text-[13px] text-ink-400 leading-relaxed">
                      {other.result}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </main>

      <Footer />
    </>
  );
}
