"use client";

import React from "react";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Deg360 from "./_components/Deg360";
import Divisions from "./_components/Divisions";
import SmartECG from "./_components/SmartECG";
import WhatWeDo from "./_components/WhatWeDo";
import Connectivity from "./_components/Connectivity";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer";

export default function AbintraxPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      {/* 1. Header / Navbar */}
      <Header />

      <main className="relative flex flex-col w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us ("WHO WE ARE") */}
        <AboutUs />

        {/* 4. 360° Experience */}
        <Deg360 />

        {/* 5. Divisions ("One Vision, Two Areas of Excellence") */}
        <Divisions />

        {/* 6. Smart ECG in Action */}
        <SmartECG />

        {/* 7. What We Do ("Integrated Solutions for Every Industry") */}
        <WhatWeDo />

        {/* 8. Connectivity & Reporting */}
        <Connectivity />

        {/* 9. Contact ("Let’s Start a Conversation") */}
        <ContactForm />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
