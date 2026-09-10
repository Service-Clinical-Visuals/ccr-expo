import React from "react";
import AosInit from "./_components/AosInit";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import WhoWeAre from "./_components/WhoWeAre";
import Experience360 from "./_components/Experience360";
import ComprehensiveSolutions from "./_components/ComprehensiveSolutions";
import ProductionAndInnovation from "./_components/ProductionAndInnovation";
import EcologicalFootprint from "./_components/EcologicalFootprint";
import QualityPolicy from "./_components/QualityPolicy";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function FarmacPage() {
  return (
    <main className="min-h-screen bg-white">
      <AosInit />
      <Header />
      <Banner />
      <WhoWeAre />
      <Experience360 />
      <ComprehensiveSolutions />
      <ProductionAndInnovation />
      <EcologicalFootprint />
      <QualityPolicy />
      <LatestNews />
      <Footer />
    </main>
  );
}
