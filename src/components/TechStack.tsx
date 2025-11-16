import { Code2, Brain, Database, BarChart3, Cloud, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const techCategories = [
  {
    icon: BarChart3,
    title: "Data Analysis & BI",
    description:
      "SQL, Power BI, Tableau, Excel, Google Analytics (GA4), A/B testing, regression & time-series analysis",
    items: [
      { name: "SQL", tooltip: "Database querying and data manipulation" },
      { name: "Power BI", tooltip: "Operational dashboards and reporting" },
      { name: "Tableau", tooltip: "Interactive visual analytics" },
      { name: "Excel", tooltip: "Advanced analytics and modeling" },
      { name: "Google Analytics (GA4)", tooltip: "Web analytics and user behavior tracking" },
      { name: "A/B testing", tooltip: "Experimentation and hypothesis testing" },
      { name: "Regression & time-series analysis", tooltip: "Statistical modeling and forecasting" },
    ],
  },
  {
    icon: Code2,
    title: "Programming & Data",
    description: "Python (NumPy, Pandas, scikit-learn), R, REST APIs, Git, TypeScript, C++",
    items: [
      { name: "Python (NumPy, Pandas, scikit-learn)", tooltip: "Data science and ML workflows" },
      { name: "R", tooltip: "Statistical modelling and analytics" },
      { name: "REST APIs", tooltip: "API development and integration" },
      { name: "Git", tooltip: "Version control and collaboration" },
      { name: "TypeScript", tooltip: "Typed frontend and API integrations" },
      { name: "C++", tooltip: "Systems programming and algorithms" },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description:
      "Predictive modelling, clustering, NLP, Generative AI (GPT, RAG), CNNs, fine-tuning, TensorFlow, XGBoost",
    items: [
      { name: "Predictive modelling", tooltip: "Supervised learning and forecasting" },
      { name: "Clustering", tooltip: "Unsupervised learning and segmentation" },
      { name: "NLP", tooltip: "Text analytics and natural language processing" },
      { name: "Generative AI (GPT, RAG)", tooltip: "LLM applications and retrieval systems" },
      { name: "CNNs", tooltip: "Computer vision and deep learning" },
      { name: "Fine-tuning", tooltip: "Model adaptation and transfer learning" },
      { name: "TensorFlow", tooltip: "Deep learning frameworks" },
      { name: "XGBoost / LightGBM", tooltip: "Gradient boosting for tabular data" },
      { name: "Computer Vision", tooltip: "Image processing and object detection" },
      { name: "LLMs & Embeddings", tooltip: "Large language models and vector representations" },
    ],
  },
  {
    icon: Database,
    title: "Data Engineering & Cloud",
    description: "Kubernetes, Render, ETL/ELT pipelines, GCP, AWS, dbt, PostgreSQL",
    items: [
      { name: "Kubernetes", tooltip: "Container orchestration and deployment" },
      { name: "Render", tooltip: "Cloud deployment platform" },
      { name: "ETL/ELT pipelines", tooltip: "Data pipeline development and orchestration" },
      { name: "GCP", tooltip: "Google Cloud Platform services" },
      { name: "AWS", tooltip: "Amazon Web Services (Cloud Practitioner certified)" },
      { name: "dbt", tooltip: "Analytics engineering and SQL transformations" },
      { name: "PostgreSQL", tooltip: "Relational database management" },
    ],
  },
  {
    icon: Wrench,
    title: "Collaboration & Tools",
    description: "Jira, Confluence, Postman, GitHub (Agile & Waterfall delivery), React",
    items: [
      { name: "Jira", tooltip: "Agile project management" },
      { name: "Confluence", tooltip: "Documentation and knowledge management" },
      { name: "Postman", tooltip: "API testing and development" },
      { name: "GitHub", tooltip: "Version control and code collaboration" },
      { name: "Agile & Waterfall delivery", tooltip: "Software delivery methodologies" },
    ],
  },
  {
    icon: Cloud,
    title: "Business & Consulting",
    description:
      "Stakeholder engagement, requirements gathering, client communication, cost-benefit analysis, business case development, translating analytics into business outcomes",
    items: [
      { name: "Stakeholder engagement", tooltip: "Building relationships and managing expectations" },
      { name: "Requirements gathering", tooltip: "Eliciting and documenting business needs" },
      { name: "Client communication", tooltip: "Presenting insights and recommendations" },
      { name: "Cost-benefit analysis", tooltip: "ROI assessment and business case evaluation" },
      { name: "Business case development", tooltip: "Building strategic proposals" },
      { name: "Translating analytics into business outcomes", tooltip: "Driving decision-making with data" },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Brain className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Tech Stack</h2>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {techCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{category.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <Tooltip key={itemIndex} delayDuration={200}>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="secondary"
                            className="px-3 py-1.5 text-sm hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-200 cursor-help"
                          >
                            {item.name}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs text-center bg-popover border-border">
                          <p className="text-sm">{item.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default TechStack;
