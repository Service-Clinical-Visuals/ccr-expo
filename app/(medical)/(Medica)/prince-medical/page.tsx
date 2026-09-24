"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Refresh from "./_components/Refresh";
import Clear from "./_components/Clear";
import Prince from "./_components/Prince";
import Quality from "./_components/Quality";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";
import ProductsSlider from "./_components/ProductsSlider";

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
        <Refresh />
        <Prince />
        <Clear />
        <Quality />
      </main>

      <Footer />

    </div>
  );
}
