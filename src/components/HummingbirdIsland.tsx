import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group, Mesh } from 'three';

export function HummingbirdIsland() {
  const groupRef = useRef<Group>(null);
  const { nodes } = useGLTF('/images/models/colibri.glb');


  return (
    <group 
      ref={groupRef} 
      dispose={null}
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