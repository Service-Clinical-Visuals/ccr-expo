"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Empowering from "./_components/Empowering";
import Simple from "./_components/Simple";
import Anatomical from "./_components/Anatomical";
import Production from "./_components/Production";
import Certificates from "./_components/Certificates";

import Footer from "./_components/Footer";
import Banner from "./_components/Banner";

export default function MeylePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Empowering />
        <Simple />
        <Production />
        <Anatomical />
        <Certificates />
      </main>

      <Footer />

    </div>
  );
}
