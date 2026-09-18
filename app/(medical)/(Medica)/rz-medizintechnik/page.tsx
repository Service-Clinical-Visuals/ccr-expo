import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import WhoWeAre from "./_components/WhoWeAre";
import PrecisionControl from "./_components/PrecisionControl";
import ProductCategories from "./_components/ProductCategories";
import IntelligentControl from "./_components/IntelligentControl";
import ServiceBanner from "./_components/ServiceBanner";
import VersatileFunctions from "./_components/VersatileFunctions";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function RZMedizintechnikPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col relative w-full overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex flex-col w-full">
        {/* 2. Hero Banner */}
        <Hero />

        {/* 3. Who Are We? (About Section) */}
        <WhoWeAre />

        {/* 4. Precision. Control. Intelligent Performance (360 Video Section) */}
        <PrecisionControl />

        {/* 5. Medical Technology Designed for Modern Surgery (Product Categories) */}
        <ProductCategories />

        {/* 6. Intelligent Control. Precise Performance (Video Clip 01 Section) */}
        <IntelligentControl />

        {/* 7. Because we know the answer (Customer Service Banner) */}
        <ServiceBanner />

        {/* 8. Versatile Functions. Controlled Performance (Video Clip 02 Section) */}
        <VersatileFunctions />

        {/* 9. Latest News & Insights (Summer Party & Packaging News) */}
        <LatestNews />
      </main>

      {/* 10. Footer Section with Wave Divider & Copyright Bar */}
      <Footer />
    </div>
  );
}
