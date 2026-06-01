"use client";

import { useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";
import NET from "vanta/src/vanta.net";

interface VantaBackgroundProps {
  children?: ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x12a00a,
        backgroundColor: 0x0a0a0a,
        points: 5.0,
        maxDistance: 20.0,
        spacing: 19.0,
        showDots: true,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0 bg-transparent w-full h-full"
    >
      {children}
    </div>
  );
}
