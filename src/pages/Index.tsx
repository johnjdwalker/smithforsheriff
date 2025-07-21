
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, TrendingDown, Award, Star, ArrowRight, Target, TrendingUp, Newspaper, CalendarDays, Home, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import EndorsementsTicker from "@/components/EndorsementsTicker";
import EmailSignupPopup from "@/components/EmailSignupPopup";
import MediaSection from "@/components/MediaSection";
import FactCheck from "@/components/FactCheck";
import CountUpNumber from "@/components/CountUpNumber";

const Index = () => {
  const stats = [
    {
      icon: TrendingDown,
      label: "Violent Crime Reduction",
      value: 12,
      suffix: "%",
      subtitle: "Since 2018"
    },
    {
      icon: TrendingUp,
      label: "Drug Trafficking Prosecutions",
      value: 22,
      prefix: "+",
      suffix: "%",
      subtitle: "Increased Since 2018"
    },
    {
      icon: Users,
      label: "Community Programs",
      value: 15,
      suffix: "+",
      subtitle: "Active Programs"
    },
    {
      icon: Shield,
      label: "Deputies Trained",
      value: 150,
      suffix: "+",
      subtitle: "Dedicated Professionals"
    }
  ];

  const achievements = [
    "Reduced property crime by 23% countywide (overall)",
    "Achieved a 12% reduction in violent crime since 2018",
    "Increased drug trafficking prosecutions by 22% since 2018",
    "Implemented community policing initiatives",
    "Modernized department technology systems",
    "Expanded victim support services"
  ];

  return (
    <div className="min-h-screen">
      <EmailSignupPopup />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy to-navy/90 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-gold text-navy font-montserrat font-semibold text-sm">
                INCUMBENT SHERIFF
              </Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 gold-underline heading-glow">
                <span className="text-gold">NICK SMITH</span>
                <br />
                FOR SHERIFF
              </h1>
              <p className="font-open-sans text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed gold-shadow">
                Proven Leadership. Safer Communities.
                <br />
                <span className="text-gold font-semibold">Results Since 2018.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-involved#yardsign">
                  <Button 
                    size="lg" 
                    className="bg-gold text-navy btn-glow hover:bg-gold/90 font-montserrat font-semibold text-lg px-8 py-3 rounded-xl focus-enhanced transition-all duration-300"
                  >
                    <Home className="mr-2 h-5 w-5" />
                    REQUEST YARD SIGN
                  </Button>
                </Link>
                <Link to="/get-involved">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white bg-white text-navy btn-glow hover:bg-navy hover:text-white font-montserrat font-semibold text-lg px-8 py-3 rounded-xl focus-enhanced transition-all duration-300"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    VOLUNTEER
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/a18d96ea-5e4d-4525-9809-70c9abb3b22d.png" 
                  alt="Sheriff Nick Smith"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto hero-img-glow" 
                  loading="eager" 
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gold/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements Ticker Section */}
      <EndorsementsTicker />

      {/* Fact Check Section */}
      <FactCheck />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4 heading-glow">
              A Record of Proven Results
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Sheriff Nick Smith has delivered measurable improvements in public safety and community engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-lg hover:border-gold/80 transition-all duration-300 bg-white border border-gray-200 rounded-lg"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                    <stat.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="font-montserrat font-bold text-3xl text-navy mb-2">
                    <CountUpNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="font-open-sans font-semibold text-gray-800 mb-1 text-center">
                    {stat.label}
                  </div>
                  <div className="font-open-sans text-sm text-gray-500">
                    {stat.subtitle}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <MediaSection />

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/49d25413-b8d8-4d3c-90a5-b46f75a1f8ee.png" 
                alt="Sheriff Smith with family" 
                className="rounded-lg shadow-xl w-full" 
                loading="lazy" 
              />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-6 heading-glow">
                Meet Your Sheriff
              </h2>
              <p className="font-open-sans text-lg text-gray-700 mb-6 leading-relaxed">
                Sheriff Nick Smith has dedicated his life to serving Walker County. With 25+ years in law enforcement 
                and 10 years as your elected Sheriff, he's proven that strong leadership creates safer communities.
                His commitment has led to significant improvements since 2018.
              </p>
              <ul className="space-y-3 mb-8">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-open-sans text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button className="bg-navy text-white btn-glow hover:bg-navy/90 font-montserrat font-semibold focus-enhanced transition-all duration-300 rounded-lg">
                  Learn More About Nick
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-6 heading-glow">
            Support Sheriff Smith's Campaign
          </h2>
          <p className="font-open-sans text-lg text-gray-600 mb-8 leading-relaxed">
            Your support helps us continue the progress Walker County has seen since 2018. 
            Every contribution makes a difference in keeping our communities safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-involved#yardsign">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-navy text-navy btn-glow hover:bg-navy hover:text-white font-montserrat font-semibold text-lg px-8 py-3 focus-enhanced transition-all duration-300 rounded-lg"
              >
                <Home className="mr-2 h-5 w-5" /> 
                REQUEST YARD SIGN
              </Button>
            </Link>
            <Link to="/get-involved#volunteer">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gold text-gold btn-glow btn-outline-gold-strong font-montserrat font-semibold text-lg px-8 py-3 focus-enhanced transition-all duration-300 rounded-lg"
              >
                <Heart className="mr-2 h-5 w-5" /> 
                VOLUNTEER
              </Button>
            </Link>
            <Link to="/get-involved#donate">
              <Button 
                size="lg" 
                className="bg-gold text-navy btn-glow hover:bg-gold/90 font-montserrat font-semibold text-lg px-8 py-3 focus-enhanced transition-all duration-300 rounded-lg"
              >
                DONATE NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6 heading-glow">
            Walker County Deserves <span className="text-gold">Proven Leadership</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-200 mb-8 leading-relaxed">
            Join thousands of Walker County residents who support Sheriff Nick Smith's vision 
            for safer communities and stronger partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/voter-info">
              <Button 
                size="lg" 
                className="bg-gold text-navy btn-glow hover:bg-gold/90 font-montserrat font-semibold text-lg px-8 py-3 focus-enhanced transition-all duration-300 rounded-lg"
              >
                GET ELECTION INFO
              </Button>
            </Link>
            <Link to="/endorsements">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white btn-glow hover:bg-white hover:text-navy font-montserrat font-semibold text-lg px-8 py-3 focus-enhanced transition-all duration-300 rounded-lg"
              >
                VIEW ENDORSEMENTS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
