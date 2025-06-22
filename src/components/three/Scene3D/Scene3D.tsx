import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import type { Scene3DProps } from "../../../types";
import Model3DWithErrorBoundary from "../Model3DWithErrorBoundary/Model3DWithErrorBoundary";
import ErrorBoundary from "../../common/ErrorBoundary/ErrorBoundary";
import ModelError from "../../common/ModelError/ModelError";
import { useLanguageDetection } from "../../common/LanguageProvider/useLanguageDetection";
import { Model3DFallback } from "../Model3DFallback/Model3DFallback";

/**
 * Interface for the custom event detail that controls auto-rotation
 */
interface CustomEventDetail {
  enabled: boolean;
}

type CustomEventType = CustomEvent<CustomEventDetail>;

/**
 * A 3D scene component that renders a 3D model with interactive controls.
 * Features include:
 * - Auto-rotation toggle
 * - Camera reset functionality
 * - Orbit controls for model interaction
 * - Environment lighting and shadows
 * - Loading indicator
 * 
 * @param modelPath - The path to the 3D model file (defaults to colibri.glb)
 */
export function Scene3D({ modelPath = '/images/models/colibri.glb', lang }: Scene3DProps & { lang?: 'en' | 'es' }) {
  const [autoRotate, setAutoRotate] = useState(false);
  const [hasCanvasError, setHasCanvasError] = useState(false);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  // Use the safe language detection hook
  const currentLang = useLanguageDetection(lang);

  const handleCanvasError = () => {
    setHasCanvasError(true);
  };

  const handleRetryCanvas = () => {
    setHasCanvasError(false);
  };

  useEffect(() => {
    const handleResetCamera = () => {
      if (controlsRef.current) {
        controlsRef.current.reset();
      }
    };

    const handleToggleAutoRotate = (event: Event) => {
      const customEvent = event as CustomEventType;
      setAutoRotate(customEvent.detail.enabled);
    };

    window.addEventListener('reset-camera', handleResetCamera);
    window.addEventListener('toggle-auto-rotate', handleToggleAutoRotate);

    return () => {
      window.removeEventListener('reset-camera', handleResetCamera);
      window.removeEventListener('toggle-auto-rotate', handleToggleAutoRotate);
    };
  }, []);

  if (hasCanvasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ModelError 
          onRetry={handleRetryCanvas}
          lang={currentLang}
          errorType="initError"
        />
      </div>
    );
  }

  return (
    <ErrorBoundary
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <ModelError 
            onRetry={handleRetryCanvas}
            lang={currentLang}
            errorType="loadError"
          />
        </div>
      }
      onError={handleCanvasError}
      lang={currentLang}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        onCreated={({ gl }) => {
          try {
            gl.getContext();
          } catch (err) {
            handleCanvasError();
          }
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <hemisphereLight
            intensity={0.7}
            groundColor="#203a43"
            color="#ffffff"
          />

          <directionalLight position={[5, 5, 2]} intensity={0.8} castShadow />
          <directionalLight position={[-5, -5, -2]} intensity={0.4} />

          <Model3DWithErrorBoundary 
            modelPath={modelPath}
            scale={[1.5, 1.5, 1.5]}
            position={[0, -0.5, 0]}
            lang={currentLang}
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
    </ErrorBoundary>
  );
}
