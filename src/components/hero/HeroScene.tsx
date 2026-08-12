'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Palette du site (bleu / indigo / violet) reprise pour la scène 3D.
 */
const PALETTE = [
  new THREE.Color('#38bdf8'), // sky-400
  new THREE.Color('#818cf8'), // indigo-400
  new THREE.Color('#a78bfa'), // violet-400
];

const PARTICLE_COUNT = 1100;
const FIELD_RADIUS = 4.4;

/**
 * Champ de particules réparties dans un volume sphérique.
 * Dérive lentement, tourne, et suit légèrement le pointeur (parallaxe).
 */
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Répartition sphérique homogène + variation de rayon pour la profondeur.
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = FIELD_RADIUS * (0.35 + 0.65 * Math.cbrt(Math.random()));

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.75; // léger aplatissement
      positions[i * 3 + 2] = r * Math.cos(phi);

      const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    const pts = pointsRef.current;
    if (!pts) return;

    // Rotation continue et douce.
    pts.rotation.y += delta * 0.05;

    // Parallaxe : on incline le nuage vers le pointeur (eased).
    const targetX = state.pointer.y * 0.18;
    const targetZ = state.pointer.x * 0.18;
    pts.rotation.x += (targetX - pts.rotation.x) * 0.04;
    pts.rotation.z += (targetZ - pts.rotation.z) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * Cœur géométrique : un icosaèdre en fil de fer qui tourne lentement,
 * clin d'œil au thème « réseau / nœuds » du site.
 */
function Core() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g) return;
    g.rotation.y -= delta * 0.12;
    g.rotation.x += delta * 0.04;

    // Parallaxe inverse, plus marquée que le champ pour un effet de profondeur.
    const targetY = state.pointer.x * 0.4;
    g.position.x += (targetY - g.position.x) * 0.05;
    g.position.y += (-state.pointer.y * 0.25 - g.position.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Structure en fil de fer */}
      <mesh scale={1.9}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#7dd3fc"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
      {/* Noyau interne diffus */}
      <mesh scale={1.15}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <ParticleField />
      <Core />
    </Canvas>
  );
};

export default HeroScene;
