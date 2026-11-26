"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience360 from "./_components/Experience360";
import MissionVision from "./_components/MissionVision";
import KeyFeatures from "./_components/KeyFeatures";
import Products from "./_components/Products";
import DesignDetails from "./_components/DesignDetails";
import Gallery from "./_components/Gallery";
import Footer from "./_components/Footer";

/**
 * Airblend Landing Page Template
 *
 * ARCHITECTURAL REFERENCE (from Inogen master):
 * 1. Semantic Layout Structure:
 *    - <Header />: Adaptive floating pill -> sticky frosted navigation bar.
 *    - <main>: Logical flow containing all sections.
 *    - <Footer />: Multi-column responsive footer.
 * 2. Responsive Breakpoints & Tablet Standards:
 *    - Tablet layout stays active across 768px-1035px.
 *    - Desktop layout starts at 1036px.
 * 3. Section Constraints:
 *    - Containers use `.custom-container`.
 *    - Header text blocks use `xl:max-w-[70%] mx-auto`.
 *    - Hero section has NO overlay colours.
 */
export default function AirblendPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Airblend Section */}
        <About />

        {/* 4. Explore Healthtime OC10 In 360° Section */}
        <Experience360 />

        {/* 5. Driving Innovation Towards A Better Future (Vision & Mission) */}
        <MissionVision />

        {/* 6. Designed For Reliable Oxygen Delivery (Key Features & Video Clip) */}
        <KeyFeatures />

        {/* 7. Advanced Medical Solutions (Products Carousel) */}
        <Products />

        {/* 8. Efficient & User-Friendly Design (Video Clip + Technical Card) */}
        <DesignDetails />

        {/* 9. A Closer Look At Airblend's Innovation & Excellence (Gallery) */}
        <Gallery />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
