// src/pages/ProjectDetails.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { projects } from "@/components/sections/data/ProjectData";

interface SocialLinkType {
  icon: React.ElementType;
  url: string;
  label: string;
}

const socialLinks: SocialLinkType[] = [
  {
    icon: FaGithub,
    url: "https://github.com/Varma2905",
    label: "GitHub",
  },
  {
    icon: FaGlobe,
    url: "https://your-live-demo-link.com", // 💥 Replace with your live site URL
    label: "Live Demo",
  },
];

// Optional ScrollReveal placeholder (replace if using actual library)
const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={className}>{children}</div>;

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Project not found!
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white overflow-hidden">


      <section className="relative z-10 py-16 px-6 md:px-20">
        {/* 🔙 Back Navigation */}
        <p
          onClick={() => navigate(-1)}
          className="mb-8 text-purple-400 hover:text-purple-300 cursor-pointer 
                     transition-colors duration-300 inline-flex items-center gap-2
                     hover:opacity-90 text-white font-medium px-6 py-2 rounded-lg"
        >
          ← Back to Projects
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h1>

            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              {project.description}
            </p>

            {/* Stats Cards */}
            <div className="flex gap-6 mb-6">
              <Card className="bg-[#0B0F24] border border-gray-800 p-4 rounded-xl">
                <span className="text-sm text-gray-400">Technologies</span>
                <p className="text-2xl font-bold">{project.tech.length}</p>
              </Card>

              {project.features && (
                <Card className="bg-[#0B0F24] border border-gray-800 p-4 rounded-xl">
                  <span className="text-sm text-gray-400">Features</span>
                  <p className="text-2xl font-bold">{project.features.length}</p>
                </Card>
              )}
            </div>

            {/* 🌐 Social Links (GitHub + Live Demo) */}
            <ScrollReveal
              className="flex flex-wrap justify-start md:justify-start gap-8 md:w-1/2 mb-8"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-16 h-16 
                               rounded-2xl bg-[#0B0F24] border border-gray-800
                               transition-all duration-300 hover:scale-110 
                               hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                  >
                    <Icon className="text-3xl text-gray-400 group-hover:text-purple-400 transition-all duration-300" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                                    from-purple-500/10 to-pink-500/10 opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                );
              })}
            </ScrollReveal>

            {/* 🧠 Technologies Used */}
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-gray-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Section: Image */}
          <div>
            <div className="bg-[#0B0F24] border border-gray-800 rounded-2xl shadow-xl p-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ✨ Features Section */}
        {project.features && (
          <Card className="mt-12 bg-[#0B0F24] border border-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">✨ Key Features</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </Card>
        )}
      </section>
    </div>
  );
};

export default ProjectDetails;
