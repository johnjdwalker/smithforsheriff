
import { useState, useEffect } from "react";
import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const EmailSignupPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already signed up or dismissed
    const hasSeenPopup = localStorage.getItem('nicksmith-email-popup-seen');
    if (hasSeenPopup) return;

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call - in real implementation, this would connect to email service
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our mailing list. Thank you for your support!",
      });
      setIsSubmitting(false);
      handleClose();
    }, 1000);
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('nicksmith-email-popup-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>
        
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-gold" />
          </div>
          <CardTitle className="font-montserrat text-navy text-xl">
            Stay Informed with Sheriff Smith
          </CardTitle>
          <p className="font-open-sans text-gray-600 text-sm">
            Get the facts directly from Sheriff Smith. No spin, no misinformation - just honest updates about what's happening in Walker County.
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button
              type="submit"
              className="w-full bg-navy text-white hover:bg-navy/90 font-montserrat font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing Up..." : "Get Updates"}
            </Button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailSignupPopup;
