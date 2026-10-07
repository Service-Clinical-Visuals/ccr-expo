"use client";

import React from "react";
import { CircleCheck } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const FEATURES = [
  "Non-Absorbable Construction – Made from knitted monofilament polypropylene for durable mesh performance.",
  "Dimensional Stability – Designed to maintain its dimensions without shrinkage.",
];

export default function HerniaRepair() {
  return (
    <section className="w-full bg-[#ececec] bg-[url('/medical/smi-sutures/whitebg.webp')] bg-cover bg-center bg-no-repeat py-14 sm:py-16 min-[1025px]:py-20">
      <div className="custom-container px-0 sm:px-2 min-[1025px]:px-4">
        <div className="grid grid-cols-1 min-[1025px]:grid-cols-12 gap-8 min-[1025px]:gap-10 items-center">
          {/* Video */}
          <div
            className="order-2 min-[1025px]:order-1 min-[1025px]:col-span-9 relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-200 border border-white shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 min-[1025px]:order-2 min-[1025px]:col-span-3 " data-aos="fade-left">
            <h2 className="section-title font-semibold ">
              Designed For Hernia &amp; Eventration Repair
            </h2>

            <div className="w-full h-px bg-slate-300 my-4 sm:my-5" />

            <p className="section-text ">
              The Polypropylene Mesh is a non-absorbable, monofilament polypropylene mesh designed to reinforce
              the abdominal wall in hernia and eventration procedures.
            </p>

            <ul className="mt-5 flex flex-col gap-4">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 mt-0.5 flex-shrink-0 fill-[#3a5da8] text-white" />
                  <p className="section-text ">{item}</p>
                </li>
              ))}
            </ul>

            <div className="w-full h-px bg-slate-300 my-4 sm:my-5" />

            <p className="section-text ">
              Its elastic and durable structure supports use through celioscopy or laparotomy.
            </p>

            <div className="mt-7 sm:mt-8">
              <Button href="" variant="primary">
                Explore Polypropylene Mesh
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
