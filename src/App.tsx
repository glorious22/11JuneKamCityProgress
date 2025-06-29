import { TooltipProvider } from "@/components/ui/tooltip";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import LanguageFloat from "./components/WhatsAppFloat";
import GoogleTranslate from "./components/GoogleTranslate";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BackToTop />
        <LanguageFloat />
        <GoogleTranslate />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);