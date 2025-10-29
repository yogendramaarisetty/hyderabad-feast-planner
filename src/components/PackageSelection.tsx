import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { packages } from "@/data/menuData";

interface PackageSelectionProps {
  selectedPackage: string | null;
  onSelectPackage: (packageId: string) => void;
}

const PackageSelection = ({ selectedPackage, onSelectPackage }: PackageSelectionProps) => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ready-Made Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated menu packages or build your own custom menu below
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                selectedPackage === pkg.id
                  ? "border-primary border-2 shadow-xl scale-105"
                  : "border-border"
              }`}
              onClick={() => onSelectPackage(pkg.id)}
            >
              <CardHeader className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardTitle className="text-2xl text-primary flex items-center justify-between">
                  {pkg.name}
                  {selectedPackage === pkg.id && (
                    <Check className="text-secondary h-6 w-6" />
                  )}
                </CardTitle>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {pkg.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-accent h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={selectedPackage === pkg.id ? "default" : "outline"}
                  className="w-full mt-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPackage(pkg.id);
                  }}
                >
                  {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSelection;
