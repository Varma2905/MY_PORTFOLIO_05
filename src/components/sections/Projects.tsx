import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Stars3D } from "@/components/3d/Stars3D";

import { projects } from "@/components/sections/data/ProjectData";

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-24 overflow-hidden"
    >
      <Stars3D />

      {/* 📦 Content */}
      <div className="relative z-10 max-w-6xl w-full">

        {/* Heading */}
        <ScrollReveal className="text-center mb-16" origin="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              origin="up"
              distance={30}
              delay={index * 0.1}
            >
              <Card className="flex flex-col overflow-hidden bg-black/70 border border-white/20 rounded-2xl transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 flex-1 justify-between">

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {project.description.slice(0, 100)}...
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-muted/50 backdrop-blur rounded-md text-muted-foreground border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.demo && (
                      <Button
                        size="sm"
                        className="bg-primary text-white hover:opacity-90"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        Live Demo
                      </Button>
                    )}

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      Details
                    </Button>
                  </div>

                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;