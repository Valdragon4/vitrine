'use client';

import { useEffect, useRef, useState } from 'react';

interface Device {
  id: string;
  iconSrc: string;
  angle: number;
  distance: number;
  color: string;
  glowColor: string;
  activateAt: number;
}

const HERO_THRESHOLD = 0.12;

const CinematicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [images, setImages] = useState<Map<string, HTMLImageElement>>(new Map());
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  const devices: Device[] = [
    { id: 'server', iconSrc: '/images/icons/icon-1.png', angle: -90, distance: 180, color: '#38bdf8', glowColor: 'rgba(56, 189, 248, 0.6)', activateAt: 0.15 },
    { id: 'database', iconSrc: '/images/icons/icon-2.png', angle: -30, distance: 200, color: '#a78bfa', glowColor: 'rgba(167, 139, 250, 0.6)', activateAt: 0.22 },
    { id: 'cloud', iconSrc: '/images/icons/icon-5.png', angle: 30, distance: 190, color: '#34d399', glowColor: 'rgba(52, 211, 153, 0.6)', activateAt: 0.29 },
    { id: 'mobile', iconSrc: '/images/icons/icon-6.png', angle: 90, distance: 170, color: '#fb923c', glowColor: 'rgba(251, 146, 60, 0.6)', activateAt: 0.36 },
    { id: 'security', iconSrc: '/images/icons/icon-4.png', angle: 150, distance: 185, color: '#f472b6', glowColor: 'rgba(244, 114, 182, 0.6)', activateAt: 0.43 },
    { id: 'api', iconSrc: '/images/icons/icon-3.png', angle: 210, distance: 195, color: '#60a5fa', glowColor: 'rgba(96, 165, 250, 0.6)', activateAt: 0.50 },
  ];

  const laptopIconSrc = '/images/icons/icon-7.png';

  useEffect(() => {
    const loadImages = async () => {
      const imageMap = new Map<string, HTMLImageElement>();
      const allSources = [laptopIconSrc, ...devices.map(d => d.iconSrc)];
      
      const loadPromises = allSources.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            imageMap.set(src, img);
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${src}`);
            resolve();
          };
          img.src = src;
        });
      });

      await Promise.all(loadPromises);
      setImages(imageMap);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    updateDimensions();
    handleScroll();
    
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || !imagesLoaded) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    const centerX = dimensions.width * 0.5;
    const centerY = dimensions.height * 0.5;
    const scale = Math.min(dimensions.width, dimensions.height) / 500;

    const animate = () => {
      timeRef.current += 0.016;
      const time = timeRef.current;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const orbs = [
        { x: dimensions.width * 0.2, y: dimensions.height * 0.3, radius: 300, color: 'rgba(56, 189, 248, 0.08)' },
        { x: dimensions.width * 0.8, y: dimensions.height * 0.6, radius: 350, color: 'rgba(139, 92, 246, 0.06)' },
        { x: dimensions.width * 0.5, y: dimensions.height * 0.8, radius: 280, color: 'rgba(52, 211, 153, 0.05)' },
      ];

      orbs.forEach((orb, i) => {
        const wobbleX = Math.sin(time * 0.3 + i) * 20;
        const wobbleY = Math.cos(time * 0.2 + i * 0.5) * 15;
        
        const gradient = ctx.createRadialGradient(
          orb.x + wobbleX, orb.y + wobbleY, 0,
          orb.x + wobbleX, orb.y + wobbleY, orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.5, orb.color.replace(/[\d.]+\)$/, '0.03)'));
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x + wobbleX, orb.y + wobbleY, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      const networkOpacity = Math.min(1, Math.max(0, (scrollProgress - HERO_THRESHOLD) * 5));
      
      if (networkOpacity <= 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.globalAlpha = networkOpacity;

      const devicePositions: { x: number; y: number; progress: number; color: string; glowColor: string }[] = [];

      devices.forEach((device, index) => {
        const deviceProgress = Math.min(1, Math.max(0, (scrollProgress - device.activateAt) * 4));
        const floatY = Math.sin(time * 0.8 + index * 0.5) * 5;
        const angleRad = (device.angle * Math.PI) / 180;
        const distance = device.distance * scale * deviceProgress;
        const deviceX = centerX + Math.cos(angleRad) * distance;
        const deviceY = centerY + Math.sin(angleRad) * distance + floatY;
        
        devicePositions.push({ 
          x: deviceX, 
          y: deviceY, 
          progress: deviceProgress,
          color: device.color,
          glowColor: device.glowColor
        });
      });

      devices.forEach((device, index) => {
        const deviceProgress = devicePositions[index].progress;
        const deviceX = devicePositions[index].x;
        const deviceY = devicePositions[index].y;

        if (deviceProgress > 0) {
          const lineProgress = Math.min(1, deviceProgress * 1.5);
          
          const gradient = ctx.createLinearGradient(centerX, centerY, deviceX, deviceY);
          gradient.addColorStop(0, 'rgba(56, 189, 248, 0.5)');
          gradient.addColorStop(0.5, device.glowColor.replace('0.6', '0.4'));
          gradient.addColorStop(1, device.glowColor.replace('0.6', '0.6'));

          const targetX = centerX + (deviceX - centerX) * lineProgress;
          const targetY = centerY + (deviceY - centerY) * lineProgress;

          ctx.save();
          ctx.globalAlpha = deviceProgress * 0.6;
          
          ctx.shadowColor = device.color;
          ctx.shadowBlur = 15;
          
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          
          const midX = (centerX + targetX) / 2;
          const midY = (centerY + targetY) / 2;
          const perpX = -(targetY - centerY) * 0.1;
          const perpY = (targetX - centerX) * 0.1;
          const ctrlX = midX + perpX * Math.sin(time + index);
          const ctrlY = midY + perpY * Math.sin(time + index);
          
          ctx.quadraticCurveTo(ctrlX, ctrlY, targetX, targetY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2.5;
          ctx.stroke();
          
          ctx.shadowBlur = 0;
          ctx.restore();

          if (deviceProgress > 0.3) {
            for (let p = 0; p < 3; p++) {
              const pulseOffset = (time * 0.4 + index * 0.3 + p * 0.33) % 1;
              const t = pulseOffset;
              const pulseX = (1-t)*(1-t)*centerX + 2*(1-t)*t*ctrlX + t*t*targetX;
              const pulseY = (1-t)*(1-t)*centerY + 2*(1-t)*t*ctrlY + t*t*targetY;
              
              const particleSize = 3 + Math.sin(time * 3 + p) * 1;
              const particleAlpha = (1 - pulseOffset) * deviceProgress * 0.8;
              
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, particleSize, 0, Math.PI * 2);
              ctx.fillStyle = device.color;
              ctx.globalAlpha = particleAlpha;
              ctx.shadowColor = device.color;
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.shadowBlur = 0;
              ctx.globalAlpha = 1;
            }
          }
        }
      });

      const activeDevices = devicePositions.filter(d => d.progress > 0.5);
      if (activeDevices.length >= 2) {
        ctx.save();
        
        for (let i = 0; i < activeDevices.length; i++) {
          for (let j = i + 1; j < activeDevices.length; j++) {
            const d1 = activeDevices[i];
            const d2 = activeDevices[j];
            
            const connectionStrength = Math.min(d1.progress, d2.progress) - 0.5;
            if (connectionStrength > 0) {
              const alpha = connectionStrength * 0.3;
              
              const gradient = ctx.createLinearGradient(d1.x, d1.y, d2.x, d2.y);
              gradient.addColorStop(0, d1.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba'));
              gradient.addColorStop(1, d2.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba'));
              
              ctx.beginPath();
              ctx.moveTo(d1.x, d1.y);
              
              const midX = (d1.x + d2.x) / 2;
              const midY = (d1.y + d2.y) / 2;
              const dist = Math.sqrt((d2.x - d1.x) ** 2 + (d2.y - d1.y) ** 2);
              const perpX = -(d2.y - d1.y) / dist * 20;
              const perpY = (d2.x - d1.x) / dist * 20;
              const wave = Math.sin(time * 2 + i + j) * 0.5;
              
              ctx.quadraticCurveTo(midX + perpX * wave, midY + perpY * wave, d2.x, d2.y);
              ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.setLineDash([4, 8]);
              ctx.stroke();
              ctx.setLineDash([]);
            }
          }
        }
        ctx.restore();
      }

      const laptopPulse = Math.sin(time * 2) * 0.03 + 1;
      const laptopSize = 150 * scale * laptopPulse;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.globalAlpha = networkOpacity;

      const laptopGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, laptopSize * 1.3);
      laptopGlow.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
      laptopGlow.addColorStop(0.3, 'rgba(139, 92, 246, 0.2)');
      laptopGlow.addColorStop(0.6, 'rgba(52, 211, 153, 0.1)');
      laptopGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = laptopGlow;
      ctx.beginPath();
      ctx.arc(0, 0, laptopSize * 1.3, 0, Math.PI * 2);
      ctx.fill();

      const laptopImg = images.get(laptopIconSrc);
      if (laptopImg) {
        ctx.drawImage(
          laptopImg,
          -laptopSize / 2,
          -laptopSize / 2,
          laptopSize,
          laptopSize
        );
      }

      ctx.restore();
      ctx.globalAlpha = networkOpacity;

      devices.forEach((device, index) => {
        const deviceProgress = devicePositions[index].progress;
        const deviceX = devicePositions[index].x;
        const deviceY = devicePositions[index].y;
        const wobble = Math.sin(time * 1.5 + index) * 3;

        if (deviceProgress > 0.2) {
          const nodeOpacity = Math.min(1, (deviceProgress - 0.2) * 2);
          const iconSize = 75 * scale;
          
          const glowSize = (45 + Math.sin(time * 2 + index) * 8) * scale;
          const glow = ctx.createRadialGradient(deviceX, deviceY + wobble, 0, deviceX, deviceY + wobble, glowSize);
          glow.addColorStop(0, device.glowColor.replace('0.6', '0.5'));
          glow.addColorStop(0.4, device.glowColor.replace('0.6', '0.2'));
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.globalAlpha = networkOpacity * nodeOpacity * 0.7;
          ctx.beginPath();
          ctx.arc(deviceX, deviceY + wobble, glowSize, 0, Math.PI * 2);
          ctx.fill();

          const deviceImg = images.get(device.iconSrc);
          if (deviceImg) {
            ctx.globalAlpha = networkOpacity * nodeOpacity;
            ctx.drawImage(
              deviceImg,
              deviceX - iconSize / 2,
              deviceY + wobble - iconSize / 2,
              iconSize,
              iconSize
            );
          }
          
          ctx.globalAlpha = 1;
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, scrollProgress, imagesLoaded, images]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-slate-950" />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          width: dimensions.width,
          height: dimensions.height,
        }}
      />

      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(2, 6, 23, 0.5) 100%)',
        }}
      />
    </div>
  );
};

export default CinematicBackground;
