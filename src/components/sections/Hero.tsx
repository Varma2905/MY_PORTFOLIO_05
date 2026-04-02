import { Scene3D } from "@/components/3d/Scene3D";
import { Github, Linkedin, Code, Download } from "lucide-react";
import profileImg from "@/assets/me 3.jpg";
import ScrollReveal from "@/components/ui/ScrollReveal";
import React, { useState, useEffect, memo } from "react";
import Typewriter from "@/components/ui/Typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

interface SocialLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  label: string;
}

const socialLinks: SocialLinkProps[] = [
  { icon: Github, label: "GitHub", url: "https://github.com/Varma2905" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/gunavarman-p-b5ba67319/" },
  { icon: Code, label: "LeetCode", url: "https://leetcode.com/u/GUNAVARMAN/" },
];

// ✅ Profile Image
const ProfileImage = memo(() => (
  <div className="flex justify-center md:justify-end items-center sm:p-12 p-0 py-2">
    <div className="relative group">
      <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105">

        {/* Border */}
        <div className="absolute inset-0 border-4 border-indigo-400/40 rounded-2xl z-20 group-hover:border-violet-400/70 transition-all duration-700" />

        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <div className="absolute inset-0 border-8 border-violet-400/20 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-2xl" />
        </div>
      </div>
    </div>
  </div>
));

// ✅ Social Link (NO BLACK)
const SocialLink = memo(({ icon: Icon, url, label }: SocialLinkProps) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="group p-3">
    <div className="rounded-xl bg-black/40 p-2 border border-indigo-500/40 group-hover:border-violet-500 transition-all duration-300 shadow-lg shadow-indigo-900/20">
      <Icon className="w-5 h-5 text-indigo-300 group-hover:text-white" />
    </div>
  </a>
));

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-12 md:px-20 lg:px-32 py-20 overflow-hidden
      bg-gradient-to-b from-indigo-900 via-violet-900 to-indigo-950"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        {/* 3D Scene */}
        <div className="absolute inset-0 opacity-80">
          <Scene3D />
        </div>

        {/* ✨ CRISP INDIGO GLOW (DEEP VIOLET) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.2),transparent_75%)]" />
      </div>

      {/* LEFT CONTENT */}
      <ScrollReveal
        className={`relative z-10 w-full md:w-3/5 text-center md:text-left space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
        origin="left"
        distance={40}
      >
        <h1 className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl font-bold">
          Hi, I'm
        </h1>

        <h1 className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl font-bold">
          Gunavarman P
        </h1>

        {/* Typewriter */}
        <div className="text-xl sm:text-2xl md:text-3xl text-indigo-200 min-h-[4rem]">
          <Typewriter
            words={[
              "AI & Full Stack Developer",
              "AI Engineer",
              "Tech Enthusiast",
            ]}
            typingSpeed={150}
            erasingSpeed={60}
            pause={1000}
          />
        </div>

        <p className="text-indigo-200 max-w-xl mx-auto md:mx-0">
          Building innovative, functional, and user-friendly digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-violet-500 transition shadow-lg shadow-indigo-500/40 w-full sm:w-auto text-center"
          >
            View Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-violet-500 transition shadow-lg shadow-indigo-500/40 w-full sm:w-auto text-center"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center px-8 py-3 rounded-full border border-indigo-400 text-indigo-200 hover:bg-indigo-500 hover:text-white transition w-full sm:w-auto"
          >
            <Download className="mr-2 h-5 w-5" /> Resume
          </a>
        </div>

        {/* Social */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          {socialLinks.map((s) => (
            <SocialLink key={s.label} {...s} />
          ))}
        </div>
      </ScrollReveal>

      {/* RIGHT IMAGE */}
      <ScrollReveal className="relative z-10 mt-10 md:mt-0 w-full md:w-auto flex justify-center md:justify-end" origin="right">
        <ProfileImage />
      </ScrollReveal>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
        <div className="w-[30px] h-[50px] border-2 border-indigo-300 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-indigo-300 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);