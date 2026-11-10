"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Technologies from "./_components/Technologies";
import PrecisionCutting from "./_components/PrecisionCutting";
import Indications from "./_components/Indications";
import LumixSurgery from "./_components/LumixSurgery";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function FisiolinePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Technologies />
        <PrecisionCutting />
        <Indications />
        <LumixSurgery />
        <News />
      </main>

      <Footer />
    </div>
  );
}
