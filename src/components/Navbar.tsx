import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChefHat } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <ChefHat className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Burger Haven</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("menu")} className="text-foreground hover:text-primary transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection("mood-match")} className="text-foreground hover:text-primary transition-colors">
              Mood Match
            </button>
            <button onClick={() => scrollToSection("nutrition")} className="text-foreground hover:text-primary transition-colors">
              Nutrition
            </button>
            <button onClick={() => scrollToSection("stories")} className="text-foreground hover:text-primary transition-colors">
              Stories
            </button>
            <button onClick={() => scrollToSection("timeline")} className="text-foreground hover:text-primary transition-colors">
              Timeline
            </button>
            <Button className="bg-primary hover:bg-primary/90 shadow-warm-glow">Order Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection("menu")} className="text-foreground hover:text-primary transition-colors text-left">
                Menu
              </button>
              <button onClick={() => scrollToSection("mood-match")} className="text-foreground hover:text-primary transition-colors text-left">
                Mood Match
              </button>
              <button onClick={() => scrollToSection("nutrition")} className="text-foreground hover:text-primary transition-colors text-left">
                Nutrition
              </button>
              <button onClick={() => scrollToSection("stories")} className="text-foreground hover:text-primary transition-colors text-left">
                Stories
              </button>
              <button onClick={() => scrollToSection("timeline")} className="text-foreground hover:text-primary transition-colors text-left">
                Timeline
              </button>
              <Button className="bg-primary hover:bg-primary/90 w-full">Order Now</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
