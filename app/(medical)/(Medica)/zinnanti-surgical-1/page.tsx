"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

export default function ZinnantiPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
