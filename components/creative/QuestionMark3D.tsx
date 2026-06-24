"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function QuestionMarkMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const spotRef = useRef<THREE.SpotLight>(null);

  // Create ? shape from extruded geometry
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();

    // ? body — curved top
    shape.moveTo(-0.6, -1.2);
    shape.quadraticCurveTo(-0.6, 0.6, 0.0, 0.8);
    shape.quadraticCurveTo(0.8, 0.6, 0.8, -0.2);
    shape.quadraticCurveTo(0.8, -0.8, 0.2, -0.9);
    shape.lineTo(0.2, -1.2);
    shape.lineTo(-0.2, -1.2);
    shape.lineTo(-0.2, -0.7);
    shape.quadraticCurveTo(-0.2, -0.4, 0.0, -0.3);
    shape.quadraticCurveTo(0.4, -0.4, 0.4, 0.0);
    shape.quadraticCurveTo(0.4, 0.3, 0.0, 0.4);
    shape.quadraticCurveTo(-0.2, 0.3, -0.2, -0.2);
    shape.lineTo(-0.6, -1.2);

    // ? dot
    const hole = new THREE.Path();
    hole.absellipse(-0.0, -1.7, 0.25, 0.25, 0, Math.PI * 2, false, 0);
    shape.holes.push(hole);

    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (spotRef.current) {
      spotRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      spotRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 1 + 2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.3, 0]}>
      <mesh geometry={geometry} position={[0, 0, -0.2]}>
        <meshStandardMaterial
          color="#1A1A1A"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      <spotLight
        ref={spotRef}
        position={[2, 2, 3]}
        angle={0.4}
        penumbra={0.8}
        intensity={3}
        color="#D4A843"
        castShadow
      />
    </group>
  );
}

export function QuestionMark3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <QuestionMarkMesh />
      <Environment preset="night" />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group />
      </Float>
    </Canvas>
  );
}
