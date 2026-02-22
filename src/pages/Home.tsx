import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "@/components/Navbar";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection />
        <FeaturedSection />
        <TestimonialsSection />
      </main>

    </div>
  );
};

export default Home;
