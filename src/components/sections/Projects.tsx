// src/pages/Projects.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Stars3D } from "@/components/3d/Stars3D";
import { projects } from "@/components/sections/data/ProjectData.ts";  // ✅ IMPORT DATA

export const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-[#030014]">
        <Stars3D />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <ScrollReveal className="text-center mb-16" origin="up" distance={20}>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </ScrollReveal>

        <ScrollReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" origin="up" distance={30} delay={0.1}>
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden bg-black/70 border border-white/20 hover:shadow-lg transition-transform duration-300 hover:scale-[1.03] cursor-pointer rounded-2xl"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="flex flex-col p-6 flex-1 justify-between">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description.slice(0, 100)}...</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.demo && (
                    <Button size="sm" onClick={() => window.open(project.demo, "_blank")} className="bg-primary text-white">
                      Live Demo
                    </Button>
                  )}
                  <Button size="sm" variant="outline" onClick={() => navigate(`/project/${project.id}`)}>
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
