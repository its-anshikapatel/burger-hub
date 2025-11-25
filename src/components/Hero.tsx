import { Button } from "@/components/ui/button";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBurger})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-transparent" />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            The Best Burgers in Town
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Crafted with passion, served with love. Every bite is a celebration of flavor.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm-glow transition-all hover:scale-105"
            >
              Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent transition-all"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
