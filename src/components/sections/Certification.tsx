import { useState } from "react";
import { Stars3D } from "@/components/3d/Stars3D";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BounceCards from "@/components/BounceCards";

const certifications = [
  {
    name: "Java Foundations",
    organization: "Oracle",
    period: "2025",
    description:
      "Learned foundational Java programming concepts, including OOP, syntax, and algorithms.",
    certificate: "",
  },
  {
    name: "Azure AI Engineer Associate",
    organization: "Microsoft",
    period: "2026",
    description:
      "Focused on deploying and managing AI solutions using Microsoft Azure services. Learned about cognitive services, LLM deployment, and MLOps pipelines with Azure Machine Learning. Also explored responsible AI practices and model performance monitoring.",
    certificate: "",
  },
  {
    name: "C and C++ Programming",
    organization: "Wizer Educations",
    period: "2023 at Gobichettipalayam",
    description:
      "C and C++ are powerful programming languages that form the foundation for modern software development. Learned memory management, OOP, and performance optimization. Practiced file handling, data structures, and object-oriented patterns to improve efficiency and scalability.",
    certificate: "certifications/c_and_cpp.jpg",
  },
  {
    name: "Full Stack Development",
    organization: "Microsoft",
    period: "2025",
    description:
      "Covers both front-end and back-end development, including databases, APIs, and deployment pipelines. Worked with React, Node.js, and Express to build scalable web applications integrated with cloud services.",
    certificate: "",
  },
  {
    name: "Data Science",
    organization: "IBM",
    period: "2025",
    description:
      "Explored statistical analysis, data visualization, and machine learning techniques for real-world insights. Used Python libraries like pandas, NumPy, and scikit-learn for predictive analytics and model evaluation.",
    certificate: "",
  },
  {
    name: "Cybersecurity Fundamentals",
    organization: "Google",
    period: "2025",
    description:
      "Covered the core concepts of cybersecurity, including risk assessment, encryption, and threat mitigation. Learned about network security, penetration testing, and ethical hacking fundamentals.",
    certificate: "",
  },
  {
    name: "Generative AI with Diffusion Models (Deep Learning with Transformers)",
    organization: "NVIDIA",
    period: "2025",
    description:
      "Learned about diffusion models and transformer architectures to generate realistic images and fine-tune AI models. Explored Hugging Face pipelines, latent diffusion techniques, and text-to-image workflows for creative AI applications.",
    certificate: "public/Certifications/nvidia.png",
  },
];

export const Certifications = () => {
  const certificateImages = certifications
    .filter(cert => cert.certificate)
    .map(cert => cert.certificate);

  return (
    <section
      id="certifications"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#030014]">
        <Stars3D />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <ScrollReveal className="text-center mb-16" origin="up" distance={20}>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </ScrollReveal>

        {/* BounceCards for Certificates */}
        {certificateImages.length > 0 && (
          <ScrollReveal className="flex justify-center" origin="up" distance={30} delay={0.2}>
            <BounceCards
              images={certificateImages}
              containerWidth={600}
              containerHeight={400}
              enableHover={true}
            />
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default Certifications;