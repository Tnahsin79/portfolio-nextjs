import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Header />
      <Hero />
      <Skills />
      
      {/* Services and About in same row on large screens */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Services */}
            <Services />
            
            {/* About */}
            <About />
          </div>
        </div>
      </section>
      
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
