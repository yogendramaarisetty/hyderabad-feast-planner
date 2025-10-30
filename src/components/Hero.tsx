import React, { useState } from "react";
import { Utensils } from "lucide-react";

const Hero = () => {
  const [logoUrl, setLogoUrl] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Load logo from localStorage on component mount
  React.useEffect(() => {
    const savedLogo = localStorage.getItem('treat-caterers-logo');
    if (savedLogo) {
      setLogoUrl(savedLogo);
    }
  }, []);

  const handleLogoChange = (newLogoUrl: string) => {
    setLogoUrl(newLogoUrl);
    localStorage.setItem('treat-caterers-logo', newLogoUrl);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-background to-cream">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Brand Identity */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 px-4 py-2 bg-burgundy/10 rounded-full border border-burgundy/20">
                  <div className="w-2 h-2 bg-burgundy rounded-full"></div>
                  <span className="text-sm font-medium text-burgundy tracking-wide">PREMIUM CATERING SERVICES</span>
                </div>
                
                {logoUrl ? (
                  <div className="flex items-center space-x-4">
                    <img
                      src={logoUrl}
                      alt="Treat Caterers Logo"
                      className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
                    />
                    <div>
                      <h1 className="text-4xl lg:text-6xl font-display font-bold text-charcoal leading-tight">
                        Treat
                      </h1>
                      <h2 className="text-2xl lg:text-3xl font-heading text-burgundy font-semibold tracking-widest">
                        CATERERS
                      </h2>
                    </div>
                  </div>
                ) : (
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold text-charcoal leading-tight">
                  Treat
                  <span className="block text-2xl sm:text-4xl lg:text-5xl font-heading text-burgundy mt-2">
                    Caterers
                  </span>
                </h1>
                )}
                
                <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold rounded-full"></div>
              </div>

              {/* Tagline */}
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl font-heading text-charcoal leading-relaxed">
                  Deliciously Crafted,
                </p>
                <p className="text-2xl lg:text-3xl font-heading text-burgundy leading-relaxed">
                  Perfectly Served
                </p>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                  Your special moments deserve exceptional culinary experiences. 
                  We bring elegance and flavor to every event.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("menu-builder")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-burgundy to-burgundy/90 text-white rounded-2xl font-heading font-semibold text-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Build Your Menu</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button
                  onClick={() => window.location.href = "tel:9010509090"}
                  className="px-8 py-4 border-2 border-burgundy text-burgundy rounded-2xl font-heading font-semibold text-lg hover:bg-burgundy hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Call 9010509090
                </button>
              </div>

              {/* Logo Upload (for demo) */}
              <div className="pt-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        const result = e.target?.result as string;
                        handleLogoChange(result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gold/10 text-gold rounded-lg cursor-pointer hover:bg-gold/20 transition-colors text-sm"
                >
                  <span>📷</span>
                  <span>Upload Logo</span>
                </label>
              </div>
            </div>

            {/* Right Content - Simple Visual */}
            <div className="flex justify-center items-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-2xl flex items-center justify-center border border-burgundy/20">
                  <Utensils className="w-16 h-16 text-burgundy/60" />
                </div>
                <p className="text-sm text-charcoal/60 font-medium">
                  Premium Catering Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-burgundy/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-burgundy rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
