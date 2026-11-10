"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

// NOTE: c1/c2 avatars are reused for the last two testimonials until their photos are supplied.
const TESTIMONIALS = [
  {
    name: "Sarah Goldey",
    role: "Heart Center of Southern MD",
    avatar: "/medical/dms-service/c1.webp",
    quote: [
      "We Have Been Using The MyPatch® Holters For About A Year In Our Office And Our Patients Love It! The Wireless Patch Gives Them The Flexibility And Comfort To Go About Their Normal Daily Routine Without Letting Others Know They Are Wearing A Heart Monitor. I Performed Many Comparisons Between The Wireless Patch And The Traditional 5 Wired Holter Monitors And Found Accuracy Of Rhythms To Be Right On!",
    ],
  },
  {
    name: "Stephen R. Corday, MD, FACC",
    role: "Los Angeles, CA",
    avatar: "/medical/dms-service/c2.webp",
    quote: [
      "I Think MyPatch® Is Truly Revolutionary, Extraordinary! The Patient Comfort And Ease Of Use Is Unparalleled.",
      "Lynda Has Proven To Be Professional And A Reliable Resource For The Last 35 Years We Have Worked With Her. She Is Always Available To Help Us And Always Willing To Train Our New Technicians And Nurses On The Uses Of Holter Equipment...",
    ],
  },
  {
    name: "C. Jeffrey Carlson, MD, FACC",
    role: "Fremont, CA",
    avatar: "/medical/dms-service/c3.webp",
    quote: [
      "I Have Done Business With Lynda Cole And Dms-Service Since Entering Practice. Great Products And Great Customer Service. Software Has Been Sound And Updated Appropriately. We Have Had Virtually No Down Time With Our Systems.",
    ],
  },
  {
    name: "Phyllis K. Stein, Ph.D.",
    role: "Associate Professor of Medicine",
    avatar: "/medical/dms-service/c4.webp",
    quote: [
      "Lynda Has Been A Personalized And Knowledgeable Resource For The Past Several Years And Her Involvement Has Been Invaluable To The Advancement Of The Field Of Heart Rate Variability Research.",
    ],
  },
];

export default function Testimonials() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section id="reviews" className="w-full bg-white pt-16 sm:pt-20 xl:pt-10 pb-16 xl:pb-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          {/* Intro */}
          <div className="xl:col-span-4 lg:max-w-[75%] xl:max-w-none" data-aos="fade-right">
            <p className="eyebrow font-mulish font-medium text-[var(--primary)] mb-3">Customer Testimonials</p>
            <h2 className="section-title font-mulish font-bold text-[var(--heading)] mb-6">Trusted Experiences</h2>
            <p className="section-text font-inter text-[#333333] mb-10">
              Discover How Healthcare Professionals Experience Our Cardiac Monitoring Solutions, Reliable Services And
              Dedicated Support. Their Feedback Reflects Our Commitment To Quality, Accuracy And Better Patient Care.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "Previous testimonial", Icon: ArrowLeft, onClick: () => swiper?.slidePrev() },
                { label: "Next testimonial", Icon: ArrowRight, onClick: () => swiper?.slideNext() },
              ].map(({ label, Icon, onClick }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  onClick={onClick}
                  className="dms-btn-primary w-[52px] h-[52px] min-[2560px]:w-[76px] min-[2560px]:h-[76px] rounded-full flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
                >
                  <Icon className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8" />
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="xl:col-span-8 min-w-0" data-aos="fade-left" data-aos-delay="150">
            <Swiper
              modules={[Autoplay]}
              onSwiper={setSwiper}
              loop
              autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={40}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              className="!pb-2"
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.name} className="!h-auto">
                  <article className="relative h-full pt-[90px] min-[2560px]:pt-[130px]">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[180px] min-[2560px]:w-[260px] min-[2560px]:h-[260px] rounded-full object-cover z-10"
                    />
                    <div className="h-full bg-[var(--primary-light)] rounded-[12px] px-6 sm:px-10 pt-[100px] min-[2560px]:pt-[145px] pb-10 text-center">
                      <img
                        src="/medical/dms-service/icon10.webp"
                        alt=""
                        className="w-[52px] h-[52px] mx-auto mb-4"
                      />
                      <h3 className="card-title font-mulish font-bold text-[var(--heading)] mb-3">{t.name}</h3>
                      <p className="section-text font-inter text-[#555555] mb-5">{t.role}</p>
                      <div className="section-text font-inter text-[#333333] text-left space-y-5">
                        {t.quote.map((q, i) => (
                          <p key={i}>{q}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
