import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, AlertCircle, Flame } from "lucide-react";

const burgerData = [
  {
    name: "Classic Burger",
    calories: 650,
    protein: "32g",
    carbs: "45g",
    fat: "28g",
    allergens: ["Gluten", "Dairy"],
  },
  {
    name: "Cheese Deluxe",
    calories: 890,
    protein: "48g",
    carbs: "52g",
    fat: "45g",
    allergens: ["Gluten", "Dairy", "Eggs"],
  },
  {
    name: "BBQ Bacon",
    calories: 780,
    protein: "38g",
    carbs: "48g",
    fat: "38g",
    allergens: ["Gluten", "Dairy"],
  },
  {
    name: "Veggie Supreme",
    calories: 520,
    protein: "18g",
    carbs: "55g",
    fat: "22g",
    allergens: ["Gluten", "Sesame"],
  },
];

const NutritionLabs = () => {
  return (
    <section id="nutrition" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nutrition & Allergen Smart Labs
          </h2>
          <p className="text-lg text-muted-foreground">
            Make informed choices with complete nutritional information
          </p>
        </div>

        <Tabs defaultValue="nutrition" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="nutrition" className="flex items-center gap-2">
              <Flame className="w-4 h-4" />
              Nutrition Facts
            </TabsTrigger>
            <TabsTrigger value="allergens" className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Allergen Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nutrition" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {burgerData.map((burger, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-warm-glow transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {burger.name}
                      <Badge variant="outline" className="ml-2">
                        {burger.calories} cal
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">{burger.protein}</p>
                        <p className="text-sm text-muted-foreground">Protein</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-secondary">{burger.carbs}</p>
                        <p className="text-sm text-muted-foreground">Carbs</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-accent">{burger.fat}</p>
                        <p className="text-sm text-muted-foreground">Fat</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="allergens" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {burgerData.map((burger, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-warm-glow transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle>{burger.name}</CardTitle>
                    <CardDescription>Contains the following allergens:</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {burger.allergens.map((allergen, i) => (
                        <Badge key={i} variant="destructive" className="flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                    {burger.allergens.includes("Gluten") === false && (
                      <Badge variant="outline" className="mt-2 flex items-center gap-1 w-fit">
                        <Leaf className="w-3 h-3" />
                        Gluten-Free Available
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default NutritionLabs;
