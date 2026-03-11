import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certification';

const Index = () => {
  return (
    <div>
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
