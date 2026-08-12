'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { scroll } from '@/lib/scroll';

const WHITE = new THREE.Color('#d4d4d8'); // zinc-300
const AMBER = new THREE.Color('#f59e0b');

/**
 * Une couche de points répartis sur un large plan vertical, à une profondeur z
 * donnée. Les couches proches défilent plus vite que les lointaines (parallaxe
 * naturelle via la perspective).
 */
function StarLayer({
  count,
  z,
  size,
  amberRatio = 0,
  spreadX = 26,
  spreadY = 60,
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
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Structure filaire discrète (nœuds/réseau) présente en haut de page, qui
 * recule et s'estompe à mesure qu'on scrolle. Monochrome, sans glow.
 */
function WireCore() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const p = scroll.progress;
    g.rotation.y += delta * 0.08;
    if (ring.current) ring.current.rotation.z += delta * 0.15;

    // Recule et s'efface au scroll.
    const recede = 1 - Math.min(p * 2.2, 1);
    g.scale.setScalar(0.7 + recede * 0.6);
    g.position.z = -2 - (1 - recede) * 8;

    // Légère parallaxe à la souris.
    g.rotation.x += (state.pointer.y * 0.15 - g.rotation.x) * 0.03;
  });

  return (
    <group ref={group} position={[3.2, 1.2, -2]}>
      <mesh>
        <icosahedronGeometry args={[2.1, 1]} />
        <meshBasicMaterial color="#3f3f46" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[3.1, 0.006, 8, 120]} />
        <meshBasicMaterial color={AMBER} transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    const p = scroll.progress;
    // Descente de caméra pilotée par le scroll -> parallaxe entre les couches.
    const targetY = -p * 16;
    camera.position.y += (targetY - camera.position.y) * 0.08;
    // Parallaxe souris, très douce.
    camera.position.x += (state.pointer.x * 1.1 - camera.position.x) * 0.04;
    camera.lookAt(0, camera.position.y, 0);
  });
  return null;
}

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 52 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <Rig />
      {/* Couches de profondeur : lointaine -> proche */}
      <StarLayer count={520} z={-34} size={0.05} spreadX={44} spreadY={90} />
      <StarLayer count={360} z={-20} size={0.06} spreadX={34} spreadY={80} />
      <StarLayer count={220} z={-9} size={0.075} amberRatio={0.05} />
      <StarLayer count={90} z={-2} size={0.09} amberRatio={0.12} spreadX={22} spreadY={70} />
      <WireCore />
    </Canvas>
  );
};

export default Scene;
