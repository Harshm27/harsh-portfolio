import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks — I'll reply within 48 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to Data/AI roles. For collaborations or opportunities, reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4" asChild>
              <a href="mailto:harsh.malhotra24@imperial.ac.uk">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-left">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">harsh.malhotra24@imperial.ac.uk</div>
                </span>
              </a>
            </Button>

            <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4" asChild>
              <a href="https://www.linkedin.com/in/harshmalhotra27" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="text-left">
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">linkedin.com/in/harshmalhotra27</div>
                </span>
              </a>
            </Button>

            <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4" asChild>
              <a href="https://github.com/harshmalhotra" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-primary" />
                <span className="text-left">
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-muted-foreground">github.com/harshmalhotra</div>
                </span>
              </a>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background resize-none"
              />
            </div>
            {/* Honeypot field */}
            <input type="text" name="website" className="hidden" tabIndex={-1} />
            <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>© {new Date().getFullYear()} Harsh Malhotra. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
