"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import ProductsSlider from "./_components/ProductsSlider";
import Deg360 from "./_components/360deg";
import Comprehensive from "./_components/Comprehensive";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";
import Advancing from "./_components/Advancing";
import Connected from "./_components/Connected";
import News from "./_components/News";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <ProductsSlider />
        <Comprehensive />
        <Advancing />
        <Connected />
        <News />
      </main>

      <Footer />

    </div>
  );
}
