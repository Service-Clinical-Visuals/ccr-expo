"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Products from "./_components/Products";
import Catheterization from "./_components/Catheterization";
import Commitment from "./_components/Commitment";
import BladderDrainage from "./_components/BladderDrainage";
import NewsEvents from "./_components/NewsEvents";
import Footer from "./_components/Footer";

export default function TrogeMedicalPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Deg360 />
        <Products />
        <Catheterization />
        <Commitment />
        <BladderDrainage />
        <NewsEvents />
      </main>

      <Footer />
    </div>
  );
}
