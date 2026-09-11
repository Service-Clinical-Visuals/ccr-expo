"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Refresh from "./_components/Refresh";
import Empowering from "./_components/Empowering";
import Scientific from "./_components/Scientific";
import Simple from "./_components/Simple";
import Latest from "./_components/Latest";

import Footer from "./_components/Footer";
import Banner from "./_components/Banner";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Empowering />
        <Refresh />

        <Scientific />
        <Simple />
        <Latest />
      </main>

      <Footer />

    </div>
  );
}
