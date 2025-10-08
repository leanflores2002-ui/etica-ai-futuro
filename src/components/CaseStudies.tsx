import { Card } from "@/components/ui/card";
import amazonImage from "@/assets/case-amazon.jpg";
import facialImage from "@/assets/case-facial-recognition.jpg";
import gptImage from "@/assets/case-gpt.jpg";
import autonomousImage from "@/assets/case-autonomous.jpg";

const cases = [
  {
    title: "Amazon: Sesgo en Reclutamiento",
    emoji: "📦",
    description:
      "Amazon desarrolló una herramienta de IA para automatizar la selección de currículums. Sin embargo, descubrieron que el sistema penalizaba a candidatas mujeres porque fue entrenado con CVs históricos mayormente masculinos.",
    lessons: [
      "Los datos históricos pueden perpetuar sesgos existentes",
      "Es crucial auditar los sistemas de IA regularmente",
      "La diversidad en los equipos de desarrollo es fundamental",
    ],
    quote:
      "Este caso demuestra que sin supervisión ética, la IA puede automatizar la discriminación. - Kate Crawford",
    questions: [
      "¿Cómo podríamos prevenir este tipo de sesgos en el futuro?",
      "¿Qué responsabilidad tienen las empresas de tecnología?",
    ],
    image: amazonImage,
  },
  {
    title: "Reconocimiento Facial: Precisión Desigual",
    emoji: "📸",
    description:
      "Estudios han demostrado que los sistemas de reconocimiento facial tienen tasas de error significativamente más altas al identificar personas de piel oscura y mujeres, comparado con hombres de piel clara.",
    lessons: [
      "Los conjuntos de datos de entrenamiento deben ser diversos y representativos",
      "La precisión desigual puede tener consecuencias graves en aplicaciones de seguridad",
      "Es necesaria transparencia sobre las limitaciones de la tecnología",
    ],
    quote:
      "La tecnología no es neutral. Refleja los valores de quienes la crean. - Ruha Benjamin",
    questions: [
      "¿Deberían usarse sistemas con precisión desigual en aplicaciones críticas?",
      "¿Cómo garantizamos la equidad en el desarrollo de IA?",
    ],
    image: facialImage,
  },
  {
    title: "ChatGPT: Desinformación y Sesgos",
    emoji: "💬",
    description:
      "Los modelos de lenguaje grandes como ChatGPT pueden generar información incorrecta con confianza, perpetuar estereotipos y carecer de comprensión contextual profunda.",
    lessons: [
      "La IA generativa requiere verificación humana",
      "Los usuarios deben ser educados sobre las limitaciones de la IA",
      "Es fundamental implementar salvaguardas contra contenido dañino",
    ],
    quote:
      "La IA puede ser increíblemente útil, pero no reemplaza el pensamiento crítico humano. - Sam Altman",
    questions: [
      "¿Cómo equilibramos innovación con responsabilidad en IA generativa?",
      "¿Qué papel juega la educación digital en este contexto?",
    ],
    image: gptImage,
  },
  {
    title: "Vehículos Autónomos: Dilemas Éticos",
    emoji: "🚗",
    description:
      "Los coches autónomos enfrentan dilemas éticos complejos: en caso de accidente inevitable, ¿cómo debe el algoritmo decidir quién salvar?",
    lessons: [
      "Algunos dilemas éticos no tienen soluciones técnicas simples",
      "Se requiere debate público sobre decisiones algorítmicas de vida o muerte",
      "Las regulaciones deben evolucionar junto con la tecnología",
    ],
    quote:
      "No podemos delegar decisiones morales a algoritmos sin definir primero nuestros valores. - Patrick Lin",
    questions: [
      "¿Quién debería programar las prioridades éticas en vehículos autónomos?",
      "¿Cómo equilibramos seguridad individual vs. colectiva?",
    ],
    image: autonomousImage,
  },
];

const CaseStudies = () => {
  return (
    <section id="casos" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Casos de Estudio 🔬
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprende de ejemplos reales de desafíos éticos en IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in glass-card"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{caseStudy.emoji}</span>
                  <h3 className="text-xl font-bold gradient-text">
                    {caseStudy.title}
                  </h3>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                <div className="mb-4">
                  <p className="font-semibold mb-2 text-sm">📌 Lecciones Aprendidas:</p>
                  <ul className="space-y-1">
                    {caseStudy.lessons.map((lesson, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary rounded p-3 mb-4">
                  <p className="text-sm italic text-foreground/80">
                    {caseStudy.quote}
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-sm">🤔 Preguntas para Reflexionar:</p>
                  <ul className="space-y-2">
                    {caseStudy.questions.map((question, i) => (
                      <li key={i} className="text-sm text-foreground/70">
                        {i + 1}. {question}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
