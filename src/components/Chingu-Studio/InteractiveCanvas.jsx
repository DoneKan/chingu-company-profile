import React, { useRef, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import * as THREE from 'three';

/**
 * A component that renders an interactive 3D canvas using Three.js
 * This creates an abstract 3D background that reacts to mouse movement
 * 
 * @param {Object} props
 * @param {string} props.height Height of the canvas (default: '400px')
 * @param {string} props.color Primary color for the particles (default: theme primary color)
 * @param {number} props.density Particle density factor (default: 50)
 * @param {boolean} props.interactive Whether particles react to cursor (default: true)
 */
const InteractiveCanvas = ({ 
  height = '400px', 
  color = null,
  density = 50,
  interactive = true
}) => {
  const theme = useTheme();
  const mountRef = useRef(null);
  const animationRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  // Use provided color or default to theme primary
  const particleColor = color || theme.palette.primary.main;
  
  // Convert hex color to THREE.js color
  const getThreeColor = (hexColor) => {
    return new THREE.Color(hexColor);
  };

  useEffect(() => {
    // Initialize Three.js scene
    const currentMount = mountRef.current;
    
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    currentMount.appendChild(renderer.domElement);
    
    // Position camera
    camera.position.z = 5;
    
    // Create particle geometry
    const particleCount = Math.floor((currentMount.clientWidth * currentMount.clientHeight) / (10000 / density));
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    // Create random positions for particles
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Random positions in a shape that resembles a wave or flow
      positions[i] = (Math.random() - 0.5) * 10;      // x
      positions[i + 1] = (Math.random() - 0.5) * 10;  // y
      positions[i + 2] = (Math.random() - 0.5) * 10;  // z
      
      // Random sizes for particles
      sizes[i / 3] = Math.random() * 0.1 + 0.05;
    }
    
    // Set attributes for the particles
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create material for particles
    const material = new THREE.PointsMaterial({
      color: getThreeColor(particleColor),
      transparent: true,
      size: 0.1,
      sizeAttenuation: true,
      opacity: 0.8,
    });
    
    // Create points from geometry and material
    const points = new THREE.Points(particles, material);
    scene.add(points);
    
    // Handle mouse movement
    const handleMouseMove = (event) => {
      if (interactive) {
        mousePosition.current = {
          x: (event.clientX / currentMount.clientWidth) * 2 - 1,
          y: -(event.clientY / currentMount.clientHeight) * 2 + 1
        };
      }
    };
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Animation function
    const animate = () => {
      // Rotate the entire particle system slowly
      points.rotation.x += 0.0005;
      points.rotation.y += 0.0005;
      
      // Add mouse interaction if enabled
      if (interactive) {
        // Move particles slightly towards the mouse position
        points.rotation.x += mousePosition.current.y * 0.0005;
        points.rotation.y += mousePosition.current.x * 0.0005;
        
        // Update particle positions based on mouse
        const positions = particles.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          // Add subtle movement to each particle
          positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.001;
          positions[i + 1] += Math.cos(Date.now() * 0.001 + i) * 0.001;
        }
        particles.attributes.position.needsUpdate = true;
      }
      
      // Render scene
      renderer.render(scene, camera);
      
      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup function
    return () => {
      // Stop animation
      cancelAnimationFrame(animationRef.current);
      
      // Remove event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Remove renderer from DOM
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particles.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [particleColor, density, interactive]);
  
  return (
    <Box
      ref={mountRef}
      sx={{
        width: '100%',
        height: height,
        position: 'relative',
        overflow: 'hidden',
      }}
    />
  );
};

export default InteractiveCanvas;