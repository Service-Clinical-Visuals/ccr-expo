"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Explore360 from "./_components/Explore360";
import MedicalSolutions from "./_components/MedicalSolutions";
import IntegratedSolutions from "./_components/IntegratedSolutions";
import Products from "./_components/Products";
import LimbLengthening from "./_components/LimbLengthening";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function FamedPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--foreground)]">
      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <About />
        <Explore360 />
        <MedicalSolutions />
        <IntegratedSolutions />
        <Products />
        <LimbLengthening />
        <News />
      </main>

      <Footer />
    </div>
  );
}
