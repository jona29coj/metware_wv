import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

// Flow Animation for the refrigerant simulation
const FlowAnimation = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.position.x += 0.02; // Speed of movement
      if (sphereRef.current.position.x > 5) {
        sphereRef.current.position.x = -5; // Reset the position
      }
    }
  });

  return (
    <mesh ref={sphereRef} position={[-5, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[0.1, 32, 32]} />
      <meshStandardMaterial attach="material" color="cyan" />
    </mesh>
  );
};

// Main Chiller Component
const ChillerComponent = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />

      {/* Compressor */}
      <mesh position={[-5, 0, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[1, 1, 2, 32]} />
        <meshStandardMaterial attach="material" color="orange" />
      </mesh>
      <Text position={[-5, 1.5, 0]} fontSize={0.4} color="black">Compressor</Text>

      {/* Condenser */}
      <mesh position={[-2, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[2, 1, 1]} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh>
      <Text position={[-2, 1.5, 0]} fontSize={0.4} color="black">Condenser</Text>

      {/* Expansion Valve */}
      <mesh position={[1, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
        <meshStandardMaterial attach="material" color="purple" />
      </mesh>
      <Text position={[1, 1.5, 0]} fontSize={0.4} color="black">Expansion Valve</Text>

      {/* Evaporator */}
      <mesh position={[4, 0, 0]}>
        <boxBufferGeometry attach="geometry" args={[1.5, 1, 1]} />
        <meshStandardMaterial attach="material" color="green" />
      </mesh>
      <Text position={[4, 1.5, 0]} fontSize={0.4} color="black">Evaporator</Text>

      {/* Pipes */}
      <mesh position={[-3.5, 0, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[0.1, 0.1, 3, 32]} />
        <meshStandardMaterial attach="material" color="gray" />
      </mesh>

      <mesh position={[2.5, 0, 0]}>
        <cylinderBufferGeometry attach="geometry" args={[0.1, 0.1, 3, 32]} />
        <meshStandardMaterial attach="material" color="gray" />
      </mesh>

      {/* Flowing Sphere (Refrigerant Simulation) */}
      <FlowAnimation />
    </Canvas>
  );
};

export default ChillerComponent;
