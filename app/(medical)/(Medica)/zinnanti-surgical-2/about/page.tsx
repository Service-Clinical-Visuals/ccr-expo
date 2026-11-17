"use client";

import React from "react";
import Header from "../_components/Header";
import SmoothAOS from "../_components/SmoothAOS";
import PageBanner from "../_components/PageBanner";
import AboutUs from "../_components/AboutUs";
import Quote from "../_components/Quote";
import Footer from "../_components/Footer";

export default function ZinnantiSurgicalAboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <SmoothAOS />

      <Header />

      <main className="relative flex flex-col">
        <PageBanner title="About Us" eyebrow="Zinnanti Surgical Design Group" />
        <AboutUs />
        {/* Add remaining about-page sections here */}
        <Quote />
      </main>

      <Footer />
    </div>
  );
}
