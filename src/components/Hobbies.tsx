import { MapPin, Watch, Music, UtensilsCrossed } from "lucide-react";

const hobbies = [
  {
    icon: MapPin,
    title: "Solo Travel & Cities",
    description:
      "Exploring cities through local food, neighbourhood walks, and unplanned routes, with solo trips across Europe and Asia shaping an independent, curious outlook.",
  },
  {
    icon: Watch,
    title: "Horology",
    description:
      "Keen interest in mechanical watch design and craftsmanship, with a focus on how precision engineering and aesthetics work together in timepieces.",
  },
  {
    icon: Music,
    title: "Music & Performance",
    description:
      "Certified in Electronic Keyboards (Trinity Grade 4) with experience performing in choirs and community events, combining structure with creativity.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Culture",
    description:
      "Discovering new cuisines and re-creating them in the kitchen, from simple pasta dishes to regional comfort food experienced while travelling.",
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Hobbies & Interests</h2>
          <p className="text-muted-foreground">Beyond the data and analytics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent hover:scale-[1.02] transition-all duration-300 animate-fade-in focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2"
                style={{ animationDelay: `${index * 100}ms` }}
                tabIndex={0}
                role="article"
                aria-label={`${hobby.title}: ${hobby.description}`}
              >
                <div className="space-y-4">
                  <div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{hobby.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed text-left">{hobby.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
