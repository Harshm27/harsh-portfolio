import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/harsh-profile.png";
const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-primary/10 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: "1s"
      }}></div>
      </div>
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Harsh Malhotra</h1>
              <p className="text-xl md:text-2xl text-primary font-medium">AI & Data Science Professional</p>
            </div>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Building intelligent analytics systems that drive decisions and measurable outcomes.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed text-left md:text-base font-normal">
              MSc Business Analytics graduate from Imperial College London with experience in building AI and analytics
              solutions at PwC and across industry projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105" asChild>
                <a href="/cv.pdf" download="Harsh_Malhotra_CV.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  View CV
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToProjects} className="border-primary/20 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Photo Placeholder */}
          <div className="flex justify-center md:justify-end animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 border-2 border-primary/30 flex items-center justify-center shadow-glow hover:shadow-accent-glow transition-all duration-500 group-hover:scale-105 overflow-hidden">
                <img src={profileImage} alt="Harsh Malhotra - Data & AI Engineer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;