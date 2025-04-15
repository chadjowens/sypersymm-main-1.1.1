# Types

This directory contains TypeScript type definitions for the SyperSymmetry project.

## Purpose
The types directory centralizes TypeScript interfaces, types, and type utilities that are used across the application. This ensures type consistency and improves code maintainability.

## Naming Convention
Type files should:
- Use PascalCase for type and interface names
- Have descriptive names that indicate their domain
- End with `.ts` extension
- Group related types in domain-specific files

## When to Add Files
Add new type files to this directory when:
- You need to define interfaces or types used across multiple components
- You're implementing a feature that requires complex type definitions
- You want to ensure type consistency across the application

## Current Type Files
- `index.ts` - Exports all types for easy importing

## Best Practices
- Keep types focused and specific
- Use interfaces for object shapes that may be implemented or extended
- Use type aliases for unions, intersections, or simple object shapes
- Document complex types with JSDoc comments
- Consider using utility types (Partial, Pick, Omit, etc.) when appropriate
- Export types from domain-specific files through index.ts for easier imports
