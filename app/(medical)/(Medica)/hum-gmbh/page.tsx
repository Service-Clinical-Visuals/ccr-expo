"use client";

import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutCompany from "./_components/AboutCompany";
import CpapTherapy from "./_components/CpapTherapy";
import ProductCategories from "./_components/ProductCategories";
import RespiratorySupportBlue from "./_components/RespiratorySupportBlue";
import Divisions from "./_components/Divisions";
import RespiratorySupportLight from "./_components/RespiratorySupportLight";
import CustomSpecialtyBags from "./_components/CustomSpecialtyBags";
import Footer from "./_components/Footer";

export default function HumGmbhPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121] overflow-x-hidden">
      <Header />
      <Hero />
      <AboutCompany />
      <CpapTherapy />
      <ProductCategories />
      <RespiratorySupportBlue />
      <Divisions />
      <RespiratorySupportLight />
      <CustomSpecialtyBags />
      <Footer />
    </main>
  );
}
