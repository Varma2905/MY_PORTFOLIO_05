import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Menu, X, Sparkles, Home, User, Code2, Rocket, ScrollText, GraduationCap, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ✅ Floating “Ready to Innovate” badge
const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/70 border border-white/20">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ✅ Desktop Top Nav (Hidden on Mobile) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          scrolled ? "bg-black/80 shadow-lg border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <StatusBadge />
          <div className="flex gap-3 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeSection === item.href.slice(1) ? "text-white bg-gradient-to-r from-primary to-secondary" : "text-muted-foreground hover:text-white"}`}
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-2 border-primary/60 text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 rounded-full"
              asChild
            >
              <a href="/resume.pdf" download="Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Top Status Header (Minimalist) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <StatusBadge />
        </div>
      </div>

      {/* ✅ Premium Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl animate-fade-in flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"
            onClick={() => setMenuOpen(false)}
          >
            <X className="w-8 h-8 text-indigo-400" />
          </button>

          <div className="flex flex-col items-center gap-4">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-2xl font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? "text-indigo-400 scale-110" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
              className="mt-4"
            >
              <Button
                variant="outline"
                className="border-indigo-500 text-indigo-400 rounded-full px-8 py-6 h-auto text-lg uppercase font-bold"
                asChild
              >
                <a href="/resume.pdf" download="Resume.pdf">
                  <Download className="mr-3 h-6 w-6" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};