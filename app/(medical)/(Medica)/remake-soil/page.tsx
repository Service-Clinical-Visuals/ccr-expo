"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import MixingPlants from "./_components/MixingPlants";
import ProductExperience from "./_components/ProductExperience";
import Products from "./_components/Products";
import TechnicalFeatures from "./_components/TechnicalFeatures";
import Blogs from "./_components/Blogs";
import Footer from "./_components/Footer";

export default function RemakeSoilPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col w-full">

        <Hero />

        <AboutUs />

        <Deg360 />

        <MixingPlants />

        <ProductExperience />

        <Products />

        <TechnicalFeatures />

        <Blogs />
      </main>

      <Footer />
    </div>
  );
}
