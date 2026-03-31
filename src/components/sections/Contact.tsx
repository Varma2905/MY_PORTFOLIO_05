import React, { useState, memo } from "react";
import { Github, Linkedin, Mail, Code, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Stars3D } from "@/components/3d/Stars3D";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
// -------------------- Social Link --------------------
const SocialLink = memo(({ icon: Icon, url, label }) => {
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      toast({
        title: "Success",
        description: "Message sent successfully!!",
      });
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
    <div className="relative min-h-screen text-white overflow-hidden bg-[#030014]">

      {/* ⭐ Stars Background */}
      <div className="absolute inset-0 z-0">
        <Stars3D />
      </div>

      {/* -------------------- Contact Section -------------------- */}
      <section id="contact" className="relative z-10 py-24 flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32">

        <ScrollReveal className="text-center mb-16" origin="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
        </ScrollReveal>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6 px-4">

          {/* ---------- Contact Form ---------- */}
          <Card className="p-8 bg-black/50 border border-gray-700 backdrop-blur-md">
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
      <section className="relative z-10 py-24 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 gap-12">

        <ScrollReveal className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300">
            Find me on these platforms and let's build something amazing together.
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex gap-6 md:w-1/2 justify-center md:justify-end" delay={0.2}>
          {socialLinks.map((social) => (
            <SocialLink key={social.url} {...social} />
          ))}
        </ScrollReveal>

      </section>
    </div>
  );
};