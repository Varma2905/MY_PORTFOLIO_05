import { Card } from '@/components/ui/card';
import ScrollReveal from '@/components/ui/ScrollReveal';


const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description:
      'Leading development of cutting-edge 3D web applications and managing a team of developers.',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description:
      'Developed responsive web applications using React and integrated 3D visualizations.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Studio',
    period: '2018 - 2020',
    description:
      'Built and maintained multiple client projects using modern web technologies.',
  },
];

import { Stars3D } from '@/components/3d/Stars3D';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-24 overflow-hidden bg-gradient-to-b from-[#1a0b2e] via-[#11001e] to-[#22003c]"
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
      <div className="relative z-10 max-w-4xl w-full">

        {/* Heading */}
        <ScrollReveal className="text-center mb-16" origin="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative space-y-6">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full opacity-30 hidden md:block" />

          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              origin="up"
              distance={30}
              delay={index * 0.2}
            >
              <Card className="relative p-6 bg-card/50 backdrop-blur-md border-border hover:shadow-[var(--shadow-primary)] transition-all duration-300">

                {/* Timeline Dot */}
                <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-[#030014] hidden md:block" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">
                    {exp.title}
                  </h3>
                  <span className="text-secondary text-sm mt-1 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-accent text-base md:text-lg mb-2">
                  {exp.company}
                </p>

                <p className="text-muted-foreground">
                  {exp.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};