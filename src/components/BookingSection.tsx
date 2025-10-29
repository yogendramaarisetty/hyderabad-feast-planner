import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  additionalNotes: string;
}

interface BookingSectionProps {
  selectedItems: string[];
  headCount: number;
  selectedPackage: string | null;
}

const BookingSection = ({ selectedItems, headCount, selectedPackage }: BookingSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BookingDetails>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*New Catering Booking Request*

*Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

*Event Details:*
Date: ${formData.eventDate}
Type: ${formData.eventType}
Guests: ${headCount}

${selectedPackage ? `*Package:* ${selectedPackage}` : `*Custom Menu Items:* ${selectedItems.length} items selected`}

*Additional Notes:*
${formData.additionalNotes || "None"}
    `.trim();

    const whatsappUrl = `https://wa.me/919010509090?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll get back to you shortly with your estimation!",
    });
  };

  return (
    <section id="booking" className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get Your Estimation
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill in your details and we'll send you a personalized quote
          </p>
        </div>

        <Card className="border-2 border-primary/20 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardTitle className="text-2xl">Booking Details</CardTitle>
            <CardDescription>
              Complete the form below to receive your catering estimation
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventDate">Event Date *</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Input
                    id="eventType"
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    placeholder="Wedding, Birthday, Corporate, etc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalNotes: e.target.value })
                  }
                  placeholder="Any special requirements or preferences..."
                  rows={4}
                />
              </div>

              {/* Summary */}
              <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                <h3 className="font-semibold text-lg text-primary mb-3">Your Selection</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Guests</p>
                    <p className="font-medium text-lg">{headCount} people</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Items</p>
                    <p className="font-medium text-lg">
                      {selectedPackage ? "Package Selected" : `${selectedItems.length} custom items`}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg py-6 h-auto"
              >
                Send Request via WhatsApp
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Phone className="mx-auto h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">9010509090</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Mail className="mx-auto h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Website</h3>
              <p className="text-muted-foreground">treatcaterers.com</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <MapPin className="mx-auto h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">Kokapet, Hyderabad</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
