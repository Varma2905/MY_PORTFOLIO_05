import { useState, useEffect, memo } from "react";
import { Button } from "./ui/button";
import { Download, Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  /*{  label: "Experience", href: "#experience" }, */
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ✅ Logo / Badge */}
          <StatusBadge />

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex gap-3 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden
                  ${
                    activeSection === item.href.slice(1)
                      ? "text-white bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(255,255,255,0.2)] scale-105"
                      : "text-muted-foreground hover:text-white"
                  }`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 opacity-0 hover:opacity-100
                    bg-gradient-to-r from-primary/30 to-secondary/30 blur-sm`}
                ></span>

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

          {/* ✅ Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-primary transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu (Secondary approach, let's keep it but enhance) */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-2xl font-bold transition-all duration-300
                  ${
                    activeSection === item.href.slice(1)
                      ? "text-primary scale-110"
                      : "text-white/60 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="public\Purple and Pink Gradient Neon Programmer Freelance Resume.pdf"
              download="Resume.pdf"
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold"
            >
              <Download className="inline mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      )}

      {/* ✅ Mobile Bottom Navigation (Native App Feel) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl py-3 px-6 flex justify-between items-center shadow-2xl">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                activeSection === item.href.slice(1) ? "text-primary scale-110" : "text-white/40"
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full mb-1 transition-all ${
                activeSection === item.href.slice(1) ? "bg-primary opacity-100" : "bg-transparent opacity-0"
              }`} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center gap-1 text-white/40"
          >
            <div className="w-1.5 h-1.5 rounded-full mb-1 bg-transparent opacity-0" />
            <Menu className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">More</span>
          </button>
        </div>
      </div>
    </nav>
  );
};  