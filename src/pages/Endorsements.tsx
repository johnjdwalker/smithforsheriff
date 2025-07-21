
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Endorsements = () => {
  const organizationEndorsements = [
    {
      name: "Walker County Fraternal Order of Police",
      type: "Law Enforcement",
      logo: "🏅"
    },
    {
      name: "Alabama Sheriff's Association",
      type: "Professional Organization",
      logo: "⭐"
    },
    {
      name: "Walker County Firefighters Association",
      type: "First Responders",
      logo: "🚒"
    },
    {
      name: "Walker County Chamber of Commerce",
      type: "Business Community",
      logo: "🏢"
    },
    {
      name: "Walker County Education Association",
      type: "Education",
      logo: "📚"
    },
    {
      name: "Veterans of Foreign Wars Post 1234",
      type: "Veterans Organization",
      logo: "🇺🇸"
    }
  ];

  const testimonials = [
    {
      quote: "Sheriff Smith has transformed law enforcement in Walker County. His community policing approach has built bridges and reduced crime. He has my full support.",
      author: "Former Mayor John Anderson",
      title: "City of Jasper",
      image: "👨‍💼"
    },
    {
      quote: "Nick Smith is a man of integrity who truly cares about our community. His leadership has made Walker County a safer place to live and raise families.",
      author: "Dr. Sarah Mitchell",
      title: "Walker County School Superintendent",
      image: "👩‍🏫"
    },
    {
      quote: "As a business owner, I've seen firsthand how Sheriff Smith's policies have improved public safety while supporting economic growth. He understands the balance we need.",
      author: "Robert Chen",
      title: "Local Business Owner",
      image: "👨‍💼"
    },
    {
      quote: "Sheriff Smith saved my life when I was in crisis. His deputies are trained to help, not just arrest. He's changing how law enforcement serves mental health needs.",
      author: "Maria Rodriguez",
      title: "Community Member",
      image: "👩"
    },
    {
      quote: "I've worked with many sheriffs across Alabama. Nick Smith stands out for his professionalism, innovation, and genuine care for his community.",
      author: "Captain James Wilson (Ret.)",
      title: "Former Alabama State Trooper",
      image: "👮‍♂️"
    },
    {
      quote: "Sheriff Smith has been a champion for victims' rights. His office provides the support and advocacy that helps families heal and move forward.",
      author: "Jennifer Thompson",
      title: "Victim Services Coordinator",
      image: "👩‍💼"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gold text-navy font-montserrat font-semibold">
              COMMUNITY SUPPORT
            </Badge>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              <span className="text-gold">Endorsements</span> & Testimonials
            </h1>
            <p className="font-open-sans text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Sheriff Nick Smith has earned the trust and support of law enforcement professionals, 
              community leaders, and Walker County residents across party lines.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Endorsements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Organizational Endorsements
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Professional organizations and community groups that support Sheriff Smith's re-election
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizationEndorsements.map((org, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-gold/30">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{org.logo}</div>
                  <h3 className="font-montserrat font-bold text-lg text-navy mb-2">
                    {org.name}
                  </h3>
                  <Badge variant="outline" className="text-gold border-gold">
                    {org.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              What People Are Saying
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from community members, leaders, and professionals about Sheriff Smith's impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Quote className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="font-open-sans text-gray-700 leading-relaxed mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{testimonial.image}</div>
                        <div>
                          <div className="font-montserrat font-semibold text-navy">
                            {testimonial.author}
                          </div>
                          <div className="font-open-sans text-sm text-gray-500">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Featured Video Testimonials
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Watch community members share their experiences with Sheriff Smith's leadership
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-navy mb-2">
                    Video Testimonials
                  </h3>
                  <p className="font-open-sans text-gray-600">
                    Coming Soon - Community Leaders Share Their Support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Broad Community <span className="text-gold">Support</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-montserrat font-bold text-4xl text-gold mb-2">25+</div>
              <div className="font-open-sans text-white">Organization Endorsements</div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-4xl text-gold mb-2">72%</div>
              <div className="font-open-sans text-white">2019 Election Victory</div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-4xl text-gold mb-2">87%</div>
              <div className="font-open-sans text-white">Community Approval</div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-4xl text-gold mb-2">100+</div>
              <div className="font-open-sans text-white">Volunteer Supporters</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Endorsements;
