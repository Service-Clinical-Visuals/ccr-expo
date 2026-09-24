import React from "react";
import Button from "./Button";

export default function GlimpseGallery() {
  return (
    <section className="w-full relative py-16 sm:py-24 bg-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 xl:gap-5 items-center">

          {/* Left Content: Image */}
          <div
            className="xl:col-span-6 w-full h-full flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img
              src="/medical/tekno/tekno-medical.png"
              alt="50 Years of Tekno-Medical"
              className="w-full xl:w-auto h-auto xl:h-full object-contain"
            />
          </div>

          {/* Right Content: Text and Stats */}
          <div
            className="xl:col-span-6 flex flex-col gap-5"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="mb-6">
              <h2 className="section-title font-medium text-[#111111] tracking-tight font-exo2 leading-tight">
                50 years of Tekno-Medical
              </h2>
            </div>

            <p className="section-text text-[#111111] font-light font-outfit leading-relaxed mb-8">
              The company was founded in Tuttlingen in 1976 and is nowadays a global family-owned company in the medical technology, which runs business in more than 130 countries worldwide. With meanwhile approximately 100 employees Tekno-Medical combines tradition and experience as well as visions. Tekno-Medical continue the success of the 50 years of company's history. The vision is be tied in with the success the enterprise have achieved so far to carry on setting vital priorities.
            </p>

            <div className="mb-12">
              <Button href="#history" variant="primary" showArrow={false}>
                Discover Our Story
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-[#3C40434D] last:border-r-0">
                <img src="/medical/tekno/icon6.png" alt="Calendar" className="w-auto h-auto object-contain" />
                <div className="flex flex-col mt-1">
                  <span className="font-outfit font-semibold text-[#111111] card-title leading-tight">50+</span>
                  <span className="font-outfit text-[#111111] font-regular section-text">Years</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-[#3C40434D] last:border-r-0">
                <img src="/medical/tekno/icon7.png" alt="Globe" className="w-auto h-auto object-contain" />
                <div className="flex flex-col mt-1">
                  <span className="font-outfit card-title font-semibold text-[#111111] text-base sm:text-lg leading-tight">130+</span>
                  <span className="font-outfit text-[#111111] font-regular section-text">Countries</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-[#3C40434D] last:border-r-0">
                <img src="/medical/tekno/icon8.png" alt="Users" className="w-auto h-auto object-contain" />
                <div className="flex flex-col mt-1">
                  <span className="font-outfit card-title font-semibold text-[#111111] text-base sm:text-lg leading-tight">100+</span>
                  <span className="font-outfit text-[#111111] font-regular section-text">Employees</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-[#3C40434D] last:border-r-0">
                <img src="/medical/tekno/icon9.png" alt="Location" className="w-auto h-auto object-contain" />
                <div className="flex flex-col mt-1">
                  <span className="font-outfit card-title font-semibold text-[#111111] text-base sm:text-lg leading-tight">1976</span>
                  <span className="font-outfit text-[#111111] font-regular section-text">Tuttlingen</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

