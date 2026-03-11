import React, { useEffect, useState } from "react";

const Typewriter = ({
  words = ["artificial intelligence", "full stack developer", "machine learning"],
  typingSpeed = 100,
  erasingSpeed = 60,
  pause = 1500,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let delay = isDeleting ? erasingSpeed : typingSpeed;

    if (!isDeleting && subIndex === current.length) delay = pause;
    if (isDeleting && subIndex === 0) delay = 300;

    const timeout = setTimeout(() => {
      if (!isDeleting && subIndex < current.length) {
        setSubIndex((s) => s + 1);
      } else if (!isDeleting && subIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && subIndex > 0) {
        setSubIndex((s) => s - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((wi) => (wi + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIndex, words, typingSpeed, erasingSpeed, pause]);

  const current = words[wordIndex % words.length];
  const shownText = current.slice(0, subIndex);

  return (
    <span className="inline-flex items-center">
      <span className="text-white font-semibold">{shownText}</span>
      <span
        aria-hidden="true"
        className={`ml-1 w-1 h-6 ${blink ? "bg-indigo-400" : "bg-transparent"} rounded-sm transition-colors`}
      />
    </span>
  );
};

export default Typewriter;