import React, { useEffect } from 'react';
import * as THREE from 'three';

/**
 * ThreeJsPreloader component
 * 
 * This component preloads Three.js resources as early as possible in the application lifecycle
 * to prevent white flashes during initial load and page transitions.
 * 
 * It initializes a minimal Three.js scene in the background to warm up the WebGL context
 * and keep it ready for the actual Background component.
 */
export const ThreeJsPreloader: React.FC = () => {
  useEffect(() => {
    // Create a hidden renderer to initialize WebGL context early
    const preloadRenderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    
    // Set minimal size - we just need to initialize the context
    preloadRenderer.setSize(1, 1);
    preloadRenderer.setClearColor(0x000000, 0);
    
    // Create minimal scene
    const preloadScene = new THREE.Scene();
    const preloadCamera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
    
    // Add a single point to the scene
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(3);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({ size: 1, color: 0xffffff });
    const point = new THREE.Points(geometry, material);
    preloadScene.add(point);
    
    // Render once to initialize WebGL context
    preloadRenderer.render(preloadScene, preloadCamera);
    
    // Cleanup
    return () => {
      geometry.dispose();
      material.dispose();
      preloadRenderer.dispose();
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};
