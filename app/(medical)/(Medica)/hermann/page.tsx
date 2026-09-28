"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Interactive360 from "./_components/Interactive360";
import Products from "./_components/Products";
import EndoscopicEquipment from "./_components/EndoscopicEquipment";
import Services from "./_components/Services";
import EndoscopicSolutions from "./_components/EndoscopicSolutions";
import SmoothAOS from "./_components/SmoothAOS";
import OurQuality from "./_components/OurQuality";
import Footer from "./_components/Footer";

export default function HermannPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Interactive360 />
        <Products />
        <EndoscopicEquipment />
        <Services />
        <EndoscopicSolutions />
        <OurQuality />
        {/* White Gap between Quality and Footer as in Figma */}
        <div className="w-full h-12 sm:h-16 lg:h-24 min-[3800px]:h-36 bg-white" />
      </main>
      <Footer />
    </div>
  );
}
