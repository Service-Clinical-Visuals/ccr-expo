/**
 * ChM Landing Page Template
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Semantic Layout Structure:
 *    - Top-level wrapper with min-h-screen, overflow-x-hidden, and theme background tokens.
 *    - <Header />: Adaptive scroll header (floating pill -> fixed top bar).
 *    - <main className="relative flex flex-col">: Logical flow containing all content sections.
 *    - <Footer />: Multi-column responsive footer.
 * 2. Section Patterns:
 *    - All sections use `.custom-container` with percentage widths (90%-92% on mobile/tablet, 85%-90% on desktop/2K/4K).
 *    - Video embedding: standard 16:9 ratio with `DynamicVideoPlayer` and absolute cover fill.
 *    - Responsive typography: Font sizes use REM scaling governed by `globals.css`.
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import VersatileFixation from "./_components/VersatileFixation";
import Products from "./_components/Products";
import Experience360 from "./_components/Experience360";
import Flexibility from "./_components/Flexibility";
import OneSystem from "./_components/OneSystem";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function ChMPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About ChM */}
        <About />

        {/* 4. Versatile Fixation for Diverse Femoral Fractures (Video Clip 01) */}
        <VersatileFixation />

        {/* 5. Explore Our Orthopedic Product Range */}
        <Products />

        {/* 6. Explore CHARFIX Femoral Nail in 360° (360° Video Clip) */}
        <Experience360 />

        {/* 7. Flexibility in Creation of Medical Innovation (f1, f2) */}
        <Flexibility />

        {/* 8. One System. Multiple Surgical Possibilities. (Video Clip 02) */}
        <OneSystem />

        {/* 9. Stay Updated with ChM sp. z o.o. (news1, news2, news3, news4) */}
        <News />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
