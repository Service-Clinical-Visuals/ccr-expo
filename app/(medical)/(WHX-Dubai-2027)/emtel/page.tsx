"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience360 from "./_components/Experience360";
import Products from "./_components/Products";
import PrecisionMonitoring from "./_components/PrecisionMonitoring";
import Solutions from "./_components/Solutions";
import SmartMonitoringVideo from "./_components/SmartMonitoringVideo";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function EmtelPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Experience 360 Section */}
        <Experience360 />

        {/* 5. Medical Equipment Products Section (p1, p2, p3, p4) */}
        <Products />

        {/* 6. Precision Monitoring Section (Video Clip 01) */}
        <PrecisionMonitoring />

        {/* 7. Clinical Solutions Section (s1, s2, s3) */}
        <Solutions />

        {/* 8. Smart Monitoring Video Section (Video Clip 02 with bg.png) */}
        <SmartMonitoringVideo />

        {/* 9. Latest News & Updates Section */}
        <News />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
