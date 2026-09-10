"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Origin from "./_components/Origin";
import Deg360 from "./_components/360deg";
import Strength from "./_components/Strength";
import Treatments from "./_components/Treatments";
import Crystal from "./_components/Crystal";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function DeleoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Origin />
        <Strength />
        <Treatments />
        <Crystal />
        <News />
      </main>

      <Footer />

    </div>
  );
}
