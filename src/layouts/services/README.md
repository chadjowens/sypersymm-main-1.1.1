# Service Layouts

This directory contains service-specific layout components for the SyperSymmetry project.

## Purpose
Service layout components define the structure and arrangement of service-specific pages. These layouts extend the base service layout to provide customized presentations for each service offering.

## Naming Convention
Service layout files should:
- Use PascalCase for component names and filenames
- Have descriptive names that indicate their service (e.g., `AIDevLayout.tsx`)
- End with `Layout.tsx` suffix
- Use TypeScript for type safety

## When to Add Files
Add new service layout files to this directory when:
- You're creating a new service offering page
- You're implementing a specialized layout for a specific service
- You're refactoring an existing service page into a dedicated layout

## Current Service Layouts
- `BaseServiceLayout.tsx` - Base template for all service-specific pages
- `AIDevLayout.tsx` - Layout for AI Development service page
- `MVPLayout.tsx` - Layout for MVP Development service page
- `FullStackLayout.tsx` - Layout for Full Stack Development service page
- `UXUILayout.tsx` - Layout for UX/UI Design service page
- `DataVizLayout.tsx` - Layout for Data Visualization service page
- `AICreativeLayout.tsx` - Layout for AI Creative Services page

## Best Practices
- Extend the BaseServiceLayout for consistency
- Keep service-specific customizations focused
- Implement responsive design for all screen sizes
- Consider accessibility in layout design
- Document the purpose and unique features of each service layout
- Use TypeScript props interfaces for component properties
