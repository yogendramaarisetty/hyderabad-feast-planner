import { MapPin, Phone, Mail, Star, Heart, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-charcoal to-burgundy text-white py-20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-4xl font-display font-bold text-white">
                Treat
                <span className="block text-2xl font-heading text-gold mt-1">
                  Caterers
                </span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-emerald rounded-full"></div>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-md">
              Deliciously Crafted, Perfectly Served – Your Event Deserves the Best! 
              We bring elegance and flavor to every special moment.
            </p>
            
            {/* Promise Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gold/20 rounded-full border border-gold/30">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-gold">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-emerald/20 rounded-full border border-emerald/30">
                <Heart className="w-4 h-4 text-emerald" />
                <span className="text-sm font-medium text-emerald">Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-burgundy/20 rounded-full border border-burgundy/30">
                <Star className="w-4 h-4 text-burgundy" />
                <span className="text-sm font-medium text-burgundy">Premium Quality</span>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading font-bold text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold/80 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-charcoal" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white">9010509090</p>
                  <p className="text-sm text-white/70">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald to-emerald/80 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white">Email</p>
                  <p className="text-sm text-white/70">www.treatcaterers.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-heading font-bold text-white">Location</h4>
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-burgundy to-burgundy/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-heading font-semibold text-white">Address</p>
                <div className="text-sm text-white/70 space-y-1">
                  <p>1-50 GP Road Kokapet,</p>
                  <p>Narsingi municipality</p>
                  <p>Hyderabad 500075</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80 mb-2">
                © 2025 Treat Caterers. All rights reserved.
              </p>
              <p className="text-sm text-white/60">
                Crafted with ❤️ for your special moments
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span className="text-sm text-white/70">Premium Catering Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


