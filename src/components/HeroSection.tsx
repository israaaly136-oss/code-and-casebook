import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
            Data Manager
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-6">
            Transforming Data into Strategic Insights
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about turning complex datasets into actionable business intelligence. 
          Specializing in data architecture, analysis, and strategic decision support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-hero text-white shadow-hero hover:shadow-card-hover transition-smooth"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/10 transition-smooth"
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;