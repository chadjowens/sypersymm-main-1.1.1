# SyperSymmetry Project Summary

## Project Overview

SyperSymmetry is a modern AI agency website built as a single-page application (SPA) with multiple service-specific layouts and sections. The website showcases various technology and AI-related services with a focus on modern design, interactive elements, and responsive user experience.

### Key Features

- Interactive landing page with dynamic animations
- Service-specific detailed pages with custom layouts
- Dark/light mode theming
- Contact form with Supabase integration
- Responsive design for all device sizes
- Background animations and visual effects
- Calendly integration for scheduling

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router DOM v6
- **State Management**: Zustand
- **3D Graphics**: Three.js

### Backend Integration
- **Database & Authentication**: Supabase

### UI Components & Libraries
- **Icons**: Lucide React
- **Scheduling**: React-Calendly
- **Date Selection**: React-DatePicker

### Development Tools
- **Type Safety**: TypeScript
- **Code Quality**: ESLint
- **CSS Processing**: PostCSS, Autoprefixer

## Project Architecture

The project follows a progressive implementation approach where core directories exist from the beginning, and feature-based directories are created when implementing related features.

### Directory Structure

```
sypersymm-main-1.1.1/
├── docs/                   # Project documentation
├── node_modules/           # Dependencies
├── src/                    # Source code
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Utility components (ErrorBoundary, etc.)
│   │   ├── sections/       # Main page sections (Hero, Services, About, Contact)
│   │   └── ui/             # Reusable UI components (AnimatedSeparator, etc.)
│   ├── config/             # Configuration files
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Layout components
│   │   ├── core/           # Core structural components (Navbar, Background, BaseLayout)
│   │   └── services/       # Service-specific layouts
│   ├── pages/              # Page components for routing
│   ├── store/              # State management (Zustand stores)
│   └── types/              # TypeScript type definitions
├── .env.example            # Environment variables template
├── eslint.config.js        # ESLint configuration
├── fix-imports.sh          # Script to fix import paths
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── PLANNING.md             # Project planning document
├── postcss.config.js       # PostCSS configuration
├── README.md               # Project readme
├── tailwind.config.js      # Tailwind CSS configuration
├── TASK.md                 # Project tasks tracking
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Core Components

### Page Structure
- **HomePage**: Main landing page containing all primary sections
- **ServicePage**: Dynamic page for service-specific content

### Main Sections
- **Hero**: Introduction section with call-to-action
- **Services**: Overview of all service offerings
- **About**: Company information and team profiles
- **Contact**: Inquiry form with Supabase integration

### Layout Components
- **BaseLayout**: Base layout structure for all pages
- **Service-specific Layouts**: Custom layouts for each service (AIDevLayout, MVPLayout, FullStackLayout, etc.)

### UI Components
- **Navbar**: Navigation with theme toggle
- **Background**: Animated background effects
- **AnimatedSeparator**: Visual separator between sections
- **ErrorBoundary**: Graceful error handling

## State Management

The application uses Zustand for global state management, primarily for:
- Theme state (dark/light mode)
- UI interaction states
- Form data handling

## Routing

React Router DOM v6 is used for navigation with the following routes:
- `/`: Home page with all sections
- `/services/:serviceSlug`: Dynamic routes for service-specific pages

## Current Project Status

According to the TASK.md file, the project has completed several key milestones:

### Completed
- Core project structure implementation
- Creation of feature directories (layouts, pages)
- Component organization into logical subdirectories
- Documentation improvements with JSDoc and README files
- Setup instructions and environment variables template

### In Progress / Planned
- UI Enhancements (removing profile cards, updating icons, etc.)
- Security & Infrastructure improvements
- Feature enhancements (blog section, case studies, etc.)
- Technical improvements (testing, CI/CD, etc.)
- Additional documentation

## Progressive Implementation Approach

The project follows a phased implementation approach:

1. **Phase 1: Core Structure**
   - Core directories and files
   - Basic UI components and layouts
   - Styling foundation with TailwindCSS

2. **Phase 2: Feature Implementation**
   - Routing with React Router
   - Service-specific layouts
   - Utility functions

3. **Phase 3: Integration**
   - Supabase for backend functionality
   - Contact form and authentication
   - Context providers

4. **Phase 4: Testing & Optimization**
   - Testing framework
   - Performance optimizations
   - Production assets

## Performance Goals

- First Contentful Paint (FCP) < 1.5s
- Time to Interactive (TTI) < 3.0s
- First Input Delay (FID) < 100ms
- Smooth animations (60fps)
- Optimized 3D rendering

## Future Extensions

1. **Feature Enhancements**
   - Blog/Content section
   - Case studies showcase
   - Team member profiles
   - Portfolio gallery
   - Client testimonials

2. **Technical Improvements**
   - PWA capabilities
   - Enhanced SEO optimization
   - Advanced animations
   - Internationalization support

3. **Integration Opportunities**
   - CMS integration
   - Enhanced analytics
   - Marketing automation
   - Customer feedback system

## Development Guidelines

### Code Organization
- Components use PascalCase (e.g., `Hero.tsx`)
- Hooks use camelCase and start with 'use' (e.g., `useTheme.ts`)
- Maximum file size: 500 lines
- JSDoc documentation for all components and functions

### Import Rules
- Prefer relative imports within the same feature directory
- Use absolute imports for cross-feature dependencies
- No relative imports going up more than 2 directory levels

### Naming Conventions
- Components: PascalCase
- Pages: PascalCase
- Hooks: camelCase starting with 'use'
- Types/interfaces: PascalCase
- Utils: camelCase

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/chadjowens/sypersymm-main-1.1.1.git

# Navigate to the project directory
cd sypersymm-main-1.1.1

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Setup
Copy the `.env.example` file to `.env` and fill in the required environment variables:
- Supabase URL and API key
- Other configuration variables as needed
