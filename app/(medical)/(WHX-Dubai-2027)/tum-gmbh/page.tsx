"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Overview from "./_components/Overview";
import Experience360 from "./_components/Experience360";
import Products from "./_components/Products";
import CryotherapyVideo from "./_components/CryotherapyVideo";
import Quality from "./_components/Quality";
import Rehabilitation from "./_components/Rehabilitation";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function TurPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-dark)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <Overview />
        <Experience360 />
        <Products />
        <CryotherapyVideo />
        <Quality />
        <Rehabilitation />
        <News />
      </main>

      <Footer />
    </div>
  );
}
