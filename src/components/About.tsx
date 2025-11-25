const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Since 2015, we've been serving up the juiciest, most flavorful burgers made from 
            100% premium beef and fresh ingredients. Our commitment to quality and taste has 
            made us a local favorite.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Every burger is handcrafted with care, using our secret blend of spices and 
            cooked to perfection. We source locally whenever possible and never compromise 
            on quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
