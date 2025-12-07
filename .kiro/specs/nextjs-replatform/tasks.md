# Implementation Plan

- [x] 1. Initialize Next.js project with TypeScript and configure build tools

  - Create new Next.js 14+ project with App Router and TypeScript
  - Install and configure Tailwind CSS
  - Initialize shadcn/ui and install base components (Button, Card, Badge, Separator, Skeleton)
  - Configure TypeScript with strict mode
  - Set up project directory structure (app/, lib/, components/)
  - _Requirements: 4.1, 4.4, 4.5, 5.1, 5.4_

- [x] 2. Create TypeScript interfaces and API client layer

  - [x] 2.1 Define TypeScript interfaces for all SWAPI data types

    - Create `lib/types.ts` with interfaces for Person, Planet, Film, Species, Vehicle, Starship
    - Define SWAPIResponse and CategoryMenuItem interfaces
    - Export all types for use throughout the application
    - _Requirements: 1.1, 2.1, 3.1, 3.3_

  - [x] 2.2 Implement API client functions
    - Create `lib/api.ts` with functions: getCategories, getCategoryItems, getItemByUrl
    - Implement utility functions: extractIdFromUrl, extractCategoryFromUrl
    - Configure Next.js fetch with appropriate caching strategies
    - Add error handling for API requests
    - _Requirements: 1.1, 2.1, 6.2, 6.4_

- [x] 3. Build root layout and home page

  - [x] 3.1 Create root layout with header

    - Implement `app/layout.tsx` with HTML structure and Tailwind CSS imports
    - Add application header with title "Star Wars Data Stuffs"
    - Configure responsive layout structure with sidebar and main content areas
    - _Requirements: 7.5, 7.1_

  - [x] 3.2 Implement home page
    - Create `app/page.tsx` with welcome message
    - Add instructions for users to choose a category
    - Integrate BrowseMenu component
    - _Requirements: 1.1, 7.2_

- [x] 4. Implement browse menu navigation

  - Create `app/components/browse-menu.tsx` as Client Component
  - Fetch categories from SWAPI root endpoint
  - Render category buttons using shadcn/ui Button components
  - Implement active state highlighting based on current route
  - Add responsive design (collapsible on mobile)
  - Handle loading and error states
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 5.3, 6.1, 7.1_

- [x] 5. Create category list page and components

  - [x] 5.1 Implement category page route

    - Create `app/[category]/page.tsx` as Server Component
    - Extract category and page params from route
    - Fetch category data using API client
    - Implement Next.js loading and error states
    - _Requirements: 2.1, 2.2, 4.2, 4.3, 6.3_

  - [x] 5.2 Build list item component

    - Create `app/components/list-item.tsx` using shadcn/ui Card
    - Display item name/title and preview information
    - Add Link to detail page
    - Style with Tailwind CSS including hover effects
    - _Requirements: 2.6, 5.2, 5.3, 7.3, 7.4_

  - [x] 5.3 Implement pagination component
    - Create `app/components/pagination.tsx` as Client Component
    - Add Previous/Next buttons using shadcn/ui Button
    - Implement navigation using Next.js router or Link
    - Handle disabled states when no more pages available
    - _Requirements: 2.3, 2.4, 2.5, 5.3_

- [x] 6. Build detail page routing and base structure

  - Create `app/[category]/[id]/page.tsx` as Server Component
  - Extract category and id params from route
  - Fetch item data from SWAPI using API client
  - Determine item type and render appropriate detail component
  - Implement loading and error handling
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 4.2, 6.1, 6.2, 6.3_

- [x] 7. Implement detail components for all entity types

  - [x] 7.1 Create PersonDetail component

    - Create `app/components/detail/person-detail.tsx`
    - Display all person properties (name, height, mass, hair_color, etc.)
    - Render related items (homeworld, films, species, vehicles, starships) as clickable links
    - Style with shadcn/ui components (Badge, Separator, Card)
    - _Requirements: 3.3, 3.4, 3.5, 3.6, 5.3_

  - [x] 7.2 Create PlanetDetail component

    - Create `app/components/detail/planet-detail.tsx`
    - Display all planet properties (name, climate, terrain, population, etc.)
    - Render related items (residents, films) as clickable links
    - Style with shadcn/ui components
    - _Requirements: 3.3, 3.4, 3.5, 3.6, 5.3_

  - [x] 7.3 Create FilmDetail component

    - Create `app/components/detail/film-detail.tsx`
    - Display all film properties (title, director, release_date, opening_crawl, etc.)
    - Render related items (characters, planets, starships, vehicles, species) as clickable links
    - Style with shadcn/ui components
    - _Requirements: 3.3, 3.4, 3.5, 3.6, 5.3_

  - [x] 7.4 Create SpeciesDetail component

    - Create `app/components/detail/species-detail.tsx`
    - Display all species properties (name, classification, language, etc.)
    - Render related items (homeworld, people, films) as clickable links
    - Style with shadcn/ui components
    - _Requirements: 3.3, 3.4, 3.5, 3.6, 5.3_

  - [x] 7.5 Create VehicleDetail component

    - Create `app/components/detail/vehicle-detail.tsx`
    - Display all vehicle properties (name, model, manufacturer, etc.)
    - Render related items (pilots, films) as clickable links
    - Style with shadcn/ui components
    - _Requirements: 3.3, 3.4, 3.5, 3.6, 5.3_

  - [x] 7.6 Create StarshipDetail component
    - Create `app/components/detail/starship-detail.tsx`
    - Display all starship properties (name, model, hyperdrive_rating, etc.)
    - Render related items (pilots, films) as clickable links
    - Style with shadcn/ui components
    - _Requirements: 3.3, 3.4, 3.5, 3.6, 5.3_

- [x] 8. Implement loading states and error handling

  - Create `loading.tsx` files for route-level loading states
  - Create `error.tsx` files for error boundaries
  - Use shadcn/ui Skeleton components for component-level loading
  - Add user-friendly error messages with retry options
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 9. Polish UI and ensure responsive design

  - Apply consistent spacing and typography across all components
  - Implement responsive breakpoints for mobile, tablet, and desktop
  - Add smooth transitions and hover effects
  - Ensure proper color contrast and visual hierarchy
  - Test navigation flow and user experience
  - _Requirements: 5.5, 7.1, 7.2, 7.3, 7.4_

- [x] 10. Clean up and remove old React app files
  - Remove all old src/ directory files
  - Remove old public/ files (keep only necessary assets)
  - Remove old dependencies (react-scripts, sass, npm-run-all)
  - Update package.json scripts for Next.js
  - Remove all .scss and .css files
  - Update README.md with new setup instructions
  - _Requirements: 5.2_
