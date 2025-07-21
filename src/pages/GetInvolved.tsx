import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DollarSign, Users, Home, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DemoAnnotation from "@/components/DemoAnnotation";

const GetInvolved = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    donationAmount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    volunteerInterests: [] as string[],
    smsOptIn: false,
    yardSignName: "",
    yardSignAddress: "",
    yardSignPhone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id: string, checked: boolean | "indeterminate") => {
    if (id === "smsOptIn") {
      setFormData(prev => ({ ...prev, smsOptIn: !!checked }));
    } else {
      setFormData(prev => {
        const interests = checked
          ? [...prev.volunteerInterests, id]
          : prev.volunteerInterests.filter(interest => interest !== id);
        return { ...prev, volunteerInterests: interests };
      });
    }
  };
  
  const handleSubmit = (formType: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would process the form data here (e.g., send to a server)
    // For this demo, we'll just show a toast message.
    
    // Add analytics tracking for form submission
    // Example: trackEvent('form_submission', { form_type: formType, ...formData });
    
    console.log(`Demo ${formType} Form Submitted:`, formData);
    toast({
      title: `${formType} Submitted (Demo)`,
      description: `Thank you! Your ${formType.toLowerCase()} request has been received.`,
      variant: "default",
      className: "bg-gold text-navy",
    });
    // Reset relevant parts of form data if needed, or handle navigation
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gold text-navy font-montserrat font-semibold">
              MAKE A DIFFERENCE
            </Badge>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Get <span className="text-gold">Involved</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your support is crucial for our campaign's success. Find out how you can contribute to a safer Walker County.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DemoAnnotation className="bg-blue-100 border-l-blue-600">
            <strong>Demo Notice:</strong> This is a functional demonstration page. All content, fields, and branding will be 100% customized for the official Nick Smith for Sheriff campaign. We can add, remove, or change any feature to fit your exact strategy and messaging needs.
          </DemoAnnotation>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DemoAnnotation>
            <strong>Purpose:</strong> This donation form creates a direct revenue stream for the campaign. All contributions are processed securely and donor information is automatically captured for compliance reporting and follow-up communications.
          </DemoAnnotation>
          
          <Card className="shadow-xl">
            <CardHeader className="bg-gold/10">
              <CardTitle className="flex items-center font-montserrat text-2xl text-navy">
                <DollarSign className="w-8 h-8 mr-3 text-gold" />
                Support the Campaign
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <p className="font-open-sans text-gray-700 mb-6">
                Every contribution, no matter the size, helps us reach more voters and share Sheriff Smith's message of proven leadership.
              </p>
              <form onSubmit={(e) => handleSubmit('Donation', e)} className="space-y-6">
                <div>
                  <Label htmlFor="donationAmount" className="font-montserrat font-semibold text-navy">Donation Amount ($)</Label>
                  <Input 
                    id="donationAmount" 
                    name="donationAmount"
                    type="number" 
                    placeholder="e.g., 25, 50, 100" 
                    className="mt-1" 
                    value={formData.donationAmount}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="font-montserrat font-semibold text-navy">First Name</Label>
                    <Input id="firstName" name="firstName" type="text" placeholder="John" className="mt-1" value={formData.firstName} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-montserrat font-semibold text-navy">Last Name</Label>
                    <Input id="lastName" name="lastName" type="text" placeholder="Doe" className="mt-1" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="font-montserrat font-semibold text-navy">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="john.doe@example.com" className="mt-1" value={formData.email} onChange={handleInputChange} required />
                </div>
                {/* Add more fields as needed for a real donation form (address, payment info mock) */}
                <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90 font-montserrat font-semibold text-lg py-3">
                  Proceed to Donation (Demo)
                </Button>
                <p className="text-xs text-gray-500 text-center font-open-sans">
                  This is a demo form. No actual payment will be processed.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DemoAnnotation>
            <strong>Purpose:</strong> This form builds your volunteer army. All submissions are sent directly to your campaign manager's email, making it easy to organize phone banks, canvassing events, and rally volunteers when you need them most.
          </DemoAnnotation>

          <Card className="shadow-xl">
            <CardHeader className="bg-navy/10">
              <CardTitle className="flex items-center font-montserrat text-2xl text-navy">
                <Users className="w-8 h-8 mr-3 text-gold" />
                Join the Team
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <p className="font-open-sans text-gray-700 mb-6">
                We need dedicated volunteers like you to help spread the word, organize events, and get out the vote!
              </p>
              <form onSubmit={(e) => handleSubmit('Volunteer', e)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="volFirstName" className="font-montserrat font-semibold text-navy">First Name</Label>
                    <Input id="volFirstName" name="firstName" type="text" placeholder="Jane" className="mt-1" value={formData.firstName} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="volLastName" className="font-montserrat font-semibold text-navy">Last Name</Label>
                    <Input id="volLastName" name="lastName" type="text" placeholder="Smith" className="mt-1" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                </div>
                 <div>
                  <Label htmlFor="volEmail" className="font-montserrat font-semibold text-navy">Email Address</Label>
                  <Input id="volEmail" name="email" type="email" placeholder="jane.smith@example.com" className="mt-1" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="volPhone" className="font-montserrat font-semibold text-navy">Phone Number</Label>
                  <Input id="volPhone" name="phone" type="tel" placeholder="(555) 123-4567" className="mt-1" value={formData.phone} onChange={handleInputChange} />
                </div>
                <div>
                  <Label className="font-montserrat font-semibold text-navy">Areas of Interest (Select all that apply)</Label>
                  <div className="mt-2 space-y-2">
                    {["Phone Banking", "Canvassing", "Event Support", "Data Entry"].map(interest => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox 
                          id={interest.toLowerCase().replace(/\s+/g, '-')} 
                          onCheckedChange={(checked) => handleCheckboxChange(interest, checked)}
                          checked={formData.volunteerInterests.includes(interest)}
                        />
                        <Label htmlFor={interest.toLowerCase().replace(/\s+/g, '-')} className="font-open-sans text-gray-700">{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="smsOptIn" onCheckedChange={(checked) => handleCheckboxChange("smsOptIn", checked)} checked={formData.smsOptIn} />
                  <Label htmlFor="smsOptIn" className="font-open-sans text-gray-700">Opt-in to receive SMS updates (message and data rates may apply)</Label>
                </div>
                <Button type="submit" className="w-full bg-navy text-white hover:bg-navy/90 font-montserrat font-semibold text-lg py-3">
                  I'm In!
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Yard Sign Section */}
      <section id="yardsign" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DemoAnnotation>
            <strong>Purpose:</strong> This creates a powerful, visible grassroots presence across the county. Yard signs boost name recognition and show community support. It's a simple way for supporters to get involved and make a real impact.
          </DemoAnnotation>

          <Card className="shadow-xl">
            <CardHeader className="bg-gold/10">
              <CardTitle className="flex items-center font-montserrat text-2xl text-navy">
                <Home className="w-8 h-8 mr-3 text-gold" />
                Show Your Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <p className="font-open-sans text-gray-700 mb-6">
                Show your support for Sheriff Nick Smith by displaying a yard sign!
              </p>
              <form onSubmit={(e) => handleSubmit('Yard Sign Request', e)} className="space-y-6">
                <div>
                  <Label htmlFor="yardSignName" className="font-montserrat font-semibold text-navy">Full Name</Label>
                  <Input id="yardSignName" name="yardSignName" type="text" placeholder="Your Name" className="mt-1" value={formData.yardSignName} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="yardSignAddress" className="font-montserrat font-semibold text-navy">Delivery Address</Label>
                  <Textarea id="yardSignAddress" name="yardSignAddress" placeholder="123 Main St, Your Town, AL 12345" className="mt-1" value={formData.yardSignAddress} onChange={handleInputChange} required />
                </div>
                 <div>
                  <Label htmlFor="yardSignPhone" className="font-montserrat font-semibold text-navy">Phone Number (for delivery coordination)</Label>
                  <Input id="yardSignPhone" name="yardSignPhone" type="tel" placeholder="(555) 987-6543" className="mt-1" value={formData.yardSignPhone} onChange={handleInputChange} />
                </div>
                <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90 font-montserrat font-semibold text-lg py-3">
                  Request My Sign
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
