import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhyWeExist from "@/components/WhyWeExist";
import FounderOS from "@/components/FounderOS";
import ContentEngine from "@/components/ContentEngine";
import Library from "@/components/Library";
import BuildInPublic from "@/components/BuildInPublic";
import AILayer from "@/components/AILayer";
import HowItWasBuilt from "@/components/HowItWasBuilt";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhyWeExist />
        <FounderOS />
        <ContentEngine />
        <Library />
        <BuildInPublic />
        <AILayer />
        <HowItWasBuilt />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
