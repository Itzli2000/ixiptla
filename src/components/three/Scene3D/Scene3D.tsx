import React, { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Loader } from "@react-three/drei";
import { Model3D } from "../Model3D/Model3D";

export function Scene3D({ modelPath = '/images/models/colibri.glb' }) {
  const [isLoading, setIsLoading] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const controlsRef = useRef<OrbitControls>();

  useEffect(() => {
    const handleResetCamera = () => {
      if (controlsRef.current) {
        controlsRef.current.reset();
      }
    };

    const handleToggleAutoRotate = (event) => {
      setAutoRotate(event.detail.enabled);
    };

    window.addEventListener('reset-camera', handleResetCamera);
    window.addEventListener('toggle-auto-rotate', handleToggleAutoRotate);

    return () => {
      window.removeEventListener('reset-camera', handleResetCamera);
      window.removeEventListener('toggle-auto-rotate', handleToggleAutoRotate);
    };
  }, []);

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{
          background: "linear-gradient(to bottom, #2c5364, #203a43, #0f2027)",
        }}
      >
        <Suspense fallback={null}>
          {/* Iluminación ambiental mejorada */}
          <ambientLight intensity={1} />
          <hemisphereLight
            intensity={0.7}
            groundColor="#203a43"
            skyColor="#ffffff"
          />

          {/* Luces direccionales para mejor definición */}
          <directionalLight position={[5, 5, 2]} intensity={0.8} castShadow />
          <directionalLight position={[-5, -5, -2]} intensity={0.4} />

          <Environment preset="sunset" />

          <Model3D 
            modelPath={modelPath}
            scale={[1.5, 1.5, 1.5]}
            position={[0, -0.5, 0]}
          />

          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.4}
            enableDamping={true}
            dampingFactor={0.05}
            minDistance={1}
            maxDistance={3}
            autoRotate={autoRotate}
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>
      <Loader 
        onLoad={() => setIsLoading(false)}
        containerStyles={{
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)'
        }}
        innerStyles={{
          background: 'white'
        }}
        barStyles={{
          background: '#2c5364'
        }}
      />
    </>
  );
}
