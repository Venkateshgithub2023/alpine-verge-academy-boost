import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">AV</span>
          </div>
          <span className="text-xl font-bold text-foreground">Alpine Verge</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
          <a href="#roadmaps" className="text-foreground hover:text-primary transition-colors">Roadmaps</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#roadmaps" className="text-foreground hover:text-primary transition-colors">Roadmaps</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="hero" size="sm" className="mt-4">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;