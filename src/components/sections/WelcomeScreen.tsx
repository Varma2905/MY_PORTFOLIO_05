import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";

// Typewriter Component
const TypewriterEffect = ({ text, speed = 120 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
};

// Moving Background
const BackgroundEffect = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 blur-3xl"
      animate={{ x: ["0%", "20%", "0%"], y: ["0%", "-10%", "0%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute inset-0 bg-gradient-to-tr from-indigo-400/10 via-transparent to-purple-400/10 blur-2xl"
      animate={{ x: ["0%", "-15%", "0%"], y: ["0%", "10%", "0%"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Optional floating circles */}
    <motion.div
      className="absolute w-72 h-72 bg-purple-600/20 rounded-full top-1/4 left-1/3 blur-3xl"
      animate={{ y: ["0%", "-20%", "0%"], x: ["0%", "15%", "0%"] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-60 h-60 bg-indigo-600/20 rounded-full top-2/3 left-2/3 blur-2xl"
      animate={{ y: ["0%", "25%", "0%"], x: ["0%", "-15%", "0%"] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// Icon Button
const IconButton = ({ Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 120 }}
    className="relative group hover:scale-110 transition-transform duration-300"
    role="button"
    aria-label="shortcut"
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300" />
    <div className="relative p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-6 h-6 text-white" />
    </div>
  </motion.div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => onLoadingComplete?.(), 800);
    }, 4000);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <BackgroundEffect />

          <div className="relative min-h-screen flex items-center justify-center px-4 z-20">
            <motion.div
              className="w-full max-w-4xl mx-auto text-center space-y-8 relative z-30"
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {/* Animated Icons */}
              <div className="flex justify-center gap-6 mb-8">
                <IconButton Icon={Code2} delay={0.2} />
                <IconButton Icon={User} delay={0.4} />
                <IconButton Icon={Github} delay={0.6} />
              </div>

              {/* Welcome Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                  {/* First line */}
                  <div className="flex flex-col items-center">
                    <div className="flex gap-6">
                      <span className="text-white tracking-wide">Welcome</span>
                      <span className="text-white tracking-wide">To</span>
                      <span className="text-white tracking-wide">My</span>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                        Portfolio
                      </span>
                    </div>
                  </div>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full text-xl font-medium text-white group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-md" aria-hidden="true" />
                <div className="relative flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                  <TypewriterEffect text="GUNAVARMAN P" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
