import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certification';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
