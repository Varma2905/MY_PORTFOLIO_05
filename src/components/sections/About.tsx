import { Card } from '@/components/ui/card';
import { Target, Rocket, Lightbulb } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Stars3D } from '@/components/3d/Stars3D';
import Orb from '@/components/Orb';
import React from 'react';

export const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 overflow-hidden "
    >
      {/* Stars Background */}
      <div className="absolute inset-0 -z-20 bg-[#030014]">
        <Stars3D />
        <div className="absolute inset-0 " />
      </div>

      {/* Orb Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Orb hue={240} backgroundColor="#030014" />
      </div>*

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Section Heading */}
        <ScrollReveal className="text-center mb-16" origin="up" distance={20} delay={0}>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </ScrollReveal>

        <ScrollReveal className="grid md:grid-cols-2 gap-8" origin="up" distance={30} delay={0.1}>
          {/* Left Column - Main Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Passionate about AI & Full-Stack Development
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated B.Tech student specializing in Artificial Intelligence and Data Science at Kongu Engineering College. My journey in technology is driven by a passion for solving complex real-world problems through innovative solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              With a strong foundation in both frontend and backend technologies, I enjoy creating end-to-end solutions that make a meaningful impact. My expertise spans from machine learning algorithms to modern web development frameworks.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-primary/10 border-primary/20 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </Card>
              <Card className="p-6 bg-secondary/10 border-secondary/20 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">8.34</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </Card>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Current Focus</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building AI-powered applications and mastering full-stack development to create impactful solutions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-start gap-3">
                <Rocket className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Goals</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To become a versatile developer who can bridge the gap between AI research and practical applications.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Interests</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Machine Learning, Web Development, Data Science, and exploring emerging technologies.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
