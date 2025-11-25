import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default Index;
