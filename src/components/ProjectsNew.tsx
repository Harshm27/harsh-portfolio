import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Github, ExternalLink, FileText } from "lucide-react";
import ProjectModal from "./ProjectModal";
const featuredProjects: Array<{
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  tech: string;
  results: string;
  tech_tags: string[];
  github?: string;
  report?: string;
  demo?: string;
  demoLabel?: string;
}> = [
  {
    title: "Logistics Analytics Dashboard",
    subtitle: "Logistics · Full-Stack · Analytics",
    description:
      "Full-stack web application for analyzing shipment data with route visualization, rate comparison, and analytics. Built with React, TypeScript, and Node.js.",
    overview:
      "A comprehensive logistics management system designed to streamline shipping operations for businesses handling multiple deliveries. Features bulk data processing via Excel import with intelligent format validation, real-time shipping rate comparison across major carriers (DHL, FedEx, UPS, Royal Mail), interactive map visualization with geocoding and marker clustering, analytics dashboard with Chart.js for shipment insights, and support for domestic and international shipping to 30+ countries.",
    tech: "Vanilla JavaScript, Leaflet.js, Chart.js, SheetJS, Node.js, Express, RESTful API, ParcelMonkey API integration, country-specific validation, E.164 phone formatting",
    results:
      "Enables businesses to analyze shipment data efficiently, compare carrier costs, and optimize logistics operations with visual analytics and route visualization.",
    tech_tags: ["React", "TypeScript", "Node.js", "Full-Stack"],
    github: "https://github.com/Harshm27/logistics-analytics-dashboard",
    demo: "https://shipment-dashboard-v2.vercel.app",
  },
  {
    title: "Cataract Detection (Computer Vision)",
    subtitle: "Healthcare · CNN · Computer Vision",
    description: "Smartphone-based cataract screening tool using CNNs for rapid, accessible clinical diagnosis.",
    overview:
      "Built a smartphone-based cataract screening tool using CNNs and image preprocessing to support rapid, accessible clinical diagnosis across rural and high-volume clinics.",
    tech: "CNN (transfer learning), OpenCV, image augmentation, Flask API, model evaluation scripts",
    results:
      "60% faster screening time; 22% increase in adoption during clinical pilots; showcased within PwC's healthcare innovation network",
    tech_tags: ["Python", "OpenCV", "CNN", "Healthcare AI"],
    demo: "https://www.pwc.in/case-studies/using-technology-to-facilitate-access-to-healthcare.html",
    demoLabel: "Case Study",
  },
  {
    title: "Sentiment Analysis of Airbnb Reviews",
    subtitle: "NLP · Classification · Marketing Analytics",
    description:
      "NLP-driven sentiment classifier uncovering guest experience patterns and host performance indicators.",
    overview:
      "Developed an NLP-driven sentiment classifier for Airbnb reviews to uncover guest experience patterns and host performance indicators for marketing and pricing strategy.",
    tech: "Python, TF-IDF, Logistic Regression / SVM, NLP preprocessing, Seaborn visual analytics",
    results:
      "85% accuracy on held-out test set; clear sentiment trends across property types; produced actionable insights for marketing and pricing decisions",
    tech_tags: ["Python", "NLP", "TF-IDF", "Scikit-learn"],
    demo: "https://harshm27.github.io/text-analytics-portfolio/airbnb_presentation.html",
  },
  {
    title: "Energy Analytics: Demand Response Modelling",
    subtitle: "Energy · Regression · Simulation",
    description: "Demand-response adoption scenarios estimating household savings and renewable energy integration.",
    overview:
      "Modelled demand-response adoption scenarios for a UK energy provider, estimating household savings and identifying behavioural and economic drivers supporting renewable energy integration. Full research report and interactive presentation showcase the complete methodology and findings.",
    tech: "Python (Pandas), regression modelling, scenario simulation, time-series patterns, visual analytics",
    results:
      "Forecasted household savings under multiple demand-response schemes; quantified adoption drivers; provided policy recommendations for renewable integration. [Full Report](https://Harshm27.github.io/wind-energy-analytics/Report_Group_H.pdf)",
    tech_tags: ["Python", "Pandas", "Regression", "Time-series"],
    github: "https://github.com/Harshm27/wind-energy-analytics",
    demo: "https://Harshm27.github.io/wind-energy-analytics/Presentation.html",
    demoLabel: "Presentation",
  },
  {
    title: "Healthcare Analytics: Peer Support & Depression",
    subtitle: "Public Health · Statistical Modelling · Causal Patterns",
    description: "Analysing peer support influence on depression risk across socioeconomic groups.",
    overview:
      "Analysed a 4,288-observation dataset to understand how peer support influences depression risk across socioeconomic groups, producing interpretable behavioural and demographic insights.",
    tech: "Python / R, logistic regression, feature engineering, statistical inference, ggplot2 / Seaborn",
    results:
      "Peer support significantly reduces depression likelihood; identified interactions across socioeconomic layers; delivered interpretable insights for public health research",
    tech_tags: ["Python", "R", "Statistical Modelling", "Public Health"],
    demo: "https://harshm27.github.io/depression-risk-analysis/",
  },
];
const ProjectsNew = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const selectedProjectData = selectedProject !== null ? featuredProjects[selectedProject] : null;
  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Projects */}
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(index)}
                className="p-6 text-left flex-1 w-full transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">{project.subtitle}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech_tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>

              <div className="px-6 pb-6 pt-2 flex gap-3 border-t border-border/50">
                {project.github && (
                  <Button variant="outline" size="sm" asChild className="flex-1" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.report && (
                  <Button variant="outline" size="sm" asChild className="flex-1" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Report
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button variant="outline" size="sm" asChild className="flex-1" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.demoLabel || "Demo"}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedProjectData && (
          <ProjectModal
            open={selectedProject !== null}
            onOpenChange={(open) => !open && setSelectedProject(null)}
            title={selectedProjectData.title}
            overview={selectedProjectData.overview}
            tech={selectedProjectData.tech}
            results={selectedProjectData.results}
            github={selectedProjectData.github}
            report={selectedProjectData.report}
            demo={selectedProjectData.demo}
            demoLabel={selectedProjectData.demoLabel}
          />
        )}
      </div>
    </section>
  );
};
export default ProjectsNew;
