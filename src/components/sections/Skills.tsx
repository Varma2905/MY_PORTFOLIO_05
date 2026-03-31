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
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[#030014]"
    >
      {/* ⭐ Stars Background */}
      <div className="absolute inset-0 z-0">
        <Stars3D />
      </div>

      {/* 📦 Content */}
      <div className="relative z-10 max-w-6xl w-full">

        {/* Heading */}
        <ScrollReveal className="text-center mb-16" origin="up">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <ScrollReveal
              key={skillGroup.category}
              origin="up"
              distance={30}
              delay={index * 0.1}
            >
              <div className="bg-card/40 backdrop-blur-md border border-border rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">

                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1.5 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};