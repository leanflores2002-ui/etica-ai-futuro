import { Card } from "@/components/ui/card";
import { ExternalLink, BookOpen, GraduationCap, Wrench, Users } from "lucide-react";

const resources = {
  organizations: [
    {
      name: "Partnership on AI",
      description: "Organización dedicada a las mejores prácticas en IA",
      url: "https://partnershiponai.org/",
      icon: Users,
    },
    {
      name: "AI Now Institute",
      description: "Investigación sobre implicaciones sociales de IA",
      url: "https://ainowinstitute.org/",
      icon: Users,
    },
    {
      name: "IEEE Ethics in AI",
      description: "Estándares globales para IA ética",
      url: "https://ethicsinaction.ieee.org/",
      icon: Users,
    },
  ],
  documents: [
    {
      name: "Montreal Declaration",
      description: "Declaración para desarrollo responsable de IA",
      url: "https://www.montrealdeclaration-responsibleai.com/",
      icon: BookOpen,
    },
    {
      name: "EU AI Act",
      description: "Marco regulatorio europeo para IA",
      url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
      icon: BookOpen,
    },
    {
      name: "UNESCO Ethics of AI",
      description: "Recomendaciones globales sobre ética de IA",
      url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics",
      icon: BookOpen,
    },
  ],
  courses: [
    {
      name: "AI Ethics (MIT)",
      description: "Curso gratuito sobre ética en inteligencia artificial",
      url: "https://www.media.mit.edu/courses/",
      icon: GraduationCap,
    },
    {
      name: "Ethics of AI (Harvard)",
      description: "Introducción a dilemas éticos en IA",
      url: "https://www.edx.org/learn/artificial-intelligence",
      icon: GraduationCap,
    },
    {
      name: "AI For Everyone (Coursera)",
      description: "Fundamentos de IA para todos por Andrew Ng",
      url: "https://www.coursera.org/learn/ai-for-everyone",
      icon: GraduationCap,
    },
  ],
  tools: [
    {
      name: "AI Fairness 360",
      description: "Kit de herramientas IBM para detectar sesgos",
      url: "https://aif360.mybluemix.net/",
      icon: Wrench,
    },
    {
      name: "What-If Tool",
      description: "Herramienta Google para análisis de modelos",
      url: "https://pair-code.github.io/what-if-tool/",
      icon: Wrench,
    },
    {
      name: "Fairlearn",
      description: "Biblioteca Python para equidad en ML",
      url: "https://fairlearn.org/",
      icon: Wrench,
    },
  ],
};

const Resources = () => {
  const renderResourceCard = (resource: any, index: number) => {
    const Icon = resource.icon;
    return (
      <a
        key={index}
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <Card className="p-5 hover:shadow-xl transition-all duration-300 hover:scale-105 glass-card h-full">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold group-hover:text-primary transition-colors">
                  {resource.name}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                {resource.description}
              </p>
            </div>
          </div>
        </Card>
      </a>
    );
  };

  return (
    <section id="recursos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recursos 📖
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora organizaciones, documentos, cursos y herramientas para profundizar en IA ética
          </p>
        </div>

        {/* Organizations */}
        <div className="mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="text-primary" />
            Organizaciones Líderes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.organizations.map(renderResourceCard)}
          </div>
        </div>

        {/* Documents */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-primary" />
            Documentos y Marcos Regulatorios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.documents.map(renderResourceCard)}
          </div>
        </div>

        {/* Courses */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" />
            Cursos y Educación
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.courses.map(renderResourceCard)}
          </div>
        </div>

        {/* Tools */}
        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Wrench className="text-primary" />
            Herramientas de IA Ética
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.tools.map(renderResourceCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
