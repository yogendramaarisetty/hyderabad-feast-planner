import { Button } from "@/components/ui/button";
import { Check, Star, Users, Clock, ChefHat, Coffee, Utensils, Wine, IceCream, Zap, Calculator } from "lucide-react";
import { packages, calculatePackagePricing } from "@/data/menuData";

// Function to get category icon based on item name
const getCategoryIcon = (item: string) => {
  const itemLower = item.toLowerCase();
  
  if (itemLower.includes('starter') || itemLower.includes('appetizer') || itemLower.includes('snack')) {
    return <Utensils className="w-3 h-3" />;
  } else if (itemLower.includes('juice') || itemLower.includes('drink') || itemLower.includes('beverage')) {
    return <Coffee className="w-3 h-3" />;
  } else if (itemLower.includes('rice') || itemLower.includes('biryani') || itemLower.includes('pulao')) {
    return <ChefHat className="w-3 h-3" />;
  } else if (itemLower.includes('curry') || itemLower.includes('masala') || itemLower.includes('gravy')) {
    return <Wine className="w-3 h-3" />;
  } else if (itemLower.includes('dessert') || itemLower.includes('sweet') || itemLower.includes('halwa')) {
    return <IceCream className="w-3 h-3" />;
  } else if (itemLower.includes('live') || itemLower.includes('counter') || itemLower.includes('fresh')) {
    return <Zap className="w-3 h-3" />;
  } else {
    return <Utensils className="w-3 h-3" />;
  }
};

interface PackageSelectionProps {
  selectedPackage: string | null;
  onSelectPackage: (packageId: string) => void;
  headCount: number;
}

const PackageSelection = ({ selectedPackage, onSelectPackage, headCount }: PackageSelectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-cream/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-burgundy/10 rounded-full border border-burgundy/20 mb-6">
            <Star className="w-4 h-4 text-burgundy" />
            <span className="text-sm font-medium text-burgundy tracking-wide">CURATED PACKAGES</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-charcoal mb-6">
            Ready-Made
            <span className="block text-3xl lg:text-4xl font-heading text-burgundy mt-2">
              Experiences
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated menu packages or build your own custom menu below
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${
                selectedPackage === pkg.id
                  ? "ring-4 ring-burgundy/30 shadow-elegant scale-105"
                  : "hover:shadow-elegant hover:scale-102"
              }`}
              onClick={() => onSelectPackage(pkg.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                selectedPackage === pkg.id
                  ? "bg-gradient-to-br from-burgundy/5 to-gold/5"
                  : "bg-gradient-to-br from-cream to-background group-hover:from-burgundy/5 group-hover:to-gold/5"
              }`}></div>

              {/* Border */}
              <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                selectedPackage === pkg.id
                  ? "border-2 border-burgundy/30"
                  : "border border-burgundy/10 group-hover:border-burgundy/20"
              }`}></div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="space-y-2 flex-1 min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-charcoal group-hover:text-burgundy transition-colors duration-300 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                  
                  {selectedPackage === pkg.id && (
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-burgundy to-burgundy/80 rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  )}
                </div>

                {/* Pricing Information */}
                {headCount > 0 && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-burgundy/5 to-gold/5 rounded-2xl border border-burgundy/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Calculator className="w-4 h-4 text-burgundy" />
                        <span className="text-sm font-medium text-burgundy">Combo Pricing</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{headCount} guests</span>
                    </div>
                    
                    {(() => {
                      const pricing = calculatePackagePricing(pkg.id, headCount);
                      if (!pricing) return null;
                      
                      return (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-burgundy mb-1">
                            ₹{Math.round(pricing.perPersonCost)}/person
                          </div>
                          <div className="text-xs text-green-600 font-medium">
                            Includes {pricing.comboDiscount}% combo discount
                            {pricing.volumeDiscountPercentage > 0 && ` + ${pricing.volumeDiscountPercentage}% volume discount`}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* Items List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {pkg.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3 group/item">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-burgundy/20 to-gold/20 rounded-full flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-burgundy" />
                      </div>
                      <div className="flex items-center space-x-2 flex-1 min-w-0">
                        <div className="flex-shrink-0 text-burgundy/60">
                          {getCategoryIcon(item)}
                        </div>
                        <span className="text-sm sm:text-base text-charcoal group-hover/item:text-burgundy transition-colors duration-200 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  className={`w-full py-3 sm:py-4 text-base sm:text-lg font-heading font-semibold rounded-2xl transition-all duration-300 ${
                    selectedPackage === pkg.id
                      ? "bg-gradient-to-r from-burgundy to-burgundy/90 text-white shadow-lg hover:shadow-glow"
                      : "bg-gradient-to-r from-burgundy to-burgundy/90 text-white border border-burgundy hover:from-burgundy/90 hover:to-burgundy/80 hover:shadow-elegant"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPackage(pkg.id);
                  }}
                >
                  {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br from-gold/20 to-emerald/20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-slide-up">
          <p className="text-base sm:text-lg text-muted-foreground mb-6">
            Don't see what you're looking for?
          </p>
          <Button
            variant="outline"
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-heading font-semibold border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-all duration-300 rounded-2xl"
          >
            Build Custom Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackageSelection;
