import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-ethics.jpg";

const Hero = () => {
  const scrollToTemas = () => {
    const element = document.getElementById("temas");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
            Ética en Inteligencia Artificial
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Navegando el Futuro Digital con Responsabilidad
          </p>

          <Button
            size="lg"
            onClick={scrollToTemas}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full shadow-2xl"
          >
            🚀 Explorar Temas
          </Button>

          {/* Expert Quote */}
          <div className="mt-16 p-8 glass-card rounded-2xl max-w-2xl mx-auto backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl">
            <p className="text-lg italic text-white font-medium mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              "La inteligencia artificial es una herramienta poderosa que puede
              mejorar nuestras vidas, pero solo si la desarrollamos con ética y
              responsabilidad en mente."
            </p>
            <p className="text-sm text-white/90 font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">— Timnit Gebru, Investigadora en IA</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
