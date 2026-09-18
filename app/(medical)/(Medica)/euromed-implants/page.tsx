"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import ProductsSlider from "./_components/ProductsSlider";
import Deg360 from "./_components/360deg";
import Precision from "./_components/Precision";
import Designed from "./_components/Designed";
import Global from "./_components/Global";
import Certificate from "./_components/Certificate";

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
        <ProductsSlider />
        <Precision />
        <Global />
        <Designed />
        <Certificate />
      </main>

      <Footer />

    </div>
  );
}
