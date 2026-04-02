import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certification';
import { Navigation } from '@/components/Navigation';
import { Stars3D } from '@/components/3d/Stars3D';


const Index = () => {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      <Stars3D />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
