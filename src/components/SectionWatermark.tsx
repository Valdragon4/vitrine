'use client';

import Parallax from './Parallax';

interface SectionWatermarkProps {
  text: string;
  /** Position horizontale approximative du mot. */
  align?: 'left' | 'right';
  /** Intensité de la parallaxe (fort par défaut, c'est un élément décoratif). */
  speed?: number;
  className?: string;
}

/**
 * « Jeu de texte » : un énorme mot-commande Unix en filigrane, très peu opaque,
 * qui dérive fortement au scroll derrière le contenu de la section.
 * Purement décoratif.
 */
const SectionWatermark = ({
  text,
  align = 'right',
  speed = 0.32,
  className = '',
}: SectionWatermarkProps) => {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      style={{ zIndex: 0 }}
    >
      <Parallax
        speed={speed}
        className={`absolute top-1/2 -translate-y-1/2 ${
          align === 'right' ? 'right-[-2%]' : 'left-[-2%]'
        }`}
      >
        <span
          className="block font-mono font-extrabold uppercase tracking-tighter whitespace-nowrap leading-none"
          style={{
            fontSize: 'clamp(5rem, 17vw, 15rem)',
            color: 'rgba(244, 244, 245, 0.028)',
          }}
        >
          {text}
        </span>
      </Parallax>
    </div>
  );
};

export default SectionWatermark;
