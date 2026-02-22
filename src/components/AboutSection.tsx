import cafeExterior from "@/assets/cafe-exterior.jpg";
import { Heart, Leaf, Medal } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
        <div className="order-2 md:order-1 relative">
          <img
            src={cafeExterior}
            alt="Brew & Bloom café exterior"
            className="rounded-lg shadow-2xl w-full object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-warm-gold/30 rounded-lg -z-10" />
        </div>

        <div className="order-1 md:order-2 animate-fade-up">
          <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            More Than Just a <span className="text-primary">Coffee Shop</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            Founded in 2019, Brew & Bloom started with a simple idea: great coffee should come with great community. We source our beans directly from small farms, roast them locally, and serve them in a space designed to bring people together.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From our hand-poured lattes to our freshly baked croissants, every detail is crafted with care. Whether you're here to work, catch up with friends, or just enjoy a quiet moment — you belong here.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div className="text-center md:text-left">
              <p className="text-4xl font-display font-bold text-primary mb-1">5+</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Years</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-display font-bold text-primary mb-1">12K</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Guests</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-display font-bold text-primary mb-1">100%</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Organic</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-muted/30 p-8 rounded-xl border border-border/50 hover:border-warm-gold/50 transition-colors group">
          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Medal className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Unmatched Quality</h3>
          <p className="text-muted-foreground">
            We never compromise on taste using only the finest, ethically sourced beans from around the globe.
          </p>
        </div>

        <div className="bg-muted/30 p-8 rounded-xl border border-border/50 hover:border-warm-gold/50 transition-colors group">
          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Community First</h3>
          <p className="text-muted-foreground">
            We believe in building connections. Our space is designed to be a welcoming hub for everyone.
          </p>
        </div>

        <div className="bg-muted/30 p-8 rounded-xl border border-border/50 hover:border-warm-gold/50 transition-colors group">
          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Sustainability</h3>
          <p className="text-muted-foreground">
            From our compostable cups to our zero-waste initiatives, we're committed to protecting our planet.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
