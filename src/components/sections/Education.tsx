import { Card } from '@/components/ui/card';
import { Stars3D } from '@/components/3d/Stars3D';


const education = [
  {
    degree: '10th Grade',
    institution: 'Kamban Kalvi Nilaiyam Higher Secondary School',
    period: '2020 - 2021',
    description: 'Completed secondary education with strong performance in mathematics and science.',
  },
  {
    degree: '12th Grade',
    institution: 'Kamban Kalvi Nilaiyam Higher Secondary School, Gobichettipalayam',
    period: '2022 - 2023',
    description: 'Completed higher secondary education with a focus on computer science subjects.',
    marks: 'Percentage: 90.33%',
  },
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'Kongu Engineering College, Perundurai',
    period: '2023 - 2027 (Expected)',
    description: 'Pursuing a Bachelor\'s degree with a focus on software development, AI, and web technologies.',
    marks: 'Current CGPA: 8.5/10',
  }

];

export const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-[#030014]">
        <Stars3D />
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-5">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-5 bg-card/50 backdrop-blur-sm border-border hover:shadow-[var(--shadow-primary)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-primary">{edu.degree}</h3>
                <span className="text-secondary text-sm">{edu.period}</span>
              </div>
              <p className="text-accent text-lg mb-2">{edu.institution}</p>
              <p className="text-muted-foreground mb-1">{edu.description}</p>
              <p className="text-muted-foreground font-medium">{edu.marks}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
