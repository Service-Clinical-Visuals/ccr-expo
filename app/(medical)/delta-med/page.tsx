"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Leading from "./_components/Leading";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Reliable from "./_components/Reliable";
import Products from "./_components/Products";
import Precision from "./_components/Precision";
import Sustainability from "./_components/Sustainability";
import Values from "./_components/Values";
import SmoothAOS from "./_components/SmoothAOS";
import Footer from "./_components/Footer";


export default function ETEnginePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Products />
        <Reliable />
        <Leading />
        <Sustainability />
        <Precision />
        <Values />
      </main>

      <Footer />


    </div>
  );
}
