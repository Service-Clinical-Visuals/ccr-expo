"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Applications from "./_components/Applications";
import VersatileCare from "./_components/VersatileCare";
import Products from "./_components/Products";
import Innovation from "./_components/Innovation";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function LasotronixPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden flex flex-col">
      <SmoothAOS />

      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative flex-1 flex flex-col w-full">
        {/* Section 1: Hero with Video Background */}
        <Hero />

        {/* Section 2: About Us with 3 Images (a1, a2, a3) */}
        <AboutUs />

        {/* Section 3: 360 Experience with Dynamic 360 Video Player */}
        <Deg360 />

        {/* Section 4: Our Applications with 4 Image Cards (app1, app2, app3, app4) */}
        <Applications />

        {/* Section 5: Smart Technology, Versatile Care (Video Clip - 01) */}
        <VersatileCare />

        {/* Section 6: Our Products Slider (p1, p2, p3, p4) */}
        <Products />

        {/* Section 7: Advancing Laser Innovation (Video Clip - 02) */}
        <Innovation />

        {/* Section 8: Latest News & Events (news1, news2, news3) */}
        <News />
      </main>

      {/* Section 9: Footer */}
      <Footer />
    </div>
  );
}
