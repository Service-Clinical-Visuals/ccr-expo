"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutTelemed from "./_components/AboutTelemed";
import Explore360 from "./_components/Explore360";
import ProductGallery from "./_components/ProductGallery";
import CompactProbe from "./_components/CompactProbe";
import PopularProducts from "./_components/PopularProducts";
import PortableUltrasound from "./_components/PortableUltrasound";
import ExhibitionSchedule from "./_components/ExhibitionSchedule";
import Footer from "./_components/Footer";

export default function TelemedPage() {
  return (
    <div className="min-h-screen bg-white text-[#2A2A2A] flex flex-col relative w-full overflow-x-hidden selection:bg-[#0F3E7B] selection:text-white">
      {/* Floating Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* About TELEMED Section */}
        <AboutTelemed />

        {/* Explore MicrUs Pro In 360° Section */}
        <Explore360 />

        {/* Popular Products Section */}
        <PopularProducts />

        {/* Portable Ultrasound Section */}
        <PortableUltrasound />

        {/* Product Gallery Section */}
        <ProductGallery />

        {/* Professional Ultrasound In A Compact Probe Section */}
        <CompactProbe />

        {/* Exhibition Schedule 2026 Section */}
        <ExhibitionSchedule />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
