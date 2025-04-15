# Store

This directory contains state management stores for the SyperSymmetry project.

## Purpose
The store directory houses Zustand stores that manage global application state. These stores provide a centralized way to manage state that needs to be accessed by multiple components across the application.

## Naming Convention
Store files should:
- Have descriptive names that indicate their domain (e.g., `themeStore.ts`)
- Follow camelCase naming
- End with `Store.ts` suffix
- Use TypeScript for type safety

## When to Add Files
Add new store files to this directory when:
- You need to manage global state that's accessed by multiple components
- You're implementing a feature that requires shared state
- You want to separate domain-specific state logic

## Current Stores
- `themeStore.ts` - Manages theme state (light/dark mode)

## Best Practices
- Keep stores focused on a specific domain
- Use TypeScript interfaces to define store state
- Implement selectors for derived state
- Keep store actions simple and focused
- Document the purpose and usage of each store
- Consider performance implications when updating store state
