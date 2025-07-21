
import { AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FactCheck = () => {
  const factChecks = [
    {
      claim: "Recent news reports about budget mismanagement",
      status: "MISLEADING",
      truth: "The sheriff's office has maintained responsible budget management with full transparency. All expenditures are public record and have been approved by the county commission.",
      evidence: "County financial records show budget compliance for 6 consecutive years.",
      urgent: true
    },
    {
      claim: "Claims about deputy training standards",
      status: "FALSE",
      truth: "Walker County Sheriff's Office exceeds state training requirements. Our deputies receive 40+ hours of additional training annually beyond state minimums.",
      evidence: "Training records available through public records request.",
      urgent: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy">
              Setting the Record <span className="text-gold">Straight</span>
            </h2>
          </div>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Don't let misinformation cloud the facts. Here's the truth about recent claims and allegations.
          </p>
        </div>

        <div className="space-y-6">
          {factChecks.map((item, index) => (
            <Card 
              key={index} 
              className={`border-l-4 ${item.urgent ? 'border-l-red-500' : 'border-l-green-500'}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-montserrat text-lg text-navy mb-2">
                      Claim: "{item.claim}"
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={item.status === "FALSE" ? "destructive" : "secondary"} 
                        className={item.status === "MISLEADING" ? "bg-orange-100 text-orange-800" : ""}
                      >
                        {item.status}
                      </Badge>
                      {item.urgent && (
                        <Badge variant="outline" className="border-red-500 text-red-600">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          URGENT RESPONSE
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-montserrat font-semibold text-navy mb-2">The Truth:</h4>
                    <p className="font-open-sans text-gray-700 leading-relaxed">
                      {item.truth}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-navy mb-2">Evidence:</h4>
                    <p className="font-open-sans text-sm text-gray-600">
                      {item.evidence}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-navy border-navy hover:bg-navy hover:text-white"
                  >
                    View Documentation <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="bg-navy text-white p-6">
            <CardContent className="p-0">
              <h3 className="font-montserrat font-bold text-xl mb-3">
                Have Questions? Get the Facts Directly
              </h3>
              <p className="font-open-sans text-gray-200 mb-4">
                Don't rely on secondhand information. Contact Sheriff Smith's office directly for accurate information.
              </p>
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  className="border-white bg-slate-50 text-gray-900"
                >
                  Contact Sheriff Smith
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FactCheck;
