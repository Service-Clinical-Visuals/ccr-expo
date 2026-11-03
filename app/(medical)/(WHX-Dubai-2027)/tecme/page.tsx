"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Products from "./_components/Products";
import AirwayVisualization from "./_components/AirwayVisualization";
import WhyTecme from "./_components/WhyTecme";
import SmartScopeVideo from "./_components/SmartScopeVideo";
import Sustainability from "./_components/Sustainability";
import Footer from "./_components/Footer";

export default function TecmePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us Section */}
        <AboutUs />

        {/* 4. 360° Video Experience Section */}
        <Deg360 />

        {/* 5. Products Slider Section */}
        <Products />

        {/* 6. Airway Visualization Technology (Video Clip - 01) */}
        <AirwayVisualization />

        {/* 7. Why TECME Section */}
        <WhyTecme />

        {/* 8. SMARTSCOPE LV PRO Video Section (Video Clip - 02) */}
        <SmartScopeVideo />

        {/* 9. Our Sustainability Section */}
        <Sustainability />
      </main>

      {/* 10. Footer Section */}
      <Footer />
    </div>
  );
}
