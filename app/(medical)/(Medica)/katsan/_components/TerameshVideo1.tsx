"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

export default function TerameshVideo1() {
  const features = [
    {
      title: "Abdominal Wall Stabilization",
      desc: "Designed to support abdominal wall reinforcement in hernia and eventration cases.",
    },
    {
      title: "Non-Absorbable Design",
      desc: "Maintains its polypropylene mesh structure without being degraded by the body.",
    },
    {
      title: "Product Variety",
      desc: "Available in multiple dimensions to accommodate different surgical requirements.",
    },
  ];

  return (
    <section id="mesh-design" className="w-full py-16 xl:py-24 bg-[#00425E] text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 md:gap-10">
        

        <div className="flex flex-col items-center text-center gap-3 w-full max-w-[90%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold text-2xl sm:text-3xl md:text-4xl">
            Stable & Biocompatible Mesh Design
          </Typography>
          <Typography variant="p" color="white" className="text-white/85 text-sm sm:text-base leading-relaxed">
            TERAMESH® Non-Absorbable combines polypropylene monofilament fibers with a durable mesh structure designed for abdominal wall stabilization. Its non-absorbable construction remains stable after implantation, while its biocompatibility is supported by ISO 10993 test reports.
          </Typography>
        </div>

        <div className="w-full h-px bg-white/30" />

        <div className="w-full flex flex-col min-[1301px]:flex-row items-center gap-8 min-[1301px]:gap-10">
          

          <div
            className="w-full min-[1301px]:w-[70%] aspect-video rounded-[24px] sm:rounded-[30px] overflow-hidden relative shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-black/20"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div
            className="w-full min-[1301px]:w-[30%] flex flex-col justify-between gap-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex flex-col gap-3">
              <Typography variant="h3" color="white" className="font-semibold text-xl sm:text-2xl leading-snug">
                Reliable Support For Diverse Surgical Applications
              </Typography>
              <Typography variant="p" color="white" className="text-white/80 text-sm sm:text-base leading-relaxed">
                TERAMESH® Non-Absorbable is designed for use across several surgical applications requiring mesh-based tissue support.
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 min-[3800px]:gap-6">
                  <div className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-white text-[#00425E] flex items-center justify-center shrink-0 mt-0.5 min-[2500px]:mt-1.5 min-[3800px]:mt-2 shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="white" className="text-sm sm:text-base text-white/90 leading-relaxed">
                    <strong className="font-semibold text-white">{item.title} –</strong> {item.desc}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 pt-2">
              <Typography variant="p" color="white" className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Its versatile design allows it to be used in hernia, eventration, and prolapse procedures through different surgical approaches.
              </Typography>

              <div>
                <Button
                  text="Discover TERAMESH®"
                  href="#mesh-design"
                  variant="white"
                  iconType="arrow-up-right"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
