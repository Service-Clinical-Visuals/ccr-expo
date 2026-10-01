"use client";

import React from "react";
import Button from "./Button";
import { ClipboardList, RefreshCw, ShieldCheck, Headphones } from "lucide-react";

export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">

        {/* Top Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-[70%] mx-auto" data-aos="fade-up" data-aos-duration="600">
          <h4 className="text-[#006AB3] section-text font-bold font-inter mb-2 tracking-wide uppercase">
            CERTIFIED MANUFACTURER REPAIR WORKSHOP
          </h4>
          <h2 className="section-title font-bold text-[#202020] tracking-tight font-poppins leading-snug mb-4">
            Certified Repair & Rapid Exchange Program
          </h2>
          <p className="section-text text-[#475569] font-inter leading-relaxed mx-auto">
            Minimize surgical theater disruption with FENTEX medical's certified optical overhaul. We service rigid endoscopes, flexible fiberscopes, and video systems with original Tuttlingen factory specifications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">

          {/* Card 1 */}
          <div className="bg-[#F8FAFC] rounded-[10px] border border-[#E2E8F0] p-5 sm:p-5 flex flex-col transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="font-Fraunces font-bold text-[#006AB3] text-[22px]">01</span>
              <ClipboardList className="w-5 h-5 text-[#94A3B8]" />
            </div>
            <h4 className="font-poppins font-bold text-[#202020] card-title mb-3 leading-tight">Diagnostic Submission</h4>
            <p className="font-inter text-[#666666] section-text leading-relaxed">
              Register your unit online or call our dedicated support line for quick assistance. Receive a free, pre-addressed, secure medical transport box for safe and convenient shipment of your unit, ensuring a smooth and hassle-free service process.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FAFC] rounded-[10px] border border-[#E2E8F0] p-6 sm:p-8 flex flex-col transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="font-Fraunces font-bold text-[#006AB3] text-[22px]">02</span>
              <RefreshCw className="w-5 h-5 text-[#94A3B8]" />
            </div>
            <h4 className="font-poppins font-bold text-[#202020] card-title mb-3 leading-tight">Immediate Exchange Unit</h4>
            <p className="font-inter text-[#666666] section-text leading-relaxed">
              Need zero clinical downtime? Opt for a factory-inspected swap unit delivered within 24-48 hours across Europe, helping keep procedures running smoothly with minimal disruption and reliable replacement support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8FAFC] rounded-[10px] border border-[#E2E8F0] p-6 sm:p-8 flex flex-col transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="font-Fraunces font-bold text-[#006AB3] text-[22px]">03</span>
              <ShieldCheck className="w-5 h-5 text-[#94A3B8]" />
            </div>
            <h4 className="font-poppins font-bold text-[#202020] card-title mb-3 leading-tight">Calibration & Certificate</h4>
            <p className="font-inter text-[#666666] section-text leading-relaxed">
              Reconditioned to original ISO 13485 tolerances with documented optical measurement logs and a 12-month factory warranty, ensuring dependable performance, consistent quality, and confidence in every procedure.
            </p>
          </div>

        </div>

        {/* Support Banner CTA */}
        <div className="bg-[#F8FAFC] rounded-[10px] p-4 sm:p-6 mb-16 sm:mb-20 flex flex-col sm:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <img src="/medical/fentex/icon1.png" alt="Support" className="w-auto h-auto object-contain" />
            <div>
              <h4 className="font-poppins font-bold text-[#202020] card-title leading-tight mb-1">Need an immediate service quote?</h4>
              <p className="font-inter text-[#666666] section-text">Provide model and serial number for a binding quotation within 4 hours.</p>
            </div>
          </div>
          <div className="w-full sm:w-auto flex-shrink-0">
            <Button href="#repair" variant="outline" showArrow={false} className="w-full sm:w-auto !px-6 border !border-[#202020] !text-[#202020] hover:!bg-[#006AB3] hover:!text-white font-inter font-semibold">
              <span className="font-inter font-semibold btn-text">Request Endoscope Repair</span>
            </Button>
          </div>
        </div>

        {/* Dark Bottom Section */}
        <div
          className="rounded-[10px] p-8 sm:p-12 md:p-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #0F2744 50%, #0F172A 100%)',
            boxShadow: '0px 25px 50px -12px #00000040'
          }}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
        >

          <div className="relative z-10">
            <h4 className="text-white section-text font-semibold font-inter text-sm mb-3 tracking-widest uppercase">
              TUTTLINGEN SURGICAL HERITAGE
            </h4>
            <h2 className="text-white section-title font-semibold font-poppins leading-snug mb-4">
              Precision Crafted for Global Operating Theatres
            </h2>
            <p className="text-[#CBD5E1] font-inter section-text leading-relaxed mb-8">
              Every instrument carrying the FENTEX mark is manufactured to strict tolerance standards. Our master instrument makers blend traditional handcraft with automated multi-axis CNC technology to guarantee surgical instruments with lifetime dependability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#demo" showArrow={false} className="!w-auto !bg-white !text-[#0A1A2F] hover:!bg-slate-100 !px-8">
                <span className="font-inter font-semibold btn-text">Request Clinical Demonstration</span>
              </Button>
              <Button href="#manufacturing" showArrow={false} className="!w-auto !bg-[#0052A399] !text-white hover:!bg-[#005a96] !border-[#0284C766] !px-8">
                <span className="font-inter font-semibold btn-text">Learn About Our Manufacturing</span>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
