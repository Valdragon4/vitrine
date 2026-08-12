// Store de scroll partagé : une seule source de vérité, lue par la scène 3D
// (dans useFrame) et par les effets de parallax DOM. Évite de multiplier les
// listeners de scroll dans toute l'app.

export const scroll = { y: 0, progress: 0, vh: 0 };

let installed = false;

export function ensureScrollListener(): void {
  if (installed || typeof window === 'undefined') return;
  installed = true;

  const update = () => {
    const y = window.scrollY || window.pageYOffset || 0;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    scroll.y = y;
    scroll.vh = window.innerHeight;
    scroll.progress = docHeight > 0 ? Math.min(Math.max(y / docHeight, 0), 1) : 0;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}
