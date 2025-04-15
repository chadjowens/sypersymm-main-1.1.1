# Common Components

This directory contains common utility components for the SyperSymmetry project.

## Purpose
Common components provide utility functionality that supports the application but doesn't fit neatly into UI, layout, or section categories. These components often handle cross-cutting concerns like error handling, data loading, or application-wide functionality.

## Naming Convention
Common component files should:
- Use PascalCase for component names and filenames
- Have descriptive names that indicate their purpose (e.g., `ErrorBoundary.tsx`, `LoadingIndicator.tsx`)
- End with `.tsx` extension
- Use TypeScript for type safety

## When to Add Files
Add new common component files to this directory when:
- You're creating a utility component that handles cross-cutting concerns
- You're implementing error handling, loading states, or other application-wide functionality
- You're creating a component that doesn't fit neatly into other categories

## Current Common Components
- `ErrorBoundary.tsx` - React error boundary for graceful error handling

## Best Practices
- Keep common components focused on their specific utility function
- Document the purpose and usage of each component
- Consider reusability across the application
- Implement proper error handling and fallback UI
- Use TypeScript props interfaces for component properties
- Write unit tests for complex utility components
