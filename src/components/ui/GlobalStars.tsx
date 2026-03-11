import React from 'react';
import { Stars3D } from '@/components/3d/Stars3D';

/**
 * Mounts a single global Stars3D instance behind the app content.
 * Positioned absolutely via CSS in the component so it's always behind page content.
 */
export const GlobalStars: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-30 pointer-events-none">
      <Stars3D />
    </div>
  );
};

export default GlobalStars;
