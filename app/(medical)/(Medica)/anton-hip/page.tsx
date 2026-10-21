"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Explore from "./_components/Explore";
import ProductRange from "./_components/ProductRange";
import Facial from "./_components/Facial";
import Precision from "./_components/Precision";
import Prednidelt from "./_components/Prednidelt";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function BiotechPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <About />
        <Explore />
        <ProductRange />
        <Facial />
        <Precision />
        <Prednidelt />
        <News />
      </main>

      <Footer />
    </div>
  );
}
