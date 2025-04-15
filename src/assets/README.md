# Assets

This directory contains static assets for the SyperSymmetry project.

## Purpose
The assets directory stores all static files used in the application, including images, fonts, icons, and other media resources. Centralizing these files helps maintain organization and makes them easier to reference throughout the application.

## Directory Structure
Assets are organized by type:
- `/fonts` - Typography resources
- `/images` - Photos, illustrations, and graphics
- `/icons` - UI icons and symbols (if not using an icon library)
- `/videos` - Video content (if applicable)

## When to Add Files
Add new assets to this directory when:
- You need to include static media in the application
- You're implementing new design elements that require custom assets
- You're updating existing assets with new versions

## Naming Convention
Asset files should:
- Use kebab-case for filenames (e.g., `hero-background.png`)
- Have descriptive names that indicate their purpose
- Include appropriate file extensions
- Consider including dimensions in the filename for images (e.g., `logo-192x192.png`)

## Best Practices
- Optimize images and other media for web use
- Consider using SVGs for icons and simple graphics
- Maintain consistent naming patterns
- Document the source or license for third-party assets
- Use appropriate file formats (SVG for vectors, WebP/PNG/JPG for images)
- Consider lazy loading for large assets
- Remove unused assets to keep the bundle size small
