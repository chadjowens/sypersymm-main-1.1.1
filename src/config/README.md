# Config

This directory contains configuration files for the SyperSymmetry project.

## Purpose
The config directory centralizes application configuration settings, constants, and initialization code for external services. This helps maintain a clean separation between configuration and application logic.

## Naming Convention
Configuration files should:
- Have descriptive names that indicate their domain (e.g., `supabase.ts`)
- Follow camelCase naming
- End with `.ts` extension
- Use TypeScript for type safety

## When to Add Files
Add new configuration files to this directory when:
- You need to set up an external service or API
- You're defining application-wide constants or settings
- You want to centralize environment-specific configuration

## Current Configuration Files
- `supabase.ts` - Supabase client configuration and initialization

## Best Practices
- Use environment variables for sensitive information
- Document configuration options with JSDoc comments
- Keep configuration files focused on a single domain or service
- Consider using TypeScript const assertions for configuration objects
- Export initialized clients or services rather than raw configuration values
