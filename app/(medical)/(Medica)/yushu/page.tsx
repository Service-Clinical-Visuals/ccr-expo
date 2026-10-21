"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Experience360 from "./_components/Experience360";
import ProductSolutions from "./_components/ProductSolutions";
import KeyFeatures from "./_components/KeyFeatures";
import Facilities from "./_components/Facilities";
import PrecisionQuality from "./_components/PrecisionQuality";
import News from "./_components/News";
import Footer from "./_components/Footer";
export default function YushuPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Experience360 />
        <ProductSolutions />
        <KeyFeatures />
        <Facilities />
        <PrecisionQuality />
        <News />
      </main>

      <Footer />
    </div>
  );
}
