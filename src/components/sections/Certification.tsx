import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltedCard from "@/components/TiltedCard";
import { Stars3D } from "@/components/3d/Stars3D";

const certifications = [
  {
    name: "Java Foundations",
    organization: "Oracle",
    period: "2025",
    description:
      "Learned foundational Java programming concepts, including OOP, syntax, and algorithms.",
    certificate: "/placeholder.svg",
  },
  {
    name: "C and C++ Programming",
    organization: "Wizer Educations",
    period: "2023 at Gobichettipalayam",
    description:
      "C and C++ are powerful programming languages that form the foundation for modern software development.",
    certificate: "/certifications/c_and_cpp.jpg",
  },
  {
    name: "Generative AI with Diffusion Models",
    organization: "NVIDIA",
    period: "2025",
    description:
      "Learned about diffusion models and transformer architectures to generate realistic images.",
    certificate: "/certifications/nvidia.png",
  },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-24 overflow-hidden"
    >
      <Stars3D />

      {/* 📦 Main Content */}
      <div className="relative z-10 max-w-7xl w-full">

        {/* Heading */}
        <ScrollReveal className="text-center mb-16" origin="up" distance={20}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {certifications.map((cert, index) => (
            <ScrollReveal
              key={cert.name}
              className="flex justify-center"
              origin="up"
              distance={30}
              delay={0.2 + index * 0.1}
            >
              <TiltedCard
                imageSrc={cert.certificate}
                altText={cert.name}
                captionText={`${cert.name} - ${cert.organization}`}
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="bg-black/80 p-4 rounded-xl border border-white/20 text-white w-full backdrop-blur-md">
                    <p className="font-bold text-lg">{cert.name}</p>
                    <p className="text-sm text-gray-300">
                      {cert.organization}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {cert.period}
                    </p>
                  </div>
                }
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;