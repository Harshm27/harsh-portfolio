import { Sparkles } from "lucide-react";
import StatsCard from "./StatsCard";
const About = () => {
  return <section id="about" className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">About</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            
            
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              AI & Data Science professional with strong Business Analytics expertise. Skilled in Python, SQL, ML, LLMs, NLP & CV. Experienced in building scalable pipelines and end-to-end analytics solutions that turn data into actionable insights.
            </p>
            
            <p className="text-base text-muted-foreground/80 leading-relaxed text-justify">
              Strong problem-solver and collaborative communicator with solid stakeholder-management and leadership skills. Known for driving value through data, analytics, and intelligent automation across consulting, healthcare, and logistics domains.
            </p>
            
            <p className="text-base text-muted-foreground/80 leading-relaxed text-justify">
              Work includes building award-winning generative AI solutions for government services, engineering computer-vision tools to accelerate healthcare screening, and delivering geospatial optimisation models that reduce logistics costs and CO₂ emissions.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <StatsCard value="60%" label="faster screening" />
                <StatsCard value="15%" label="cost savings" />
                <StatsCard value="12%" label="empty-mile reduction" />
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 rounded-xl p-4 text-center hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-bold text-primary">🏆</span>
                    <span className="text-base md:text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Award-Winning PwC GenAI Innovation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-10"></div>
            <div className="relative bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-bold mb-6 text-primary text-xl">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Data Analysis & BI</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">SQL</span>
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">Power BI</span>
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">Tableau</span>
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">Excel</span>
                    
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Programming & Data</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">Python</span>
                    <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">R</span>
                    <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">REST APIs</span>
                    <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">Git</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Machine Learning & AI</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">Predictive Modelling</span>
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">Clustering</span>
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">NLP</span>
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">Boosting</span>
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">Gen AI</span>
                    
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">Computer Vision</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Cloud & Data Engineering</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">AWS</span>
                    
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">ETL/ELT Pipelines</span>
                    <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">Kubernetes</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Tools & Frameworks</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">React</span>
                    <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">Jira</span>
                    <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">Postman</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Business & Consulting</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-primary/5 text-foreground text-sm font-medium border border-border">Stakeholder Engagement</span>
                    <span className="px-3 py-1.5 rounded-full bg-primary/5 text-foreground text-sm font-medium border border-border">Requirements Gathering</span>
                    
                    <span className="px-3 py-1.5 rounded-full bg-primary/5 text-foreground text-sm font-medium border border-border">Cost-Benefit Analysis</span>
                    <span className="px-3 py-1.5 rounded-full bg-primary/5 text-foreground font-medium border border-border text-sm">Business Case Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;