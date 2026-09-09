"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Precision from "./_components/Precision";
import Products from "./_components/Products";
import Stability from "./_components/Stability";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Solutions from "./_components/Solutions";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <Precision />

        <Solutions />
        <Stability />
        <News />
      </main>

      <Footer />

    </div>
  );
}
