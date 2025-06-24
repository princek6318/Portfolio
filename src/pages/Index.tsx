
import Hero from "@/component/Hero";
import About from "@/component/About";
import Projects from "@/component/Projects";
import Contact from "@/component/Contact";
import Navigation from "@/component/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;