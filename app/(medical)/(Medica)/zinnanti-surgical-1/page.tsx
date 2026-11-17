"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutSection from "./_components/AboutSection";
import Explore360 from "./_components/Explore360";
import Products from "./_components/Products";
import SmokeEvacuation from "./_components/SmokeEvacuation";
import Documentation from "./_components/Documentation";
import ProductInAction from "./_components/ProductInAction";
import ContactCTA from "./_components/ContactCTA";
import Footer from "./_components/Footer";

export default function ZinnantiPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <Header hideUntilScroll />

      <main className="relative flex flex-col">
        <Hero />
        <AboutSection />
        <Explore360 />
        <Products />
        <SmokeEvacuation />
        <Documentation />
        <ProductInAction />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
