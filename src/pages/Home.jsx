import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
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
    <main className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureLectureSummary />
      <FeatureGetPDF />
      <FeatureReminders />
      <FeatureCGPA />
      <HowItWorksSection />
      {/* <Pricing /> */}
      <FAQ />
      <Footer />
    </main>
  );
}
