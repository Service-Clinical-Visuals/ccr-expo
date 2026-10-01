"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";
import Flexible from "./_components/Flexible";
import Areas from "./_components/Areas";
import Versatile from "./_components/Versatile";
import BestSelling from "./_components/BestSelling";
import Ready from "./_components/Ready";

import Footer from "./_components/Footer";

export default function BiotechPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <About />
        <Deg360 />
        <Areas />
        <Flexible />
        <Products />
        <Versatile />
        <BestSelling />
        <Ready />
      </main>

      <Footer />
    </div>
  );
}
