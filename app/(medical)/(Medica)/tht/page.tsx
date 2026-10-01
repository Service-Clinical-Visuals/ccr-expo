"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Reliable from "./_components/Reliable";
import Committed from "./_components/Committed";
import Optimise from "./_components/Optimise";
import Expertise from "./_components/Expertise";
import Products from "./_components/Products";

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
        <Products />
        <Reliable />
        <Committed />
        <Optimise />
        <Expertise />


      </main>

      <Footer />

    </div>
  );
}
