"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Products from "./_components/Products";
import SurgicalMesh from "./_components/SurgicalMesh";
import Purpose from "./_components/Purpose";
import AreasOfUse from "./_components/AreasOfUse";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function AltaylarMedikalPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />
      <Header />
      <main className="relative flex flex-col w-full">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <SurgicalMesh />
        <Purpose />
        <AreasOfUse />
        <News />
      </main>
      <Footer />
    </div>
  );
}
