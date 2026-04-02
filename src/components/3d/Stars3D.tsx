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
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">

      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={isMobile ? 1 : 2}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        {/* ✅ TRUE TRANSPARENT */}
        <color attach="background" args={['#020014']} />

        {/* ❌ REMOVE ambient light completely */}

        {/* ✨ DARK INDIGO STARS */}
        <Stars
          radius={2}
          depth={40}
          count={isMobile ? 1200 : 2500}
          factor={1.5}
          saturation={1}      // 🔥 allow color
          fade
          speed={0.2}
        />
      </Canvas>

      {/* ❌ REMOVE ANY WHITE OVERLAY */}
    </div>
  );
};