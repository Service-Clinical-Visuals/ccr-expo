"use client";

import React from "react";
import Container from "./Container";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const QualityProducts2 = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FBF1E6] via-[#FAF1E7] to-[#F8ECE0]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="w-full lg:w-[35%]" data-aos="fade-right">
            <span className="text-[#C99E88]! heading tracking-wide text-sm!">
              Why 3D HydrO2
            </span>

            <div className="mt-2 mb-6">
              <h2 className="heading inline-block">
                Flexible Facial Solutions
              </h2>
              <div className="h-[3px] w-14 bg-accent mt-3" />
            </div>

            <div className="space-y-4 mb-8">
              <p className="content text-[15px]! leading-[24px]!">
                The 3D HydrO2 Facial offers five dedicated treatment protocols designed for brightening, anti-ageing, and clearer-looking skin. Its flexible approach allows practitioners to tailor treatments to individual client needs while offering a versatile addition to existing aesthetic services. It provides a practical way to address diverse skin concerns with personalised treatment options.
              </p>
              <p className="content text-[15px]! leading-[24px]!">
                With low consumable costs, strong cross-selling opportunities, and growing consumer interest in advanced facial treatments, the 3D HydrO2 Facial can help expand treatment offerings while creating an additional revenue opportunity for clinics and practitioners. Its versatile treatment options can support a broader service portfolio and encourage repeat bookings. The system also provides opportunities to introduce complementary treatments .
              </p>
            </div>

            <Button text="Know More" href="#about-us" variant="secondary" className="navlink text-white!" />
          </div>

          {/* Right: Video */}
          <div className="w-full lg:w-[65%]" data-aos="fade-left" data-aos-delay="150">
            <div className="w-full aspect-video flex items-center justify-center overflow-hidden relative bg-[#f0f0f0]">
              <DynamicVideoPlayer type="short-2" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default QualityProducts2;
