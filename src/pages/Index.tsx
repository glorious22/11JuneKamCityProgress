import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStory from "@/components/IntroStory";
import ServicesPreview from "@/components/ServicesPreview";
import MenuPreview from "@/components/MenuPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import GalleryPreview from "@/components/GalleryPreview";
import FAQ from "@/components/FAQ";
import BookingCTA from "@/components/BookingCTA";
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
        <ServicesPreview />
        <MenuPreview />
        <TestimonialsSection />
        <GalleryPreview />
        <FAQ />
        <BookingCTA />
        <ContactFormSection />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default Index;