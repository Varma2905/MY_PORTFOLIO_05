import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { useEffect, useState } from 'react';

export const Scene3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ✅ Mobile fallback (NO 3D)
  if (isMobile) {
    return (
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black" />
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: false }} // 🔥 performance boost
        dpr={[1, 1.5]} // 🔥 limit resolution
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />

        <Stars
          radius={50}
          depth={50}
          count={2000} // 🔥 reduced
          factor={3}
          fade
          speed={1}
        />

        <FloatingCube />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};