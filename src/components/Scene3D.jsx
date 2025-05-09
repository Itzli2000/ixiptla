import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { HummingbirdIsland } from "./HummingbirdIsland";

export function Scene3D() {
  const [autoRotate, setAutoRotate] = useState(false);

  return (
    <>
      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000 }}>
        <button 
          onClick={() => setAutoRotate(!autoRotate)}
          style={{
            padding: '8px 16px',
            background: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            position: 'absolute',
            top: '100px',
            left: '20px',
            zIndex: 1000
          }}
        >
          {autoRotate ? 'Detener Rotación' : 'Iniciar Rotación'}
        </button>
      </div>
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{
          background: 'linear-gradient(to bottom, #2c5364, #203a43, #0f2027)'
        }}
      >
        {/* Iluminación ambiental mejorada */}
        <ambientLight intensity={1} />
        <hemisphereLight 
          intensity={0.7} 
          groundColor="#203a43" 
          skyColor="#ffffff" 
        />
        
        {/* Luces direccionales para mejor definición */}
        <directionalLight
          position={[5, 5, 2]}
          intensity={0.8}
          castShadow
        />
        <directionalLight
          position={[-5, -5, -2]}
          intensity={0.4}
        />

        <Environment preset="sunset" />
        
        <HummingbirdIsland autoRotate={autoRotate} />
        <OrbitControls
          enablePan={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI}
          enableDamping={true}
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>
    </>
  );
} 