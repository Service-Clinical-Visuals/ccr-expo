"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const Refresh = () => {
  return (
    <section id="refresh" className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-12 items-center">

        {/* Mobile/Tablet Order: Content should come after video if we use order, wait, "where the heading should come first then content then image or video in smaller screen sizes". So order-2 for video on mobile, order-1 for content. */}

        {/* Content */}
        <div className="flex flex-col gap-6 order-1 xl:order-2 xl:col-span-4 w-full" data-aos="fade-left">
          <Typography variant="h2" color="primary">
            Refresh, Renew, Reveal
          </Typography>

          <div className="w-full h-px bg-gray-300"></div>

          <Typography variant="p" color="dark" className="leading-relaxed">
            SkinPen stimulates the skin's natural renewal process through controlled microneedling, helping improve the appearance of facial acne scars and neck wrinkles.
          </Typography>

          <div className="flex flex-col gap-5 my-2">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 min-[3800px]:h-10 min-[3800px]:w-10  text-primary shrink-0 mt-0.5" fill="currentColor" stroke="white" strokeWidth={1.5} />
              <Typography variant="p" color="dark" className="leading-relaxed text-sm">
                Natural Collagen Production - Stimulates the skin's natural collagen response to support visible skin renewal and improved texture.
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 min-[3800px]:h-10 min-[3800px]:w-10  text-primary shrink-0 mt-0.5" fill="currentColor" stroke="white" strokeWidth={1.5} />
              <Typography variant="p" color="dark" className="leading-relaxed text-sm">
                Acne Scar Improvement - Designed to improve the appearance of facial acne scars with results that can continue to develop after treatment.
              </Typography>
            </div>
          </div>

          <div className="w-full h-px bg-gray-300"></div>

          <Typography variant="p" color="dark" className="leading-relaxed">
            The treatment encourages natural collagen production beneath the skin's surface, supporting smoother and healthier-looking skin over time.
          </Typography>

          <div className="pt-4" data-aos="fade-up" data-aos-delay="100">
            <Button text="View Specifications" href="#specs" variant="primary" />
          </div>
        </div>

        {/* Video */}
        <div
          className="w-full order-2 xl:order-1 xl:col-span-8 aspect-[16/10] relative overflow-hidden bg-white"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Refresh;
