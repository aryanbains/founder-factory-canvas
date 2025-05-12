
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useState } from "react";

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0008;
      pointsRef.current.rotation.y += 0.0005;
    }
  });
  
  const [positions] = useState(() => {
    const positions = new Float32Array(2000 * 3);
    const p = new THREE.Vector3();
    
    for (let i = 0; i < positions.length; i += 3) {
      p.set(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize().multiplyScalar(Math.random() * 2);
      
      positions[i] = p.x;
      positions[i + 1] = p.y;
      positions[i + 2] = p.z;
    }
    
    return positions;
  });
  
  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#1E90FF"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
