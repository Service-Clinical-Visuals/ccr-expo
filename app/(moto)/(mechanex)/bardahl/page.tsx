"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Products from "./_components/Products";
import EngineLubrication from "./_components/EngineLubrication";
import Banners from "./_components/Banners";
import PerformanceTrust from "./_components/PerformanceTrust";
import News from "./_components/News";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function BardahlPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden selection:bg-[#F8EA17] selection:text-black">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <EngineLubrication />
        <Banners />
        <PerformanceTrust />
        <News />
      </main>

      <Footer />
    </div>
  );
}
