import { Star } from "lucide-react";

const reviews = [
    {
        name: "Sarah Jenkins",
        text: "The best latte I've had in the city! The atmosphere is so cozy and inviting.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        text: "Great spot for working remotely. Fast wifi and delicious pastries.",
        rating: 5,
    },
    {
        name: "Emma Wilson",
        text: "Their avocado toast is a game changer. highly recommend visiting providing top notch service.",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container">
                <div className="text-center mb-16 animate-fade-up">
                    <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">
                        What People Say
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        Customer Reviews
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-card p-8 rounded-lg shadow-md border border-border flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-warm-gold text-warm-gold" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                            <h4 className="font-display font-semibold text-lg text-foreground">
                                {review.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
