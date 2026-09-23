"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Connected = () => {
  return (
    <section id="connected" className="w-full py-16 min-[1281px]:py-24 bg-[var(--color-primary)] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 min-[1281px]:grid-cols-12 gap-8 min-[1281px]:gap-x-12 min-[3800px]:gap-x-16 min-[1281px]:gap-y-6 items-center">

          {/* Video (Mobile: 2nd, Desktop: Left Col, Spans 2 rows) */}
          <div
            className="order-2 min-[1281px]:order-1 w-full min-[1281px]:col-span-7 min-[1281px]:row-span-2 aspect-[16/10] relative overflow-hidden rounded-sm min-[3800px]:rounded-[2rem] bg-white/5"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text Top: Heading & Description (Mobile: 1st, Desktop: Right Col, Top) */}
          <div className="order-1 min-[1281px]:order-2 min-[1281px]:col-span-5 flex flex-col gap-3 self-end" data-aos="fade-left">
            <Typography variant="h5" color="white" className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white inline-block"></span> SEAMLESS DATA INTEGRATION
            </Typography>

            <Typography variant="h2" color="white" className="leading-tight mb-2 min-[3800px]:mb-6">
              Connected Cardiology, Smarter Workflows
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed">
              Easy ECG Holter connects clinical data with HIS and EMR systems, enabling efficient management of Holter ECG examinations across hospitals and clinics. With centralized access to patient data and reports, healthcare professionals can streamline examination workflows and simplify data sharing.
            </Typography>
          </div>

          {/* Text Bottom: Feature Cards & Button (Mobile: 3rd, Desktop: Right Col, Bottom) */}
          <div className="order-3 min-[1281px]:order-3 min-[1281px]:col-span-5 flex flex-col gap-6 min-[1281px]:gap-8 min-[3800px]:gap-12 self-start" data-aos="fade-left" data-aos-delay="100">
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg p-5 min-[3800px]:p-10 border-l-[6px] border-[var(--color-secondary)] shadow-sm">
                <Typography variant="p" color="muted" className="text-[1.05rem] min-[3800px]:text-[1.5rem] flex items-start leading-relaxed">
                  <div className="mt-[11px] min-[3800px]:mt-[16px] mr-4 shrink-0 w-[14px] h-[4px] min-[3800px]:w-5 min-[3800px]:h-[6px] bg-[var(--color-secondary)] rounded-sm"></div>
                  <span>
                    <Typography variant="h5" color="muted" className="inline"><strong>Universal Compatibility</strong></Typography> — Supports HL7, XML, DICOM & GDT standards.
                  </span>
                </Typography>
              </div>

              <div className="bg-white rounded-lg p-5 min-[3800px]:p-10 border-l-[6px] border-[var(--color-secondary)] shadow-sm">
                <Typography variant="p" color="muted" className="text-[1.05rem] min-[3800px]:text-[1.5rem] flex items-start leading-relaxed">
                  <div className="mt-[11px] min-[3800px]:mt-[16px] mr-4 shrink-0 w-[14px] h-[4px] min-[3800px]:w-5 min-[3800px]:h-[6px] bg-[var(--color-secondary)] rounded-sm"></div>
                  <span>
                    <Typography variant="h5" color="muted" className="inline"><strong>Centralized Data Management</strong></Typography> — Collect, manage, store, and share Holter ECG reports across multiple locations.
                  </span>
                </Typography>
              </div>
            </div>

            <div className="pt-2">
              <Button text="Know More" href="#connected" variant="secondary" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Connected;
