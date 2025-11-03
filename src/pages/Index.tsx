import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.classList.add("smooth-scroll");
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Explora el portal</h2>
            <p className="text-muted-foreground">
              Navega por temas, casos y recursos en páginas dedicadas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/temas" className="group block rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-border hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-primary mb-2">Ruta</div>
              <h3 className="text-2xl font-bold mb-2">Temas Clave</h3>
              <p className="text-muted-foreground">Sesgos, privacidad, transparencia, responsabilidad e impacto.</p>
              <div className="mt-4 text-primary group-hover:translate-x-1 transition-transform">Ir →</div>
            </Link>
            <Link to="/casos" className="group block rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-border hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-primary mb-2">Ruta</div>
              <h3 className="text-2xl font-bold mb-2">Casos de Estudio</h3>
              <p className="text-muted-foreground">Ejemplos reales para aprender de éxitos y fallos.</p>
              <div className="mt-4 text-primary group-hover:translate-x-1 transition-transform">Ir →</div>
            </Link>
            <Link to="/recursos" className="group block rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-border hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-primary mb-2">Ruta</div>
              <h3 className="text-2xl font-bold mb-2">Recursos</h3>
              <p className="text-muted-foreground">Guías, artículos y materiales para profundizar.</p>
              <div className="mt-4 text-primary group-hover:translate-x-1 transition-transform">Ir →</div>
            </Link>
            <Link to="/presentacion" className="group block rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-border hover:shadow-xl transition-shadow">
              <div className="text-sm font-semibold text-primary mb-2">Ruta</div>
              <h3 className="text-2xl font-bold mb-2">Presentación</h3>
              <p className="text-muted-foreground">Diapositivas interactivas listas para presentar.</p>
              <div className="mt-4 text-primary group-hover:translate-x-1 transition-transform">Ir →</div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
