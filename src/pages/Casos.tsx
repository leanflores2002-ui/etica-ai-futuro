import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

const Casos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-12 text-center bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Casos de estudio</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lecciones del mundo real sobre aplicaciones de IA y sus consecuencias.
            </p>
          </div>
        </section>
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default Casos;

