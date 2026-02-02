"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // This rotates the object every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} ref={meshRef} scale={2.2}>
        <MeshDistortMaterial
          color="#4F46E5" // A nice Indigo Blue
          attach="material"
          distort={0.4} // Makes it look liquid/ferrofluid
          speed={2} // Speed of the liquid movement
          roughness={0.2}
          metalness={0.8} // Makes it shiny like metal
        />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        {/* Lighting is key for 3D */}
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} intensity={3} />
        <Crystal />
      </Canvas>
    </div>
  );
}
