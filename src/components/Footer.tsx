import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Burger Haven</h3>
            <p className="text-accent-foreground/80">
              Serving the best burgers since 2015. Made with love, served with pride.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-accent-foreground/80">123 Burger Street, Food City</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-accent-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-accent-foreground/80">hello@burgerhaven.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <div className="text-accent-foreground/80">
                  <p>Mon - Fri: 11am - 10pm</p>
                  <p>Sat - Sun: 10am - 11pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent-foreground/20 pt-6 text-center">
          <p className="text-accent-foreground/60">
            © 2024 Burger Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
