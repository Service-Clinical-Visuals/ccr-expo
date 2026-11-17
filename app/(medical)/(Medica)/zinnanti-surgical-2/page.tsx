"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Quote from "./_components/Quote";
import Footer from "./_components/Footer";

export default function ZinnantiSurgicalPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        {/* Add remaining page sections here */}
        <Quote />
      </main>

      <Footer />
    </div>
  );
}
