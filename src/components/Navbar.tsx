import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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

  const closeMobile = () => setIsMobileMenuOpen(false);

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
            <Link
              to="/"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors drop-shadow-md"
            >
              Inicio
            </Link>
            <Link
              to="/temas"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors drop-shadow-md"
            >
              Temas Clave
            </Link>
            <Link
              to="/casos"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors drop-shadow-md"
            >
              Casos de Estudio
            </Link>
            <Link
              to="/recursos"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors drop-shadow-md"
            >
              Recursos
            </Link>
            <Link
              to="/presentacion"
              className="text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full shadow-md hover:opacity-90 transition-opacity"
            >
              Presentación
            </Link>
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
            <Link
              to="/"
              onClick={closeMobile}
              className="block w-full text-left py-2 px-4 rounded-lg text-primary font-semibold hover:bg-white/10 transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/temas"
              onClick={closeMobile}
              className="block w-full text-left py-2 px-4 rounded-lg text-primary font-semibold hover:bg-white/10 transition-colors"
            >
              Temas Clave
            </Link>
            <Link
              to="/casos"
              onClick={closeMobile}
              className="block w-full text-left py-2 px-4 rounded-lg text-primary font-semibold hover:bg-white/10 transition-colors"
            >
              Casos de Estudio
            </Link>
            <Link
              to="/recursos"
              onClick={closeMobile}
              className="block w-full text-left py-2 px-4 rounded-lg text-primary font-semibold hover:bg-white/10 transition-colors"
            >
              Recursos
            </Link>
            <Link
              to="/presentacion"
              onClick={closeMobile}
              className="block w-full text-left py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-colors"
            >
              Presentación
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
