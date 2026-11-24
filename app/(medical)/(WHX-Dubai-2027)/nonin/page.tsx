/**
 * Nonin Landing Page
 * Master Reference: Inogen Development Standards
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience360 from "./_components/Experience360";
import Products from "./_components/Products";
import SmartMonitoring from "./_components/SmartMonitoring";
import KnowledgeResources from "./_components/KnowledgeResources";
import WirelessDataSharing from "./_components/WirelessDataSharing";
import News from "./_components/News";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

export default function NoninPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section (About Nonin Medical) */}
        <About />

        {/* 4. 360° Experience Section (Explore Every Angle - WristOx2) */}
        <Experience360 />

        {/* 5. Products Portfolio Section (Fingertips, Handheld, OEM, Sensors) */}
        <Products />

        {/* 6. Smart Monitoring Section (Video Clip 01) */}
        <SmartMonitoring />

        {/* 7. Knowledge & Resources Section */}
        <KnowledgeResources />

        {/* 8. Wireless Data Sharing Section (Video Clip 02) */}
        <WirelessDataSharing />

        {/* 9. News Section (What's New at Nonin) */}
        <News />

        {/* 10. Newsletter Section */}
        <Newsletter />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
