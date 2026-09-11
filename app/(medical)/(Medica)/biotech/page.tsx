"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import TotalSolutions from "./_components/TotalSolutions";
import Factories from "./_components/Factories";
import ProductRange from "./_components/ProductRange";
import SurgicalTechnique from "./_components/SurgicalTechnique";
import GermanProject from "./_components/GermanProject";
import Prednidelt from "./_components/Prednidelt";
import MedicaExhibition from "./_components/MedicaExhibition";
import Footer from "./_components/Footer";

export default function BiotechPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <TotalSolutions />
        <Factories />
        <ProductRange />
        <SurgicalTechnique />
        <GermanProject />
        <Prednidelt />
        <MedicaExhibition />
      </main>

      <Footer />
    </div>
  );
}
