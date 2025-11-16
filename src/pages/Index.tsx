import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectsNew from "@/components/ProjectsNew";
import TechStack from "@/components/TechStack";
import Hobbies from "@/components/Hobbies";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Experience />
      <ProjectsNew />
      <TechStack />
      <Hobbies />
      <ContactForm />
    </div>
  );
};

export default Index;
