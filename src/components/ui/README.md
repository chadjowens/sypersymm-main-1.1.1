# UI Components

This directory contains reusable UI components for the SyperSymmetry project.

## Purpose
UI components are small, reusable building blocks that can be composed to create more complex interfaces. These components focus on presentation and user interaction, with minimal business logic.

## Naming Convention
UI component files should:
- Use PascalCase for component names and filenames
- Have descriptive names that indicate their purpose (e.g., `Button.tsx`, `Card.tsx`)
- End with `.tsx` extension
- Use TypeScript for type safety

## When to Add Files
Add new UI component files to this directory when:
- You're creating a reusable UI element that will be used in multiple places
- You're extracting common patterns from existing components
- You're implementing a new UI feature that could be reused

## Current UI Components
- `AnimatedSeparator.tsx` - Animated divider component for visual separation

## Best Practices
- Keep UI components focused on a single responsibility
- Make components highly reusable and configurable via props
- Implement proper prop validation with TypeScript
- Document the purpose and usage of each component
- Consider accessibility in component design
- Use consistent styling patterns
- Write unit tests for complex UI components
