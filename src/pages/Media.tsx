
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, ExternalLink, CalendarDays } from "lucide-react";

const mediaItems = [
  {
    date: "October 10, 2025",
    title: "Sheriff Smith Announces Re-election Bid, Focuses on Continued Crime Reduction",
    source: "Walker County Chronicle",
    type: "Press Release",
    link: "#",
    summary: "Incumbent Sheriff Nick Smith officially announced his campaign for re-election, highlighting key achievements since 2018 and outlining his vision for the future of public safety in Walker County."
  },
  {
    date: "October 5, 2025",
    title: "Interview: Sheriff Smith on Community Policing Successes",
    source: "WCPR Radio 98.5 FM",
    type: "News Coverage",
    link: "#",
    summary: "Sheriff Smith joined 'Walker Talks' to discuss the positive impact of community policing initiatives and upcoming plans to further strengthen neighborhood partnerships."
  },
  {
    date: "September 28, 2025",
    title: "Op-Ed: My Commitment to a Safer Walker County",
    source: "The Daily Mountain Eagle",
    type: "Opinion",
    link: "#",
    summary: "Sheriff Smith shares his personal commitment and strategic approach to ensuring Walker County remains a safe place to live, work, and raise a family."
  },
];

const Media = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gold text-navy font-montserrat font-semibold">
              IN THE NEWS
            </Badge>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Campaign <span className="text-gold">Media</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest press releases, news coverage, and official statements from the Nick Smith for Sheriff campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Media List Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {mediaItems.map((item, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gold/10 p-4 md:p-6">
                  <CardTitle className="font-montserrat text-xl text-navy mb-1">{item.title}</CardTitle>
                  <div className="flex flex-wrap items-center text-sm text-gray-600 font-open-sans">
                    <span className="mr-3"><Badge variant="secondary">{item.type}</Badge></span>
                    <span className="flex items-center mr-3"><CalendarDays className="w-4 h-4 mr-1 text-gold"/>{item.date}</span>
                    <span className="font-semibold">{item.source}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <p className="font-open-sans text-gray-700 leading-relaxed">
                    {item.summary}
                  </p>
                </CardContent>
                <CardFooter className="p-4 md:p-6 bg-gray-100">
                  <Button asChild className="bg-navy text-white hover:bg-navy/90">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Read Full Story <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {mediaItems.length === 0 && (
            <p className="text-center font-open-sans text-gray-600 text-lg">
              No media items available at this time. Please check back soon!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Media;
