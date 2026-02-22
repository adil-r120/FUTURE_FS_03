const Footer = () => (
  <footer className="py-8 bg-espresso text-primary-foreground/60 text-center text-sm font-body">
    <div className="container">
      <p className="font-display text-lg text-primary-foreground mb-2">Brew & Bloom</p>
      <p>© {new Date().getFullYear()} Brew & Bloom Café. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
