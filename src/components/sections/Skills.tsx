import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Stars3D } from '@/components/3d/Stars3D';
const skills = [
  { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C', 'Java'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'React', 'JavaScript', 'Three.js', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Supabase'] },
  { category: '3D & Graphics', items: ['Three.js', 'React Three Fiber'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Vite'] },
  { category: 'AI & ML', items: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API'] },
  { category: 'Databases', items: ['MongoDB', 'Firebase', 'MySQL', 'Supabase'] },
  { category: 'Cloud & DevOps', items: ['Netlify', 'Vercel', 'Render'] },
];



export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Section Stars Background */}
      <div className="absolute inset-0 -z-20 bg-[#030014]">
        <Stars3D />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Section Heading */}
        <ScrollReveal className="text-center mb-16" origin="up" distance={20} delay={0}>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </ScrollReveal>

        <ScrollReveal className="grid md:grid-cols-2 gap-8" origin="up" distance={20} delay={0.1}>
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-card/40 border border-border rounded-lg p-6 hover:shadow-[var(--shadow-primary)] transition-all duration-300 animate-fade-in"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2 hover-scale"
                  >
                    {skill}
                  </Badge>
                ))}
                
              </div>
               
            </div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
};
