/**
 * SOMNOmedics AG Landing Page
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Semantic Layout Structure:
 *    - Top-level wrapper with min-h-screen, overflow-x-hidden, and theme background tokens.
 *    - <Header />: Adaptive navigation with language translate bar and search.
 *    - <main className="relative flex flex-col">: Logical flow containing all content sections.
 *    - <Footer />: Multi-column responsive footer.
 * 2. Implemented Sections:
 *    - Header (Logo, Navigation, Search, Flag Translators)
 *    - Hero (Background Video, High-Impact Headline, Explore Products CTA)
 *    - About (Office Showcase, Company Intro, History and Milestones Timeline)
 *    - Experience360 (SOMNOtouch™ RESP eco 360 Video & Technical Specifications)
 *    - GlobalFootprint (Interactive 3-Tab Showcase for g1, g2, g3)
 *    - AdvancedSleep (Powerful Cardio-Respiratory Sleep Screening & Video)
 *    - Products (Our Comprehensive Product Solutions with p1, p2, p3 + Contact pill banner)
 *    - SleepScreening (Sleep Screening starts with the SOMNOtouch™ RESP eco + p4 / Video)
 *    - News (DGSM, ESRS, ERS Congress News with n1, n2, n3)
 *    - Footer (White footer_logo, Links, Contact Info, Social icons, Copyright)
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience360 from "./_components/Experience360";
import GlobalFootprint from "./_components/GlobalFootprint";
import AdvancedSleep from "./_components/AdvancedSleep";
import Products from "./_components/Products";
import SleepScreening from "./_components/SleepScreening";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function SomnoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section (Who is SOMNOmedics AG & History and Milestones) */}
        <About />

        {/* 4. Experience 360 Section (SOMNOtouch™ RESP eco) */}
        <Experience360 />

        {/* 5. Global Footprint, Sustainability & The Future (g1, g2, g3) */}
        <GlobalFootprint />

        {/* 6. Advanced Sleep Analysis & Diagnostics */}
        <AdvancedSleep />

        {/* 7. Comprehensive Product Solutions (p1, p2, p3) */}
        <Products />

        {/* 8. Sleep Screening with SOMNOtouch™ RESP eco (p4 / Video) */}
        <SleepScreening />

        {/* 9. Latest News & Medical Congresses (n1, n2, n3) */}
        <News />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
