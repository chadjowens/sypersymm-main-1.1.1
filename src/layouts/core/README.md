# Core Layouts

This directory contains core structural layout components for the SyperSymmetry project.

## Purpose
Core layout components provide the fundamental structure and navigation elements used across the entire application. These components form the application shell and are typically used on every page.

## Naming Convention
Core layout files should:
- Use PascalCase for component names and filenames
- Have descriptive names that indicate their purpose
- Use TypeScript for type safety

## When to Add Files
Add new core layout files to this directory when:
- You're creating a structural component used across multiple pages
- You're implementing navigation, headers, footers, or other shell components
- You're refactoring common layout patterns into reusable components

## Current Core Layouts
- `Navbar.tsx` - Main navigation component with theme toggle and links
- `Background.tsx` - Background effects and animations
- `BaseLayout.tsx` - Base layout wrapper for content (renamed from ServiceLayout)

## Best Practices
- Keep core layouts focused on structure and positioning
- Extract reusable UI elements to the components/ui directory
- Implement responsive design for all screen sizes
- Consider accessibility in layout design
- Document the purpose and usage of each layout component
- Use TypeScript props interfaces for component properties
