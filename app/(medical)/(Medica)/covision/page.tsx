"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";
import ProvenTech from "./_components/ProvenTech";
import Resources from "./_components/Resources";
import HipSystems from "./_components/HipSystems";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function CovisionPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <ProvenTech />
        <Resources />
        <HipSystems />
        <News />
      </main>

      <Footer />
    </div>
  );
}
