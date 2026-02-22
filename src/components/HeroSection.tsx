import { Link } from "react-router-dom";
import heroCafe from "@/assets/hero-cafe.jpg";
import { ArrowRight, MapPin } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroCafe}
        alt="Cozy café interior"
        className="w-full h-full object-cover scale-105 animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/90" />
    </div>

    <div className="relative z-10 container px-4 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-8 text-center lg:text-left animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-gold/20 border border-warm-gold/30 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-warm-gold animate-pulse" />
          <span className="text-warm-gold text-xs font-medium tracking-wider uppercase">
            Now Brewing in Brooklyn
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-tight mb-6">
          Taste the <br />
          <span className="text-warm-gold">Extraordinary</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Craft coffee, artisanal pastries, and a warm atmosphere.
          Experience the perfect blend of tradition and innovation in every cup.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link to="/menu" className="group inline-flex items-center justify-center gap-2 rounded-full bg-warm-gold px-8 py-4 text-base font-semibold text-warm-gold-foreground hover:bg-white hover:text-espresso transition-all duration-300">
            Order Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/visit" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors">
            <MapPin className="w-4 h-4" />
            Find Location
          </Link>
        </div>
      </div>

      {/* Decorative element or secondary visual could go here in cols 9-12 */}
    </div>
  </section>
);

export default HeroSection;
