import type { MetadataRoute } from 'next';
import { projectsData } from '@/lib/projectsData';

const BASE = 'https://valentin-marot.fr';

/**
 * Sitemap généré au build.
 *
 * Il remplace le fichier statique `public/sitemap.xml`, qui datait du
 * 2025-01-27, ne listait que trois adresses et omettait `/cgv` — un sitemap
 * écrit à la main se périme le jour où on ajoute une page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectsData.map((project) => ({
      url: `${BASE}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/mentions-legales`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE}/politique-confidentialite`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE}/cgv`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
}
