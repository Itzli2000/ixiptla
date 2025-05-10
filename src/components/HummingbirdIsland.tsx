import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';
import type { ThreeElements } from '@react-three/fiber';

interface HummingbirdProps {
  autoRotate?: boolean;
}

export function HummingbirdIsland({ autoRotate = false }: HummingbirdProps) {
  const groupRef = useRef<Group>(null);
  const { nodes, materials } = useGLTF('/images/models/colibri.glb');
  const [isDragging, setIsDragging] = useState(false);

  useFrame((_state: any, delta: number) => {
    if (groupRef.current && autoRotate && !isDragging) {
      groupRef.current.rotation.y += delta * 0.5;
      
      const currentRotationX = groupRef.current.rotation.x;
      const newRotationX = currentRotationX + delta * 0.2;
      
      if (newRotationX < Math.PI / 4) {
        groupRef.current.rotation.x = newRotationX;
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      dispose={null}
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
      scale={[1.5, 1.5, 1.5]}
      position={[0, -0.5, 0]}
    >
      <mesh 
        geometry={(nodes.mesh_0 as Mesh).geometry} 
        material={(nodes.mesh_0 as Mesh).material}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('/images/models/colibri.glb'); 