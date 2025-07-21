import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, Users, Shield, Award, Star, CheckCircle, MessageSquare, Users2, ShieldCheck } from "lucide-react"; // Added new icons

const About = () => {
  const careerHighlights = [
    { year: "2000", event: "Joined Walker County Sheriff's Office" },
    { year: "2008", event: "Promoted to Sergeant, Narcotics Division" },
    { year: "2012", event: "Appointed Captain of Patrol Division" },
    { year: "2015", event: "Elected Sheriff of Walker County" },
    { year: "2018-Present", event: "Spearheaded key safety initiatives and crime reduction strategies" },
    { year: "2019 & 2023", event: "Re-elected Sheriff by Walker County voters" },
  ];

  const stats = [
    { icon: TrendingDown, label: "Violent Crime Reduction", value: "12%", subtitle: "Since 2018" },
    { icon: Shield, label: "Drug Trafficking Prosecutions", value: "+22%", subtitle: "Increased Since 2018" },
    { icon: Users, label: "Community Programs Launched", value: "15+", subtitle: "Engaging Walker County" },
    { icon: Award, label: "Years in Law Enforcement", value: "25+", subtitle: "Dedicated Service" },
  ];

  const successStories = [
    {
      title: "Operation Safe Streets",
      description: "Led a multi-agency task force that dismantled three major drug trafficking rings, significantly reducing the availability of illicit narcotics in our community.",
      icon: ShieldCheck,
      tags: ["Drug Enforcement", "Community Safety"]
    },
    {
      title: "Youth Outreach Initiative",
      description: "Launched the 'Sheriff's Youth Academy,' providing mentorship and positive engagement for at-risk teens, leading to a 15% decrease in juvenile offenses in participating areas.",
      icon: Users2,
      tags: ["Youth Program", "Crime Prevention"]
    },
    {
      title: "Victim Advocacy Expansion",
      description: "Secured grant funding to expand victim support services, ensuring every victim of crime has access to dedicated advocates and resources throughout the justice process.",
      icon: MessageSquare,
      tags: ["Victim Support", "Grant Funding"]
    }
  ];


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gold text-navy font-montserrat font-semibold">
              YOUR SHERIFF
            </Badge>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              About <span className="text-gold">Nick Smith</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A lifetime of service dedicated to making Walker County a safer place for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <img 
                src="/lovable-uploads/8b1784e8-29b9-4b42-b479-1b70b6380239.png" 
                alt="Sheriff Nick Smith in uniform"
                className="rounded-lg shadow-xl w-full mx-auto" 
              />
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-montserrat font-bold text-3xl text-navy mb-6">
                A Legacy of Service
              </h2>
              <p className="font-open-sans text-lg text-gray-700 mb-4 leading-relaxed">
                Sheriff Nick Smith is a lifelong resident of Walker County, deeply committed to the safety and well-being of our community. With over 25 years in law enforcement, including 10 years as your elected Sheriff, Nick has a proven track record of effective leadership and tangible results.
              </p>
              <p className="font-open-sans text-lg text-gray-700 mb-6 leading-relaxed">
                His journey began with a passion for justice and a desire to protect his neighbors. Rising through the ranks, Nick has held various positions, gaining invaluable experience in every facet of law enforcement. He understands the challenges our county faces and has consistently implemented innovative strategies to address them.
              </p>
              <h3 className="font-montserrat font-semibold text-xl text-navy mb-4">Career Milestones:</h3>
              <ul className="space-y-3">
                {careerHighlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-open-sans font-semibold text-gray-800">{item.year}:</span>
                      <span className="font-open-sans text-gray-700 ml-1">{item.event}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Delivering Real Results for Walker County
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Under Sheriff Smith's leadership, Walker County has seen significant improvements in public safety.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                  <div className="font-montserrat font-bold text-3xl text-navy mb-2">
                    {stat.value}
                  </div>
                  <div className="font-open-sans font-semibold text-gray-800 mb-1">
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

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Key Success Stories
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Highlighting impactful initiatives and achievements under Sheriff Smith's leadership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="bg-navy text-white p-4">
                  <CardTitle className="flex items-center text-lg font-montserrat">
                    <story.icon className="w-6 h-6 mr-3 text-gold" />
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="font-open-sans text-gray-700 mb-4 text-sm leading-relaxed">
                    {story.description}
                  </p>
                  <div className="space-x-2">
                    {story.tags.map(tag => (
                       <Badge key={tag} variant="secondary" className="font-open-sans text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Family & Community Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-navy mb-6">
                Rooted in Our Community
              </h2>
              <p className="font-open-sans text-lg text-gray-700 mb-4 leading-relaxed">
                Nick Smith isn't just your Sheriff; he's your neighbor. Married to his high school sweetheart, Sarah, for 28 years, they have raised three children in Walker County. Nick is an active member of the local church, volunteers as a little league coach, and understands the values that make our community strong.
              </p>
              <p className="font-open-sans text-lg text-gray-700 mb-6 leading-relaxed">
                His deep connection to Walker County fuels his dedication to its safety and prosperity. He believes in a collaborative approach, working closely with residents, community organizations, and local businesses to build a safer future together.
              </p>
              <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow">
                    <CheckCircle className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-open-sans text-gray-700">Committed to transparency and accountability in law enforcement.</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow">
                    <CheckCircle className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-open-sans text-gray-700">Dedicated to continuous improvement and training for all deputies.</span>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow">
                    <CheckCircle className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-open-sans text-gray-700">Always accessible and responsive to the needs of Walker County citizens.</span>
                  </div>
              </div>
            </div>
             <div className="flex justify-center">
              <img 
                src="/lovable-uploads/49d25413-b8d8-4d3c-90a5-b46f75a1f8ee.png" 
                alt="Sheriff Nick Smith with his family"
                className="rounded-lg shadow-xl w-full max-w-md" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
