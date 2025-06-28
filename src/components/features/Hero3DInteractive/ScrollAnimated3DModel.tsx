import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Model3DWithErrorBoundary from '../../three/Model3DWithErrorBoundary/Model3DWithErrorBoundary';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Group } from 'three';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import ModelError from '../../common/ModelError/ModelError';
import { useLanguageDetection } from '../../common/LanguageProvider/useLanguageDetection';

function RotatingModel({ lang }: { lang?: 'en' | 'es' }) {
  const modelRef = useRef<Group>(null);
  const positionRef = useRef({ x: 0, y: 0, rotation: 0 });

  // Use the safe language detection hook
  const currentLang = useLanguageDetection(lang);

  // Detect mobile devices safely
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.x = positionRef.current.x;
      modelRef.current.position.y = positionRef.current.y;
      modelRef.current.rotation.y = positionRef.current.rotation;
    }
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!modelRef.current) return;

    ScrollTrigger.create({
      trigger: '.hero-3d-interactive',
      start: 'top top',
      end: 'bottom+=100vh top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        positionRef.current.rotation = progress * Math.PI * 4;
      },
      onLeave: () => {
        gsap.to('.model-3d-container', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      },
      onEnterBack: () => {
        gsap.to('.model-3d-container', {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    });

    ScrollTrigger.create({
      trigger: '[data-section="1"]',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onEnter: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: -0.8,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="1"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.3
        });
      },
      onLeave: () => {
        gsap.to('[data-section="1"] .text-content', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.in'
        });
      },
      onEnterBack: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: -0.8,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="1"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: 0,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="1"] .text-content', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.in'
        });
      }
    });

    ScrollTrigger.create({
      trigger: '[data-section="2"]',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onEnter: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: 0.8,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="2"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.3
        });
      },
      onLeave: () => {
        gsap.to('[data-section="2"] .text-content', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.in'
        });
      },
      onEnterBack: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: 0.8,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="2"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to('[data-section="2"] .text-content', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.in'
        });
      }
    });

    ScrollTrigger.create({
      trigger: '[data-section="3"]',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onEnter: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: -0.8,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="3"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.3
        });
      },
      onLeave: () => {
        gsap.to('[data-section="3"] .text-content', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.in'
        });
      },
      onEnterBack: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: -0.8,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="3"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to('[data-section="3"] .text-content', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.in'
        });
      }
    });

    ScrollTrigger.create({
      trigger: '[data-section="4"]',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onEnter: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: 0.8,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="4"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.3
        });
      },
      onLeave: () => {
        gsap.to('[data-section="4"] .text-content', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.in'
        });
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: 0,
            y: -0.5,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
      },
      onEnterBack: () => {
        if (!isMobile) {
          gsap.to(positionRef.current, {
            x: 0.8,
            y: 0,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
        gsap.to('[data-section="4"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        });
        gsap.to('.model-3d-container', {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to('[data-section="4"] .text-content', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.in'
        });
      }
    });

    ScrollTrigger.create({
      trigger: '.hero-3d-interactive',
      start: 'bottom-=100vh top',
      end: 'bottom top',
      onEnter: () => {
        gsap.to('.model-3d-container', {
          opacity: 0,
          zIndex: -1,
          duration: 1,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to('.model-3d-container', {
          opacity: 1,
          zIndex: 5,
          duration: 1,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile, isTablet]);

  return (
    <group ref={modelRef}>
      <Model3DWithErrorBoundary 
        modelPath="/images/models/colibri.glb"
        scale={isMobile ? [1, 1, 1] : isTablet ? [1.5, 1.5, 1.5] : [2, 2, 2]}
        position={[0, -0.3, 0]}
        rotation={[0, 0, -0.2]}
        lang={currentLang}
      />
    </group>
  );
}

export function ScrollAnimated3DModel({ lang }: { lang?: 'en' | 'es' }) {
  const [hasCanvasError, setHasCanvasError] = useState(false);

  // Use the safe language detection hook
  const currentLang = useLanguageDetection(lang);

  const handleCanvasError = () => {
    setHasCanvasError(true);
  };

  const handleRetryCanvas = () => {
    setHasCanvasError(false);
  };

  if (hasCanvasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ModelError 
          onRetry={handleRetryCanvas}
          lang={currentLang}
          errorType="interactiveError"
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
            errorType="animationError"
          />
        </div>
      }
      onError={handleCanvasError}
      lang={currentLang}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl }) => {
          try {
            gl.getContext();
          } catch (err) {
            handleCanvasError();
          }
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <hemisphereLight
            intensity={0.9}
            groundColor="#2c5364"
            color="#ffffff"
          />
          <directionalLight position={[5, 5, 2]} intensity={1.0} castShadow />
          <directionalLight position={[-5, -5, -2]} intensity={0.6} />
          <directionalLight position={[0, 10, 0]} intensity={0.3} />

          <RotatingModel lang={currentLang} />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
} 