import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import type { Group } from 'three';

interface Model3DFallbackProps {
  scale?: [number, number, number];
  position?: [number, number, number];
}

export function Model3DFallback({ 
  scale = [1, 1, 1], 
  position = [0, 0, 0] 
}: Model3DFallbackProps) {
  const meshRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      const scaleFactor = hovered ? 1.05 : 1;
      meshRef.current.scale.setScalar(scaleFactor);
    }
  });

  return (
    <group 
      ref={meshRef} 
      scale={scale} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Base platform */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial 
          color="#4a5568" 
          transparent 
          opacity={0.3}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      {/* Central column */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.6, 16]} />
        <meshStandardMaterial 
          color="#2d3748" 
          transparent 
          opacity={0.6}
          roughness={0.5}
          metalness={0.3}
        />
      </mesh>
      
      {/* Floating particles/dots around */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 0.6;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.5) * 0.2;
        
        return (
          <mesh 
            key={i} 
            position={[x, y, z]}
          >
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial 
              color="#63b3ed" 
              transparent 
              opacity={0.8}
              emissive="#1a365d"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
      
      {/* Central orb */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color="#4299e1" 
          transparent 
          opacity={0.7}
          emissive="#2b6cb0"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}