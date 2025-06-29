import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroStory from "@/components/IntroStory";
import ServicesPreview from "@/components/ServicesPreview";
import MenuPreview from "@/components/MenuPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import GalleryPreview from "@/components/GalleryPreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set page title and meta description for homepage
    document.title = "Kamalo City - Authentic African Cuisine & Entertainment in Cape Town";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience authentic African cuisine, premium hookah lounge, live entertainment, and professional services at Kamalo City in Goodwood, Cape Town. Open 7 days a week.');
    }

    // Update HTML lang attribute based on current language
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

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
      </main>
      <Footer />
    </div>
  );
};

export default Index;