import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import AboutSection from "./_components/AboutSection";
import PrecisionVentilation from "./_components/PrecisionVentilation";
import CoreCompetencies from "./_components/CoreCompetencies";
import RedefiningPrecision from "./_components/RedefiningPrecision";
import InnovationJourney from "./_components/InnovationJourney";
import IntelligentVentilation from "./_components/IntelligentVentilation";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function ThoraPage() {
  return (
    <main className="relative bg-white overflow-x-clip">
      <AosInit />
      <Header />
      <Banner />
      <AboutSection />
      <PrecisionVentilation />
      <CoreCompetencies />
      <RedefiningPrecision />
      <InnovationJourney />
      <IntelligentVentilation />
      <LatestNews />
      <Footer />
    </main>
  );
}
