# Hooks

This directory contains custom React hooks for the SyperSymmetry project.

## Purpose
Custom hooks encapsulate reusable stateful logic that can be shared across components. They follow the React Hooks pattern and allow for better separation of concerns.

## Naming Convention
Hook files should:
- Start with "use" (e.g., `useActiveSection.ts`)
- Follow camelCase naming
- Have descriptive names that indicate their functionality
- End with `.ts` extension

## When to Add Files
Add new hook files to this directory when:
- You need to share stateful logic between multiple components
- You want to extract complex logic from a component to improve readability
- You're implementing a feature that requires custom state management

## Current Hooks
- `useActiveSection.ts` - Hook for tracking the active section in the page

## Best Practices
- Keep hooks focused on a single responsibility
- Include proper TypeScript typing for parameters and return values
- Add comprehensive JSDoc documentation for each hook
- Write unit tests for hooks (when testing is implemented)
