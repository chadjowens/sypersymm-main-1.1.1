# Layouts

This directory contains all layout components for the SyperSymmetry project, organized into subdirectories by purpose.

## Directory Structure

- `core/` - Core structural components used across the application
- `services/` - Service-specific page layouts for different service offerings

## Purpose
Layout components define the overall structure and arrangement of pages or sections of the application. They provide consistent containers for content while managing common elements like headers, footers, and navigation.

## Naming Convention
Layout files should:
- Use PascalCase for component names and filenames
- Have descriptive names that indicate their purpose
- End with `Layout.tsx` suffix for page layouts
- Use TypeScript for type safety

## When to Add Files
Add new layout files to the appropriate subdirectory when:
- **Core Layouts**: You need a structural component used across multiple pages
- **Service Layouts**: You're creating a layout for a specific service page

## Current Layouts

### Core Layouts
- `Navbar.tsx` - Main navigation component
- `Background.tsx` - Background effects component
- `BaseLayout.tsx` - Base layout wrapper for content

### Service Layouts
- `BaseServiceLayout.tsx` - Base template for all service-specific pages
- `AIDevLayout.tsx` - Layout for AI Development service page
- `MVPLayout.tsx` - Layout for MVP Development service page
- `FullStackLayout.tsx` - Layout for Full Stack Development service page
- `UXUILayout.tsx` - Layout for UX/UI Design service page
- `DataVizLayout.tsx` - Layout for Data Visualization service page
- `AICreativeLayout.tsx` - Layout for AI Creative Services page

## Best Practices
- Keep layouts focused on structure and positioning
- Use composition to nest layouts when needed
- Implement responsive design principles
- Document the purpose and usage of each layout
- Consider accessibility in layout design
- Use TypeScript props interfaces for layout properties
