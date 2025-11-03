import Navbar from "@/components/Navbar";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Recursos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-12 text-center bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Recursos</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bibliografía, guías y recursos prácticos para profundizar en ética de IA.
            </p>
          </div>
        </section>
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default Recursos;

