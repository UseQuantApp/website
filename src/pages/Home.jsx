import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Ticker from "../components/home/Ticker";
import WhatQuantDoes from "../components/home/WhatQuantDoes";
import FeatureLectureSummary from "../components/FeatureLectureSummary";
import FeatureGetPDF from "../components/FeatureGetPDF";
import FeatureReminders from "../components/FeatureReminders";
import FeatureCGPA from "../components/FeatureCGPA";
import HowItWorksSection from "../components/HowItWorks";
// import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="quant-dot-grid font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <WhatQuantDoes />
      <HowItWorksSection />
      {/* <Pricing /> */}
      <FAQ />
      <Footer />
    </main>
  );
}
