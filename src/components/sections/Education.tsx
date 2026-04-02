import { Card } from '@/components/ui/card';

import ScrollReveal from '@/components/ui/ScrollReveal';

const education = [
  {
    degree: '10th Grade',
    institution: 'Kamban Kalvi Nilaiyam Higher Secondary School',
    period: '2020 - 2021',
    description:
      'Completed secondary education with strong performance in mathematics and science.',
  },
  {
    degree: '12th Grade',
    institution:
      'Kamban Kalvi Nilaiyam Higher Secondary School, Gobichettipalayam',
    period: '2022 - 2023',
    description:
      'Completed higher secondary education with a focus on computer science subjects.',
    marks: 'Percentage: 90.33%',
  },
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'Kongu Engineering College, Perundurai',
    period: '2023 - 2027 (Expected)',
    description:
      "Pursuing a Bachelor's degree with a focus on software development, AI, and web technologies.",
    marks: 'Current CGPA: 8.5/10',
  },
];

import { Stars3D } from '@/components/3d/Stars3D';

export const Education = () => {
  return (
    <section
      id="education"
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
            Education
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </ScrollReveal>

        {/* Timeline Cards */}
        <div className="space-y-6 relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full opacity-30 hidden md:block" />

          {education.map((edu, index) => (
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
                    {edu.degree}
                  </h3>
                  <span className="text-secondary text-sm mt-1 md:mt-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-accent text-base md:text-lg mb-2">
                  {edu.institution}
                </p>

                <p className="text-muted-foreground mb-2">
                  {edu.description}
                </p>

                {edu.marks && (
                  <p className="text-muted-foreground font-medium">
                    {edu.marks}
                  </p>
                )}
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};