"use client";

import Typography from "./Typography";
import Button from "./Button";
import SectionTag from "./SectionTag";

const highlights = [
  "Comprehensive Range Of Endoscopic Instruments And Surgical Equipment For Diverse Medical Specialties And Applications.",
  "Precision-Focused Manufacturing And Quality-Driven Solutions Designed To Meet The Evolving Needs Of Healthcare Professionals.",
  "Dedicated Technical Assistance And Customer Support To Help Maintain Equipment Performance And Operational Reliability.",
];

export default function Aboutus() {
  return (
    <section id="about" className="w-full bg-white py-14 md:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Image */}
        <div className="lg:col-span-7 w-full aspect-[930/617] overflow-hidden" data-aos="fade-right">
          <img
            src="/medical/endomed/section2.webp"
            alt="Endomed at a medical exhibition"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-5 flex flex-col" data-aos="fade-left">
          <SectionTag text="About Endomed" className="mb-2 min-[2500px]:mb-4" />

          <Typography variant="h2" color="dark" className="leading-[1.3] mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Advancing Minimally Invasive Surgery Through Precision Medical Technology And Reliable Expertise
          </Typography>

          <Typography variant="p" color="muted" className="mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Endomed S.R.L. Specializes In Medical Technology Solutions Designed To Support Modern Surgical
            Procedures And Endoscopic Applications. With A Focus On Quality, Precision, &amp; Dependable Technical
            Support, The Company Provides Healthcare Professionals With Specialized Instruments And Equipment
            That Contribute To Efficient Clinical Workflows &amp; Reliable Surgical Performance.
          </Typography>

          <ul className="flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 mb-6 2xl:mb-8 min-[3800px]:mb-14">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 min-[3800px]:gap-5">
                <span className="mt-[0.5em] w-2.5 h-2.5 2xl:w-3 2xl:h-3 min-[2500px]:w-4 min-[2500px]:h-4 min-[3800px]:w-5 min-[3800px]:h-5 bg-primary shrink-0" />
                <Typography variant="p" color="muted">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>

          <div>
            <Button
              text="Discover Our Company"
              href="#about"
              variant="outline-primary"
              className="rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:px-12 min-[3800px]:py-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
