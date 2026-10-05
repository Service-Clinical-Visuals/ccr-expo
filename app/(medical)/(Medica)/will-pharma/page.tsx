"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";
import Safety from "./_components/Safety";
import Quality from "./_components/Quality";
import Complications from "./_components/Complications";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function WillPharmaPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* Section 1: Header */}
      <Header />

      <main className="relative flex flex-col">
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: About Us */}
        <AboutUs />

        {/* Section 4: 360° Experience */}
        <Deg360 />

        {/* Section 5: Products (Dutch & Belgium Tabs) */}
        <Products />

        {/* Section 6: Important Safety Information / Contraindications */}
        <Safety />

        {/* Section 7: Production & Quality */}
        <Quality />

        {/* Section 8: Potential Complications of Willomesh */}
        <Complications />

        {/* Section 9: Pharma News */}
        <News />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}
