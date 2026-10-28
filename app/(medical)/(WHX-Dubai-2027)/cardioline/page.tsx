"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Interactive360 from "./_components/Interactive360";
import Products from "./_components/Products";
import Innovation from "./_components/Innovation";
import Platform from "./_components/Platform";
import Effortless from "./_components/Effortless";
import SmoothAOS from "./_components/SmoothAOS";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function HermannPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Interactive360 />
        <Products />
        <Innovation />
        <Platform />
        <Effortless />
        <News />
      </main>
      <Footer />
    </div>
  );
}
