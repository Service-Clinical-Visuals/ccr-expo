/**
 * Speed Care Landing Page
 * Master Reference: Inogen Development Standards
 */
"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Solutions from "./_components/Solutions";
import CoreValues from "./_components/CoreValues";
import TechnologyVideo from "./_components/TechnologyVideo";
import Performance from "./_components/Performance";
import TacticalTraining from "./_components/TacticalTraining";
import Events from "./_components/Events";
import Footer from "./_components/Footer";

export default function SpeedCarePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-secondary)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header Navigation */}
      <Header />

      <main className="relative flex flex-col">
        {/* 2. Hero Section (bg.webp - NO OVERLAY) */}
        <Hero />

        {/* 3. About / Who We Are Section (about.webp) */}
        <About />

        {/* 4. Life-Saving Emergency Solutions / 360 Video */}
        <Solutions />

        {/* 5. Our Core Values (What We Stand For) */}
        <CoreValues />

        {/* 6. Advanced Hemostatic Technology (Video 01) */}
        <TechnologyVideo />

        {/* 7. When Material Meets Performance (perf.webp) */}
        <Performance />

        {/* 8. Realistic Tactical Training (Video 02) */}
        <TacticalTraining />

        {/* 9. Events & Exhibitions (e1.png, e2.png) */}
        <Events />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
