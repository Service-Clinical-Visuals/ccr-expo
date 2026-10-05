"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Products from "./_components/Products";
import WallSupport from "./_components/WallSupport";
import Collaboration from "./_components/Collaboration";
import Footer from "./_components/Footer";

export default function ErgonPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <WallSupport />
        <Collaboration />
      </main>

      <Footer />
    </div>
  );
}
