import { Card } from '@/components/ui/card';
import { Target, Rocket, Lightbulb } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Stars3D } from '@/components/3d/Stars3D';

export const About = () => {
  return (
    <section
      id="about"
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
      <div className="relative z-10 max-w-6xl w-full">

        {/* Heading */}
        <ScrollReveal className="text-center mb-16" origin="up" distance={20}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </ScrollReveal>

        <ScrollReveal className="grid md:grid-cols-2 gap-8" origin="up" distance={30} delay={0.1}>

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-indigo-200">
              Passionate about AI & Full-Stack Development
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a dedicated B.Tech student specializing in Artificial Intelligence and Data Science at Kongu Engineering College.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              I enjoy building end-to-end solutions that solve real-world problems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-indigo-900/20 border-indigo-500/20 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-indigo-400 mb-2">15+</div>
                <div className="text-sm text-gray-400">
                  Projects Completed
                </div>
              </Card>

              <Card className="p-6 bg-indigo-900/20 border-indigo-500/20 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-purple-400 mb-2">7.31</div>
                <div className="text-sm text-gray-400">
                  CGPA
                </div>
              </Card>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <Card className="p-6 bg-indigo-900/20 border-indigo-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Current Focus</h4>
                  <p className="text-gray-400 text-sm">
                    Building AI-powered applications and mastering full-stack development.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-indigo-900/20 border-indigo-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Rocket className="w-5 h-5 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Goals</h4>
                  <p className="text-gray-400 text-sm">
                    Bridge AI research with real-world applications.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-indigo-900/20 border-indigo-500/20 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Interests</h4>
                  <p className="text-gray-400 text-sm">
                    ML, Web Dev, Data Science, Emerging Tech.
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