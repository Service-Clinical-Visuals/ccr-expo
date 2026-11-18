"use client";

import React from "react";
import { PhoneCall, CalendarDays } from "lucide-react";
import Typography from "../../_components/Typography";
import Badge from "./Badge";

const btnBase =
  "inline-flex items-center justify-center gap-2 min-[2500px]:gap-3 w-full rounded-md px-6 py-2.5 min-[2500px]:py-4 min-[3800px]:py-6 button !text-[0.85rem] min-[2500px]:!text-[1.3rem] min-[3800px]:!text-[1.8rem] transition-colors duration-300 cursor-pointer";
const iconCls = "w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8";

export default function CtaBanner() {
  return (
    <section className="w-full pb-14 sm:pb-16 xl:pb-20 min-[2500px]:pb-32">
      <div className="custom-container">
        <div
          className="bg-[#f1f6fa] rounded-lg px-6 sm:px-8 xl:px-10 min-[2500px]:px-16 py-8 xl:py-10 min-[2500px]:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex flex-col gap-3 max-w-[620px] min-[2500px]:max-w-[1000px]">
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
              <Badge text="Transforming Operative Flow" className="!bg-transparent" />
            </div>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
              <Typography variant="h3" color="none" className="text-[var(--color-primary-dark)] !font-bold">
                Shaping the Future of Surgical Instrumentation.
              </Typography>
            </div>
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
              <Typography variant="p" color="muted">
                At Zinnanti Surgical Design Group, innovation begins with understanding the needs of
                surgical practice. Connect with our clinical specialists to evaluate our patented
                devices in your operating room.
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto sm:min-w-[240px] min-[2500px]:min-w-[400px] min-[3800px]:min-w-[560px]">
            <a
              href="tel:8004591389"
              className={`${btnBase} bg-[var(--color-primary-dark)] hover:bg-[#425739] text-white`}
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Call 800-459-1389
              <PhoneCall className={iconCls} />
            </a>
            <a
              href="#contact"
              className={`${btnBase} border border-[var(--color-primary-dark)] text-[var(--color-primary-dark)] bg-white hover:bg-[var(--color-primary-dark)] hover:text-white`}
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              Make an appointment
              <CalendarDays className={iconCls} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
