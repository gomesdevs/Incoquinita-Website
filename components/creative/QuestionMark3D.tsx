"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Environment } from "@react-three/drei";
import * as THREE from "three";

function QuestionMarkMesh() {
  const textRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.SpotLight>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      textRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (lightRef.current) {
      lightRef.current.position.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 2;
      lightRef.current.position.y =
        Math.cos(state.clock.elapsedTime * 0.3) * 1 + 2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <Text
        ref={textRef}
        font="/fonts/InstrumentSerif-Regular.ttf"
        fontSize={2.4}
        color="#1A1A1A"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
        outlineWidth={0.012}
        outlineColor="#D4A843"
        material-toneMapped={false}
      >
        ?
      </Text>
      <spotLight
        ref={lightRef}
        position={[2, 2, 3]}
        angle={0.4}
        penumbra={0.8}
        intensity={3}
        color="#D4A843"
      />
    </Float>
  );
}

export function QuestionMark3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        frameloop={visible ? "always" : "demand"}
      >
        <ambientLight intensity={0.3} />
        <QuestionMarkMesh />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
