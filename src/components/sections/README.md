# Sections

This directory contains section components for the SyperSymmetry project.

## Purpose
Section components represent major content areas of the website, typically corresponding to full-width sections on the homepage. These components are composed of smaller UI components and contain section-specific logic and styling.

## Naming Convention
Section files should:
- Use PascalCase for component names and filenames
- Have descriptive names that indicate their purpose (e.g., `Hero.tsx`, `About.tsx`)
- End with `.tsx` extension
- Use TypeScript for type safety

## When to Add Files
Add new section files to this directory when:
- You're creating a new major content area for the website
- You're refactoring an existing section into a dedicated component
- You're implementing a new feature that requires its own full-width section

## Current Sections
- `Hero.tsx` - Hero section with introduction and main call-to-action
- `Services.tsx` - Services showcase with cards for each service offering
- `About.tsx` - About section with company information
- `Contact.tsx` - Contact section with inquiry form

## Best Practices
- Keep sections focused on their specific content area
- Extract reusable UI elements to the ui directory
- Use consistent styling patterns across sections
- Implement responsive design for all screen sizes
- Document the purpose and usage of each section
- Use TypeScript props interfaces for component properties
