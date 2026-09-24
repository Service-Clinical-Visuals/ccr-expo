"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Atom360 from "./_components/Atom360";
import Solutions from "./_components/Solutions";
import AdvancedControl from "./_components/AdvancedControl";
import Accessories from "./_components/Accessories";
import Footer from "./_components/Footer";

export default function EmedPage() {
  return (
    <main className="min-h-screen bg-white text-[#2A2A2A] overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Atom360 />
      <Solutions />
      <AdvancedControl />
      <Accessories />
      <Footer />
    </main>
  );
}
