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
    const baseColor1 = isDarkMode 
      ? new THREE.Color(0x0077ff)  // Dark mode: blue
      // : new THREE.Color(0xff69b4); // Light mode: pink
      : new THREE.Color(0x00ff88); // Light mode: green
    const baseColor2 = isDarkMode
      ? new THREE.Color(0x00ff88)  // Dark mode: green
      // : new THREE.Color(0xff1493); // Light mode: deeper pink
      : new THREE.Color(0x0077ff); // Light mode: blue

    for (let i = 0; i < particles; i++) {
      positions.push((Math.random() * 2 - 1) * 2000);
      positions.push((Math.random() * 2 - 1) * 2000);
      positions.push((Math.random() * 2 - 1) * 2000);

      const mixFactor = Math.random();
      color.lerpColors(baseColor1, baseColor2, mixFactor);
      
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