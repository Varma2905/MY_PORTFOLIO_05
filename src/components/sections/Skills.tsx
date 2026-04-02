import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Stars3D } from '@/components/3d/Stars3D'; // ⭐ fixed path

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
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-12 md:px-20 lg:px-32 py-20 md:py-0 overflow-hidden bg-gradient-to-b from-[#1a0b2e] via-[#11001e] to-[#22003c]"
    >

      {/* ⭐ 3D Stars & Indigo-Violet Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* ✨ Stars */}
        <div className="absolute inset-0 opacity-50">
          <Stars3D />
        </div>
        {/* 🌌 Indigo + Violet Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.25),rgba(139,92,246,0.15),transparent_75%)]" />
      </div>

      {/* 📦 Content */}
      <div className="relative z-10 max-w-6xl w-full">

        {/* Heading */}
        <ScrollReveal className="text-center mb-16" origin="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
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
              <div className="bg-indigo-950/40 border border-indigo-500/20 rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">

                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-300">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1.5 bg-indigo-900/30 text-indigo-100 border border-indigo-500/10 hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300"
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