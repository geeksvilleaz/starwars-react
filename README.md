# Star Wars Data Browser

A modern web application for browsing Star Wars data from the [SWAPI API](https://swapi.dev/api/). Built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- Browse Star Wars data across multiple categories (people, planets, films, species, vehicles, starships)
- Paginated list views for efficient data browsing
- Detailed views for individual items with related data links
- Responsive design that works on mobile and desktop
- Server-side rendering for optimal performance
- Modern UI with shadcn/ui components

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **API**: [SWAPI (Star Wars API)](https://swapi.dev/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd starwars-nextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Starts the development server on port 3000
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server (requires build first)
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

```
starwars-nextjs/
├── src/                     # Source code directory
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── [category]/    # Dynamic category routes
│   │   │   ├── [id]/     # Dynamic item detail routes
│   │   │   └── page.tsx  # Category list page
│   │   ├── components/    # React components
│   │   │   ├── detail/   # Detail view components
│   │   │   ├── browse-menu.tsx
│   │   │   ├── list-item.tsx
│   │   │   └── pagination.tsx
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/        # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   └── lib/               # Utility functions and API client
│       ├── api.ts        # SWAPI API client
│       ├── types.ts      # TypeScript type definitions
│       └── utils.ts      # Utility functions
├── public/                # Static assets
└── package.json
```

## How It Works

### Routing

The application uses Next.js App Router with dynamic routes:

- `/` - Home page with welcome message
- `/[category]` - List view for a category (e.g., `/people`, `/planets`)
- `/[category]?page=2` - Paginated list view
- `/[category]/[id]` - Detail view for a specific item (e.g., `/people/1`)

### Data Fetching

Data is fetched from the SWAPI API using Next.js Server Components for optimal performance:

- Server-side rendering for initial page loads
- Automatic caching of API responses
- Loading states with Next.js `loading.tsx` files
- Error handling with Next.js `error.tsx` files

### Styling

The application uses Tailwind CSS for styling with shadcn/ui components:

- Utility-first CSS approach
- Responsive design with Tailwind breakpoints
- Accessible components built on Radix UI
- Consistent design system with CSS variables

## API Reference

This application uses the [SWAPI (Star Wars API)](https://swapi.dev/api/) which provides data about:

- **People**: Characters from the Star Wars universe
- **Planets**: Planets from the Star Wars universe
- **Films**: Star Wars movies
- **Species**: Species from the Star Wars universe
- **Vehicles**: Vehicles from the Star Wars universe
- **Starships**: Starships from the Star Wars universe

## Development

### Adding New Components

shadcn/ui components can be added using the CLI:

```bash
npx shadcn@latest add <component-name>
```

### Type Safety

The project uses TypeScript for type safety. All SWAPI data types are defined in `lib/types.ts`.

### Code Quality

- ESLint is configured for code quality checks
- TypeScript strict mode is enabled
- Next.js best practices are followed

## Deployment

The application can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)

See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [SWAPI Documentation](https://swapi.dev/documentation)

## License

This project is open source and available under the MIT License.
