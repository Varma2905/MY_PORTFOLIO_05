import React, { useState, memo } from "react";
import { Github, Linkedin, Mail, Code, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Stars3D } from "@/components/3d/Stars3D";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client"; 
type SocialLinkProps = {
  icon: React.ComponentType<any>;
  url: string;
  label?: string;
};

const SocialLink = memo(({ icon: Icon, url, label }: SocialLinkProps) => {
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
export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // ✅ Form Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name, email, message },
      });

      if (error) {
        console.error("Error sending email:", error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Message sent successfully!",
        });
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 -z-20 bg-[#030014]">
        <Stars3D />
      </div>

      {/* -------------------- Contact Section -------------------- */}
      <section id="contact" className="relative py-20 flex flex-col items-center justify-center">
        <ScrollReveal className="text-center mb-8" origin="up" distance={20} delay={0}>
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
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
                <h3 className="font-semibold text-gray-100">Email</h3>
                <p className="text-gray-300">varma2905.tnp@gmail.com</p>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border border-gray-700 flex items-center gap-4 backdrop-blur-md">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Phone className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100">Phone</h3>
                <p className="text-gray-300">+91 93616 99358</p>
              </div>
            </Card>

            <Card className="p-6 bg-black/50 border border-gray-700 flex items-center gap-4 backdrop-blur-md">
              <div className="p-3 bg-pink-500/20 rounded-full">
                <MapPin className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-100">Location</h3>
                <p className="text-gray-300">Gobichettipalayam, Erode, Tamil Nadu</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* -------------------- Social Links Section -------------------- */}
      <section className="relative py-20 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-8">
        <ScrollReveal className="text-left md:w-1/2" origin="up" distance={20} delay={0}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300">
            Find me on these platforms and let's build something amazing together.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="flex flex-wrap justify-start md:justify-end gap-4 md:w-1/2"
          origin="up"
          distance={20}
          delay={0.2}
        >
          {socialLinks.map((social) => (
            <SocialLink key={social.url} icon={social.icon} url={social.url} label={social.label} />
          ))}
        </ScrollReveal>
      </section>
    </div>
  );
};
