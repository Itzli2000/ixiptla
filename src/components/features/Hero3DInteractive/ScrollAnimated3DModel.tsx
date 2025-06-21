import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Model3D } from '../../three/Model3D/Model3D';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Group } from 'three';

function RotatingModel() {
  const modelRef = useRef<Group>(null);
  const positionRef = useRef({ x: 0, y: 0, rotation: 0 });

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
        gsap.to(positionRef.current, {
          x: -0.8,
          duration: 1.5,
          ease: 'power2.out'
        });
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
        gsap.to(positionRef.current, {
          x: -0.8,
          duration: 1.5,
          ease: 'power2.out'
        });
        gsap.to('[data-section="1"] .text-content', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to(positionRef.current, {
          x: 0,
          duration: 1.5,
          ease: 'power2.out'
        });
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
        gsap.to(positionRef.current, {
          x: 0.8,
          duration: 1.5,
          ease: 'power2.out'
        });
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
        gsap.to(positionRef.current, {
          x: 0.8,
          duration: 1.5,
          ease: 'power2.out'
        });
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
        gsap.to(positionRef.current, {
          x: -0.8,
          duration: 1.5,
          ease: 'power2.out'
        });
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
        gsap.to(positionRef.current, {
          x: -0.8,
          duration: 1.5,
          ease: 'power2.out'
        });
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
        gsap.to(positionRef.current, {
          x: 0.8,
          duration: 1.5,
          ease: 'power2.out'
        });
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
        gsap.to(positionRef.current, {
          x: 0,
          y: -0.5,
          duration: 1.5,
          ease: 'power2.out'
        });
      },
      onEnterBack: () => {
        gsap.to(positionRef.current, {
          x: 0.8,
          y: 0,
          duration: 1.5,
          ease: 'power2.out'
        });
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
  }, []);

  return (
    <group ref={modelRef}>
      <Model3D 
        modelPath="/images/models/colibri.glb"
        scale={[2, 2, 2]}
        position={[0, -0.3, 0]}
        rotation={[0, 0, -0.2]}
      />
    </group>
  );
}

export function ScrollAnimated3DModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
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

        <RotatingModel />
      </Suspense>
    </Canvas>
  );
} 