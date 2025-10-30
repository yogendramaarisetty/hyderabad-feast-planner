import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { menuCategories, MenuItem } from "@/data/menuData";
import { ChefHat, Users, Plus, Minus, X, Search, Filter, Star, Calculator } from "lucide-react";
import ItemPreviewDialog from "./ItemPreviewDialog";
import PricingOverlay from "./PricingOverlay";

interface MenuBuilderProps {
  selectedItems: string[];
  onToggleItem: (itemId: string) => void;
  headCount: number;
  onHeadCountChange: (count: number) => void;
  onProceedToBooking: () => void;
}

const MenuBuilder = ({
  selectedItems,
  onToggleItem,
  headCount,
  onHeadCountChange,
  onProceedToBooking,
}: MenuBuilderProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<MenuItem | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Get all items flattened for navigation
  const allItems = menuCategories.flatMap(category => category.items);

  const handlePreviewItem = (item: MenuItem) => {
    setPreviewItem(item);
    setIsPreviewOpen(true);
  };

  const handleNextItem = () => {
    if (!previewItem) return;
    const currentIndex = allItems.findIndex(item => item.id === previewItem.id);
    const nextIndex = (currentIndex + 1) % allItems.length;
    setPreviewItem(allItems[nextIndex]);
  };

  const handlePreviousItem = () => {
    if (!previewItem) return;
    const currentIndex = allItems.findIndex(item => item.id === previewItem.id);
    const previousIndex = currentIndex === 0 ? allItems.length - 1 : currentIndex - 1;
    setPreviewItem(allItems[previousIndex]);
  };

  const getItemImage = (item: MenuItem) => {
    return item.image || `https://api.dicebear.com/7.x/shapes/svg?seed=${item.id}&backgroundColor=f5efe7`;
  };

  const filteredCategories = menuCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <section id="menu-builder" className="py-20 px-4 bg-gradient-to-b from-cream/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-burgundy/10 rounded-full border border-burgundy/20 mb-6">
            <ChefHat className="w-4 h-4 text-burgundy" />
            <span className="text-sm font-medium text-burgundy tracking-wide">CUSTOM MENU BUILDER</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-charcoal mb-6">
            Build Your
            <span className="block text-3xl lg:text-4xl font-heading text-burgundy mt-2">
              Perfect Menu
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Select items from each category to create your perfect catering experience
          </p>
        </div>

        {/* Event Details Section */}
        <div className="mb-12 lg:mb-16 animate-slide-up">
          <div className="bg-gradient-to-br from-burgundy/5 to-gold/5 rounded-3xl p-4 sm:p-6 lg:p-8 border border-burgundy/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-burgundy to-burgundy/80 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-charcoal">Event Details</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Head Count Input */}
              <div className="space-y-4">
                <Label htmlFor="headcount" className="text-lg font-heading font-semibold text-charcoal">
                  Number of Guests
                </Label>
                <Input
                  id="headcount"
                  type="number"
                  min="1"
                  max="1000"
                  value={headCount === 0 ? '' : headCount}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') {
                      onHeadCountChange(0); // Allow empty field
                    } else {
                      const numValue = parseInt(value);
                      if (!isNaN(numValue)) {
                        onHeadCountChange(numValue); // Allow any number, no limits
                      }
                    }
                  }}
                  className="text-xl sm:text-2xl h-12 sm:h-14 text-center font-bold border-2 border-burgundy/20 focus:border-burgundy rounded-2xl"
                  placeholder="Enter number of guests"
                />
                
                {/* Quick Select */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Quick Select:</p>
                  <div className="flex flex-wrap gap-2">
                    {[10, 25, 50, 100, 200, 500].map((count) => (
                      <Button
                        key={count}
                        variant={headCount === count ? "default" : "outline"}
                        size="sm"
                        onClick={() => onHeadCountChange(count)}
                        className={`rounded-xl ${
                          headCount === count 
                            ? "bg-burgundy text-white" 
                            : "border-burgundy/20 hover:border-burgundy hover:bg-burgundy/5"
                        }`}
                      >
                        {count} guests
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 animate-slide-up">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-2 border-burgundy/20 focus:border-burgundy rounded-2xl"
            />
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-6">
          {filteredCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="animate-slide-up mb-6"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div
                className="sticky top-4 z-10 flex items-center justify-between p-4 bg-gradient-to-r from-burgundy/5 to-gold/5 rounded-xl border border-burgundy/10 cursor-pointer hover:from-burgundy/10 hover:to-gold/10 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-elegant"
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.id ? null : category.id
                  )
                }
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-burgundy to-burgundy/80 rounded-xl flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-charcoal">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.items.length} items
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-base font-bold text-burgundy">
                      {selectedItems.filter((id) =>
                        category.items.some((item) => item.id === id)
                      ).length}
                    </p>
                    <p className="text-xs text-muted-foreground">selected</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    expandedCategory === category.id ? 'rotate-180' : ''
                  }`}>
                    <div className="w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-burgundy"></div>
                  </div>
                </div>
              </div>

              {/* Category Items */}
              {expandedCategory === category.id && (
                <div className="mt-4 pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 animate-slide-up">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-gradient-to-br from-background to-cream/30 rounded-xl p-3 border border-burgundy/10 hover:border-burgundy/20 hover:shadow-elegant transition-all duration-300 cursor-pointer"
                      onClick={() => onToggleItem(item.id)}
                    >
                      {/* Compact Item Layout */}
                      <div className="flex items-center space-x-3">
                        {/* Checkbox */}
                        <Checkbox
                          id={item.id}
                          checked={selectedItems.includes(item.id)}
                          onCheckedChange={() => onToggleItem(item.id)}
                          className="border-burgundy data-[state=checked]:bg-burgundy flex-shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        />

                        {/* Item Image */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePreviewItem(item);
                          }}
                          className="w-12 h-12 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
                        >
                          <img
                            src={getItemImage(item)}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </button>

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <Label
                              htmlFor={item.id}
                              className="text-sm font-heading font-semibold text-charcoal cursor-pointer group-hover:text-burgundy transition-colors duration-200"
                            >
                              {item.name}
                            </Label>
                            
                            {/* Veg/Non-Veg Icon */}
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              item.isVeg 
                                ? "bg-emerald/20 border border-emerald/30" 
                                : "bg-red-500/20 border border-red-500/30"
                            }`}>
                              <div className={`w-2 h-2 rounded-full ${
                                item.isVeg ? "bg-emerald" : "bg-red-500"
                              }`}></div>
                            </div>
                          </div>
                          
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary and CTA */}
        {selectedItems.length > 0 && headCount > 0 && (
          <div className="mt-16 animate-scale-in">
            <div className="bg-gradient-to-r from-burgundy to-burgundy/90 rounded-3xl p-8 text-center text-white shadow-elegant">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">
                    Your Custom Menu is Ready!
                  </h3>
                  <p className="text-xl opacity-90">
                    {selectedItems.length} items selected for {headCount} guests
                  </p>
                </div>
                
                <Button
                  onClick={onProceedToBooking}
                  className="px-12 py-4 text-xl font-heading font-bold bg-white text-burgundy hover:bg-gold hover:text-white transition-all duration-300 rounded-2xl shadow-lg hover:shadow-glow"
                >
                  Get Estimation & Book
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Preview Dialog */}
        <ItemPreviewDialog
          item={previewItem}
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          onNext={handleNextItem}
          onPrevious={handlePreviousItem}
          isSelected={previewItem ? selectedItems.includes(previewItem.id) : false}
          onToggleSelect={() => previewItem && onToggleItem(previewItem.id)}
        />

        {/* Pricing Overlay */}
        <PricingOverlay
          selectedItems={selectedItems}
          headCount={headCount}
          isVisible={selectedItems.length > 0 && headCount > 0}
          onClose={() => {}}
        />
      </div>
    </section>
  );
};

export default MenuBuilder;
