import { useGLTF } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { Group, Mesh } from 'three';
import { useLanguageDetection } from '../../common/LanguageProvider/useLanguageDetection';
import type { Model3DBaseProps } from '../../../types';

// Simple wrapper component that handles the GLTF loading
function Model3DContent({ 
  modelPath, 
  scale = [1, 1, 1], 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}: Omit<Model3DBaseProps, 'lang'>): JSX.Element {
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
      {Object.values(nodes).map((node) => {
        if (node.type === 'Mesh') {
          return (
            <mesh
              key={node.name || node.uuid}
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

export function Model3D({ 
  modelPath, 
  scale = [1, 1, 1], 
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  lang
}: Model3DBaseProps): JSX.Element {
  return (
    <Suspense fallback={
      <group>
        <mesh>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial 
            color="#4299e1" 
            transparent 
            opacity={0.6}
            emissive="#2b6cb0"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    }>
      <Model3DContent 
        modelPath={modelPath}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </Suspense>
  );
}

useGLTF.preload('/images/models/colibri.glb'); 