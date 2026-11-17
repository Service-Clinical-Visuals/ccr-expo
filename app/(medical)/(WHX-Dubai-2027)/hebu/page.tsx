import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import EndoscopySolutions from "./_components/EndoscopySolutions";
import Portfolio from "./_components/Portfolio";
import SpecializedEndoscopy from "./_components/SpecializedEndoscopy";
import BehindExpertise from "./_components/BehindExpertise";
import ClearerVision from "./_components/ClearerVision";
import StoreCta from "./_components/StoreCta";
import Spotlight from "./_components/Spotlight";
import Footer from "./_components/Footer";

export default function HebuPage() {
  return (
    <main className="relative bg-white overflow-x-clip">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <EndoscopySolutions />
      <Portfolio />
      <SpecializedEndoscopy />
      <BehindExpertise />
      <ClearerVision />
      <StoreCta />
      <Spotlight />
      <Footer />
    </main>
  );
}
