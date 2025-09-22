import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="portfolio">
          <PortfolioSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-secondary-foreground/70">
            © 2024 Data Manager Portfolio. Transforming data into strategic insights.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
