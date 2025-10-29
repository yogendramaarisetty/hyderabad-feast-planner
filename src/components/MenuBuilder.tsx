import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { menuCategories, MenuItem } from "@/data/menuData";
import { ChefHat, Users, Eye } from "lucide-react";
import ItemPreviewDialog from "./ItemPreviewDialog";

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

  const getItemImage = (itemId: string) => {
    return `https://api.dicebear.com/7.x/shapes/svg?seed=${itemId}&backgroundColor=f5efe7`;
  };

  return (
    <section id="menu-builder" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Build Your Custom Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select items from each category to create your perfect catering experience
          </p>
        </div>

        {/* Head Count Input */}
        <Card className="mb-8 border-2 border-primary/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardTitle className="flex items-center text-2xl">
              <Users className="mr-2 text-primary" />
              Event Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-end">
              <div className="flex-1">
                <Label htmlFor="headcount" className="text-lg mb-2 block">
                  Number of Guests/Plates
                </Label>
                <Input
                  id="headcount"
                  type="number"
                  min="1"
                  value={headCount}
                  onChange={(e) => onHeadCountChange(parseInt(e.target.value) || 0)}
                  className="text-lg h-12"
                  placeholder="Enter number of guests"
                />
              </div>
              <div className="bg-muted px-6 py-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Selected Items</p>
                <p className="text-3xl font-bold text-primary">{selectedItems.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Categories */}
        <div className="grid gap-6">
          {menuCategories.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary"
            >
              <CardHeader
                className="cursor-pointer bg-gradient-to-r from-card to-muted/30 hover:from-primary/5 hover:to-secondary/5 transition-colors"
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.id ? null : category.id
                  )
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ChefHat className="text-primary h-6 w-6" />
                    <div>
                      <CardTitle className="text-xl text-primary">
                        {category.title}
                      </CardTitle>
                      <CardDescription>
                        {category.items.length} items available
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-secondary">
                    {
                      selectedItems.filter((id) =>
                        category.items.some((item) => item.id === id)
                      ).length
                    }{" "}
                    selected
                  </div>
                </div>
              </CardHeader>
              {expandedCategory === category.id && (
                <CardContent className="pt-6 animate-fade-in">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/20"
                      >
                        <Checkbox
                          id={item.id}
                          checked={selectedItems.includes(item.id)}
                          onCheckedChange={() => onToggleItem(item.id)}
                          className="border-primary data-[state=checked]:bg-primary flex-shrink-0"
                        />
                        
                        {/* Item Image */}
                        <button
                          onClick={() => handlePreviewItem(item)}
                          className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 border-muted hover:border-primary transition-colors"
                        >
                          <img
                            src={getItemImage(item.id)}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </button>

                        <div className="flex-1 min-w-0">
                          <Label
                            htmlFor={item.id}
                            className="text-base cursor-pointer block truncate"
                          >
                            {item.name}
                          </Label>
                        </div>

                        {/* Veg/Non-Veg Icon */}
                        {item.isVeg ? (
                          <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-green-600"></div>
                          </div>
                        ) : (
                          <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-red-600"></div>
                          </div>
                        )}

                        {/* Preview Icon */}
                        <button
                          onClick={() => handlePreviewItem(item)}
                          className="flex-shrink-0 p-1 hover:bg-primary/10 rounded transition-colors"
                          title="Preview item"
                        >
                          <Eye className="h-4 w-4 text-primary" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Summary and CTA */}
        {selectedItems.length > 0 && headCount > 0 && (
          <Card className="mt-8 border-2 border-primary shadow-xl animate-scale-in">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Your Custom Menu Ready!
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedItems.length} items selected for {headCount} guests
                  </p>
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={onProceedToBooking}
                  className="text-lg px-8 py-6 h-auto"
                >
                  Get Estimation & Book
                </Button>
              </div>
            </CardContent>
          </Card>
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
      </div>
    </section>
  );
};

export default MenuBuilder;
