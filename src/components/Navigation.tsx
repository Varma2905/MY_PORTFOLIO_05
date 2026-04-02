import { useState, useEffect, memo } from "react";
import { Button } from "./ui/button";
import { Download, Menu, X, Sparkles } from "lucide-react";

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

      {/* ✅ Mobile Top Status Header (New) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <StatusBadge />
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu (Secondary approach) */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl animate-fade-in flex flex-col items-center justify-center gap-8">
            <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
              <X className="w-10 h-10" />
            </button>
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.href)} className={`text-3xl font-bold transition-all duration-300 ${activeSection === item.href.slice(1) ? "text-purple-400 scale-110" : "text-white/60 hover:text-white"}`}>
                {item.label}
              </button>
            ))}
        </div>
      )}

      {/* ✅ Mobile Bottom Navigation (Floating Tab Bar) */}
      <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-[400px]">
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] py-4 px-8 flex justify-between items-center shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                activeSection === item.href.slice(1) ? "text-purple-400 scale-110" : "text-white/40"
              }`}
            >
              <span className="text-[11px] font-bold uppercase tracking-widest">{item.label}</span>
              {activeSection === item.href.slice(1) && (
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)]" />
              )}
            </button>
          ))}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <Menu className="w-6 h-6" />
            <span className="text-[11px] font-bold uppercase tracking-widest">More</span>
          </button>
        </div>
      </div>
    </>
  );
};