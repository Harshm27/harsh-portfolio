import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Project Consultant - Analytics & Operations (Capstone)",
    company: "Panavision UK",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Led an end-to-end analytics engagement on UK-wide freight operations, analysing route efficiency, shipment costs, delivery times, and CO₂ emissions.",
      "Engineered Python + SQL automation for distance, wage, and emissions calculations; applied geospatial clustering to optimise fleet deployment, cutting empty-mile travel by 12%.",
      "Identified a 15% logistics cost-saving opportunity and recommended a strategy involving EV adoption, vendor realignment, and route optimisation, projected to reduce CO₂ emissions by 8% and delivery lead times by 10%.",
    ],
    tools: "Python, SQL, geospatial clustering, Power BI, logistics modelling",
  },
  {
    role: "Associate - Technology Consulting (Analytics & Data Science)",
    company: "PricewaterhouseCoopers (PwC)",
    period: "Jul 2023 – Jul 2024",
    points: [
      "Developed a multilingual Generative AI chatbot that improved citizen access to government schemes, boosting application completion by 25% and winning the PwC GenAI Innovation Award.",
      "Worked closely with senior government stakeholders to translate ML outputs into recommendations, driving AI adoption across multiple public-sector programmes and enabling funding expansion.",
      "Built and deployed a computer-vision cataract detection tool with healthcare partners, cutting screening time by 60% and increasing clinical adoption by 22%.",
      "Produced a 50-page market entry report on India's AI ecosystem covering investment, policy, and foreign participation.",
      "Streamlined e-service reporting by building Python APIs and Power BI dashboards, reducing manual effort by 70% and accelerating turnaround by 30% across 1,000+ records.",
    ],
    tools: "Python, OpenCV, CNNs, REST APIs, Power BI, stakeholder engagement",
  },
  {
    role: "Intern - Technology Consulting (Analytics & Data Science)",
    company: "PwC India",
    period: "Jan 2023 – Jul 2023",
    points: [
      "Built Python + Streamlit dashboards to track campaign performance, improving budget targeting accuracy by 18%.",
      "Delivered predictive analytics workflows and dashboards to senior stakeholders, supporting performance improvements and real-time decision-making.",
      "Developed an NLP-based case analysis tool (BERT + TextRank) for legal document clustering and summarisation, cutting precedent search time by 30%.",
    ],
    tools: "Python, Streamlit, BERT, SQL, TextRank, data storytelling",
  },
  {
    role: "Intern - Analytics",
    company: "Dun & Bradstreet",
    period: "Jun 2022 – Aug 2022",
    points: [
      "Developed a credit risk analysis model using Python, Excel, and SQL, improving risk assessment accuracy by 6%.",
      "Cleaned and standardised 5+ large datasets, improving data quality and enabling reliable reporting.",
    ],
    tools: "Python, SQL, Excel, risk modelling",
  },
  {
    role: "Project Intern - NLP Engineering (Collaboration with IIT Madras)",
    company: "GITAA Private Limited",
    period: "Feb 2022 – Jun 2022",
    points: [
      "Developed an automated test correction algorithm using NLP, improving grading accuracy by 20% and significantly increasing operational efficiency.",
      "Built a Python-based system for bulk text extraction and file management, processing 10,000+ files and optimising the document workflow end-to-end.",
    ],
    tools: "Python, NLP, text extraction, automation pipelines",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background -ml-2 shadow-accent-glow"></div>

                {/* Content Card */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-left">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground/70 font-mono pt-2 border-t border-border/50">
                        {exp.tools}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
