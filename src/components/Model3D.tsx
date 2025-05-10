import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

interface Model3DProps {
  modelPath: string;
  scale?: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export function Model3D({ 
  modelPath, 
  scale = [1, 1, 1], 
  position = [0, 0, 0],
  rotation = [0, 0, 0]
}: Model3DProps) {
  const groupRef = useRef<Group>(null);
  const { nodes } = useGLTF(modelPath);

  return (
    <group 
      ref={groupRef} 
      dispose={null}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      {Object.values(nodes).map((node, index) => {
        if (node.type === 'Mesh') {
          return (
            <mesh 
              key={index}
              geometry={(node as Mesh).geometry} 
              material={(node as Mesh).material}
              castShadow
              receiveShadow
            />
          );
        }
        return null;
      })}
    </group>
  );
}

// Preload common models
useGLTF.preload('/images/models/colibri.glb'); 