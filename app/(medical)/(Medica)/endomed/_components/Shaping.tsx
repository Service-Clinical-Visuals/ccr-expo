"use client";

import Typography from "./Typography";
import Button from "./Button";
import SectionTag from "./SectionTag";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Shaping() {
  return (
    <section
      id="surgical-instruments"
      className="w-full bg-[#F9F9FA] bg-[url('/medical/endomed/bg1.png')] bg-cover bg-center bg-no-repeat py-14 md:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44"
    >
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 items-center gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Content */}
        <div className="lg:col-span-5 flex flex-col order-2 lg:order-1" data-aos="fade-right">
          <SectionTag text="Next-Generation Surgical Instruments" className="mb-2 min-[2500px]:mb-4" />

          <Typography variant="h2" color="dark" className="leading-[1.3] mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Shaping New Possibilities In Minimally Invasive Surgery
          </Typography>

          <Typography variant="p" color="muted" className="mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Endomed Advances Laparoscopic Surgery Through The Continuous Development Of Specialized Instruments
            And Medical Systems Designed For Modern Surgical Environments. As Minimally Invasive Techniques
            Evolve, The Company Focuses On Adapting Its Solutions To Emerging Clinical Demands, Combining
            Technical Expertise With A Commitment To Product Development. Its Laparoscopic Portfolio Reflects A
            Forward-Looking Approach To Supporting Surgical Professionals With Practical, Specialized Equipment.
          </Typography>

          <Typography variant="p" color="muted" className="mb-6 2xl:mb-8 min-[3800px]:mb-14">
            Discover Specialized Medical Instruments And Surgical Solutions Designed For Precision, Quality, And
            Modern Clinical Needs.
          </Typography>

          <div>
            <Button
              text="View Laparoscopy Products"
              href="#products"
              variant="outline-primary"
              className="rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:px-1 min-[3800px]:py-5"
            />
          </div>
        </div>

        {/* Video */}
        <div className="lg:col-span-7 relative w-full aspect-video overflow-hidden bg-[#EBEBEB] order-1 lg:order-2" data-aos="fade-left">
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
