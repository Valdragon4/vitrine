'use client';

import { useEffect } from 'react';

const SmoothScrollSnap = () => {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const sections = document.querySelectorAll('section[id]');
    const sectionPositions = Array.from(sections).map(section => ({
      element: section,
      top: (section as HTMLElement).offsetTop,
      id: section.id
    }));

    const handleScroll = () => {
      if (isScrolling) return;

      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const currentCenter = scrollY + windowHeight / 2;

        // Trouver la section la plus proche du centre
        let closestSection = sectionPositions[0];
        let minDistance = Math.abs(currentCenter - closestSection.top);

        for (const section of sectionPositions) {
          const distance = Math.abs(currentCenter - section.top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }

        // Si on est assez proche (dans les 200px), on snap doucement
        if (minDistance < 200 && minDistance > 50) {
          isScrolling = true;
          
          window.scrollTo({
            top: closestSection.top,
            behavior: 'smooth'
          });

          // Permettre le scroll à nouveau après un délai court
          setTimeout(() => {
            isScrolling = false;
          }, 800);
        }
      }, 150); // Délai avant de déclencher le snap
    };

    // Écouter le scroll avec throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
};

export default SmoothScrollSnap;
