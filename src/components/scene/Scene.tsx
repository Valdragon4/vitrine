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
  geo:
    | 'octahedron'
    | 'box'
    | 'tetrahedron'
    | 'icosahedron'
    | 'dodecahedron'
    | 'torus'
    | 'ring';
  position: [number, number, number];
  scale: number;
  color: THREE.Color;
  spin: number;
  parallax: number; // amplitude du déplacement vertical piloté au scroll
  bob: number; // amplitude du flottement propre, indépendant du scroll
}

/**
 * Les objets portent l'essentiel de la parallaxe : répartis sur toute la course
 * de la caméra (y 0 -> -30), ils traversent le champ à des vitesses relatives
 * très contrastées (parallax 10 -> 34).
 */
const FLOATERS: FloatingDef[] = [
  // Visibles dès le hero
  { geo: 'box', position: [-7, 4, -6], scale: 0.9, color: WHITE, spin: 0.25, parallax: 10, bob: 0.5 },
  { geo: 'octahedron', position: [8, -2, -10], scale: 1.4, color: AMBER, spin: -0.3, parallax: 16, bob: 0.7 },
  { geo: 'torus', position: [-10, -3, -12], scale: 1.5, color: WHITE, spin: 0.2, parallax: 20, bob: 0.6 },
  { geo: 'tetrahedron', position: [-8, -9, -14], scale: 1.6, color: WHITE, spin: 0.35, parallax: 24, bob: 0.8 },
  { geo: 'ring', position: [10, -8, -16], scale: 2.4, color: AMBER, spin: 0.15, parallax: 18, bob: 0.5 },
  // Entrent en scène au fil du défilement (la caméra descend, eux montent)
  { geo: 'box', position: [9, -14, -18], scale: 1.2, color: WHITE, spin: -0.2, parallax: 28, bob: 0.9 },
  { geo: 'icosahedron', position: [-5, -18, -12], scale: 1.1, color: AMBER, spin: 0.28, parallax: 22, bob: 0.7 },
  { geo: 'dodecahedron', position: [6, -22, -20], scale: 1.8, color: WHITE, spin: 0.18, parallax: 30, bob: 1.0 },
  { geo: 'torus', position: [-9, -26, -9], scale: 1.0, color: AMBER, spin: -0.25, parallax: 14, bob: 0.6 },
  { geo: 'octahedron', position: [11, -30, -14], scale: 1.3, color: WHITE, spin: 0.32, parallax: 26, bob: 0.8 },
  { geo: 'tetrahedron', position: [-11, -34, -22], scale: 2.0, color: WHITE, spin: -0.22, parallax: 34, bob: 1.1 },
  { geo: 'ring', position: [4, -38, -11], scale: 1.8, color: WHITE, spin: 0.12, parallax: 20, bob: 0.5 },
  { geo: 'icosahedron', position: [-6, -42, -16], scale: 1.4, color: AMBER, spin: 0.26, parallax: 24, bob: 0.9 },
  { geo: 'box', position: [8, -46, -8], scale: 0.8, color: WHITE, spin: -0.35, parallax: 12, bob: 0.6 },
];

function Floater({ def, seed }: { def: FloatingDef; seed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const [baseX, baseY] = def.position;

  useFrame((state, delta) => {
    const m = ref.current;
    if (!m) return;
    m.rotation.x += delta * def.spin;
    m.rotation.y += delta * def.spin * 0.7;
    // Flottement propre (dérive lente + oscillation) par-dessus le déplacement
    // vertical piloté par le scroll -> parallaxe entre objets.
    const t = state.clock.elapsedTime;
    m.position.x = baseX + Math.sin(t * 0.25 + seed * 2.1) * 0.5;
    m.position.y =
      baseY + scroll.progress * def.parallax + Math.sin(t * 0.5 + seed) * def.bob;
  });

  return (
    <mesh ref={ref} position={def.position} scale={def.scale}>
      {def.geo === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {def.geo === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      {def.geo === 'tetrahedron' && <tetrahedronGeometry args={[1, 0]} />}
      {def.geo === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
      {def.geo === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}
      {def.geo === 'torus' && <torusGeometry args={[1, 0.35, 8, 28]} />}
      {def.geo === 'ring' && <torusGeometry args={[1, 0.015, 6, 72]} />}
      <meshBasicMaterial
        color={def.color}
        wireframe={def.geo !== 'ring'}
        transparent
        opacity={def.color === AMBER ? 0.45 : 0.3}
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
    const targetY = -p * 30;
    camera.position.y += (targetY - camera.position.y) * 0.08;
    // Léger recul au scroll pour ouvrir la profondeur.
    const targetZ = 12 + p * 5;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    // Parallaxe souris renforcée.
    camera.position.x += (state.pointer.x * 2.6 - camera.position.x) * 0.05;
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
        <Floater key={i} def={def} seed={i} />
      ))}
      <WireCore />
    </Canvas>
  );
};

export default Scene;
