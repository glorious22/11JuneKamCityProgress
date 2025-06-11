import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStory from "@/components/IntroStory";
import AmbiancePreview from "@/components/AmbiancePreview";
import OurCuisine from "@/components/OurCuisine";
import LiveEventsServices from "@/components/LiveEventsServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import PerfumeSection from "@/components/PerfumeSection";
import BookingCTA from "@/components/BookingCTA";
import GalleryCTA from "@/components/GalleryCTA";
import FAQ from "@/components/FAQ";
import MapSection from "@/components/MapSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import StickyBookingButton from "@/components/StickyBookingButton";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for homepage
    document.title = "Kamalo City - Authentic African Cuisine & Entertainment in Cape Town";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience authentic African cuisine, premium hookah lounge, live entertainment, and professional services at Kamalo City in Goodwood, Cape Town. Open 7 days a week.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <main>
        <Hero />
        <IntroStory />
        <AmbiancePreview />
        <OurCuisine />
        <LiveEventsServices />
        <TestimonialsSection />
        <PerfumeSection />
        <BookingCTA />
        <GalleryCTA />
        <FAQ />
        <MapSection />
        <ContactFormSection />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default Index;