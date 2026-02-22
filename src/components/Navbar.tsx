import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import OrderDialog from "./OrderDialog";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Menu", "Contact", "Visit"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl font-bold text-primary">
          Brew & Bloom
        </Link>
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((topic) => (
            <li key={topic}>
              <Link to={topic === "Home" ? "/" : `/${topic.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {topic}
              </Link>
            </li>
          ))}
          <li>
            <OrderDialog>
              <button className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                Order Now
              </button>
            </OrderDialog>
          </li>
        </ul>
        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          {links.map((topic) => (
            <Link key={topic} to={topic === "Home" ? "/" : `/${topic.toLowerCase()}`} className="block py-2 text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>
              {topic}
            </Link>
          ))}
          <OrderDialog>
            <button className="inline-block mt-2 rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground" onClick={() => setOpen(false)}>
              Order Now
            </button>
          </OrderDialog>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
