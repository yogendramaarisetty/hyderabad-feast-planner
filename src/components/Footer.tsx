import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Treat Caterers</h3>
            <p className="text-primary-foreground/80">
              Deliciously Crafted, Perfectly Served – Your Event Deserves the Best!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">9010509090</p>
                  <p className="text-sm text-primary-foreground/80">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80">www.treatcaterers.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p>1-50 GP Road Kokapet,</p>
                <p>Narsingi municipality</p>
                <p>Hyderabad 500075</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <div className="mb-4">
            <p className="text-lg font-semibold text-secondary mb-2">Our Promise</p>
            <p className="text-primary-foreground/90">
              100% Natural • No Preservatives • Fresh Daily
            </p>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2025 Treat Caterers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
