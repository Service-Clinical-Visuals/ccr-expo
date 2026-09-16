import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import WhoWeAre from "./_components/WhoWeAre";
import HipReplacement from "./_components/HipReplacement";
import GlobalDistribution from "./_components/GlobalDistribution";
import ProductPortfolio from "./_components/ProductPortfolio";
import ProductLineup from "./_components/ProductLineup";
import ExploreSolutions from "./_components/ExploreSolutions";
import NewsUpdates from "./_components/NewsUpdates";
import Footer from "./_components/Footer";

export default function STRPage() {
  return (
    <div className="min-h-screen bg-white text-[#202020] flex flex-col relative w-full overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex flex-col w-full">
        {/* Banner / Hero Section */}
        <Hero />

        {/* Section 1: Who We Are */}
        <WhoWeAre />

        {/* Section 2: Total Hip Replacement / 360 Video */}
        <HipReplacement />

        {/* Section 3: Global Distribution & Stats */}
        <GlobalDistribution />

        {/* Section 4: Our Product Portfolio / 01 Video */}
        <ProductPortfolio />

        {/* Section 5: Regenerative Medicine Technologies Lineup */}
        <ProductLineup />

        {/* Section 6: Explore Our Solutions / 02 Video */}
        <ExploreSolutions />

        {/* Section 7: News & Updates */}
        <NewsUpdates />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
