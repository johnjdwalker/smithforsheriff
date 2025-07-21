
import { Play, Facebook, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MediaSection = () => {
  const recentVideos = [
    {
      title: "Setting the Record Straight: Recent News Coverage",
      description: "Sheriff Smith addresses recent misleading news reports and shares the real facts.",
      thumbnail: "/lovable-uploads/a18d96ea-5e4d-4525-9809-70c9abb3b22d.png",
      date: "3 days ago",
      type: "Response Video",
      urgent: true
    },
    {
      title: "Community Update: Crime Prevention Initiatives",
      description: "Latest updates on our ongoing efforts to keep Walker County safe.",
      thumbnail: "/lovable-uploads/49d25413-b8d8-4d3c-90a5-b46f75a1f8ee.png",
      date: "1 week ago",
      type: "Update"
    },
    {
      title: "Town Hall Q&A: Your Questions Answered",
      description: "Sheriff Smith answers questions from Walker County residents.",
      thumbnail: "/lovable-uploads/a18d96ea-5e4d-4525-9809-70c9abb3b22d.png",
      date: "2 weeks ago",
      type: "Live Event"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
            Latest Updates & <span className="text-gold">Videos</span>
          </h2>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Get the facts directly from Sheriff Smith. Watch his latest videos addressing community concerns and sharing important updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {recentVideos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-navy ml-1" />
                  </div>
                </div>
                {video.urgent && (
                  <Badge className="absolute top-3 left-3 bg-red-600 text-white">
                    URGENT
                  </Badge>
                )}
                <Badge variant="secondary" className="absolute top-3 right-3 bg-navy/80 text-white">
                  {video.type}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-montserrat font-semibold text-navy mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="font-open-sans text-sm text-gray-600 mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-open-sans text-xs text-gray-500">
                    {video.date}
                  </span>
                  <Button size="sm" variant="ghost" className="text-navy hover:text-gold">
                    Watch <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://facebook.com/NickSmithForSheriff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-montserrat font-semibold">
              <Facebook className="mr-2 w-5 h-5" />
              Follow on Facebook for More Updates
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
