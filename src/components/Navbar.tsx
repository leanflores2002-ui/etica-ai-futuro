import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🤖</span>
            <h1 className="text-xl font-bold gradient-text">Ética en IA</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("temas")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Temas Clave
            </button>
            <button
              onClick={() => scrollToSection("casos")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Casos de Estudio
            </button>
            <button
              onClick={() => scrollToSection("recursos")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Recursos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-muted transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("temas")}
              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-muted transition-colors"
            >
              Temas Clave
            </button>
            <button
              onClick={() => scrollToSection("casos")}
              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-muted transition-colors"
            >
              Casos de Estudio
            </button>
            <button
              onClick={() => scrollToSection("recursos")}
              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-muted transition-colors"
            >
              Recursos
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
