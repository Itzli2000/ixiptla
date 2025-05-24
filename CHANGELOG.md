### 1.3.0 (2025-05-24)

##### Chores

* **dependencies:**  update package versions and improve dependency management (f3928bad)

##### New Features

* **sitemap:**  integrate sitemap functionality and update robots.txt (0801439b)
* **Collection:**
  *  integrate MDX support and enhance artifact data management (5959ce63)
  *  add transition effect for artifact cards in English and Spanish pages (7d3fda5d)
* **architecture:**  establish comprehensive project architecture and development standards (4d89ae5a)

##### Bug Fixes

* **styles:**  correct import order for Tailwind CSS (5a4fdd24)

##### Refactors

* **Collection:**  simplify artifact description and location handling (ab59f5ea)
* **Navigation:**  adjust layout and styling for improved responsiveness (2fdf09d4)
* **HummingbirdIsland:**  remove HummingbirdIsland component and associated GLTF model (7570d861)
* **Button:**  remove Button component and replace with anchor tags in Collection and 404 pages (ce928fb4)
* **ui:**  integrate daisyUI and enhance component styling (c82311c4)

### 1.2.0 (2025-05-17)

##### New Features

* **Contact:**  add contact section with multilingual support and layout (80a88747)

##### Refactors

* **Experience:**  update styling for buttons and improve multilingual support (ff2f9700)
* **ArtifactCard:**  improve layout responsiveness and update cultural references (b7cdb379)

### 1.1.0 (2025-05-17)

##### Documentation Changes

* **README:**  update project description and enhance structure with new technologies (2fa265aa)

##### Refactors

* **Scene3D:**  remove unused Environment component to optimize rendering (2530ca7c)
* **ArtifactCard:**  enhance image transition and improve layout responsiveness (cbb75cac)

## 1.0.0 (2025-05-17)

##### Chores

*  update image assets in the collection (3231a0c2)
*  update 3D model assets in the public directory (625751d3)
*  update Tailwind CSS and related dependencies to version 4.1.7 (fc097f0b)

##### New Features

*  add new artifact image and details for Monkey Figure (eea209af)
*  expand 3D model support and enhance artifact details (9f523c61)
*  introduce model mapping and retrieval for artifacts in collection pages (98bc95fb)

##### Refactors

*  improve layout and styling of collection pages for better user experience (0be394e0)
*  enhance ArtifactCard component and improve collection page UI (2d92ff84)
*  update cultural references and enhance UI components in collection pages (3a3d1ae6)
*  clean up comments and improve code clarity in layout and 3D components (f83a6437)
*  enhance SEO metadata handling and type safety in layout components (2f24046d)
*  enhance accessibility and semantic structure in components (625fe147)
*  enhance slug handling and type safety in collection pages (d4123aee)
*  update artifact IDs and slugs for consistency in collection data (37fc5177)
*  optimize imports and enhance type definitions in ArtifactCard and Collection components (27922931)
*  restructure components and enhance TypeScript configuration for improved maintainability and performance (40b7af1f)

### 0.3.0 (2025-05-11)

##### Chores

* **release:**  simplify changelog generation command by removing unnecessary flags (5a22551a)

##### New Features

* **3D Experience:**  add new 3D model for Yax Pasaj Chan Yopaat and update collection data (8a85f28f)

##### Refactors

* **Hero Component:**
  *  enhance iOS adaptation logic and improve layout handling for better responsiveness (8c413e32)
  *  streamline iOS detection and improve conditional rendering for better device adaptation (505720ec)

### 0.2.0 (2025-05-10)

##### New Features

* **3D Experience:**
  *  add new 3D model for Seated Figure and refactor Scene3D to support dynamic model loading (42f2e705)
  *  integrate Hummingbird model with interactive scene and enhance UI for 3D exploration (92db49b7)
* **i18n:**  implement browser language detection and enhance URL redirection for supported languages (6340dd5e)
* **Hero Component:**  enhance layout and styling; integrate logo and improve responsiveness (698a345d)
* **Collection:**  add new artifact images and update artifact details in collection.ts (8e59ea5e)

##### Code Style Changes

* **Hero Component:**
  *  refine responsive scaling and add iOS-specific styles for enhanced visual consistency (036b5ddb)
  *  enhance responsive scaling and animation effects for improved visual performance (8d5a4eea)
  *  adjust layout dimensions and color scheme for improved aesthetics and responsiveness (eaa9b203)

### 0.1.0 (2025-05-03)

##### New Features

* **404:**  add 404 page and link to artifact card component (73312797)
* **Release Preparation:**  add script for automated release process and update package.json with new scripts and dependencies (1e5a4633)
* **Layout:**
  *  update layout components to include dynamic titles and descriptions based on language (a16ce6f1)
  *  enhance layout with dynamic metadata and Open Graph support (261b3ad8)
* **Artifact card:**  add image transitions (fe671e9c)
* **Pieces:**  add translations (9d51732b)
* **Home:**
  *  complete version 1 for home page (a9c7be1b)
  *  create hero section (f0c176ae)
* **Collection:**  add featured collection and collection view (05883e1b)
* **Project:**  add collection page (6dbb63bc)
* **Theme:**  configure custom theme variables (1cd909dd)
* **Internationalization:**  configure i18n capabilities (e891b7c8)
* **App:**  add iso logo and update app name (91f5e7ef)

##### Bug Fixes

* **Project:**
  *  add missing titles and descriptions for layout (c4ab9615)
  *  rename to Ixiptla (854b4ca6)
* **Images:**  updated logo with correct name (a5b3f669)

