import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThemeStore } from '../../store/themeStore';

export const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useThemeStore();
  
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

    // Particles setup
    const particles = 100000;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    const color = new THREE.Color();
    // Primary color is blue in both modes
    const baseColor1 = isDarkMode 
      ? new THREE.Color(0x0077ff)  // Dark mode: blue
      : new THREE.Color(0x0077ff); // Light mode: blue
    // Secondary colors
    const baseColor2 = isDarkMode
      ? new THREE.Color(0x00ff88)  // Dark mode: green
      : new THREE.Color(0xff69b4); // Light mode: pink
    // Third color for more variety
    const baseColor3 = isDarkMode
      ? new THREE.Color(0x6600ff)  // Dark mode: purple-blue
      : new THREE.Color(0x00ccff); // Light mode: light blue

    for (let i = 0; i < particles; i++) {
      positions.push((Math.random() * 2 - 1) * 2000);
      positions.push((Math.random() * 2 - 1) * 2000);
      positions.push((Math.random() * 2 - 1) * 2000);

      // Favor blue by giving it a higher probability
      const colorSelector = Math.random();
      
      if (colorSelector < 0.6) {
        // 60% chance of blue or blue-based mix
        const mixFactor = Math.random() * 0.3; // Limit mix to keep more blue
        color.lerpColors(baseColor1, colorSelector < 0.3 ? baseColor2 : baseColor3, mixFactor);
      } else if (colorSelector < 0.8) {
        // 20% chance of light blue
        color.copy(baseColor3);
      } else {
        // 20% chance of secondary color (green in dark mode, pink in light mode)
        color.copy(baseColor2);
      }
      
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: isDarkMode ? 0.6 : 0.3, // More transparent in light mode
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      points.rotation.x += 0.0001;
      points.rotation.y += 0.0002;

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

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 transition-all duration-700"
      style={{ 
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
      }}
    />
  );
};