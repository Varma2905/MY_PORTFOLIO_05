import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { Stars3D } from './Stars3D';
import { useEffect, useState } from 'react';

export const Scene3D = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);


  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          alpha: true,
          antialias: isMobile ? false : (!isTablet),
          powerPreference: 'high-performance'
        }}
        dpr={isMobile ? [1, 1] : (isTablet ? [1, 1.2] : [1, 1.5])}
      >
        {/* ✅ FORCE TRANSPARENT BACKGROUND */}
        <color attach="background" args={['#000000']} />

        {/* ❌ NO LIGHTS → removes white haze */}
        {/* No ambientLight */}
        {/* No pointLight */}

        {/* ✅ DARK CLEAN STARS */}
        <Stars
          radius={60}
          depth={60}
          count={isMobile ? 300 : 600}          // 🔥 reduce more
          factor={1.5}         // 🔥 smaller = no glow haze
          saturation={0}       // ⭐ removes bright white tint
          fade
          speed={0.3}
        />

        {/* Optional object */}
        <FloatingCube />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};