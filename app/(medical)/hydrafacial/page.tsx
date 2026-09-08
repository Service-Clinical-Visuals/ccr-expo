"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Smart from "./_components/Smart";
import Technology from "./_components/Technology";
import Customization from "./_components/Customization";
import Device from "./_components/Device";
import Blog from "./_components/Blog";

import Footer from "./_components/Footer";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Smart />
        <Technology />
        <Customization />
        <Device />
        <Blog />
      </main>

      <Footer />
   
    </div>
  );
}
