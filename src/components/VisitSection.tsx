import { Clock, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisitSection = () => (
  <section id="visit" className="py-24 bg-muted/30">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Column: Details */}
        <div className="space-y-12 animate-fade-up">
          <div>
            <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">
              Find Us
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Come Say Hello
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Whether you're looking for a quiet corner to work or a cozy spot to catch up with friends, our doors are always open.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl mb-1">Address</h3>
                <p className="text-muted-foreground">123 Bloom Street</p>
                <p className="text-muted-foreground">Brooklyn, NY 11201</p>
                <a
                  href="https://maps.google.com/?q=123+Bloom+Street+Brooklyn+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium text-sm mt-2 inline-block hover:underline"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl mb-1">Hours</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-muted-foreground">
                  <span>Mon – Fri</span>
                  <span>7:00 AM – 6:00 PM</span>
                  <span>Sat – Sun</span>
                  <span>8:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl mb-1">Contact</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
                <p className="text-muted-foreground">hello@brewandbloom.com</p>

                <div className="flex gap-4 mt-4 text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Map */}
        <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-fade-up border border-border">
          <iframe
            title="Brew & Bloom location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.274292036!2d-73.9903!3d40.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default VisitSection;
