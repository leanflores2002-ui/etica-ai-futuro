import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThemeCards from "@/components/ThemeCards";
import TopicDetails from "@/components/TopicDetails";
import CaseStudies from "@/components/CaseStudies";
import Resources from "@/components/Resources";
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
      <ThemeCards />
      <TopicDetails />
      <CaseStudies />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
