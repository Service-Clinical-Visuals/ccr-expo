"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import ExploreTechnology from "./_components/ExploreTechnology";
import ProductRange from "./_components/ProductRange";
import Video01 from "./_components/Video01";
import QualityPerformance from "./_components/QualityPerformance";
import Video02 from "./_components/Video02";
import Insights from "./_components/Insights";
import Footer from "./_components/Footer";

export default function SunopticPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section (Strictly no overlay colors) */}
        <Hero />

        {/* 3. About Section (History & 4 Staggered Images) */}
        <About />

        {/* 4. Explore Technology (360 Showcase & Feature Badges) */}
        <ExploreTechnology />

        {/* 5. Product Range (Specialty Tabs & Product Grid) */}
        <ProductRange />

        {/* 6. Video Clip 01 (Precision Illumination & Feature Checklist) */}
        <Video01 />

        {/* 7. Uncompromised Quality (Engineered for Peak Performance Cards) */}
        <QualityPerformance />

        {/* 8. Video Clip 02 (Comfort, Flexibility & Precision with Frosted Box) */}
        <Video02 />

        {/* 9. Latest Insights & Updates (Blog Cards) */}
        <Insights />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
