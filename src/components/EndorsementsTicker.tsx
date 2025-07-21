
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ShieldCheck, UserCheck } from "lucide-react"; // Example icons

const endorsements = [
  { name: "Walker County Business Association", icon: Briefcase },
  { name: "Local Law Enforcement Union #123", icon: ShieldCheck },
  { name: "Community Leaders for Safety", icon: UserCheck },
];

const EndorsementsTicker = () => {
  return (
    <section className="bg-gold/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-montserrat font-semibold text-2xl text-navy mb-6 text-center">
          Trusted by Our Community
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {endorsements.map((endorsement, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <endorsement.icon className="w-10 h-10 text-gold mb-3" />
                <p className="font-open-sans font-semibold text-navy">
                  {endorsement.name}
                </p>
                <Badge variant="secondary" className="mt-2 bg-navy/10 text-navy">Endorsed</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/endorsements" className="font-open-sans text-navy hover:text-gold font-semibold">
            View All Endorsements &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default EndorsementsTicker;
