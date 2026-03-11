import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Group } from 'three';

import reactLogo from '@/assets/logos/react.svg';
import pythonLogo from '@/assets/logos/python.svg';
import nextjsLogo from '@/assets/logos/nextjs.svg';
import threejsLogo from '@/assets/logos/threejs.svg';
import nodejsLogo from '@/assets/logos/nodejs.svg';
import mongodbLogo from '@/assets/logos/mongodb.svg';
import typescriptLogo from '@/assets/logos/typescript.svg';
import gitLogo from '@/assets/logos/git.svg';
import htmlLogo from '@/assets/logos/html.svg';
import cssLogo from '@/assets/logos/css.svg';
import javaLogo from '@/assets/logos/java.svg';
import mysqlLogo from '@/assets/logos/mysql.svg';
import supabaseLogo from '@/assets/logos/supabase.svg';
import clogo from '@/assets/logos/C_Programming_Language.svg.svg';
import firebase from '@/assets/logos/firebase.svg';
const logos = [
  { name: 'React', logo: reactLogo, position: [2, 1, 0] },
  { name: 'Python', logo: pythonLogo, position: [2, 0, -1] },
  { name: 'Next.js', logo: nextjsLogo, position: [2, 1, -1] },
  { name: 'Three.js', logo: threejsLogo, position: [1, -1, 1] },
  { name: 'Node.js', logo: nodejsLogo, position: [-1, -1, -1] },
  { name: 'MongoDB', logo: mongodbLogo, position: [2, 0, 1] },
  { name: 'TypeScript', logo: typescriptLogo, position: [-2, 0, -1] },
  { name: 'Git', logo: gitLogo, position: [1, 1, 1] },
  { name: 'HTML', logo: htmlLogo, position: [1, 1, -1] },
  { name: 'CSS', logo: cssLogo, position: [-1, 1, 1] },
  { name: 'Java', logo: javaLogo, position: [0, 0, 2] },
  { name: 'MySQL', logo: mysqlLogo, position: [0, 0, -2] },
  { name: 'Supabase', logo: supabaseLogo, position: [1.5, 0.5, -1.5] },
  { name: 'C Language', logo: clogo, position: [-1.5, -0.5, 1.5] },
  { name: 'Firebase', logo: firebase, position: [-1, 0, -1] },
];

export const FloatingCube = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {logos.map((logo) => (
        <Html
          key={logo.name}
          position={logo.position as [number, number, number]}
          center
          distanceFactor={10}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-background/80 backdrop-blur-sm rounded-lg p-2 border border-primary/20 hover:border-primary/50 transition-all">
            <img 
              src={logo.logo} 
              alt={logo.name}
              className="w-full h-full object-contain"
            />
          </div>
        </Html>
      ))}
    </group>
  );
};
