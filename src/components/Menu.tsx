import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  {
    name: "Classic Burger",
    description: "100% beef patty, lettuce, tomato, onion, pickles, special sauce",
    price: "$12.99",
  },
  {
    name: "Cheese Deluxe",
    description: "Double beef, double cheese, bacon, caramelized onions",
    price: "$15.99",
  },
  {
    name: "BBQ Bacon",
    description: "Beef patty, crispy bacon, BBQ sauce, cheddar, onion rings",
    price: "$14.99",
  },
  {
    name: "Mushroom Swiss",
    description: "Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli",
    price: "$13.99",
  },
  {
    name: "Spicy Jalapeño",
    description: "Beef patty, jalapeños, pepper jack, chipotle mayo, lettuce",
    price: "$13.99",
  },
  {
    name: "Veggie Supreme",
    description: "House-made veggie patty, avocado, sprouts, hummus",
    price: "$11.99",
  },
];

const Menu = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground">
            Handcrafted burgers made with love
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="hover:shadow-warm-glow transition-all duration-300 hover:scale-105 border-2"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{item.name}</CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
