import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import menuSpread from "@/assets/menu-spread.jpg"; // Reusing existing asset for now

const features = [
    {
        title: "Signature Latte",
        desc: "Rich espresso with steamed oat milk and house-made vanilla syrup.",
        price: "₹440",
    },
    {
        title: "Avocado Toast",
        desc: "Sourdough, smashed avocado, chili flakes, and microgreens.",
        price: "₹600",
    },
    {
        title: "Berry Dansih",
        desc: "Flaky pastry filled with seasonal berry compote and cream cheese.",
        price: "₹320",
    },
];

const FeaturedSection = () => {
    return (
        <section className="py-24 bg-card/50">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Placeholder for a different image, using menuSpread for demo */}
                        <img
                            src={menuSpread}
                            alt="Featured items spread"
                            className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
                        />
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                    </div>

                    <div className="order-1 lg:order-2 animate-fade-up">
                        <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">
                            Taste the Magic
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                            Customer Favorites
                        </h2>

                        <div className="space-y-8 mb-10">
                            {features.map((item) => (
                                <div key={item.title} className="flex justify-between items-start border-b border-border/60 pb-4">
                                    <div>
                                        <h3 className="text-xl font-display font-semibold text-foreground mb-1">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                                    </div>
                                    <span className="font-semibold text-primary ml-4">{item.price}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/menu"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                            View Full Menu <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
