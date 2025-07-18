# Background Animation Troubleshooting Guide

## Issue: White Flash During Page Load

When loading or refreshing pages in the SyperSymmetry website, users may occasionally experience a white flash before the Three.js background animation fully initializes. This document outlines the troubleshooting steps and solutions attempted to address this issue.

## Current Implementation

The background animation is implemented using:

- Three.js WebGL renderer
- 100,000 colored particles (initially 20,000 with progressive loading)
- Smooth opacity transitions between loading states
- ThreeJsPreloader component for early WebGL context initialization

## Solutions Attempted

### 1. Global CSS Background Color

Added matching background colors to the HTML and body elements to prevent white flash:

```css
html {
  background-color: #ffffff; /* Light mode background */
}

html.dark {
  background-color: #0f172a; /* Dark mode background */
}
```

### 2. Loading Placeholder

Implemented a static background div that's always visible while the Three.js animation initializes:

```jsx
<>
  {/* Static background that's always visible */}
  <div 
    className="fixed inset-0 -z-10"
    style={{ 
      backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
    }}
  />
  
  {/* Three.js animation container with opacity transition */}
  <div 
    ref={containerRef}
    className={`fixed inset-0 -z-10 transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
  />
</>
```

### 3. Three.js Preloader

Created a ThreeJsPreloader component that initializes a minimal Three.js scene early in the application lifecycle:

```jsx
// ThreeJsPreloader.tsx
useEffect(() => {
  // Create a hidden renderer to initialize WebGL context early
  const preloadRenderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true
  });
  
  // Set minimal size - we just need to initialize the context
  preloadRenderer.setSize(1, 1);
  
  // Create minimal scene and render once
  const preloadScene = new THREE.Scene();
  const preloadCamera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
  preloadRenderer.render(preloadScene, preloadCamera);
}, []);
```

### 4. Progressive Particle Loading

Implemented progressive loading of particles to improve initial render time:

- Start with 20,000 particles for faster initial load
- Progressively add more particles in batches of 20,000 until reaching 100,000
- Update geometry attributes with each batch

## Future Optimization Ideas

If the issue persists after the current implementations, consider:

1. **CSS-Based Animated Gradient Fallback**:
   - Create a CSS-only animated gradient background
   - Display during initial load, then transition to Three.js

2. **Splash Screen**:
   - Implement a branded splash screen during initial application load
   - Preload Three.js and other resources in the background

3. **Further Three.js Optimizations**:
   - Use InstancedBufferGeometry for better performance
   - Implement level-of-detail rendering based on device capabilities
   - Consider alternative particle system implementations

4. **Service Worker Caching**:
   - Implement service worker to cache Three.js and critical resources
   - Provide offline-first experience for returning visitors

## Environment Differences

The white flash issue may be more noticeable in development than production due to:

- Development server overhead and hot module replacement
- Lack of code minification and optimization in development
- Differences in asset loading strategies
- Caching behavior differences

## Monitoring and Reporting

If you encounter the white flash issue:

1. Note which page/route was being loaded
2. Record browser and device information
3. Note whether it was the first load or a refresh
4. Check network conditions (bandwidth, latency)
5. Document in the GitHub issue tracker with the label "background-animation"
