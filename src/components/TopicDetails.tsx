import biasImage from "@/assets/bias-algorithms.jpg";
import privacyImage from "@/assets/privacy-data.jpg";
import transparencyImage from "@/assets/transparency-ai.jpg";
import accountabilityImage from "@/assets/accountability.jpg";
import socialImage from "@/assets/social-impact.jpg";

const topics = [
  {
    emoji: "⚖️",
    title: "Sesgo Algorítmico",
    content:
      "Los algoritmos de IA aprenden de datos históricos que pueden contener sesgos implícitos. Por ejemplo, si un sistema de IA se entrena con datos de contratación históricos donde la mayoría de los contratados eran hombres, podría aprender a favorecer candidatos masculinos.",
    example:
      "En 2018, Amazon descubrió que su sistema de reclutamiento basado en IA discriminaba a las mujeres porque fue entrenado con CVs enviados en los últimos 10 años, mayormente de hombres.",
    quote:
      "El sesgo algorítmico es el reflejo digital de nuestros prejuicios históricos. - Joy Buolamwini",
    image: biasImage,
  },
  {
    emoji: "🔒",
    title: "Privacidad de Datos",
    content:
      "Los sistemas de IA requieren enormes cantidades de datos para funcionar. Estos datos a menudo incluyen información personal sensible. Es crucial establecer límites claros sobre qué datos se recopilan, cómo se usan y quién tiene acceso a ellos.",
    example:
      "El escándalo de Cambridge Analytica demostró cómo los datos personales de millones de usuarios de Facebook fueron utilizados sin consentimiento para influir en elecciones.",
    quote:
      "La privacidad no es algo que debamos negociar. Es un derecho humano fundamental. - Edward Snowden",
    image: privacyImage,
  },
  {
    emoji: "🔍",
    title: "Transparencia y Explicabilidad",
    content:
      "Las 'cajas negras' de la IA son sistemas cuyos procesos de toma de decisiones son opacos incluso para sus creadores. La transparencia implica poder explicar cómo y por qué un sistema de IA tomó una decisión específica.",
    example:
      "En el sector médico, los médicos necesitan entender por qué una IA recomienda cierto diagnóstico antes de actuar, ya que son legalmente responsables de las decisiones de tratamiento.",
    quote:
      "La explicabilidad no es opcional. Es esencial para la confianza. - Cynthia Rudin",
    image: transparencyImage,
  },
  {
    emoji: "👥",
    title: "Responsabilidad y Rendición de Cuentas",
    content:
      "Cuando un sistema de IA causa daño, ¿quién es responsable? ¿Los desarrolladores, las empresas que lo implementan o los usuarios? Establecer cadenas claras de responsabilidad es fundamental para la gobernanza ética de la IA.",
    example:
      "Los accidentes de vehículos autónomos plantean preguntas complejas: si un coche autónomo causa un accidente, ¿es culpa del fabricante del vehículo, del desarrollador del software o del propietario?",
    quote:
      "Con gran poder viene gran responsabilidad. La IA tiene poder inmenso. - Stuart Russell",
    image: accountabilityImage,
  },
  {
    emoji: "🌍",
    title: "Impacto Social y Económico",
    content:
      "La IA está transformando el mercado laboral, creando nuevas oportunidades pero también amenazando empleos tradicionales. También puede amplificar desigualdades existentes si no se implementa de manera equitativa.",
    example:
      "Estudios sugieren que la automatización podría desplazar hasta 800 millones de empleos para 2030, pero también crear nuevos roles que hoy no existen.",
    quote:
      "La pregunta no es si la IA cambiará nuestras vidas, sino cómo nos prepararemos para ese cambio. - Fei-Fei Li",
    image: socialImage,
  },
];

const TopicDetails = () => {
  return (
    <section id="temas" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explorando los Temas 📚
          </h2>
          <p className="text-lg text-muted-foreground">
            Profundiza en cada aspecto de la ética en IA
          </p>
        </div>

        <div className="space-y-16">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center animate-fade-in`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="p-8 glass-card rounded-2xl">
                  <div className="text-5xl mb-4">{topic.emoji}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                    {topic.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {topic.content}
                  </p>

                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold mb-2">💡 Ejemplo:</p>
                    <p className="text-sm text-foreground/70">{topic.example}</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm italic text-muted-foreground">
                      "{topic.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicDetails;
