# Design Document

## Overview

This design document outlines the architecture and implementation approach for replatforming the Star Wars data browser from Create React App to Next.js 14+ with App Router, shadcn/ui, and Tailwind CSS. The application will maintain its core functionality while modernizing the tech stack and improving the user interface.

## Architecture

### Technology Stack

- **Framework**: Next.js 14+ with App Router
- **UI Library**: shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS
- **Language**: TypeScript (migration from JavaScript)
- **API**: SWAPI (https://swapi.dev/api/)
- **State Management**: React hooks and URL state (via Next.js routing)

### Application Structure

```
app/
├── layout.tsx                 # Root layout with header
├── page.tsx                   # Home page with welcome message
├── [category]/
│   ├── page.tsx              # Category list view with pagination
│   └── [id]/
│       └── page.tsx          # Item detail view
├── components/
│   ├── browse-menu.tsx       # Sidebar navigation (Client Component)
│   ├── category-list.tsx     # List of items in a category
│   ├── list-item.tsx         # Individual list item card
│   ├── pagination.tsx        # Pagination controls (Client Component)
│   └── detail/
│       ├── person-detail.tsx
│       ├── planet-detail.tsx
│       ├── film-detail.tsx
│       ├── species-detail.tsx
│       ├── vehicle-detail.tsx
│       └── starship-detail.tsx
├── lib/
│   ├── api.ts                # SWAPI API client functions
│   ├── types.ts              # TypeScript interfaces for SWAPI data
│   └── utils.ts              # Utility functions
└── ui/                        # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── badge.tsx
    ├── separator.tsx
    └── skeleton.tsx
```

## Components and Interfaces

### 1. Root Layout (`app/layout.tsx`)

**Purpose**: Provides the base HTML structure and global layout elements.

**Type**: Server Component

**Features**:

- Renders the HTML document structure
- Includes Tailwind CSS
- Displays application header
- Wraps children with consistent layout

### 2. Home Page (`app/page.tsx`)

**Purpose**: Landing page with welcome message and browse menu.

**Type**: Server Component with Client Component for menu

**Features**:

- Displays welcome message
- Renders BrowseMenu component
- Provides instructions to users

### 3. Browse Menu (`app/components/browse-menu.tsx`)

**Purpose**: Sidebar navigation for category selection.

**Type**: Client Component (requires interactivity)

**Features**:

- Fetches available categories from SWAPI root endpoint
- Displays categories as navigation buttons
- Highlights active category based on current route
- Uses shadcn/ui Button components
- Responsive design (collapsible on mobile)

**State**:

- `categories`: Array of category objects
- `isLoading`: Boolean for loading state

### 4. Category Page (`app/[category]/page.tsx`)

**Purpose**: Displays paginated list of items for a selected category.

**Type**: Server Component

**Features**:

- Accepts `category` and `page` as route/search params
- Fetches category data from SWAPI
- Renders CategoryList component
- Handles loading and error states
- Implements Next.js caching strategies

**Props**:

```typescript
interface CategoryPageProps {
  params: { category: string };
  searchParams: { page?: string };
}
```

### 5. Category List (`app/components/category-list.tsx`)

**Purpose**: Renders the list of items and pagination controls.

**Type**: Server Component with Client Component for pagination

**Features**:

- Maps items to ListItem components
- Displays category heading
- Renders Pagination component
- Uses shadcn/ui Card components

### 6. List Item (`app/components/list-item.tsx`)

**Purpose**: Individual item card in the list view.

**Type**: Server Component

**Features**:

- Displays item name/title
- Shows preview information
- Links to detail page
- Uses shadcn/ui Card component
- Hover effects and transitions

### 7. Pagination (`app/components/pagination.tsx`)

**Purpose**: Navigation controls for paginated results.

**Type**: Client Component (requires navigation)

**Features**:

- Previous/Next buttons
- Disabled state when no more pages
- Uses Next.js Link or router for navigation
- Uses shadcn/ui Button components

### 8. Detail Page (`app/[category]/[id]/page.tsx`)

**Purpose**: Displays detailed information for a specific item.

**Type**: Server Component

**Features**:

- Fetches item data from SWAPI
- Determines item type from category
- Renders appropriate detail component
- Handles loading and error states

**Props**:

```typescript
interface DetailPageProps {
  params: { category: string; id: string };
}
```

### 9. Detail Components (`app/components/detail/*.tsx`)

**Purpose**: Type-specific detail views for different categories.

**Type**: Server Components with Client Components for interactive links

**Features**:

- PersonDetail: displays character information (name, height, mass, etc.)
- PlanetDetail: displays planet information (climate, terrain, population, etc.)
- FilmDetail: displays movie information (title, director, release date, etc.)
- SpeciesDetail: displays species information (classification, language, etc.)
- VehicleDetail: displays vehicle information (model, manufacturer, etc.)
- StarshipDetail: displays starship information (model, class, hyperdrive rating, etc.)
- All components render related items as clickable links
- Uses shadcn/ui components (Badge, Separator, Card)

## Data Models

### TypeScript Interfaces

```typescript
// Base types
interface SWAPIResource {
  url: string;
  created: string;
  edited: string;
}

interface SWAPIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Category types
interface Person extends SWAPIResource {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}

interface Planet extends SWAPIResource {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
}

interface Film extends SWAPIResource {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
}

interface Species extends SWAPIResource {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string | null;
  language: string;
  people: string[];
  films: string[];
}

interface Vehicle extends SWAPIResource {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
}

interface Starship extends SWAPIResource {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
}

// Menu type
interface CategoryMenuItem {
  name: string;
  url: string;
}
```

## API Layer

### API Client (`lib/api.ts`)

**Functions**:

```typescript
// Fetch root API to get available categories
async function getCategories(): Promise<CategoryMenuItem[]>;

// Fetch items for a category with pagination
async function getCategoryItems<T>(
  category: string,
  page?: number
): Promise<SWAPIResponse<T>>;

// Fetch a specific item by URL
async function getItemByUrl<T>(url: string): Promise<T>;

// Extract ID from SWAPI URL
function extractIdFromUrl(url: string): string;

// Extract category from SWAPI URL
function extractCategoryFromUrl(url: string): string;
```

**Caching Strategy**:

- Use Next.js `fetch` with `cache: 'force-cache'` for static data
- Implement revalidation for data that might change
- Consider using Next.js Route Handlers for API routes if needed

## Routing Strategy

### URL Structure

```
/                           # Home page with welcome message
/people?page=1              # List of people (page 1)
/people/1                   # Detail view for person with ID 1
/planets?page=2             # List of planets (page 2)
/planets/3                  # Detail view for planet with ID 3
/films                      # List of films
/films/1                    # Detail view for film with ID 1
```

### Navigation Flow

1. User lands on home page
2. User clicks category in browse menu → navigates to `/[category]`
3. User clicks item in list → navigates to `/[category]/[id]`
4. User clicks related item link → navigates to `/[related-category]/[related-id]`
5. User clicks pagination → updates search params `?page=X`

## Styling Approach

### Tailwind Configuration

- Use default Tailwind theme with custom color palette
- Configure content paths for Next.js App Router
- Add custom utilities if needed

### shadcn/ui Setup

- Initialize shadcn/ui with `npx shadcn-ui@latest init`
- Install required components: Button, Card, Badge, Separator, Skeleton
- Customize theme in `tailwind.config.ts`
- Use CSS variables for theming

### Component Styling Patterns

- Use Tailwind utility classes for layout and spacing
- Use shadcn/ui components for interactive elements
- Implement responsive design with Tailwind breakpoints
- Use CSS Grid and Flexbox for layouts
- Consistent spacing scale (4, 8, 16, 24, 32px)

### Layout Design

```
┌─────────────────────────────────────────┐
│           Header (Star Wars)            │
├──────────┬──────────────────────────────┤
│          │                              │
│  Browse  │      Main Content            │
│  Menu    │      (List or Detail)        │
│          │                              │
│  - People│                              │
│  - Planets                              │
│  - Films │                              │
│  - etc.  │                              │
│          │                              │
└──────────┴──────────────────────────────┘
```

## Error Handling

### Error Boundaries

- Use Next.js `error.tsx` files at appropriate levels
- Provide user-friendly error messages
- Include retry mechanisms where appropriate

### Loading States

- Use Next.js `loading.tsx` files for route-level loading
- Use shadcn/ui Skeleton components for component-level loading
- Show loading indicators during data fetching

### API Error Handling

```typescript
try {
  const data = await fetch(url);
  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }
  return await data.json();
} catch (error) {
  console.error("API Error:", error);
  throw error; // Let Next.js error boundary handle it
}
```

## Testing Strategy

### Unit Tests

- Test utility functions in `lib/utils.ts`
- Test API client functions with mocked fetch
- Test data transformation logic

### Component Tests

- Test detail components render correct data
- Test list item components display properly
- Test pagination logic

### Integration Tests

- Test navigation flow between pages
- Test API integration with real endpoints
- Test error handling scenarios

### Testing Tools

- Jest for unit tests
- React Testing Library for component tests
- Playwright or Cypress for E2E tests (optional)

## Migration Strategy

### Phase 1: Project Setup

1. Create new Next.js project with TypeScript
2. Install and configure Tailwind CSS
3. Initialize shadcn/ui
4. Set up project structure

### Phase 2: Core Functionality

1. Implement API client layer
2. Create TypeScript interfaces
3. Build basic routing structure
4. Implement browse menu

### Phase 3: List Views

1. Create category list page
2. Implement list item components
3. Add pagination functionality
4. Style with shadcn/ui and Tailwind

### Phase 4: Detail Views

1. Create detail page routing
2. Implement all detail components
3. Add related item linking
4. Style detail views

### Phase 5: Polish

1. Add loading states
2. Implement error handling
3. Optimize performance
4. Ensure responsive design
5. Add transitions and animations

### Phase 6: Cleanup

1. Remove old React app files
2. Update documentation
3. Final testing
4. Deploy

## Performance Considerations

- Use Next.js Server Components for static content
- Implement proper caching strategies
- Lazy load images if added in future
- Minimize client-side JavaScript
- Use Next.js Image component if images are added
- Consider implementing ISR (Incremental Static Regeneration) for frequently accessed pages

## Accessibility

- Ensure all interactive elements are keyboard accessible
- Use semantic HTML elements
- Provide proper ARIA labels where needed
- Maintain sufficient color contrast
- Test with screen readers
- shadcn/ui components are built with accessibility in mind (Radix UI)
