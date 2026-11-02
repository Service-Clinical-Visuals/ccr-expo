"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import DecuPro360 from "./_components/DecuPro360";
import Products from "./_components/Products";
import TechnicalHighlights from "./_components/TechnicalHighlights";
import Gallery from "./_components/Gallery";
import EngineeredCare from "./_components/EngineeredCare";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function PromaRehaPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Banner with Video */}
        <Hero />

        {/* 3. About Company Section */}
        <AboutUs />

        {/* 4. Explore DECU PRO (360 Deg Video) */}
        <DecuPro360 />

        {/* 5. Products Section with Tabs & Cards */}
        <Products />

        {/* 6. Technical Highlights & Short Video 01 */}
        <TechnicalHighlights />

        {/* 7. Gallery Grid (e1 - e8) */}
        <Gallery />

        {/* 8. Engineered for Reliable Care (Short Video 02) */}
        <EngineeredCare />

        {/* 9. News & Events (n1 - n3) */}
        <News />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
