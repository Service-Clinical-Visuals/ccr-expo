"use client";

import React from "react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Product360 from "./_components/Product360";
import Products from "./_components/Products";
import Solutions from "./_components/Solutions";
import Advanced from "./_components/Advanced";
import Reliable from "./_components/Reliable";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function GeotekPage() {
  return (
    <main className="relative min-h-screen bg-white text-[#2A2A2A] overflow-x-hidden">
      {/* 1. Header Section */}
      <Header />

      <div className="flex flex-col w-full">
        {/* 2. Banner Section */}
        <Banner />

        {/* 3. Technology With A Purpose (About) */}
        <About />

        {/* 4. 360° Interactive Experience */}
        <Product360 />

        {/* 5. Product Catalog */}
        <Products />

        {/* 6. Reliable Ureteral Stents (Solutions) */}
        <Solutions />

        {/* 7. Advanced Medical Solutions */}
        <Advanced />

        {/* 8. Reliable Double J Ureteral Stent Solutions */}
        <Reliable />

        {/* 9. Latest News & Events */}
        <News />

        {/* 10. Footer Section */}
        <Footer />
      </div>
    </main>
  );
}
