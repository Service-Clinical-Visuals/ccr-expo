import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutIntra from "./_components/AboutIntra";
import CentralVenousCatheters from "./_components/CentralVenousCatheters";
import ProductCategory from "./_components/ProductCategory";
import PrecisionVenousAccess from "./_components/PrecisionVenousAccess";
import QualityCompliance from "./_components/QualityCompliance";
import VersatileVenousAccess from "./_components/VersatileVenousAccess";
import ExperienceIntra from "./_components/ExperienceIntra";
import Footer from "./_components/Footer";

export default function IntraSpecialPage() {
  return (
    <div className="min-h-screen bg-white text-[#202020] flex flex-col relative w-full overflow-x-hidden">
      {/* 1. Navigation Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex flex-col w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About INTRA Section */}
        <AboutIntra />

        {/* 4. Central Venous Catheters (360 Video + 5 Feature Cards) */}
        <CentralVenousCatheters />

        {/* 5. Product Category Section (Hover expandable cards p1, p2, p3) */}
        <ProductCategory />

        {/* 6. Precision Venous Access Section (01 Video + 3 Feature Bullets) */}
        <PrecisionVenousAccess />

        {/* 7. Quality & Compliance Section (Certificates c1, c2, c3) */}
        <QualityCompliance />

        {/* 8. Versatile Venous Access Section (4 Feature Bullets + 02 Video) */}
        <VersatileVenousAccess />

        {/* 9. Experience INTRA (CTA Banner with bg.png) */}
        <ExperienceIntra />
      </main>

      {/* 10. Footer Section */}
      <Footer />
    </div>
  );
}
