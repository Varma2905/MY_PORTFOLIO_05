import React, { useState, memo } from "react";
import { Github, Linkedin, Mail, Code, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Stars3D } from "@/components/3d/Stars3D";

// -------------------- Social Link --------------------
const SocialLink = memo(({ icon: Icon, url, label }: { icon: any, url: string, label: string }) => {
  const isMail = url.startsWith("mailto:");
  return (
    <a
      href={url}
      {...(!isMail && { target: "_blank", rel: "noopener noreferrer" })}
      aria-label={label ?? url}
      className="group relative p-3"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </a>
  );
});

// -------------------- Social Links --------------------
const socialLinks = [
  { icon: Github, url: "https://github.com/Varma2905", label: "GitHub" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/gunavarman-p-b5ba67319/", label: "LinkedIn" },
  { icon: Code, url: "https://leetcode.com/u/GUNAVARMAN/", label: "LeetCode" },
];

// -------------------- Contact Component --------------------
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMsg = data.error || (response.status === 500 ? "Backend Error: DB Connection Timed Out. Please Check Whitelist" : "Failed to send message.");
        throw new Error(errorMsg);
      }

      toast({
        title: "Success",
        description: "Message sent successfully!!",
      });

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Error",
        description: err.message || "Unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 py-24 overflow-hidden bg-gradient-to-b from-[#1a0b2e] via-[#11001e] to-[#22003c]">

      {/* ⭐ 3D Stars & Indigo-Violet Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* ✨ Stars */}
        <div className="absolute inset-0 opacity-50">
          <Stars3D />
        </div>
        {/* 🌌 Indigo + Violet Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.25),rgba(139,92,246,0.15),transparent_75%)]" />
      </div>

      {/* -------------------- Contact Section -------------------- */}
      <section id="contact" className="relative z-10 py-10 flex flex-col items-center justify-center w-full">

        <ScrollReveal className="text-center mb-16" origin="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
        </ScrollReveal>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6 px-4">

          {/* ---------- Contact Form / Success Message ---------- */}
          <Card className="p-8 bg-black/50 border border-gray-700 backdrop-blur-md flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            ) : (
              <ScrollReveal className="text-center py-10" origin="up">
                <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400 mb-8">
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  Send another message
                </Button>
              </ScrollReveal>
            )}
          </Card>

          {/* ---------- Contact Info ---------- */}
          <div className="space-y-6">

            <Card className="p-6 bg-black/50 border border-gray-700 flex items-center gap-4 backdrop-blur-md">
              <div className="p-3 bg-purple-700/20 rounded-full">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-300">varma2905.tnp@gmail.com</p>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border border-gray-700 flex items-center gap-4 backdrop-blur-md">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Phone className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-300">+91 93616 99358</p>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border border-gray-700 flex items-center gap-4 backdrop-blur-md">
              <div className="p-3 bg-pink-500/20 rounded-full">
                <MapPin className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-300">Gobichettipalayam, Erode, Tamil Nadu</p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* -------------------- Social Section -------------------- */}
      <section className="relative z-10 py-10 flex flex-col items-center justify-center w-full gap-8">

        <ScrollReveal className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300">
            Find me on these platforms and let's build something amazing together.
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex gap-6 justify-center" delay={0.2}>
          {socialLinks.map((social) => (
            <SocialLink key={social.url} {...social} />
          ))}
        </ScrollReveal>

      </section>
    </div>
  );
};