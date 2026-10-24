import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveCanvas from "@/components/InteractiveCanvas";
import ScrollProgress from "@/components/ScrollProgress";
import PortfolioChatbot from "@/components/PortfolioChatbot";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#06090e] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Scroll-linked progress indicator at top */}
      <ScrollProgress />

      {/* Dynamic interactive neural background */}
      <InteractiveCanvas />

      {/* Main sticky navigation */}
      <Navbar />

      {/* Assembled portfolio sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      {/* Personalized AI Portfolio Chatbot */}
      <PortfolioChatbot />

      {/* Site footer */}
      <Footer />
    </div>
  );
}
