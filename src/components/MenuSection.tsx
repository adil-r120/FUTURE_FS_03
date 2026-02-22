import menuSpread from "@/assets/menu-spread.jpg";
import { Coffee, Croissant, Leaf, Sandwich, CupSoda } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "coffee",
    icon: Coffee,
    title: "Coffee",
    items: [
      { name: "House Drip", price: "₹280", desc: "Locally roasted, brewed fresh" },
      { name: "Cappuccino", price: "₹360", desc: "Espresso with silky microfoam" },
      { name: "Oat Milk Latte", price: "₹400", desc: "Creamy & nutty plant-based fav" },
      { name: "Cold Brew", price: "₹360", desc: "Steeped for 18 hours" },
    ],
  },
  {
    id: "pastries",
    icon: Croissant,
    title: "Pastries",
    items: [
      { name: "Butter Croissant", price: "₹300", desc: "Flaky, buttery perfection" },
      { name: "Blueberry Muffin", price: "₹280", desc: "Bursting with fresh berries" },
      { name: "Banana Bread", price: "₹320", desc: "Moist, served warm" },
      { name: "Avocado Toast", price: "₹600", desc: "Chili flakes, microgreens" },
    ],
  },
  {
    id: "specialties",
    icon: Leaf,
    title: "Specialties",
    items: [
      { name: "Matcha Latte", price: "₹440", desc: "Ceremonial grade matcha" },
      { name: "Chai Spice Latte", price: "₹400", desc: "House spice blend" },
      { name: "Lavender Honey", price: "₹440", desc: "Floral & sweet" },
      { name: "Golden Milk", price: "₹400", desc: "Turmeric & ginger blend" },
    ],
  },
  {
    id: "savory",
    icon: Sandwich,
    title: "Savory",
    items: [
      { name: "Grilled Cheese", price: "₹350", desc: "Aged cheddar & sourdough" },
      { name: "Caprese Panini", price: "₹450", desc: "Mozzarella, tomato, basil" },
      { name: "Quiche", price: "₹380", desc: "Seasonal vegetables" },
      { name: "Bagel", price: "₹250", desc: "With cream cheese" },
    ],
  },
  {
    id: "refreshers",
    icon: CupSoda,
    title: "Drinks",
    items: [
      { name: "Iced Peach Tea", price: "₹300", desc: "House-brewed tea" },
      { name: "Berry Smoothie", price: "₹380", desc: "Mixed berries, yogurt" },
      { name: "Lemonade", price: "₹250", desc: "Freshly squeezed" },
      { name: "Mango Lassi", price: "₹320", desc: "Yogurt & mango pulp" },
    ],
  },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <section id="menu" className="py-24 bg-card">
      <div className="container">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">What We Serve</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Our Menu</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border",
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground"
              )}
            >
              <cat.icon className="w-4 h-4" />
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Menu List */}
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 h-full">
            {categories.map((cat) => (
              <div key={cat.id} className={cn("space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500", activeTab === cat.id ? "block" : "hidden")}>
                <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <cat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">{cat.title}</h3>
                </div>

                <div className="grid gap-6">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start group">
                      <div>
                        <p className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="h-[1px] bg-border flex-grow w-12 hidden sm:block opacity-50" />
                        <span className="font-semibold text-primary whitespace-nowrap">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div className="hidden lg:block relative h-full min-h-[500px]">
            <img
              src={menuSpread}
              alt="Delicious spread"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-warm-gold/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
