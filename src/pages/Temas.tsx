import Navbar from "@/components/Navbar";
import ThemeCards from "@/components/ThemeCards";
import TopicDetails from "@/components/TopicDetails";
import Footer from "@/components/Footer";

const Temas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-12 text-center bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Temas Clave</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora los pilares de la ética en IA: desde sesgos y privacidad hasta transparencia, responsabilidad e impacto social.
            </p>
          </div>
        </section>
        <ThemeCards />
        <TopicDetails />
      </main>
      <Footer />
    </div>
  );
};

export default Temas;

