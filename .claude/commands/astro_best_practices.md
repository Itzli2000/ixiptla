# Astro.js Coding Conventions & Best Practices

This file contains specific coding conventions and best practices for Astro.js development in this project. These rules must be strictly followed when creating or modifying Astro components.

## File Structure & Naming

### Naming Conventions
- **Components**: PascalCase for component names: `ComponentName.astro`
- **Pages**: kebab-case for page files: `collection-item.astro`
- **Directories**: Organize components logically: `src/components/[category]/[ComponentName]/`
- **Consistency**: Maintain directory structure following project conventions

### Directory Organization
```
src/
├── components/
│   ├── common/           # Reusable components
│   ├── features/         # Feature-specific components
│   ├── layout/          # Layout components
│   └── three/           # 3D-specific components
├── layouts/             # Base layouts
├── pages/               # Pages with file-based routing
└── styles/              # Global styles
```

## Astro Component Structure

### Mandatory Template
All Astro components MUST follow this exact structure:

```astro
---
// 1. IMPORTS - External libraries first, then local imports
import { Image } from "astro:assets";
import { getLangFromUrl, useTranslations } from "../../../i18n/utils";
import type { ComponentProps } from "../../../types";

// 2. PROPS - Always destructure with TypeScript types
const { 
  title, 
  description, 
  variant = "default",
  className 
} = Astro.props as ComponentProps;

// 3. LOGIC - Data processing and computed values
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

// 4. COMPUTED VALUES - Variables derived from props or logic
const cssClasses = `component-wrapper ${className || ''}`.trim();
const altText = `${title} - ${description}`.trim();
---

<!-- 5. HTML TEMPLATE -->
<div class={cssClasses}>
  <slot />
</div>

<!-- 6. SCOPED STYLES -->
<style>
  .component-wrapper {
    /* Component-specific CSS rules */
  }
</style>

<!-- 7. CLIENT-SIDE SCRIPTS (only if necessary) -->
<script>
  // Client-side JavaScript
</script>
```

## Frontmatter Rules

### Mandatory Order
1. **Imports**: External libraries → local imports (alphabetical order)
2. **Props**: Destructuring with explicit TypeScript types
3. **Variables**: Use descriptive names, prefer `const` over `let`
4. **Functions**: Define utilities before template usage

### Correct vs Incorrect Examples

#### ✅ CORRECT
```astro
---
import { Image } from "astro:assets";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";
import type { ArtifactProps } from "../../types";

const { artifact, variant = "grid" } = Astro.props as ArtifactProps;
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
```

#### ❌ INCORRECT
```astro
---
// No explicit types
const { artifact, variant } = Astro.props;

// Unordered imports
import { getLangFromUrl } from "../../i18n/utils";
import { Image } from "astro:assets";

// Poorly named variables
const l = getLangFromUrl(Astro.url);
---
```

## HTML Template Guidelines

### Mandatory Rules
- **Semantic HTML**: Use appropriate HTML elements (`section`, `article`, `nav`, etc.)
- **Indentation**: Consistent 2 spaces
- **Descriptive Classes**: Follow TailwindCSS patterns
- **Alt Attributes**: ALWAYS include in images with descriptive text
- **Conditional Rendering**: `{condition && <element />}`

### CSS Class Management
```astro
<!-- ✅ CORRECT: Template literals for dynamic classes -->
<div class={`card bg-base-300/50 block group transition-all duration-300 ${
  variant === "grid"
    ? "rounded-2xl shadow-lg hover:shadow-xl overflow-hidden"
    : "rounded-xl shadow-md hover:shadow-lg p-4"
}`}>

<!-- ❌ INCORRECT: Simple concatenation -->
<div class={"card " + variant}>
```

### Descriptive Alt Text
```astro
---
// Generate dynamic and descriptive alt text
const altText = `${artifact.title} - ${artifact.culture} ${
  artifact.period ? `from ${artifact.period}` : ''
} ${artifact.material ? `in ${artifact.material}` : ''}`.trim();
---

<Image alt={altText} src={image} />
```

## Styling Conventions

### Style Types
1. **Scoped Styles**: `<style>` for component-specific styles
2. **Global Styles**: `<style is:global>` ONLY for site-wide rules (use sparingly)
3. **CSS Variables**: `define:vars` for dynamic values

### CSS Property Order
```css
.component {
  /* 1. Layout (position, display, flex, grid) */
  position: relative;
  display: flex;
  
  /* 2. Box model (width, height, margin, padding) */
  width: 100%;
  height: auto;
  margin: 0;
  padding: 1rem;
  
  /* 3. Typography */
  font-size: 1rem;
  line-height: 1.5;
  
  /* 4. Visual (color, background, border) */
  color: var(--color-text);
  background: var(--color-bg);
  
  /* 5. Effects (transform, transition, animation) */
  transform: scale(1);
  transition: all 0.3s ease;
}
```

### Dynamic CSS Variables
```astro
---
const primaryColor = "#2c5364";
const fontSize = "1.2rem";
---

<style define:vars={{ primaryColor, fontSize }}>
  .component {
    color: var(--primaryColor);
    font-size: var(--fontSize);
  }
</style>
```

## TypeScript Integration

### Mandatory Rules
- **Explicit Types**: Always type prop interfaces
- **Type Imports**: Use `import type` for types
- **Strict Checking**: Leverage Astro's built-in types
- **Interfaces**: Define in `src/types/` for reusability

### Correct Typing Example
```astro
---
import type { Language, ArtifactData } from "../../types";

interface Props {
  artifact: ArtifactData;
  variant?: "grid" | "list";
  className?: string;
}

const { artifact, variant = "grid", className } = Astro.props as Props;
---
```

## Performance & SEO

### Mandatory Rules
- **astro:assets**: ALWAYS use for optimized images
- **transition:name**: Include for view transitions
- **Dynamic alt**: Generate descriptive texts automatically
- **Meta tags**: Implement in appropriate layouts
- **Semantic markup**: For accessibility

### Image Optimization
```astro
<Image
  transition:name={`artifact-${artifact.slug}`}
  src={image}
  alt={altText}
  width={800}
  height={800}
  class="w-full h-full object-cover transition-transform duration-500"
/>
```

## Internationalization (i18n)

### Mandatory Rules
- **Text Extraction**: ALL text must go to translation files
- **Language Detection**: Consistent `getLangFromUrl(Astro.url)`
- **Translations**: `useTranslations(lang)` for rendering
- **Routes**: Maintain consistent language routing patterns

### Correct i18n Example
```astro
---
import { getLangFromUrl, useTranslations } from "../../../i18n/utils";
import type { Language } from "../../../types";

const lang = getLangFromUrl(Astro.url) as Language;
const t = useTranslations(lang);
---

<h1>{t("hero.title")}</h1>
<p>{t("hero.description")}</p>
```

## Code Quality Rules

### Mandatory
- **No Comments**: DO NOT add code comments unless explicitly requested
- **Consistent Formatting**: 2 spaces, semicolons, proper spacing
- **Error Handling**: Optional chaining (`?.`) and nullish coalescing (`??`)
- **Accessibility**: ARIA attributes when necessary
- **Performance**: Minimize client-side JavaScript, prefer server rendering

### Client-Side JavaScript
```astro
<script>
  // ✅ CORRECT: Event listener for View Transitions
  document.addEventListener("astro:page-load", () => {
    // Initialization logic
  });
  
  // ❌ INCORRECT: Generic event listener
  window.addEventListener("load", () => {
    // May cause issues with View Transitions
  });
</script>
```

## Verification Commands

Before committing changes, ALWAYS run:

```bash
# Verify types
yarn build

# Verify development
yarn dev
```

These conventions are MANDATORY to maintain consistency, performance, and maintainability of Astro.js code.