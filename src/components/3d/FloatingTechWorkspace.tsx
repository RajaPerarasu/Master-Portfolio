import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, MeshDistortMaterial, Text, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const techNodes = [
  { name: 'Java', color: '#f89820', position: [0, 1.8, 0] as [number, number, number] },
  { name: 'Spring Boot', color: '#6db33f', position: [-2.2, 0.8, 0.8] as [number, number, number] },
  { name: 'React.js', color: '#00f2fe', position: [2.2, 0.9, -0.5] as [number, number, number] },
  { name: 'AWS Cloud', color: '#ff9900', position: [1.8, -1.2, 0.8] as [number, number, number] },
  { name: 'Generative AI', color: '#a855f7', position: [-1.8, -1.1, -0.6] as [number, number, number] },
  { name: 'MySQL Database', color: '#00758f', position: [0, -2.0, 1.0] as [number, number, number] },
  { name: 'REST APIs', color: '#10b981', position: [-2.5, 0.2, -1.2] as [number, number, number] },
];

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 2]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.6}
          emissive="#00f2fe"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Inner glowing core */}
      <Sphere args={[0.7, 32, 32]}>
        <MeshDistortMaterial
          color="#7c3aed"
          distort={0.4}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingTechNodes() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock, pointer }) => {
    if (groupRef.current) {
      // Gentle automatic rotation plus pointer parallax
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15 + pointer.x * 0.3;
      groupRef.current.rotation.x = pointer.y * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {techNodes.map((node, i) => (
        <Float key={i} speed={1.8 + i * 0.2} rotationIntensity={0.8} floatIntensity={1}>
          <mesh position={node.position}>
            <sphereGeometry args={[0.28, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.8}
              roughness={0.3}
            />
            {/* Tech Name Label */}
            <Text
              position={[0, -0.45, 0]}
              fontSize={0.22}
              color="#f8fafc"
              anchorX="center"
              anchorY="middle"
              font="https://fonts.gstatic.com/s/firacode/v22/u5ob4mr2lchgM2Iz-hR6UWAv3w.woff"
            >
              {node.name}
            </Text>
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const count = 70;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 12;
      pos[i + 1] = (Math.random() - 0.5) * 12;
      pos[i + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#38bdf8"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export const FloatingTechWorkspace: React.FC = () => {
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsLowPowerDevice(true);
    }
  }, []);

  if (isLowPowerDevice) {
    // Elegant 2D Fallback for mobile and low-spec devices
    return (
      <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-3xl blur-3xl" />
        <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-500/30 bg-slate-900/60 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mb-4 text-cyan-400 font-mono font-bold text-xl animate-pulse">
            &lt;JAVA/&gt;
          </div>
          <h3 className="text-white font-bold text-lg mb-1">Developer Core</h3>
          <p className="text-xs text-slate-400">Java • Spring Boot • React • AWS • AI</p>
          <div className="flex flex-wrap gap-1.5 justify-center mt-4">
            {['Spring Boot', 'React', 'AWS', 'Generative AI', 'MySQL'].map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded-full text-[10px] bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[450px] sm:h-[550px] relative">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6.5]} fov={50} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2fe" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7c3aed" />

        <CentralCore />
        <OrbitingTechNodes />
        <FloatingParticles />

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
};
