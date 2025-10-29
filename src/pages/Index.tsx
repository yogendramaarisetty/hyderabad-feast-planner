import { useState } from "react";
import Hero from "@/components/Hero";
import PackageSelection from "@/components/PackageSelection";
import MenuBuilder from "@/components/MenuBuilder";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [headCount, setHeadCount] = useState<number>(50);

  const handleSelectPackage = (packageId: string) => {
    if (selectedPackage === packageId) {
      setSelectedPackage(null);
    } else {
      setSelectedPackage(packageId);
      setSelectedItems([]); // Clear custom selections when package is selected
    }
  };

  const handleToggleItem = (itemId: string) => {
    setSelectedPackage(null); // Clear package selection when custom items are selected
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleProceedToBooking = () => {
    const bookingSection = document.getElementById("booking");
    bookingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <PackageSelection
        selectedPackage={selectedPackage}
        onSelectPackage={handleSelectPackage}
      />
      <MenuBuilder
        selectedItems={selectedItems}
        onToggleItem={handleToggleItem}
        headCount={headCount}
        onHeadCountChange={setHeadCount}
        onProceedToBooking={handleProceedToBooking}
      />
      <BookingSection
        selectedItems={selectedItems}
        headCount={headCount}
        selectedPackage={selectedPackage}
      />
      <Footer />
    </div>
  );
};

export default Index;
