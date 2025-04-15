# SyperSymmetry - Modern AI Agency Website

A cutting-edge website for SyperSymmetry, a modern AI agency showcasing various technology and AI-related services.

## Project Overview

SyperSymmetry is a single-page application (SPA) with multiple service-specific layouts and sections including:
- Hero section with dynamic animations
- Services overview with detailed descriptions
- About section highlighting our expertise
- Contact functionality with Supabase integration
- Dark/light mode theming

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **State Management**: Zustand
- **3D Graphics**: Three.js
- **Backend Integration**: Supabase

## Project Structure

This project follows a progressive implementation approach:

### Core Structure (Always Present)
- `src/` - Main source directory
- `src/assets/` - Static assets (images, fonts, etc.)
- `src/components/` - Reusable UI components
- `src/types/` - TypeScript type definitions
- `src/hooks/` - Custom React hooks
- `src/store/` - State management

### Feature-Based Structure (Created When Needed)
- `src/layouts/` - Layout components for page structure
- `src/pages/` - Page components for routing
- `src/services/` - Service modules for API integrations
- `src/utils/` - Utility functions and helpers
- `src/context/` - React context providers
- `public/` - Static assets served at root
- `tests/` - Test files

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

## Feature Roadmap

See [PLANNING.md](./PLANNING.md) for detailed project plans and [TASK.md](./TASK.md) for current task status.

## Contributing

This project follows a progressive implementation approach where:
1. Core functionality is implemented first
2. Feature-specific directories and files are created only when needed
3. All code follows the naming conventions and structure defined in our Windsurf rules

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/chadjowens/sypersymm-main-1.1.1)