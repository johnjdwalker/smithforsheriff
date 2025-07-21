
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock, Ticket } from "lucide-react";

const events = [
  {
    date: "October 15, 2025",
    time: "6:00 PM - 8:00 PM",
    title: "Community Town Hall - Jasper",
    location: "Jasper Civic Center, 123 Main St, Jasper, AL",
    description: "Join Sheriff Smith for an open discussion about community safety and his vision for Walker County. Q&A session to follow.",
    rsvpLink: "#"
  },
  {
    date: "October 22, 2025",
    time: "10:00 AM - 12:00 PM",
    title: "Meet & Greet - Sumiton",
    location: "Sumiton Community Park, 456 Park Ave, Sumiton, AL",
    description: "A family-friendly event to meet Sheriff Smith, enjoy light refreshments, and learn more about his campaign.",
    rsvpLink: "#"
  },
  {
    date: "October 29, 2025",
    time: "7:00 PM - 9:00 PM",
    title: "Campaign Fundraiser Dinner",
    location: "The Grand Ballroom, 789 Elite Dr, Walker County",
    description: "Support Sheriff Smith's re-election campaign at this special fundraising dinner. Guest speakers and entertainment.",
    rsvpLink: "#" // This would link to a donation/ticketing page
  },
];

const Events = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gold text-navy font-montserrat font-semibold">
              JOIN US
            </Badge>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Campaign <span className="text-gold">Events</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Meet Sheriff Nick Smith and get involved in the campaign. Find an event near you.
            </p>
          </div>
        </div>
      </section>

      {/* Events List Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gold/10">
                  <CardTitle className="font-montserrat text-xl text-navy">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-grow space-y-3">
                  <div className="flex items-center text-gray-700">
                    <CalendarDays className="w-5 h-5 mr-2 text-gold" />
                    <span className="font-open-sans">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-2 text-gold" />
                    <span className="font-open-sans">{event.time}</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <MapPin className="w-5 h-5 mr-2 mt-1 text-gold flex-shrink-0" />
                    <span className="font-open-sans">{event.location}</span>
                  </div>
                  <p className="font-open-sans text-sm text-gray-600 pt-2">
                    {event.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 bg-gray-100">
                  <Button 
                    asChild 
                    className="w-full bg-navy text-white hover:bg-navy/90"
                    // onClick={() => { /* Add analytics tracking for RSVP button click */ }}
                  >
                    <a href={event.rsvpLink}>
                      <Ticket className="w-4 h-4 mr-2" /> RSVP / Get Tickets
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {events.length === 0 && (
            <p className="text-center font-open-sans text-gray-600 text-lg">
              No upcoming events scheduled at this time. Please check back soon!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
