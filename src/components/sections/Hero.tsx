import React, { useState, useEffect, memo } from "react";
import { Scene3D } from "@/components/3d/Scene3D";
import { Github, Linkedin, Code, Download } from "lucide-react";
import profileImg from "@/assets/me 3.jpg";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Typewriter from "@/components/ui/Typewriter";
import Aurora from "@/components/Aurora";
import AOS from "aos";
import "aos/dist/aos.css";

interface SocialLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  label: string;
}

const socialLinks: SocialLinkProps[] = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/Varma2905",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gunavarman-p-b5ba67319/",
  },
  {
    icon: Code,
    label: "LeetCode",
    url: "https://leetcode.com/u/GUNAVARMAN/",
  },
];

// ✅ Memoized Profile Image
const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-2xl blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-2xl blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-2xl blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-2xl z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

// ✅ Social Link Component
const SocialLink = memo(({ icon: Icon, url, label }: SocialLinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative p-3"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
    <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
    </div>
  </a>
));

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
    setIsLoaded(true);
  }, []);

  // ✅ Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between pl-0 md:pl-8 pr-8 md:pr-16 overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#7cff67","#B19EEF","#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Left Content */}
      <ScrollReveal
        className={`relative z-10 w-full md:w-1/2 text-left space-y-6 transition-all duration-1000 pl-8 md:pl-0 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        origin="left"
        distance={40}
      >
        <h1
          className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          data-aos="fade-up"
        >
          Hi, I'm
        </h1>

        <h1
          className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          data-aos="fade-up"
        >
          Gunavarman P
        </h1>

        {/* ✅ Typewriter */}
        <div
          className="text-2xl sm:text-3xl md:text-4xl text-gray-300 min-h-[3rem] font-medium "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Typewriter
            words={["AI & Full Stack Developer","AI Engineer", "Tech Enthusiast"]}
            typingSpeed={150}
            erasingSpeed={60}
            pause={1000}
          />
        </div>

        <p
          className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Building innovative, functional, and user-friendly digital experiences.
        </p>

        {/* ✅ Buttons with Smooth Scroll */}
        <div
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-start items-start"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
          >
            Contact Me
          </a>

          <a
            href="public\Purple and Pink Gradient Neon Programmer Freelance Resume.pdf"
            download="Resume.pdf"
            className="flex items-center px-6 py-3 rounded-full border-2 border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-500 hover:text-white hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" /> Resume
          </a>
        </div>

        {/* ✅ Social Links */}
        <div className="mt-6 flex flex-wrap justify-start gap-6">
          {socialLinks.map((social) => (
            <SocialLink
              key={social.label}
              icon={social.icon}
              url={social.url}
              label={social.label}
            />
          ))}
        </div>
      </ScrollReveal>

      {/* ✅ Right Side - Profile Image */}
      <ScrollReveal className="relative z-10 mt-8 md:mt-0" origin="right" distance={40}>
        <ProfileImage />
      </ScrollReveal>
    </section>
  );
};

export default memo(Hero);
