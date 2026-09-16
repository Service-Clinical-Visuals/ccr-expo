"use client";

import React from "react";
import Header from "./_components/Header";
import SmoothAOS from "./_components/SmoothAOS";
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/360deg";
import Mission from "./_components/Mission";
import First from "./_components/First";
import Cemented from "./_components/Cemented";
import Cementless from "./_components/Cementless";
import Advanced from "./_components/Advanced";
import Latest from "./_components/Latest";
import Footer from "./_components/Footer";

export default function SurgivalPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <AboutUs />
        <Deg360 />
        <Mission />
        <Cemented />
        <Advanced />
        <Cementless />
        <First />
        <Latest />

      </main>

      <Footer />
    </div>
  );
}
