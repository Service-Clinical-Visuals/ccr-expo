"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Explore360 from "./_components/Explore360";
import Products from "./_components/Products";
import TerameshVideo1 from "./_components/TerameshVideo1";
import QualityManagement from "./_components/QualityManagement";
import TerameshVideo2 from "./_components/TerameshVideo2";
import Blogs from "./_components/Blogs";
import Footer from "./_components/Footer";
import SmoothAOS from "./_components/SmoothAOS";

export default function KatsanPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Hero />
        <About />
        <Explore360 />
        <Products />
        <TerameshVideo1 />
        <QualityManagement />
        <TerameshVideo2 />
        <Blogs />
      </main>

      <Footer />
    </div>
  );
}
