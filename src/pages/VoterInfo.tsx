import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, FileText, ExternalLink, Vote, CalendarClock } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer"; // Import new component

const VoterInfo = () => {
  const electionDay = "2025-11-04T00:00:00"; // Tuesday, November 4, 2025

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-gold text-navy font-montserrat font-semibold">
              YOUR VOTE MATTERS
            </Badge>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Voter <span className="text-gold">Information</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about voting for Sheriff Nick Smith 
              in the November 2025 Walker County election.
            </p>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountdownTimer targetDate={electionDay} />
        </div>
      </section>

      {/* Quick Election Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Election Information
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Mark your calendar and make your plan to vote
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 border-gold/20 hover:border-gold/50 transition-colors">
              <CardContent className="p-0">
                <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
                  Election Day
                </h3>
                <p className="font-open-sans text-2xl font-semibold text-gold mb-2">
                  November 4, 2025
                </p>
                <p className="font-open-sans text-sm text-gray-600">
                  First Tuesday in November
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-gold/20 hover:border-gold/50 transition-colors">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
                  Polling Hours
                </h3>
                <p className="font-open-sans text-2xl font-semibold text-gold mb-2">
                  7:00 AM - 7:00 PM
                </p>
                <p className="font-open-sans text-sm text-gray-600">
                  All Walker County locations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-gold/20 hover:border-gold/50 transition-colors">
              <CardContent className="p-0">
                <Vote className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
                  Office
                </h3>
                <p className="font-open-sans text-2xl font-semibold text-gold mb-2">
                  Walker County Sheriff
                </p>
                <p className="font-open-sans text-sm text-gray-600">
                  4-year term
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voter Registration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-6">
                Voter Registration
              </h2>
              <p className="font-open-sans text-lg text-gray-700 mb-6 leading-relaxed">
                Make sure you're registered to vote in Walker County. The registration 
                deadline is 14 days before the election.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-navy">Registration Deadline</h4>
                    <p className="font-open-sans text-gray-600">October 21, 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-navy">Requirements</h4>
                    <p className="font-open-sans text-gray-600">Must be 18+ and a Walker County resident</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-navy">ID Required</h4>
                    <p className="font-open-sans text-gray-600">Valid Alabama driver's license or ID card</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="bg-gold text-navy hover:bg-gold/90 font-montserrat font-semibold"
                  onClick={() => window.open("https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote", "_blank")} // Example link
                  // onClick={() => { /* Add analytics tracking for Check Registration button click */ }}
                >
                  Check Registration Status
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-gold" />
                  <span className="font-montserrat font-bold text-xl text-navy">Quick Links</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-gold/10 hover:border-gold"
                  onClick={() => window.open("https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Alabama Voter Registration
                </Button>
                {/* ... other buttons ... */}
                 <Button variant="outline" className="w-full justify-start hover:bg-gold/10 hover:border-gold" onClick={() => window.open("https://myinfo.alabamavotes.gov/voterview", "_blank")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Check Voter Status
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-gold/10 hover:border-gold" onClick={() => window.open("https://www.sos.alabama.gov/alabama-votes/voter/sample-ballots", "_blank")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Sample Ballot (Official Site)
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-gold/10 hover:border-gold" onClick={() => window.open("https://www.sos.alabama.gov/alabama-votes/voter/absentee-voting", "_blank")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Absentee Voting Info (Official)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Voting & Absentee */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Early & Absentee Voting
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Multiple options to cast your ballot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl text-navy">
                  Early Voting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Dates</h4>
                  <p className="font-open-sans text-gray-700">October 21 - November 1, 2025</p>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Hours</h4>
                  <p className="font-open-sans text-gray-700">
                    Monday-Friday: 8:00 AM - 5:00 PM<br />
                    Saturdays: 9:00 AM - 3:00 PM
                  </p>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Location</h4>
                  <p className="font-open-sans text-gray-700">
                    Walker County Courthouse<br />
                    1st Floor, Room 105
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl text-navy">
                  Absentee Voting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Application Deadline</h4>
                  <p className="font-open-sans text-gray-700">October 28, 2025 (5:00 PM)</p>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Ballot Return</h4>
                  <p className="font-open-sans text-gray-700">Must be received by Election Day</p>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-navy mb-2">Reasons</h4>
                  <p className="font-open-sans text-gray-700 text-sm">
                    Out of county, illness, disability, work schedule, military service, 
                    or other qualifying reasons
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Polling Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-navy mb-4">
              Polling Locations
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Find your Election Day voting location
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <MapPin className="w-16 h-16 text-gold mx-auto mb-6" />
              <h3 className="font-montserrat font-bold text-2xl text-navy mb-4">
                Find Your Polling Place
              </h3>
              <p className="font-open-sans text-gray-700 mb-6 leading-relaxed">
                Your polling location is determined by your residential address. 
                Use the official Alabama polling place locator to find your specific voting location.
                This ensures you have the most accurate and up-to-date information.
              </p>
              <Button 
                className="bg-navy text-white hover:bg-navy/90 font-montserrat font-semibold"
                onClick={() => window.open("https://myinfo.alabamavotes.gov/voterview", "_blank")} // Example official link
                // onClick={() => { /* Add analytics tracking for Find Polling Place button click */ }}
              >
                Find My Polling Place (Official Site)
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Voter <span className="text-gold">Resources</span>
            </h2>
            <p className="font-open-sans text-xl text-gray-200">
              Download helpful voter information guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Voter Guide
                </h3>
                <p className="font-open-sans text-sm text-gray-200 mb-4">
                  Complete guide to voting in Walker County
                </p>
                <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-navy">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Election Calendar
                </h3>
                <p className="font-open-sans text-sm text-gray-200 mb-4">
                  Important dates and deadlines
                </p>
                <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-navy">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <Vote className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-lg mb-2">
                  Sample Ballot
                </h3>
                <p className="font-open-sans text-sm text-gray-200 mb-4">
                  Preview your ballot before voting
                </p>
                <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-navy">
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoterInfo;
