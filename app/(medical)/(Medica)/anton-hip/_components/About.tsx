"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 min-[3800px]:py-36 bg-white overflow-hidden">
      <div className="custom-container flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20 min-[3800px]:gap-32">
        {/* Left Column: Heading and Content (Heading & content first in tablet & mobile) */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-start order-1 lg:order-1"
          data-aos="fade-up"
        >
          {/* Section Heading */}
          <Typography variant="h2" color="dark" weight="bold">
            About Us
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h3"
            color="primary"
            className="italic  mt-1 mb-5 sm:mb-6 min-[3800px]:mt-2 min-[3800px]:mb-8"
          >
            Precision Engineering. Trusted Medical Solutions.
          </Typography>

          {/* Body Paragraphs */}
          <div className="flex flex-col gap-4 sm:gap-5 min-[3800px]:gap-8">
            <Typography variant="p" color="dark" className="leading-relaxed">
              According to our motto &ldquo;High Quality and Precision out of Passion&rdquo; we have made it our business to manufacture high quality products with the highest precision. Whether it is the surgical scissors, which are predominantly handmade, or the titanium screw, which is manufactured using state-of-the-art technology. All products are manufactured at our site in Fridingen. Due to a lean production and short distances, we can still offer this quality &ldquo;Made in Germany&rdquo; at economical prices.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              With us and our products you can be sure: You will never be disappointed. Through the quality we guarantee the constant readiness for use and through close contact with the users we continuously develop our products with regard to their applicability.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              We are also interested in new developments of instruments or implants. If you have a novel idea, please do not hesitate to contact us. With us you can check the feasibility in the shortest time. The development can also be implemented quickly and specifically with us.
            </Typography>
          </div>

          {/* Action Button */}
          <div className="mt-7 sm:mt-8 min-[3800px]:mt-12">
            <Button
              text="Learn More"
              href="#contact"
              variant="primary"
              showArrow={true}
            />
          </div>
        </div>

        {/* Right Column: Image with Badge (Comes after content on mobile/tablet) */}
        <div
          className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="relative w-full rounded-[16px] min-[3800px]:rounded-[28px] overflow-hidden shadow-lg border border-gray-100 group">
            <img
              src="/medical/anton-hip/section2.png"
              alt="Anton Hipp Facility in Fridingen"
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Floating Since 1970 Badge */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 min-[3800px]:bottom-10 min-[3800px]:right-10 bg-white rounded-xl min-[3800px]:rounded-2xl shadow-xl p-3.5 sm:p-4 min-[3800px]:p-7 flex items-center gap-3 sm:gap-4 min-[3800px]:gap-6 border border-gray-100/80 z-10">
              <Calendar
                className="w-6 h-6 sm:w-8 sm:h-8 min-[3800px]:w-14 min-[3800px]:h-14 text-[var(--color-primary)] shrink-0"
                strokeWidth={2.2}
              />
              <div className="flex flex-col">
                <Typography variant="h4" color="dark" weight="bold">
                  Since 1970
                </Typography>
                <Typography variant="span" color="muted">
                  Decades of Precision &amp; Innovation
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
