"use client";

import Typography from "./Typography";
import Button from "./Button";
import SectionTag from "./SectionTag";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Enabling() {
  return (
    <section
      id="laparoscopic"
      className="w-full bg-[#F9F9FA] bg-[url('/medical/endomed/bg1.webp')] bg-cover bg-center bg-no-repeat py-14 md:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44"
    >
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 items-center gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Video */}
        <div className="lg:col-span-7 relative w-full aspect-video overflow-hidden bg-[#EBEBEB]" data-aos="fade-right">
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="lg:col-span-5 flex flex-col" data-aos="fade-left">
          <SectionTag text="Advanced Laparoscopic Instruments" className="mb-2 min-[2500px]:mb-4" />

          <Typography variant="h2" color="dark" className="leading-[1.3] mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Enabling Surgical Precision Through Innovative Minimally Invasive Solutions
          </Typography>

          <Typography variant="p" color="muted" className="mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Endomed Combines Specialized Expertise With Continuous Technological Development To Support The
            Evolving Demands Of Laparoscopic Surgery. Its Solutions Are Designed Around The Growing Need For
            Compact Instrumentation And Effective Surgical Systems, Helping Healthcare Professionals Approach
            Minimally Invasive Procedures With Greater Precision. The Company Remains Focused On Advancing Its
            Product Range To Meet Modern Operating Room Requirements.
          </Typography>

          <Typography variant="p" color="dark" weight="bold" className="italic mb-6 2xl:mb-8 min-[3800px]:mb-14">
            Developing Increasingly Compact Laparoscopic Instrumentation To Address Emerging Surgical Techniques
            And Evolving Clinical Requirements.
          </Typography>

          <div>
            <Button
              text="Explore Laparoscopic Solutions"
              href="#products"
              variant="outline-primary"
              className="rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:px-12 min-[3800px]:py-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
