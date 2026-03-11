import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  className?: string;
  origin?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
  delay?: number;
};

export const ScrollReveal = ({ children, className = '', origin = 'up', distance = 30, delay = 0 }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReduced) {
      // If user prefers reduced motion, immediately show
      controls.set({ opacity: 1, y: 0, x: 0 });
      return;
    }
    if (inView) {
      controls.start({ opacity: 1, y: 0, x: 0, transition: { duration: 0.6, delay } });
    }
  }, [controls, inView, delay, prefersReduced]);

  const initial = { opacity: 0 } as any;
  if (origin === 'up') initial.y = distance;
  if (origin === 'down') initial.y = -distance;
  if (origin === 'left') initial.x = distance;
  if (origin === 'right') initial.x = -distance;

  return (
    <motion.div ref={ref} initial={initial} animate={controls} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
