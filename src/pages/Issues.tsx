
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Laptop, GraduationCap, Heart, Phone } from "lucide-react";

const Issues = () => {
  const platforms = [
    {
      icon: Shield,
      title: "Community Policing",
      problem: "Crime prevention requires more than just law enforcement response - it needs community partnership and proactive engagement.",
      solution: "Expand community policing programs that build trust between deputies and residents, increase neighborhood patrols, and create youth mentorship opportunities.",
      achievements: [
        "Established 12 neighborhood watch programs",
        "Reduced response times by 18%",
        "Increased community satisfaction to 87%"
      ]
    },
    {
      icon: Heart,
      title: "Victim Support Services",
      problem: "Crime victims often feel forgotten by the system and lack adequate support during their most difficult times.",
      solution: "Strengthen victim services with dedicated advocates, improved communication, and partnerships with local support organizations.",
      achievements: [
        "Created victim advocate program",
        "Partnered with 8 local support groups",
        "98% victim satisfaction rating"
      ]
    },
    {
      icon: Laptop,
      title: "Technology & Equipment",
      problem: "Modern law enforcement requires up-to-date technology and equipment to effectively protect and serve our community.",
      solution: "Continue investing in body cameras, communication systems, and investigative technology while maintaining fiscal responsibility.",
      achievements: [
        "Equipped all deputies with body cameras",
        "Upgraded radio communication system",
        "Implemented digital evidence management"
      ]
    },
    {
      icon: GraduationCap,
      title: "Deputy Training & Professional Development",
      problem: "Effective law enforcement requires ongoing training and professional development to handle complex modern challenges.",
      solution: "Expand training programs in de-escalation, mental health awareness, and community relations while attracting top talent.",
      achievements: [
        "150+ hours annual training per deputy",
        "Mental health crisis training certified",
        "Reduced deputy turnover by 35%"
      ]
    },
    {
      icon: Users,
      title: "Youth & Community Programs",
      problem: "At-risk youth need positive role models and constructive activities to stay on the right path.",
      solution: "Expand youth outreach programs, school partnerships, and recreational activities that connect law enforcement with young people.",
      achievements: [
        "D.A.R.E. program in all schools",
        "Youth sports league sponsorship",
        "Junior Deputy program launched"
      ]
    },
    {
      icon: Phone,
      title: "Emergency Response & Preparedness",
      problem: "Walker County needs comprehensive emergency response capabilities for natural disasters and public safety crises.",
      solution: "Strengthen emergency preparedness, improve coordination with other agencies, and ensure rapid response capabilities.",
      achievements: [
        "Created county emergency plan",
        "Improved multi-agency coordination",
        "Response time under 8 minutes countywide"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gold text-navy font-montserrat font-semibold">
              PLATFORM & VISION
            </Badge>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Issues & <span className="text-gold">Solutions</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Sheriff Nick Smith's proven approach to public safety combines traditional law enforcement 
              with innovative community partnerships and modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Issues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Our Platform for Safer Communities
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Real solutions for real challenges facing Walker County
            </p>
          </div>

          <div className="space-y-12">
            {platforms.map((platform, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="bg-white border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gold/10 rounded-lg">
                      <platform.icon className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <CardTitle className="font-montserrat font-bold text-2xl text-navy">
                        {platform.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Problem */}
                    <div>
                      <h4 className="font-montserrat font-semibold text-lg text-red-600 mb-3">
                        The Challenge
                      </h4>
                      <p className="font-open-sans text-gray-700 leading-relaxed">
                        {platform.problem}
                      </p>
                    </div>
                    
                    {/* Solution */}
                    <div>
                      <h4 className="font-montserrat font-semibold text-lg text-navy mb-3">
                        Our Solution
                      </h4>
                      <p className="font-open-sans text-gray-700 leading-relaxed">
                        {platform.solution}
                      </p>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="font-montserrat font-semibold text-lg text-gold mb-3">
                        Proven Results
                      </h4>
                      <ul className="space-y-2">
                        {platform.achievements.map((achievement, i) => (
                          <li key={i} className="font-open-sans text-sm text-gray-700 flex items-start space-x-2">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/8b1784e8-29b9-4b42-b479-1b70b6380239.png" 
                alt="Sheriff Smith with community members"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-6">
                Real Impact in Our <span className="text-gold">Community</span>
              </h2>
              <p className="font-open-sans text-lg text-gray-700 mb-6 leading-relaxed">
                These aren't just campaign promises - they're proven results from 10 years of 
                Sheriff Nick Smith's leadership. Our community-centered approach has made 
                Walker County safer while building stronger relationships between law enforcement 
                and residents.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-gold mb-2">23%</div>
                  <div className="font-open-sans text-sm text-gray-600">Crime Reduction</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-gold mb-2">87%</div>
                  <div className="font-open-sans text-sm text-gray-600">Community Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-gold mb-2">15+</div>
                  <div className="font-open-sans text-sm text-gray-600">Active Programs</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-gold mb-2">150+</div>
                  <div className="font-open-sans text-sm text-gray-600">Trained Deputies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Continue the <span className="text-gold">Progress</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-200 mb-8 leading-relaxed">
            These initiatives require continued leadership and community support. 
            Help Sheriff Nick Smith build on this foundation for an even safer Walker County.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Issues;
