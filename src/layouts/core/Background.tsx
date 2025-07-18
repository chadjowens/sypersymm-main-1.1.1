import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useThemeStore } from '../../store/themeStore';

export const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useThemeStore();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.z = 2500;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Make renderer transparent
    });
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Particles setup - start with fewer particles for faster initial render
    const targetParticles = 100000; // Target number of particles
    const initialParticles = 20000; // Initial number of particles for faster loading
    let currentParticles = initialParticles;
    
    const geometry = new THREE.BufferGeometry();
    let positions: number[] = [];
    let colors: number[] = [];

    const color = new THREE.Color();
    // Primary color is blue in dark mode, purple in light mode
    const baseColor1 = isDarkMode 
      ? new THREE.Color(0x0077ff)  // Dark mode: blue
      : new THREE.Color(0x8A2BE2); // Light mode: blueviolet
    // Secondary colors
    const baseColor2 = isDarkMode
      ? new THREE.Color(0x00ff88)  // Dark mode: green
      : new THREE.Color(0xff69b4); // Light mode: hot pink
    // Third color for more variety
    const baseColor3 = isDarkMode
      ? new THREE.Color(0x6600ff)  // Dark mode: purple-blue
      : new THREE.Color(0xDA70D6); // Light mode: orchid purple

    // Create initial particles
    for (let i = 0; i < initialParticles; i++) {
      positions.push((Math.random() * 2 - 1) * 2000);
      positions.push((Math.random() * 2 - 1) * 2000);
      positions.push((Math.random() * 2 - 1) * 2000);

      // Favor blue by giving it a higher probability
      const colorSelector = Math.random();
      
      if (isDarkMode) {
        // Dark mode color distribution (unchanged)
        if (colorSelector < 0.6) {
          // 60% chance of blue or blue-based mix
          const mixFactor = Math.random() * 0.3; // Limit mix to keep more blue
          color.lerpColors(baseColor1, colorSelector < 0.3 ? baseColor2 : baseColor3, mixFactor);
        } else if (colorSelector < 0.8) {
          // 20% chance of purple-blue
          color.copy(baseColor3);
        } else {
          // 20% chance of green
          color.copy(baseColor2);
        }
      } else {
        // Light mode color distribution (more pink and purple)
        if (colorSelector < 0.4) {
          // 40% chance of blueviolet
          color.copy(baseColor1);
        } else if (colorSelector < 0.7) {
          // 30% chance of hot pink
          color.copy(baseColor2);
        } else {
          // 30% chance of orchid purple
          color.copy(baseColor3);
        }
      }
      
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: isDarkMode ? 0.6 : 0.5, // Increased opacity in light mode for better visibility
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation with progressive particle loading
    const animate = () => {
      requestAnimationFrame(animate);

      points.rotation.x += 0.0001;
      points.rotation.y += 0.0002;
      
      // Progressively add more particles until we reach the target
      if (currentParticles < targetParticles && isLoaded) {
        // Add particles in larger batches for faster visual completion
        const batchSize = 20000;
        const newParticles = Math.min(batchSize, targetParticles - currentParticles);
        
        const newPositions = [];
        const newColors = [];
        
        for (let i = 0; i < newParticles; i++) {
          newPositions.push((Math.random() * 2 - 1) * 2000);
          newPositions.push((Math.random() * 2 - 1) * 2000);
          newPositions.push((Math.random() * 2 - 1) * 2000);
          
          // Favor blue by giving it a higher probability
          const colorSelector = Math.random();
          
          if (isDarkMode) {
            // Dark mode color distribution (unchanged)
            if (colorSelector < 0.6) {
              // 60% chance of blue or blue-based mix
              const mixFactor = Math.random() * 0.3; // Limit mix to keep more blue
              color.lerpColors(baseColor1, colorSelector < 0.3 ? baseColor2 : baseColor3, mixFactor);
            } else if (colorSelector < 0.8) {
              // 20% chance of purple-blue
              color.copy(baseColor3);
            } else {
              // 20% chance of green
              color.copy(baseColor2);
            }
          } else {
            // Light mode color distribution (more pink and purple)
            if (colorSelector < 0.4) {
              // 40% chance of blueviolet
              color.copy(baseColor1);
            } else if (colorSelector < 0.7) {
              // 30% chance of hot pink
              color.copy(baseColor2);
            } else {
              // 30% chance of orchid purple
              color.copy(baseColor3);
            }
          }
          
          newColors.push(color.r, color.g, color.b);
        }
        
        // Combine existing and new positions/colors
        positions = positions.concat(newPositions);
        colors = colors.concat(newColors);
        
        // Update geometry
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        // Update count
        currentParticles += newParticles;
      }

      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();
    
    // Set loaded state after a small delay to ensure smooth transition
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      setIsLoaded(false);
    };
  }, [isDarkMode]);

  return (
    <>
      {/* Static background that's always visible */}
      <div 
        className="fixed inset-0 -z-10 transition-all duration-700"
        style={{ 
          backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
        }}
      />
      
      {/* Three.js animation container with opacity transition */}
      <div 
        ref={containerRef}
        className={`fixed inset-0 -z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};