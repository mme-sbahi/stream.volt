import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Features from "@/components/sections/Features";
import ContentPreview from "@/components/sections/ContentPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import {
  Devices,
  Testimonials,
  FAQ,
  Footer,
} from "@/components/sections/Others";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <ContentPreview />
      <HowItWorks />
      <Pricing />
      <Devices />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
