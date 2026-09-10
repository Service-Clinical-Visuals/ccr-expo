"use client";

import React from "react";
import { Droplet, Layers, ShieldCheck, TrendingUp } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  { icon: Droplet, label: "Advanced Technology" },
  { icon: Layers, label: "Customizable Solutions" },
  { icon: ShieldCheck, label: "Trusted Results" },
  { icon: TrendingUp, label: "Grow Your Business" },
];

const Smart = () => {
  return (
    <section id="smart" className="w-full py-16 bg-white overflow-hidden relative">
      <img
        src="/medical/hydrafacial/bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 right-0 w-[60%] max-w-[520px] hidden sm:block opacity-80 z-0"
      />

      <div className="custom-container relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6 order-1 lg:order-2 lg:col-span-7 w-full" data-aos="fade-left">
          <div className="flex flex-wrap gap-x-2">
            <Typography variant="h2" color="dark" >
              Smart Technology.
            </Typography>
            <Typography variant="h2" color="primary" >
              Unmatched Results.
            </Typography>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed">
            Discover the power of advanced HydraFacial® technology with devices designed to meet the evolving needs of modern skincare practices. Built on proprietary Vortex-Fusion® technology, HydraFacial® devices combine advanced treatment capabilities with a streamlined, intuitive experience to help skincare professionals deliver personalized treatments tailored to a wide range of skin concerns and client goals.
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed">
            Whether you are introducing HydraFacial® treatments to your practice, expanding your existing treatment menu, or looking to elevate your client experience, each device offers the technology and versatility to support your unique business needs. Explore the features, capabilities, and benefits of the HydraFacial® device to find the right fit for your practice today while creating new opportunities for client satisfaction, service expansion, and sustainable business growth.
          </Typography>

          <div data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore The Device" href="#" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4" data-aos="fade-up" data-aos-delay="200">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3">
                <div className="w-17 h-17 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-10 h-10" strokeWidth={2} />
                </div>
                <Typography variant="span" color="dark" >
                  {label}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full order-2 lg:order-1 lg:col-span-5" data-aos="fade-right">
          <img
            src="/medical/hydrafacial/smart.png"
            alt="HydraFacial smart device"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Smart;
