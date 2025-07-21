import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Issues from "./pages/Issues";
import Endorsements from "./pages/Endorsements";
import GetInvolved from "./pages/GetInvolved";
import VoterInfo from "./pages/VoterInfo";
import Contact from "./pages/Contact";
import Events from "./pages/Events"; 
import Media from "./pages/Media";   
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/issues" element={<Issues />} />
              <Route path="/endorsements" element={<Endorsements />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/voter-info" element={<VoterInfo />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} /> 
              <Route path="/media" element={<Media />} />   
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
