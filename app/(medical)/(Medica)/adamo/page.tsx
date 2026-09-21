"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Diagnostic from "./_components/Diagnostic";
import Solutions from "./_components/Solutions";
import Platform from "./_components/Platform";
import Quality from "./_components/Quality";
import Complete from "./_components/Complete";
import News from "./_components/News";
import Deg360 from "./_components/360deg";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";

export default function AdamoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Solutions />
        <Platform />
        <Diagnostic />

        <Quality />
        <Complete />
        <News />
      </main>

      <Footer />

    </div>
  );
}
