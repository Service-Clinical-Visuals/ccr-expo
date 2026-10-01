"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Biomechanical from "./_components/Biomechanical";
import Solutions from "./_components/Solutions";
import FemoralStem from "./_components/FemoralStem";
import Certificates from "./_components/Certificates";
import SurgicalShowcase from "./_components/SurgicalShowcase";
import ScientificBlogs from "./_components/ScientificBlogs";
import Footer from "./_components/Footer";

export default function HipokratPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <Header />
      <main className="relative flex flex-col">
        <Hero />
        <AboutUs />
        <Biomechanical />
        <Solutions />
        <FemoralStem />
        <Certificates />
        <SurgicalShowcase />
        <ScientificBlogs />
      </main>
      <Footer />
    </div>
  );
}
