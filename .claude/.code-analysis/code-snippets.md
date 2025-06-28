# Code Snippets - Implementaciones Recomendadas

## 🛠️ Fixes Críticos

### 1. Bundle Optimization - astro.config.mjs

```javascript
// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar Three.js en chunks más pequeños
            'three-core': ['three'],
            'three-fiber': ['@react-three/fiber'],
            'three-drei': ['@react-three/drei'],
            'gsap-core': ['gsap'],
            'gsap-scrolltrigger': ['gsap/ScrollTrigger'],
            // React separado
            'react-vendor': ['react', 'react-dom'],
            // Utilities
            'utils': ['./src/utils', './src/i18n']
          }
        }
      },
      // Optimizar para chunks más pequeños
      chunkSizeWarningLimit: 500
    }
  },
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    react(),
    mdx(),
    sitemap(),
  ],
  output: "static",
  trailingSlash: "never",
  site: "https://ixiptla.com",
});
```

### 2. ErrorBoundary Fix - ErrorBoundary.tsx

```typescript
import React, { Component, type ReactNode } from 'react';
import es from '../../../i18n/languages/es.json';
import en from '../../../i18n/languages/en.json';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  lang?: 'en' | 'es';
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  private getTranslations(lang: 'en' | 'es') {
    const translations = lang === 'es' ? es : en;
    
    return function t(key: string) {
      const keys = key.split('.');
      let value: any = translations;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
      }
      return value as string;
    };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const lang = this.props.lang || 'es';
      const t = this.getTranslations(lang);

      return (
        <div 
          className="flex flex-col items-center justify-center p-8 bg-base-200 rounded-xl"
          role="alert"
          aria-live="assertive"
        >
          <div className="text-error text-6xl mb-4" aria-hidden="true">⚠</div>
          <h3 className="text-xl font-semibold mb-2">{t('errors.general.title')}</h3>
          <p className="text-base-content/70 text-center mb-4">
            {t('errors.general.description')}
          </p>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => this.setState({ hasError: false })}
            aria-label={t('errors.general.retry')}
          >
            {t('errors.general.retry')}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## 🎯 Performance Optimizations

### 3. Lazy Loading Hook - useIntersectionObserver.ts

```typescript
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
        
        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
        }
        
        if (triggerOnce && hasIntersected) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
}
```

### 4. Device Detection Hook - useDeviceDetection.ts

```typescript
import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLowEnd: boolean;
  prefersReducedMotion: boolean;
  supportsWebGL: boolean;
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLowEnd: false,
    prefersReducedMotion: false,
    supportsWebGL: true
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const memory = (navigator as any).deviceMemory || 4;
      const connection = (navigator as any).connection;
      
      // Detección de tipo de dispositivo
      const isMobile = width <= 768;
      const isTablet = width > 768 && width <= 1024;
      const isDesktop = width > 1024;
      
      // Detección de dispositivo de baja gama
      const isLowEnd = memory < 4 || 
        (connection && (connection.effectiveType === '2g' || connection.effectiveType === '3g'));
      
      // Preferencias de accesibilidad
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Soporte WebGL
      const canvas = document.createElement('canvas');
      const supportsWebGL = !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      
      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLowEnd,
        prefersReducedMotion,
        supportsWebGL
      });
    };

    updateDeviceInfo();

    // Listeners para cambios
    window.addEventListener('resize', updateDeviceInfo);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      mediaQuery.removeEventListener('change', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
}
```

## 🎨 UI/UX Improvements

### 5. Loading Skeleton - Model3DSkeleton.tsx

```typescript
import React from 'react';

interface Model3DSkeletonProps {
  className?: string;
  showProgress?: boolean;
  progress?: number;
}

export function Model3DSkeleton({ 
  className = '', 
  showProgress = false, 
  progress = 0 
}: Model3DSkeletonProps) {
  return (
    <div className={`animate-pulse ${className}`} role="status" aria-label="Cargando modelo 3D">
      {/* Contenedor principal del modelo */}
      <div className="bg-base-300 rounded-lg h-64 w-full mb-4 flex items-center justify-center relative overflow-hidden">
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-100/20 to-transparent animate-shimmer"></div>
        
        {/* Ícono de modelo 3D */}
        <div className="text-base-content/30 text-4xl" aria-hidden="true">
          📦
        </div>
        
        {/* Barra de progreso */}
        {showProgress && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-base-100/80 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-base-content/70 mt-1 text-center" aria-live="polite">
              Cargando... {progress}%
            </p>
          </div>
        )}
      </div>
      
      {/* Controles del modelo */}
      <div className="space-y-2">
        <div className="bg-base-300 rounded h-8 w-full"></div>
        <div className="flex gap-2">
          <div className="bg-base-300 rounded h-8 w-24"></div>
          <div className="bg-base-300 rounded h-8 w-32"></div>
        </div>
      </div>
    </div>
  );
}

// CSS adicional para el efecto shimmer (añadir a global.css)
```

```css
/* Añadir a src/styles/global.css */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
```

### 6. Enhanced Scene3D - Scene3D.tsx (Optimizado)

```typescript
import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState, lazy } from "react";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import type { Scene3DProps } from "../../../types";
import ErrorBoundary from "../../common/ErrorBoundary/ErrorBoundary";
import ModelError from "../../common/ModelError/ModelError";
import { useLanguageDetection } from "../../common/LanguageProvider/useLanguageDetection";
import { Model3DFallback } from "../Model3DFallback/Model3DFallback";
import { Model3DSkeleton } from "../Model3DSkeleton/Model3DSkeleton";
import { useDeviceDetection } from "../../../hooks/useDeviceDetection";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

// Lazy load del componente pesado
const Model3DWithErrorBoundary = lazy(() => import("../Model3DWithErrorBoundary/Model3DWithErrorBoundary"));

interface CustomEventDetail {
  enabled: boolean;
}

type CustomEventType = CustomEvent<CustomEventDetail>;

export function Scene3D({ modelPath = '/images/models/colibri.glb', lang }: Scene3DProps & { lang?: 'en' | 'es' }) {
  const [autoRotate, setAutoRotate] = useState(false);
  const [hasCanvasError, setHasCanvasError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  // Hooks de detección
  const currentLang = useLanguageDetection(lang);
  const deviceInfo = useDeviceDetection();
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const handleCanvasError = () => {
    setHasCanvasError(true);
  };

  const handleRetryCanvas = () => {
    setHasCanvasError(false);
    setLoadingProgress(0);
    setIsModelLoaded(false);
  };

  const handleKeyboardControls = (event: React.KeyboardEvent) => {
    if (!controlsRef.current) return;

    switch (event.key) {
      case 'r':
      case 'R':
        controlsRef.current.reset();
        break;
      case ' ':
        event.preventDefault();
        setAutoRotate(prev => !prev);
        break;
      case 'ArrowUp':
        controlsRef.current.object.position.y += 0.1;
        break;
      case 'ArrowDown':
        controlsRef.current.object.position.y -= 0.1;
        break;
    }
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

  // No renderizar si el dispositivo no soporta WebGL o es muy limitado
  if (!deviceInfo.supportsWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-base-200 rounded-lg">
        <div className="text-center p-8">
          <div className="text-4xl mb-4">🖼️</div>
          <h3 className="text-lg font-semibold mb-2">Vista 3D no disponible</h3>
          <p className="text-base-content/70">Tu dispositivo no soporta la visualización 3D</p>
        </div>
      </div>
    );
  }

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

  // Mostrar skeleton hasta que sea visible
  if (!isIntersecting) {
    return (
      <div ref={elementRef} className="w-full h-full">
        <Model3DSkeleton showProgress={false} />
      </div>
    );
  }

  return (
    <div ref={elementRef} className="w-full h-full">
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
          onKeyDown={handleKeyboardControls}
          tabIndex={0}
          role="img"
          aria-label={`Modelo 3D interactivo: ${modelPath.split('/').pop()?.replace('.glb', '')}`}
          aria-describedby="model-controls-instructions"
        >
          <Suspense fallback={<Model3DFallback />}>
            {/* Iluminación optimizada para dispositivos de baja gama */}
            <ambientLight intensity={deviceInfo.isLowEnd ? 0.8 : 1} />
            <hemisphereLight
              intensity={deviceInfo.isLowEnd ? 0.5 : 0.7}
              groundColor="#203a43"
              color="#ffffff"
            />

            {!deviceInfo.isLowEnd && (
              <>
                <directionalLight position={[5, 5, 2]} intensity={0.8} castShadow />
                <directionalLight position={[-5, -5, -2]} intensity={0.4} />
              </>
            )}

            <Suspense fallback={<Model3DFallback />}>
              <Model3DWithErrorBoundary 
                modelPath={modelPath}
                scale={deviceInfo.isMobile ? [1, 1, 1] : [1.5, 1.5, 1.5]}
                position={[0, -0.5, 0]}
                lang={currentLang}
                onProgress={setLoadingProgress}
                onLoad={() => setIsModelLoaded(true)}
              />
            </Suspense>

            <OrbitControls
              ref={controlsRef}
              enablePan={!deviceInfo.isMobile}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 1.4}
              enableDamping={!deviceInfo.prefersReducedMotion}
              dampingFactor={0.05}
              minDistance={1}
              maxDistance={3}
              autoRotate={autoRotate && !deviceInfo.prefersReducedMotion}
              autoRotateSpeed={2}
              touchAction="pan-y"
            />
          </Suspense>
        </Canvas>

        {/* Loading overlay */}
        {!isModelLoaded && (
          <div className="absolute inset-0 bg-base-200/80 flex items-center justify-center">
            <Model3DSkeleton showProgress={true} progress={loadingProgress} />
          </div>
        )}

        {/* Loader de drei */}
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

        {/* Instrucciones de uso */}
        <div id="model-controls-instructions" className="sr-only">
          Usa el mouse para rotar el modelo, la rueda para acercar o alejar, 
          y arrastra para desplazarte. Presiona R para restablecer la vista, 
          o Espacio para activar/desactivar la rotación automática.
        </div>
      </ErrorBoundary>
    </div>
  );
}
```

## 🔍 SEO Optimizations

### 7. Enhanced Layout - Layout.astro

```astro
---
import type { LayoutProps } from '../types';

interface Props extends LayoutProps {
  structuredData?: Record<string, any>;
}

const { 
  title, 
  description, 
  lang, 
  image, 
  canonicalURL, 
  alternateURLs,
  currentArtifact,
  structuredData
} = Astro.props;

const fullTitle = title.includes('Ixiptla') ? title : `${title} | Museo Virtual Ixiptla`;
const ogImage = image || '/images/og-image.png';
---

<!DOCTYPE html>
<html lang={lang} dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO básico -->
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  
  <!-- Canonical URL -->
  {canonicalURL && <link rel="canonical" href={canonicalURL} />}
  
  <!-- Alternate languages -->
  {alternateURLs && Object.entries(alternateURLs).map(([hreflang, url]) => (
    <link rel="alternate" hreflang={hreflang} href={url} />
  ))}
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Museo Virtual Ixiptla" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content={title} />
  <meta property="og:locale" content={lang === 'es' ? 'es_MX' : 'en_US'} />
  {canonicalURL && <meta property="og:url" content={canonicalURL} />}
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  
  <!-- Theme -->
  <meta name="theme-color" content="#2c5364" />
  <meta name="color-scheme" content="dark light" />
  
  <!-- Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="mask-icon" href="/logo-mask.svg" color="#2c5364" />
  
  <!-- Security -->
  <meta http-equiv="Content-Security-Policy" 
        content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:;">
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  <meta http-equiv="X-Frame-Options" content="DENY">
  <meta http-equiv="X-XSS-Protection" content="1; mode=block">
  
  <!-- Performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="dns-prefetch" href="//ixiptla.com" />
  
  <!-- Structured Data -->
  {structuredData && (
    <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
  )}
  
  <!-- Artifact specific structured data -->
  {currentArtifact && (
    <script type="application/ld+json" set:html={JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      "name": currentArtifact.data.title,
      "description": currentArtifact.data.description,
      "artform": "Archaeological Replica",
      "creator": {
        "@type": "Organization",
        "name": currentArtifact.data.culture
      },
      "dateCreated": currentArtifact.data.period,
      "material": currentArtifact.data.material,
      "size": currentArtifact.data.dimensions,
      "image": `/images/${currentArtifact.data.image}`,
      "isPartOf": {
        "@type": "Museum",
        "name": "Museo Virtual Ixiptla",
        "url": "https://ixiptla.com"
      }
    })} />
  )}
</head>
<body>
  <slot />
</body>
</html>
```

---

*Snippets generados por Claude Code Analysis - Ixiptla Project*  
*Fecha: 2025-06-27*