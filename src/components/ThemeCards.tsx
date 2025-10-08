import biasImage from "@/assets/bias-algorithms.jpg";
import privacyImage from "@/assets/privacy-data.jpg";
import transparencyImage from "@/assets/transparency-ai.jpg";
import accountabilityImage from "@/assets/accountability.jpg";
import socialImage from "@/assets/social-impact.jpg";

const themes = [
  {
    emoji: "⚖️",
    title: "Sesgo Algorítmico",
    description:
      "Cómo los algoritmos pueden perpetuar o amplificar prejuicios existentes en la sociedad.",
    image: biasImage,
  },
  {
    emoji: "🔒",
    title: "Privacidad de Datos",
    description:
      "La importancia de proteger la información personal en sistemas de IA.",
    image: privacyImage,
  },
  {
    emoji: "🔍",
    title: "Transparencia",
    description:
      "La necesidad de entender cómo y por qué los sistemas de IA toman decisiones.",
    image: transparencyImage,
  },
  {
    emoji: "👥",
    title: "Responsabilidad",
    description:
      "Quién es responsable cuando la IA comete errores o causa daño.",
    image: accountabilityImage,
  },
  {
    emoji: "🌍",
    title: "Impacto Social",
    description:
      "Cómo la IA afecta el empleo, la desigualdad y la sociedad en general.",
    image: socialImage,
  },
];

const ThemeCards = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Temas Clave 🎯
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los pilares fundamentales de la ética en inteligencia artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl glass-card hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-4xl mb-3">{theme.emoji}</div>
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {theme.title}
                </h3>
                <p className="text-muted-foreground">{theme.description}</p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeCards;
