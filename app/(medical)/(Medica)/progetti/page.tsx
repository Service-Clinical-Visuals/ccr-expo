"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import ProductsSlider from "./_components/ProductsSlider";
import Deg360 from "./_components/360deg";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";
import News from "./_components/News";
import Intelligent from "./_components/Intelligent";
import Features from "./_components/Features";
import Guide from "./_components/Guide";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Guide />
        <Features />
        <ProductsSlider />
        <Intelligent />
        <News />
      </main>

      <Footer />

    </div>
  );
}
