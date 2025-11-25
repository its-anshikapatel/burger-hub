import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Frown, Meh, Heart, Zap, Coffee } from "lucide-react";
import { toast } from "sonner";

const moods = [
  { 
    icon: Smile, 
    label: "Happy", 
    color: "text-secondary",
    recommendation: "Classic Burger",
    description: "Keep that smile going with our timeless classic!"
  },
  { 
    icon: Zap, 
    label: "Energetic", 
    color: "text-primary",
    recommendation: "Spicy Jalapeño",
    description: "Match your energy with some heat!"
  },
  { 
    icon: Heart, 
    label: "Romantic", 
    color: "text-destructive",
    recommendation: "Cheese Deluxe",
    description: "Share the love with double cheese goodness"
  },
  { 
    icon: Meh, 
    label: "Neutral", 
    color: "text-muted-foreground",
    recommendation: "Mushroom Swiss",
    description: "A balanced choice for a balanced mood"
  },
  { 
    icon: Coffee, 
    label: "Tired", 
    color: "text-accent",
    recommendation: "BBQ Bacon",
    description: "Comfort food to perk you up!"
  },
  { 
    icon: Frown, 
    label: "Sad", 
    color: "text-muted-foreground",
    recommendation: "Veggie Supreme",
    description: "Wholesome goodness to lift your spirits"
  },
];

const MoodMatch = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const handleOrderBurger = () => {
    if (selectedMood !== null) {
      toast.success(`Great choice! ${moods[selectedMood].recommendation} is on its way to your cart!`);
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="mood-match" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mood-Based Burger Match
          </h2>
          <p className="text-lg text-muted-foreground">
            How are you feeling today? Let us recommend the perfect burger!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-8">
          {moods.map((mood, index) => {
            const Icon = mood.icon;
            return (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-warm-glow border-2 animate-scale-in ${
                  selectedMood === index ? "border-primary shadow-warm-glow" : ""
                }`}
                onClick={() => setSelectedMood(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Icon className={`w-12 h-12 mb-2 ${mood.color}`} />
                  <p className="text-sm font-medium text-center">{mood.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedMood !== null && (
          <Card className="max-w-2xl mx-auto border-2 border-primary shadow-warm-glow animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                We recommend: {moods[selectedMood].recommendation}
              </CardTitle>
              <CardDescription className="text-center text-lg">
                {moods[selectedMood].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={handleOrderBurger} className="bg-primary hover:bg-primary/90 shadow-warm-glow">
                Order This Burger
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default MoodMatch;
