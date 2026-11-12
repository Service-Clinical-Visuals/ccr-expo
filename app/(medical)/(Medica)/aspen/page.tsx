"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Products from "./_components/Products";
import Performance from "./_components/Performance";
import LatestInnovations from "./_components/LatestInnovations";
import Specifications from "./_components/Specifications";
import Insights from "./_components/Insights";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function AspenPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <Performance />
        <LatestInnovations />
        <Specifications />
        <Insights />
      </main>

      <Footer />
    </div>
  );
}
