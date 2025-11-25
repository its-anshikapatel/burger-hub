import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, TrendingUp, Users } from "lucide-react";

const timelineEvents = [
  {
    year: "2015",
    icon: Calendar,
    title: "The Beginning",
    description: "Started as a small food cart with just one burger on the menu. Our founder's secret recipe quickly became a local sensation.",
    color: "text-primary",
  },
  {
    year: "2017",
    icon: Award,
    title: "First Award",
    description: "Won 'Best Burger in the City' award. Expanded to our first brick-and-mortar location with a full menu of gourmet creations.",
    color: "text-secondary",
  },
  {
    year: "2019",
    icon: Users,
    title: "Community Growth",
    description: "Reached 100,000 happy customers! Launched our loyalty program and started catering services for local events.",
    color: "text-accent",
  },
  {
    year: "2021",
    icon: TrendingUp,
    title: "Expansion",
    description: "Opened 3 new locations. Introduced plant-based options and partnered with local farmers for fresh ingredients.",
    color: "text-destructive",
  },
  {
    year: "2024",
    icon: Award,
    title: "Today",
    description: "5 locations, 50+ dedicated team members, and still growing! Voted #1 burger chain in the region for 3 years running.",
    color: "text-primary",
  },
];

const BurgerTimeline = () => {
  return (
    <section id="timeline" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Burger Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            From a food cart to your favorite burger spot
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div 
                  key={index} 
                  className="relative mb-12 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 ${event.color} shadow-warm-glow animate-pulse-glow`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <Card className="flex-1 border-2 hover:shadow-warm-glow transition-all duration-300 hover:scale-105">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl font-bold text-primary">{event.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurgerTimeline;
