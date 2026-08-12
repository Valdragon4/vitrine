'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { scroll } from '@/lib/scroll';

const WHITE = new THREE.Color('#d4d4d8'); // zinc-300
const AMBER = new THREE.Color('#f59e0b');

/**
 * Une couche de points sur un large plan vertical, à une profondeur z donnée.
 * Plus la couche est proche, plus elle défile vite (parallaxe par perspective).
 */
function StarLayer({
  count,
  z,
  size,
  amberRatio = 0,
  spreadX = 26,
  spreadY = 70,
}: {
  count: number;
  z: number;
  size: number;
  amberRatio?: number;
  spreadX?: number;
  spreadY?: number;
}) {
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = z + (Math.random() - 0.5) * 2;
      const c = i / count < amberRatio ? AMBER : WHITE;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count, z, amberRatio, spreadX, spreadY]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

interface FloatingDef {
  geo: 'octahedron' | 'box' | 'tetrahedron' | 'icosahedron';
  position: [number, number, number];
  scale: number;
  color: THREE.Color;
  spin: number;
  parallax: number; // amplitude du déplacement vertical piloté au scroll
}

const FLOATERS: FloatingDef[] = [
  { geo: 'box', position: [-6, 4, -6], scale: 0.9, color: WHITE, spin: 0.25, parallax: 10 },
  { geo: 'octahedron', position: [7, -2, -10], scale: 1.4, color: AMBER, spin: -0.3, parallax: 16 },
  { geo: 'tetrahedron', position: [-8, -8, -14], scale: 1.6, color: WHITE, spin: 0.35, parallax: 22 },
  { geo: 'box', position: [9, 8, -18], scale: 1.2, color: WHITE, spin: -0.2, parallax: 26 },
  { geo: 'icosahedron', position: [-4, 12, -12], scale: 1.1, color: AMBER, spin: 0.28, parallax: 18 },
  { geo: 'octahedron', position: [5, 16, -8], scale: 0.8, color: WHITE, spin: -0.4, parallax: 12 },
];

function Floater({ def }: { def: FloatingDef }) {
  const ref = useRef<THREE.Mesh>(null);
  const baseY = def.position[1];

  useFrame((state, delta) => {
    const m = ref.current;
    if (!m) return;
    m.rotation.x += delta * def.spin;
    m.rotation.y += delta * def.spin * 0.7;
    // Déplacement vertical piloté par le scroll -> parallaxe entre objets.
    m.position.y = baseY + scroll.progress * def.parallax;
  });

  return (
    <mesh ref={ref} position={def.position} scale={def.scale}>
      {def.geo === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {def.geo === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      {def.geo === 'tetrahedron' && <tetrahedronGeometry args={[1, 0]} />}
      {def.geo === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
      <meshBasicMaterial
        color={def.color}
        wireframe
        transparent
        opacity={def.color === AMBER ? 0.4 : 0.28}
      />
    </mesh>
  );
}

/** Structure filaire du hero, qui recule et s'estompe au scroll. */
function WireCore() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const p = scroll.progress;
    g.rotation.y += delta * 0.1;
    if (ring.current) ring.current.rotation.z += delta * 0.2;

    const recede = 1 - Math.min(p * 2.2, 1);
    g.scale.setScalar(0.7 + recede * 0.7);
    g.position.z = -2 - (1 - recede) * 10;
    g.rotation.x += (state.pointer.y * 0.2 - g.rotation.x) * 0.03;
  });

  return (
    <group ref={group} position={[3.4, 1.2, -2]}>
      <mesh>
        <icosahedronGeometry args={[2.1, 1]} />
        <meshBasicMaterial color="#3f3f46" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[3.1, 0.006, 8, 120]} />
        <meshBasicMaterial color={AMBER} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    const p = scroll.progress;
    // Course caméra plus marquée -> parallaxe plus intense entre les couches.
    const targetY = -p * 26;
    camera.position.y += (targetY - camera.position.y) * 0.08;
    // Léger recul au scroll pour ouvrir la profondeur.
    const targetZ = 12 + p * 4;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    // Parallaxe souris renforcée.
    camera.position.x += (state.pointer.x * 2.2 - camera.position.x) * 0.05;
    camera.rotation.z = state.pointer.x * 0.02;
    camera.lookAt(0, camera.position.y * 0.9, 0);
  });
  return null;
}

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 55 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <Rig />
      {/* Couches de profondeur : lointaine -> proche */}
      <StarLayer count={560} z={-40} size={0.05} spreadX={54} spreadY={110} />
      <StarLayer count={380} z={-24} size={0.06} spreadX={40} spreadY={95} />
      <StarLayer count={240} z={-11} size={0.08} amberRatio={0.05} spreadX={30} spreadY={80} />
      <StarLayer count={110} z={-3} size={0.11} amberRatio={0.14} spreadX={24} spreadY={72} />
      {FLOATERS.map((def, i) => (
        <Floater key={i} def={def} />
      ))}
      <WireCore />
    </Canvas>
  );
};

export default Scene;
