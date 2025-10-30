import { useState, useEffect } from "react";
import { X, ShoppingCart, Percent, Users, Minimize2, Star } from "lucide-react";
import { calculatePricing, getAllMenuItems } from "@/data/menuData";

interface PricingOverlayProps {
  selectedItems: string[];
  headCount: number;
  isVisible: boolean;
  onClose: () => void;
}

const PricingOverlay = ({ selectedItems, headCount, isVisible, onClose }: PricingOverlayProps) => {
  const [pricing, setPricing] = useState({
    subtotal: 0,
    discountPercentage: 0,
    discountAmount: 0,
    total: 0,
    perPersonCost: 0
  });
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (selectedItems.length > 0 && headCount >= 50) {
      const allItems = getAllMenuItems();
      const calculatedPricing = calculatePricing(selectedItems, headCount, allItems);
      setPricing(calculatedPricing);
    }
  }, [selectedItems, headCount]);

  if (!isVisible || selectedItems.length === 0 || headCount <= 0) {
    return null;
  }

  // Minimized floating icon
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-gradient-to-r from-burgundy to-burgundy/90 text-white rounded-full shadow-elegant border border-burgundy/20 flex items-center justify-center hover:scale-105 transition-all duration-300 group"
        >
          <ShoppingCart className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-burgundy rounded-full flex items-center justify-center text-xs font-bold">
            {selectedItems.length}
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-burgundy to-burgundy/90 text-white rounded-2xl p-4 shadow-elegant border border-burgundy/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <h3 className="font-heading font-semibold text-lg">Cart & Pricing</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              title="Minimize"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Selected Items Preview */}
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm font-semibold">Selected Items ({selectedItems.length})</span>
            </div>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {(() => {
                const allItems = getAllMenuItems();
                const previewItems = selectedItems.map(id => allItems.find(item => item.id === id)).filter(Boolean);
                
                return (
                  <>
                    {previewItems.map((item, index) => (
                      <div key={item?.id || index} className="flex items-center space-x-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></div>
                        <span className="truncate">{item?.name}</span>
                      </div>
                    ))}
                  </>
                );
              })()}
            </div>
          </div>

          {/* Pricing Details */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-white/80">Per Person Cost:</span>
              <span className="font-semibold">₹{pricing.perPersonCost}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-white/80">Subtotal ({headCount} guests):</span>
              <span className="font-semibold">₹{pricing.subtotal.toLocaleString()}</span>
            </div>

            {pricing.discountPercentage > 0 && (
              <div className="flex justify-between items-center text-gold">
                <div className="flex items-center space-x-1">
                  <Percent className="w-3 h-3" />
                  <span>Discount ({pricing.discountPercentage}%):</span>
                </div>
                <span className="font-semibold">-₹{pricing.discountAmount.toLocaleString()}</span>
              </div>
            )}

            <div className="border-t border-white/20 pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="font-heading font-bold text-lg">Total:</span>
                <span className="font-bold text-xl">₹{pricing.total.toLocaleString()}</span>
              </div>
            </div>

            {pricing.discountPercentage > 0 && (
              <div className="flex items-center space-x-1 text-gold text-xs mt-2">
                <Users className="w-3 h-3" />
                <span>You save ₹{pricing.discountAmount.toLocaleString()} with {headCount >= 200 ? '200+' : headCount >= 100 ? '100+' : headCount >= 50 ? '50+' : '25+'} guests!</span>
              </div>
            )}
            {pricing.discountPercentage === 0 && headCount < 25 && (
              <div className="flex items-center space-x-1 text-white/70 text-xs mt-2">
                <Users className="w-3 h-3" />
                <span>Get 2% discount for 25+ guests, 5% for 50+ guests!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingOverlay;
