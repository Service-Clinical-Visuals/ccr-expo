"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Diagnostic from "./_components/Diagnostic";
import Platform from "./_components/Platform";
import Complete from "./_components/Complete";
import News from "./_components/News";
import Deg360 from "./_components/360deg";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";

import Products from "./_components/Products";

export default function AdamoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Products />

        <Platform />
        <Diagnostic />
        <Complete />
        <News />
      </main>

      <Footer />

    </div>
  );
}
