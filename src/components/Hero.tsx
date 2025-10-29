import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Delicious catering spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/95" />
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 border-4 border-primary-foreground rotate-45 transform -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-primary-foreground rotate-45 transform translate-x-16 translate-y-16" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Treat Caterers" className="h-32 md:h-40 drop-shadow-2xl animate-scale-in" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Deliciously Crafted,
            <br />
            <span className="text-secondary">Perfectly Served</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
            Your Event Deserves the Best!
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Fresh Ingredients, Fabulous Flavor – Let's Cater Your Next Event!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("menu-builder")}
              className="text-lg px-8 py-6 h-auto group"
            >
              Build Your Menu
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.location.href = "tel:9010509090"}
            >
              <Phone className="mr-2" />
              Call 9010509090
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-secondary mb-2">100%</h3>
              <p className="text-primary-foreground">No Preservatives</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-secondary mb-2">Pure</h3>
              <p className="text-primary-foreground">Natural Ingredients</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-secondary mb-2">Fresh</h3>
              <p className="text-primary-foreground">Made Daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
