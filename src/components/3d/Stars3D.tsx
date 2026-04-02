import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useEffect, useState } from 'react';

export const Stars3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">

      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance"
        }}
        dpr={isMobile ? 1 : 2}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        {/* 🌑 Dark Space Background */}
        <color attach="background" args={['#000010']} />

        {/* 💡 Very Low Light */}
        <ambientLight intensity={0.2} />

        {/* ✨ Dark Subtle Stars */}
        <Stars
          radius={2}
          depth={40}
          count={isMobile ? 1500 : 4000}
          factor={2}          // ⭐ small stars
          saturation={0}
          fade
          speed={0.3}         // ⭐ slow movement
        />
      </Canvas>

      {/* 🌌 Dark overlay for cinematic look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
    </div>
  );
};