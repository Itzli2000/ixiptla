# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the root of the project:

| Command | Action |
|---------|--------|
| `yarn install` | Installs dependencies |
| `yarn dev` | Starts local development server at `localhost:4321` |
| `yarn build` | Builds production site to `./dist/` |
| `yarn preview` | Previews build locally before deployment |
| `yarn prepare-release:patch` | Prepares a patch release (updates CHANGELOG.md) |
| `yarn prepare-release:minor` | Prepares a minor release (updates CHANGELOG.md) |
| `yarn prepare-release:major` | Prepares a major release (updates CHANGELOG.md) |

## Architecture Overview

This is an **Astro.js** static site generator project showcasing Mesoamerican archaeological replicas with interactive 3D models.

### Key Technologies
- **Astro.js** - Static site generator with islands architecture
- **React** - Interactive components (3D models, animations)
- **Three.js** - 3D graphics and model rendering via `@react-three/fiber` and `@react-three/drei`
- **TypeScript** - Strict type checking with comprehensive compiler options
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind
- **GSAP** - Animation library for scroll-based interactions

### Project Structure

#### Content Management
- **Content Collections**: Defined in `src/content.config.ts` with strict schema validation
- **Bilingual Content**: English (`artifacts`) and Spanish (`artefactos`) collections in `src/content/artifacts/`
- **i18n System**: Custom internationalization with language detection in `src/i18n/utils.ts`
- **Supported Languages**: Spanish (default) and English

#### 3D Model Integration
- **3D Models**: Located in `public/images/models/` (.glb format)
- **Scene3D Component**: Main 3D rendering component at `src/components/three/Scene3D/Scene3D.tsx`
- **Model3D Component**: Individual model loader at `src/components/three/Model3D/Model3D.tsx`
- **Hero3DInteractive**: Scroll-animated 3D experience in `src/components/features/Hero3DInteractive/`

#### Routing & Pages
- **File-based Routing**: Pages in `src/pages/` with language prefixes (`/en/`, `/es/`)
- **Dynamic Routes**: Collection items at `[slug].astro` for artifact details
- **Experience Pages**: Individual 3D model viewers at `/experience/[model].astro`

#### Component Architecture
- **Astro Components**: Server-rendered layouts and static content
- **React Islands**: Interactive components marked with `client:only="react"`
- **Layout System**: Base layouts in `src/layouts/` for consistent page structure

### Development Notes

#### TypeScript Configuration
- Uses Astro's strict TypeScript config with additional strict compiler options
- Path aliases: `@/*` maps to `src/*`
- Comprehensive type definitions in `src/types/`

#### 3D Model Handling
- Models are loaded asynchronously with suspense boundaries
- Scroll-based animations using GSAP and intersection observers
- Camera controls with orbit functionality and auto-rotation
- Fixed 3D canvas with content sections layered above

#### Content Schema
Artifacts must include: `title`, `culture`, `period`, `image`, `description`, `museum`, `location`, optional `dimensions`, `material`, `technique`, and `has3DModel` boolean.

#### Styling Approach
- Utility-first with TailwindCSS
- DaisyUI components for consistent UI elements
- Responsive design with mobile-first approach
- CSS custom properties for theme system integration