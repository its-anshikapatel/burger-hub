import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "James Patterson",
    title: "The Proposal Story",
    story: "I proposed to my wife at Burger Haven 5 years ago. We were having our favorite BBQ Bacon burgers when I got down on one knee. The staff helped me surprise her with a custom burger box that had the ring inside! Now we come here every anniversary.",
    image: "👨‍💼",
  },
  {
    name: "Lisa Chen",
    title: "First Date Magic",
    story: "My husband and I had our first date here back in 2018. I was nervous and spilled ketchup all over myself. Instead of being embarrassed, we laughed so hard. The staff was so kind and gave us extra napkins and a free milkshake. We've been coming back ever since!",
    image: "👩‍💻",
  },
  {
    name: "Marcus Williams",
    title: "The Game Day Tradition",
    story: "Every Sunday, our entire friend group meets at Burger Haven to watch football. Started with just 3 of us, now we're 15 strong! The staff knows our orders by heart. It's not just about the burgers anymore - it's about the community we've built here.",
    image: "🏈",
  },
];

const CustomerStories = () => {
  return (
    <section id="stories" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Customer Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real moments, real memories, real connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-warm-glow transition-all duration-300 group animate-fade-in-up hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6">
                <div className="text-6xl mb-4 text-center animate-bounce-subtle">{story.image}</div>
                <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                <h3 className="text-xl font-bold text-foreground mb-2">{story.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{story.story}"
                </p>
                <p className="font-semibold text-primary">- {story.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
