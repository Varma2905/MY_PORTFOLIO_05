import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, User } from "lucide-react";
import { Stars3D } from "@/components/3d/Stars3D";

// 🔤 Typewriter Effect
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

// 🔘 Icon Button
const IconButton = ({ Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 120 }}
    className="relative group hover:scale-110 transition-transform duration-300"
  >
    <div className="p-3 bg-indigo-950/40 rounded-full border border-indigo-500/20">
      <Icon className="w-6 h-6 text-indigo-400" />
    </div>
  </motion.div>
);

// 🌌 Welcome Screen
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
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* 🌟 Stars Background (Disabled to check for white color source) */}
          {/* <div className="absolute inset-0 opacity-40">
            <Stars3D />
          </div> */}

          {/* 📦 Content */}
          <div className="relative min-h-screen flex items-center justify-center px-4 z-10">
            <motion.div
              className="w-full max-w-4xl mx-auto text-center space-y-8"
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {/* 🔘 Icons */}
              <div className="flex justify-center gap-6 mb-8">
                <IconButton Icon={Code2} delay={0.2} />
                <IconButton Icon={User} delay={0.4} />
                <IconButton Icon={Github} delay={0.6} />
              </div>

              {/* 🧠 Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                  <div className="flex flex-col items-center">
                    <div className="flex gap-4 sm:gap-6">
                      <span className="text-indigo-200 tracking-wide">
                        Welcome
                      </span>
                      <span className="text-indigo-200 tracking-wide">
                        To
                      </span>
                      <span className="text-indigo-200 tracking-wide">
                        My
                      </span>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        Portfolio
                      </span>
                    </div>
                  </div>
                </h1>
              </motion.div>

              {/* 👤 Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xl font-medium text-indigo-200 bg-indigo-950/40 border border-indigo-500/20"
              >
                <Code2 className="w-5 h-5 text-indigo-400" />
                <TypewriterEffect text="GUNAVARMAN P" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;