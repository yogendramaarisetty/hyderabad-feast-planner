import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { Checkbox } from "@/components/ui/checkbox";

interface ItemPreviewDialogProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  isSelected: boolean;
  onToggleSelect: () => void;
}

const ItemPreviewDialog = ({
  item,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  isSelected,
  onToggleSelect,
}: ItemPreviewDialogProps) => {
  if (!item) return null;

  const getItemImage = (itemId: string) => {
    return `https://api.dicebear.com/7.x/shapes/svg?seed=${itemId}&backgroundColor=f5efe7`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={onPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={onNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
            <img
              src={getItemImage(item.id)}
              alt={item.name}
              className="w-full h-full object-contain p-8"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-primary">{item.name}</h2>
                  {item.isVeg ? (
                    <div className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                    </div>
                  ) : (
                    <div className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground capitalize">{item.category.replace("-", " ")}</p>
              </div>

              {/* Select Checkbox */}
              <div className="flex items-center gap-2">
                <Checkbox
                  id={`preview-${item.id}`}
                  checked={isSelected}
                  onCheckedChange={onToggleSelect}
                  className="border-primary data-[state=checked]:bg-primary w-6 h-6"
                />
                <label htmlFor={`preview-${item.id}`} className="text-sm font-medium cursor-pointer">
                  Select Item
                </label>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>Category: <span className="font-medium text-foreground capitalize">{item.category.replace("-", " ")}</span></p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemPreviewDialog;
