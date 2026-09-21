"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Solutions = () => {
  const cards = [
    { title: "Dermatoscopy", icon: "/adamo/icon1.png" },
    { title: "Videodermatoscopy", icon: "/adamo/icon2.png" },
    { title: "Dermatoscopy", icon: "/adamo/icon3.png" },
    { title: "Dermatoscopy", icon: "/adamo/icon4.png" },
    { title: "Dermatoscopy", icon: "/adamo/icon5.png" },
  ];

  return (
    <section id="solutions" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-gray-300 pb-8 gap-6">
          <div className="xl:max-w-[60%]">
            <Typography variant="h2" color="dark" className="leading-tight">
              Adamo SRL Leader In<br />Video Diagnostics
            </Typography>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4 max-w-sm text-left lg:text-right">
            <Typography variant="p" color="muted" className="text-sm font-medium">
              Videodermatoscopes, Videocapillaroscopes,<br />Videocolposcopes, And Hysteroscopes
            </Typography>
            <Button text="Explore Our Solutions" href="#solutions" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-t-full rounded-b-none shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center p-4 pt-4 pb-8 text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Circular Icon Area */}
              <div className="w-full aspect-square rounded-full mb-6 flex items-center justify-center p-4 bg-white">
                <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
              </div>

              {/* Title & Details */}
              <Typography variant="h4" color="dark" className="mb-2 font-semibold">
                {card.title}
              </Typography>
              <Typography variant="span" className="text-[var(--color-primary)] underline text-sm font-medium mt-1 cursor-pointer hover:underline">
                Details&gt;&gt;
              </Typography>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;
