/**
 * OrthoGet Landing Page
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Semantic Layout Structure:
 *    - Top-level wrapper with min-h-screen, overflow-x-hidden, and theme background tokens.
 *    - Adaptive Sticky Header (<Header />).
 *    - <main className="relative flex flex-col">: Complete logical section flow.
 *    - Complete responsive implementation from mobile through 4K with fluid REM typography & percentage containers.
 *    - Multi-column responsive footer (<Footer />).
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience360 from "./_components/Experience360";
import TreatmentProcess from "./_components/TreatmentProcess";
import UniqueSolution from "./_components/UniqueSolution";
import NextGenImplant from "./_components/NextGenImplant";
import Products from "./_components/Products";
import Video02Banner from "./_components/Video02Banner";
import LatestUpdates from "./_components/LatestUpdates";
import Footer from "./_components/Footer";

export default function OrthogetPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section (Banner Video) */}
        <Hero />

        {/* 3. About Section (Who We Are + 9+ Years Badge) */}
        <About />

        {/* 4. 360 Video Section (Advanced Orthopedic Implant) */}
        <Experience360 />

        {/* 5. Treatment Process Section (Comprehensive 3-stage Therapy) */}
        <TreatmentProcess />

        {/* 6. Unique Solution Section (Innovation on a global scale) */}
        <UniqueSolution />

        {/* 7. Next-Generation Bone Implant (01 Video Blue Banner) */}
        <NextGenImplant />

        {/* 8. Our Product Portfolio Section (p1, p2, p3 Cards) */}
        <Products />

        {/* 9. Video 02 Blue Banner Section */}
        <Video02Banner />

        {/* 10. Latest Updates / News Section (l1, l2, l3 Cards) */}
        <LatestUpdates />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
