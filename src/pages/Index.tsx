import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import MoodMatch from "@/components/MoodMatch";
import NutritionLabs from "@/components/NutritionLabs";
import Testimonials from "@/components/Testimonials";
import CustomerStories from "@/components/CustomerStories";
import BurgerTimeline from "@/components/BurgerTimeline";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <MoodMatch />
      <NutritionLabs />
      <Testimonials />
      <CustomerStories />
      <BurgerTimeline />
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default Index;
