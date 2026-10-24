"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Product360 from "./_components/Product360";
import CatalogBanner from "./_components/CatalogBanner";
import Products from "./_components/Products";
import PrecisionDetail from "./_components/PrecisionDetail";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer";

export default function AlsaApparecchiPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* Navigation Header */}
      <Header />

      {/* Main Landing Sections */}
      <main className="relative flex flex-col">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About ALSA Medical */}
        <AboutUs />

        {/* Section 3: 360° Product View */}
        <Product360 />

        {/* Section 4: Catalog CTA Banner */}
        <CatalogBanner />

        {/* Section 5: Products ("Our Medical Technology") */}
        <Products />

        {/* Section 6: Video Showcase ("Experience Precision in Every Detail") */}
        <PrecisionDetail />

        {/* Section 7: Contact / Quotation Request Form */}
        <ContactForm />
      </main>

      {/* Section 8: Footer */}
      <Footer />
    </div>
  );
}
