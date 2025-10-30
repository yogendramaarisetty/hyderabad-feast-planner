import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import PackageSelection from "@/components/PackageSelection";
import MenuBuilder from "@/components/MenuBuilder";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [headCount, setHeadCount] = useState<number>(50);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    eventLocation: "",
    additionalNotes: ""
  });

  // Load from localStorage on component mount
  useEffect(() => {
    const savedPackage = localStorage.getItem('treat-caterers-selected-package');
    const savedItems = localStorage.getItem('treat-caterers-selected-items');
    const savedHeadCount = localStorage.getItem('treat-caterers-head-count');
    const savedBookingDetails = localStorage.getItem('treat-caterers-booking-details');

    if (savedPackage) {
      setSelectedPackage(savedPackage);
    }
    if (savedItems) {
      try {
        setSelectedItems(JSON.parse(savedItems));
      } catch (error) {
        console.error('Error parsing saved items:', error);
      }
    }
    if (savedHeadCount) {
      const count = parseInt(savedHeadCount);
      if (!isNaN(count) && count > 0) {
        setHeadCount(count);
      }
    }
    if (savedBookingDetails) {
      try {
        setBookingDetails(JSON.parse(savedBookingDetails));
      } catch (error) {
        console.error('Error parsing saved booking details:', error);
      }
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (selectedPackage) {
      localStorage.setItem('treat-caterers-selected-package', selectedPackage);
    } else {
      localStorage.removeItem('treat-caterers-selected-package');
    }
  }, [selectedPackage]);

  useEffect(() => {
    localStorage.setItem('treat-caterers-selected-items', JSON.stringify(selectedItems));
  }, [selectedItems]);

  useEffect(() => {
    localStorage.setItem('treat-caterers-head-count', headCount.toString());
  }, [headCount]);

  useEffect(() => {
    localStorage.setItem('treat-caterers-booking-details', JSON.stringify(bookingDetails));
  }, [bookingDetails]);

  const handleSelectPackage = (packageId: string) => {
    if (selectedPackage === packageId) {
      setSelectedPackage(null);
    } else {
      setSelectedPackage(packageId);
      setSelectedItems([]); // Clear custom selections when package is selected
      // Scroll to booking section when package is selected
      setTimeout(() => {
        const bookingSection = document.getElementById("booking");
        bookingSection?.scrollIntoView({ behavior: "smooth" });
      }, 300);
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
        headCount={headCount}
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
        bookingDetails={bookingDetails}
        onBookingDetailsChange={setBookingDetails}
      />
      <Footer />
    </div>
  );
};

export default Index;
