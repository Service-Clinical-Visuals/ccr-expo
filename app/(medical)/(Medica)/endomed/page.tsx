"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Aboutus from "./_components/Aboutus";
import Solution from "./_components/Solution";
import Specialist from "./_components/Specialist";
import Enabling from "./_components/Enabling";

import Product from "./_components/Product";
import Shaping from "./_components/Shaping";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function BiotechPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <Aboutus />
        <Solution />
        <Specialist />
        <Enabling />

        <Product />
        <Shaping />
        <News />

      </main>

      <Footer />
    </div>
  );
}
