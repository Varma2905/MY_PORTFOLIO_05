import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Stars3D } from '@/components/3d/Stars3D';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading development of cutting-edge 3D web applications and managing a team of developers.',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed responsive web applications using React and integrated 3D visualizations.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Studio',
    period: '2018 - 2020',
    description: 'Built and maintained multiple client projects using modern web technologies.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden ">
      {/* Section Stars Background */}
      <div className="absolute inset-0 -z-20 bg-[#030014]">
        <Stars3D />
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-4xl w-full">
        <ScrollReveal className="text-center mb-8" origin="up" distance={20} delay={0}>
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Experience
          </h2>
        </ScrollReveal>
        
        <ScrollReveal className="space-y-6" origin="up" distance={20} delay={0.1}>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-[var(--shadow-primary)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-primary">{exp.title}</h3>
                <span className="text-secondary text-sm">{exp.period}</span>
              </div>
              <p className="text-accent text-lg mb-2">{exp.company}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </Card>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};
