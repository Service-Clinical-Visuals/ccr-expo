"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import ProductSpotlight from "./_components/ProductSpotlight";
import OurProducts from "./_components/OurProducts";
import ElectrosurgeryVideo from "./_components/ElectrosurgeryVideo";
import Certifications from "./_components/Certifications";
import SurgicalPerformance from "./_components/SurgicalPerformance";
import LatestNews from "./_components/LatestNews";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";

/**
 * AMNOTEC Landing Page
 * Master Reference: Inogen Development Methodology
 *
 * Full Page Architecture:
 * 1. Header (Navbar with Navigation & Search CTA)
 * 2. Hero Section (Clean background, NO overlay colors, Plus Jakarta Sans heading & CTA)
 * 3. About Section (Tuttlingen medical technology concept & overlapping images)
 * 4. Product Spotlight (360° Electrosurgical Device Video & Precision Cutting / Coagulation points)
 * 5. Our Products (Grid of 3 Medical Technology product categories)
 * 6. Electrosurgical Technology Video (Video Clip 02 presentation)
 * 7. Quality & Certifications (4 certificate cards & View All link)
 * 8. Surgical Performance (Feature & 360° device view)
 * 9. Latest News & Insights (3 cards: Urological Congress, MEDICA 2026, iSMIT 2026)
 * 10. Newsletter Subscription (Bricolage Grotesque / Jakarta heading & email subscribe form)
 * 11. Footer (Quick links, Products, Contact info in Germany, Sub-footer with Copyright)
 */
export default function AmnotecPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Product Spotlight (360° Video) */}
        <ProductSpotlight />

        {/* 5. Our Products Section */}
        <OurProducts />

        {/* 6. Electrosurgical Technology Video Section */}
        <ElectrosurgeryVideo />

        {/* 7. Quality & Certifications Section */}
        <Certifications />

        {/* 8. Surgical Performance (360° Video) Section */}
        <SurgicalPerformance />

        {/* 9. Latest News & Insights Section */}
        <LatestNews />

        {/* 10. Newsletter Section */}
        <Newsletter />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
