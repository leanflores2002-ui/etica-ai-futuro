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
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background/70 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl drop-shadow-lg">🤖</span>
            <h1 className="text-xl font-bold gradient-text drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Ética en IA</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors drop-shadow-md"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("temas")}
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors drop-shadow-md"
            >
              Temas Clave
            </button>
            <button
              onClick={() => scrollToSection("casos")}
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors drop-shadow-md"
            >
              Casos de Estudio
            </button>
            <button
              onClick={() => scrollToSection("recursos")}
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors drop-shadow-md"
            >
              Recursos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in bg-background/90 backdrop-blur-md rounded-lg p-2">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left py-2 px-4 rounded-lg text-primary font-semibold hover:bg-white/10 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("temas")}
              className="block w-full text-left py-2 px-4 rounded-lg text-primary font-semibold hover:bg-white/10 transition-colors"
            >
              Temas Clave
            </button>
            <button
              onClick={() => scrollToSection("casos")}
              className="block w-full text-left py-2 px-4 rounded-lg text-primary font-semibold hover:bg-white/10 transition-colors"
            >
              Casos de Estudio
            </button>
            <button
              onClick={() => scrollToSection("recursos")}
              className="block w-full text-left py-2 px-4 rounded-lg text-primary font-semibold hover:bg-white/10 transition-colors"
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
