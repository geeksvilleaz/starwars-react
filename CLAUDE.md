# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Star Wars Data Browser - A React application that fetches and displays data from the Star Wars API (SWAPI). Users can browse categories (people, planets, films, species, vehicles, starships), view paginated lists, and explore detailed information about individual items with cross-referenced data.

## Development Commands

### Start Development Server
```bash
npm start
```
Runs both CSS compilation (watch mode) and React dev server in parallel. App opens at http://localhost:3000.

### Build for Production
```bash
npm run build
```
Compiles SCSS to CSS, then creates optimized production build in `build/` directory.

### Run Tests
```bash
npm test
```
Launches Jest test runner in interactive watch mode.

### CSS Compilation
```bash
npm run build-css    # One-time SCSS compilation
npm run watch-css    # Watch mode for SCSS files
```

## Architecture

### State Management Pattern
The app uses a **centralized state at the App component level** with prop drilling for state updates. Key state properties:
- `menu`: Array of SWAPI categories loaded on mount
- `category`: Current paginated category results (e.g., list of people)
- `item`: Currently selected detail item (single person, planet, etc.)
- `url`: Current category URL for pagination context

### Component Hierarchy
```
App (state container)
├── Browse (sidebar navigation)
├── List (paginated category view)
│   ├── ListItem
│   └── Pagination
└── Detail (item detail view)
    ├── Person
    ├── Planet
    ├── Film
    ├── Species
    ├── Vehicle
    └── Starship
```

### View Switching Logic
The app conditionally renders List OR Detail based on state:
- When `category` is set and `item` is null: Show List view
- When `item` is set and `category` is null: Show Detail view
- State transitions happen via `displayCategory()` and `displayItem()` callbacks passed down from App

### Data Fetching Pattern
**Service.js** provides two core methods:
- `getMenu()`: Fetches root API to build navigation menu
- `getUrl(url)`: Generic fetch wrapper used throughout app

**Collection.js** is a reusable component that:
- Takes an array of URLs as `items` prop
- Fetches each URL on mount via `Service.getUrl()`
- Renders clickable buttons for related entities (e.g., films for a person)
- Used heavily in detail components to show cross-references

### Pagination System
Pagination.js calculates page count from `category.count / 10` and constructs page-specific URLs by appending `?page=N` to the base category URL. The component manages its own page state but delegates actual data fetching back to the parent via `goTo(url)` callback.

### URL Parsing for Category Detection
Detail.js extracts the category type by parsing the item's URL:
```javascript
const url = item.url.split('/');
const category = url[url.length - 3]; // e.g., "people", "planets"
```
This determines which specialized detail component to render.

## Styling Architecture

The project uses **SCSS compiled to CSS** via Dart Sass. Each component has its own `.scss` source file that compiles to a `.css` file in the same directory. The component imports the `.css` file, not the `.scss` file.

When modifying styles:
1. Edit the `.scss` file
2. The watch task (part of `npm start`) auto-compiles to `.css`
3. Never manually edit `.css` files - they're build artifacts

## API Data Source

Uses SWAPI (Star Wars API) at `https://swapi.dev/api/`. All requests use `cache: 'force-cache'` for performance. The API returns paginated results with `next`/`previous` URLs and cross-references between entities via URL arrays.

## Component Patterns to Follow

### Detail Components
All detail components (Person, Planet, etc.) follow the same pattern:
- Functional components receiving a specific entity prop and `displayItem` callback
- Use Collection component to render related entities (arrays of URLs)
- Display entity properties in label/value pairs with consistent class names

### Legacy React Patterns
This codebase uses React 17 with class components and lifecycle methods:
- `componentWillReceiveProps` for prop change handling (deprecated in modern React)
- Constructor-based state initialization
- Manual event handler binding in constructors

When adding new features, match the existing class-based component style for consistency.
