import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar, Send, Star, CheckCircle, Users } from "lucide-react";
import { getAllMenuItems, calculatePricing } from "@/data/menuData";

interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  eventLocation: string;
  additionalNotes: string;
}

interface BookingSectionProps {
  selectedItems: string[];
  headCount: number;
  selectedPackage: string | null;
  bookingDetails: BookingDetails;
  onBookingDetailsChange: (details: BookingDetails) => void;
}

const BookingSection = ({ selectedItems, headCount, selectedPackage, bookingDetails, onBookingDetailsChange }: BookingSectionProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get menu items and pricing
    const allMenuItems = getAllMenuItems();
    const pricing = calculatePricing(selectedItems, headCount, allMenuItems);
    const selectedMenuItems = allMenuItems.filter(item => selectedItems.includes(item.id));
    
    // Group items by category
    const itemsByCategory = selectedMenuItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, typeof selectedMenuItems>);
    
    // Create structured WhatsApp message
    const message = `
🍽️ *NEW CATERING BOOKING REQUEST* 🍽️

👤 *CUSTOMER DETAILS*
• Name: ${bookingDetails.name}
• Email: ${bookingDetails.email}
• Phone: ${bookingDetails.phone}

📅 *EVENT DETAILS*
• Date: ${bookingDetails.eventDate}
• Event Type: ${bookingDetails.eventType}
• Location: ${bookingDetails.eventLocation || "Not specified"}
• Number of Guests: ${headCount}

${selectedPackage ? 
  `📦 *SELECTED PACKAGE*
• ${selectedPackage}
• Package includes all standard items for ${headCount} guests` : 
  `🍽️ *CUSTOM MENU SELECTION*
• Total Items: ${selectedItems.length}
• Guest Count: ${headCount}
• Items by Category:

${Object.entries(itemsByCategory).map(([category, items]) => 
  `📋 *${category.replace('-', ' ').toUpperCase()}* (${items.length} items)
${items.map(item => `• ${item.name} - ₹${item.basePrice}`).join('\n')}`
).join('\n\n')}

💰 *DETAILED PRICING BREAKDOWN*
• Per Person Cost: ₹${pricing.perPersonCost}
• Subtotal (${headCount} guests): ₹${pricing.subtotal.toLocaleString()}
${pricing.discountPercentage > 0 ? `• Discount (${pricing.discountPercentage}%): -₹${pricing.discountAmount.toLocaleString()}` : ''}
• *TOTAL ESTIMATED COST: ₹${pricing.total.toLocaleString()}*

📊 *COST PER PERSON: ₹${Math.round(pricing.total / headCount)}*`}

📝 *ADDITIONAL NOTES*
${bookingDetails.additionalNotes || "No additional notes"}

---
*Generated from Treat Caterers Website*
    `.trim();

    const whatsappUrl = `https://wa.me/919010509090?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll get back to you shortly with your estimation!",
    });
  };

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-b from-background to-burgundy/5">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-burgundy/10 rounded-full border border-burgundy/20 mb-6">
            <Send className="w-4 h-4 text-burgundy" />
            <span className="text-sm font-medium text-burgundy tracking-wide">GET YOUR QUOTE</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-charcoal mb-6">
            Get Your
            <span className="block text-3xl lg:text-4xl font-heading text-burgundy mt-2">
              Estimation
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fill in your details and we'll send you a personalized quote within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="bg-gradient-to-br from-background to-cream/30 rounded-3xl p-8 lg:p-12 border border-burgundy/10 shadow-elegant">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-burgundy to-burgundy/80 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-charcoal">Booking Details</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h4 className="text-lg font-heading font-semibold text-charcoal border-b border-burgundy/20 pb-2">
                    Personal Information
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base font-heading font-semibold text-charcoal">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={bookingDetails.name}
                        onChange={(e) => onBookingDetailsChange({ ...bookingDetails, name: e.target.value })}
                        placeholder="Your full name"
                        className="h-12 border-2 border-burgundy/20 focus:border-burgundy rounded-2xl text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-base font-heading font-semibold text-charcoal">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={bookingDetails.phone}
                        onChange={(e) => onBookingDetailsChange({ ...bookingDetails, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="h-12 border-2 border-burgundy/20 focus:border-burgundy rounded-2xl text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-heading font-semibold text-charcoal">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={bookingDetails.email}
                      onChange={(e) => onBookingDetailsChange({ ...bookingDetails, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="h-12 border-2 border-burgundy/20 focus:border-burgundy rounded-2xl text-lg"
                    />
                  </div>
                </div>

                {/* Event Information */}
                <div className="space-y-6">
                  <h4 className="text-lg font-heading font-semibold text-charcoal border-b border-burgundy/20 pb-2">
                    Event Information
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="eventDate" className="text-base font-heading font-semibold text-charcoal">
                        Event Date *
                      </Label>
                      <Input
                        id="eventDate"
                        type="date"
                        required
                        value={bookingDetails.eventDate}
                        onChange={(e) => onBookingDetailsChange({ ...bookingDetails, eventDate: e.target.value })}
                        className="h-12 border-2 border-burgundy/20 focus:border-burgundy rounded-2xl text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="eventType" className="text-base font-heading font-semibold text-charcoal">
                        Event Type *
                      </Label>
                      <Input
                        id="eventType"
                        required
                        value={bookingDetails.eventType}
                        onChange={(e) => onBookingDetailsChange({ ...bookingDetails, eventType: e.target.value })}
                        placeholder="Wedding, Birthday, Corporate, etc."
                        className="h-12 border-2 border-burgundy/20 focus:border-burgundy rounded-2xl text-lg"
                      />
                    </div>
                  </div>

                  {/* Event Location */}
                  <div className="space-y-3">
                    <Label htmlFor="eventLocation" className="text-base font-heading font-semibold text-charcoal">
                      Event Location *
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-burgundy/60" />
                      <Input
                        id="eventLocation"
                        required
                        value={bookingDetails.eventLocation}
                        onChange={(e) => onBookingDetailsChange({ ...bookingDetails, eventLocation: e.target.value })}
                        placeholder="Enter complete address with area, city, pincode"
                        className="h-12 pl-12 border-2 border-burgundy/20 focus:border-burgundy rounded-2xl text-lg"
                      />
                    </div>
                    
                    {/* Popular Areas */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">Popular areas in Hyderabad:</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Gachibowli", "HITEC City", "Kondapur", "Madhapur", "Jubilee Hills",
                          "Banjara Hills", "Secunderabad", "Begumpet", "Ameerpet", "Kukatpally",
                          "Miyapur", "Kokapet", "Financial District", "Nanakramguda", "Manikonda"
                        ].map((area) => (
                          <button
                            key={area}
                            type="button"
                            onClick={() => onBookingDetailsChange({ ...bookingDetails, eventLocation: area })}
                            className="px-3 py-1 text-xs bg-burgundy/10 text-burgundy rounded-full hover:bg-burgundy/20 transition-colors duration-200"
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      Please provide the complete address where the event will be held
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="notes" className="text-base font-heading font-semibold text-charcoal">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      value={bookingDetails.additionalNotes}
                      onChange={(e) =>
                        onBookingDetailsChange({ ...bookingDetails, additionalNotes: e.target.value })
                      }
                      placeholder="Any special requirements, dietary restrictions, or preferences..."
                      rows={4}
                      className="border-2 border-burgundy/20 focus:border-burgundy rounded-2xl text-lg resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-4 text-xl font-heading font-bold bg-gradient-to-r from-burgundy to-burgundy/90 text-white hover:from-gold hover:to-gold/90 hover:text-charcoal transition-all duration-300 rounded-2xl shadow-elegant hover:shadow-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-xl font-heading font-bold text-charcoal text-center">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-burgundy/5 to-gold/5 rounded-2xl border border-burgundy/10 hover:shadow-elegant transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-burgundy to-burgundy/80 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-charcoal">Phone</p>
                    <p className="text-burgundy font-medium">9010509090</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-burgundy/5 to-gold/5 rounded-2xl border border-burgundy/10 hover:shadow-elegant transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-charcoal">Website</p>
                    <p className="text-burgundy font-medium">treatcaterers.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-burgundy/5 to-gold/5 rounded-2xl border border-burgundy/10 hover:shadow-elegant transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald to-emerald/80 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-charcoal">Location</p>
                    <p className="text-burgundy font-medium">Kokapet, Hyderabad</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-burgundy to-burgundy/90 text-white py-4 px-8 rounded-2xl font-heading font-semibold text-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Get Estimation & Book</span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
