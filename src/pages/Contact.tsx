
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Calendar, Users } from "lucide-react";

const Contact = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Form Submission",
      description: "This is a demo site. Contact form submissions would be processed here.",
    });
  };

  const upcomingEvents = [
    {
      date: "March 15, 2025",
      time: "6:00 PM",
      event: "Town Hall Meeting",
      location: "Walker County Community Center",
      description: "Open forum discussion on public safety priorities"
    },
    {
      date: "March 22, 2025",
      time: "10:00 AM",
      event: "Coffee with the Sheriff",
      location: "Main Street Café, Jasper",
      description: "Informal meet and greet with Sheriff Smith"
    },
    {
      date: "March 28, 2025",
      time: "7:00 PM",
      event: "Campaign Rally",
      location: "Walker High School Gymnasium",
      description: "Major campaign event with special guests"
    },
    {
      date: "April 5, 2025",
      time: "2:00 PM",
      event: "Senior Center Visit",
      location: "Walker County Senior Center",
      description: "Discussing senior safety and community programs"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gold text-navy font-montserrat font-semibold">
              GET IN TOUCH
            </Badge>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Contact <span className="text-gold">Our Campaign</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Have questions about Sheriff Smith's positions? Want to schedule a speaking event? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-2xl text-navy">
                  Send Us a Message
                </CardTitle>
                <p className="font-open-sans text-gray-600">
                  We'll get back to you as soon as possible
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Full Name</Label>
                      <Input id="contact-name" required />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email Address</Label>
                      <Input id="contact-email" type="email" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input id="contact-phone" type="tel" />
                    </div>
                    <div>
                      <Label htmlFor="contact-zip">ZIP Code</Label>
                      <Input id="contact-zip" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input id="contact-subject" required />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea 
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      required 
                    />
                  </div>

                  <div className="bg-gold/10 p-4 rounded-lg">
                    <p className="font-open-sans text-sm text-gray-700">
                      <strong>Demo Notice:</strong> This is a demonstration form. 
                      Messages are not actually sent on this demo site.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90 font-montserrat font-semibold">
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-navy mb-8">
                Campaign Headquarters
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-navy mb-1">
                        Address
                      </h3>
                      <p className="font-open-sans text-gray-700">
                        123 Main Street<br />
                        Jasper, AL 35501<br />
                        Walker County
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-navy mb-1">
                        Phone
                      </h3>
                      <p className="font-open-sans text-gray-700">
                        (256) 555-0123<br />
                        <span className="text-sm text-gray-500">Monday - Friday, 9 AM - 5 PM</span>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-navy mb-1">
                        Email
                      </h3>
                      <p className="font-open-sans text-gray-700">
                        info@nicksmithforsheriff.com<br />
                        media@nicksmithforsheriff.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-navy mb-1">
                        Office Hours
                      </h3>
                      <p className="font-open-sans text-gray-700">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Upcoming Events
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Meet Sheriff Smith at these upcoming campaign events
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-navy text-white font-montserrat text-xs">
                          {event.date}
                        </Badge>
                        <Badge variant="outline" className="text-gold border-gold font-montserrat text-xs">
                          {event.time}
                        </Badge>
                      </div>
                      <h3 className="font-montserrat font-bold text-lg text-navy mb-1">
                        {event.event}
                      </h3>
                      <div className="flex items-center space-x-1 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-open-sans text-sm">{event.location}</span>
                      </div>
                      <p className="font-open-sans text-sm text-gray-700">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="font-open-sans text-gray-600 mb-4">
              Want to schedule Sheriff Smith for your event?
            </p>
            <Button className="bg-navy text-white hover:bg-navy/90 font-montserrat font-semibold">
              <Users className="w-4 h-4 mr-2" />
              Request Speaking Engagement
            </Button>
          </div>
        </div>
      </section>

      {/* Media Inquiries */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Media <span className="text-gold">Inquiries</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-200 mb-8 leading-relaxed">
            Members of the press seeking interviews, statements, or campaign information 
            should contact our media relations team.
          </p>
          <div className="space-y-4">
            <p className="font-open-sans text-lg">
              <strong>Media Contact:</strong> media@nicksmithforsheriff.com
            </p>
            <p className="font-open-sans text-lg">
              <strong>Phone:</strong> (256) 555-0124
            </p>
            <p className="font-open-sans text-sm text-gray-300 mt-6">
              High-resolution photos, press releases, and campaign materials available upon request
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
