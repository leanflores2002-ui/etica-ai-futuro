import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              Ética en IA
            </h3>
            <p className="text-sm text-muted-foreground">
              Plataforma educativa dedicada a promover el desarrollo y uso responsable de la inteligencia artificial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#temas" className="text-muted-foreground hover:text-primary transition-colors">
                  Temas Clave
                </a>
              </li>
              <li>
                <a href="#casos" className="text-muted-foreground hover:text-primary transition-colors">
                  Casos de Estudio
                </a>
              </li>
              <li>
                <a href="#recursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Recursos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contacto</h3>
            <p className="text-sm text-muted-foreground mb-2">
              ¿Tienes preguntas o sugerencias?
            </p>
            <p className="text-sm text-muted-foreground">
              Únete a la conversación sobre IA ética y responsable.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Ética en IA. Contenido educativo para el futuro digital.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>para la educación</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
