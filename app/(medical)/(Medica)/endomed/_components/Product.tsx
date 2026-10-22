"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Typography from "./Typography";
import SectionTag from "./SectionTag";

const products = [
  {
    title: "Arthroscopy",
    image: "/medical/endomed/p1.webp",
    text: "Endomed Provides Reliable, High-Quality Arthroscopy Instruments And Advanced Surgical Solutions Developed To Meet The Evolving Needs Of Surgeons.",
  },
  {
    title: "Laparoscopy",
    image: "/medical/endomed/p2.webp",
    text: "Endomed Offers High-Quality Laparoscopic Instruments And Accessories Designed To Support Precision, Reliability, And Efficiency In Minimally Invasive Surgical Procedures.",
  },
  {
    title: "Hysteroscopy",
    image: "/medical/endomed/p3.webp",
    text: "Endomed Provides Reliable Hysteroscopy Instruments & Advanced Endoscopic Solutions Designed To Support Precision & Efficiency In Minimally Invasive Gynecological Procedures.",
  },
  {
    title: "Cystoscopy",
    image: "/medical/endomed/p4.webp",
    text: "Endomed Offers High-Quality Cystoscopy Instruments & Endoscopic Systems Designed To Support Precision, Reliability, & Efficiency In Urological Diagnosis And Treatment.",
  },
  {
    title: "Equipment",
    image: "/medical/endomed/p5.webp",
    text: "ENDOMED Offers High-Performance Medical Equipment Which, Thanks To Their Advanced Technology, Represent A Valid Support In All Endoscopic Disciplines.",
  },
  {
    title: "General Surgery",
    image: "/medical/endomed/p6.webp",
    text: "Our Italian-Made Instruments Meet Surgical Needs. We Offer Individual Instruments And Complete Kits Of Trays And Containers, Assembled To The Customer's Specifications.",
  },
  {
    title: "Bipolar Resector",
    image: "/medical/endomed/p7.webp",
    text: "Endomed Provides Bipolar Resectoscopes & Electrodes Designed To Support Precision & Efficiency In Urological And Gynecological Procedures.",
  },
  {
    title: "Ultrasound",
    image: "/medical/endomed/p8.webp",
    text: "Endomed Offers Ultrasound Solutions Designed To Support Accuracy And Efficiency In Modern Medical Procedures.",
  },
];

const navButtonClass =
  "flex items-center justify-center w-10 h-10 2xl:w-12 2xl:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 border border-primary rounded-[6px] min-[2500px]:rounded-[10px] text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:cursor-default";

const navIconClass = "w-6 h-6 2xl:w-7 2xl:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12";

export default function Product() {
  return (
    <section id="products" className="w-full bg-white py-14 md:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10 2xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24" data-aos="fade-up">
          <SectionTag text="Our Product Category" className="mb-2 min-[2500px]:mb-4" />

          <Typography variant="h2" color="dark" className="leading-[1.3] mb-4 2xl:mb-6 min-[3800px]:mb-10">
            Explore Our Specialized Medical Product Categories
          </Typography>

          <Typography variant="p" color="muted" className="max-w-[70%] ">
            Explore Endomed&apos;s Range Of Precision Medical Instruments And Equipment, From Laparoscopic
            Solutions To Advanced Endoscopic Systems, Designed To Support Modern Surgical Needs.
          </Typography>
        </div>

        {/* Slider */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: ".endomed-product-prev", nextEl: ".endomed-product-next" }}
            pagination={{ el: ".endomed-product-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1026: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
              2500: { slidesPerView: 4, spaceBetween: 44 },
              3800: { slidesPerView: 4, spaceBetween: 64 },
            }}
            className="w-full"
          >
            {products.map((product) => (
              <SwiperSlide key={product.title} className="!h-auto">
                <div className="group h-full flex flex-col items-center text-center bg-white border border-primary rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] p-4 2xl:p-5 min-[2500px]:p-7 min-[3800px]:p-10">
                  <div className="w-full aspect-[276/195] bg-[#F9F9F9] rounded-[8px] min-[2500px]:rounded-[12px] overflow-hidden flex items-center justify-center mb-4 2xl:mb-5 min-[2500px]:mb-7 min-[3800px]:mb-10">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <Typography variant="h3" color="primary" weight="semibold" className="font-primary mb-3 2xl:mb-4 min-[3800px]:mb-6">
                    {product.title}
                  </Typography>

                  <Typography variant="p" color="dark" className="px-2 mb-4 2xl:mb-6 min-[3800px]:mb-10">
                    {product.text}
                  </Typography>

                  {/* Arrow appears at the bottom on hover */}
                  <Link
                    href="#products"
                    aria-label={`View ${product.title}`}
                    className="mt-auto flex items-center justify-center w-9 h-9 2xl:w-10 2xl:h-10 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full border border-primary text-primary hover:bg-primary hover:text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination + Navigation */}
          <div className="flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-center mt-6 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16 min-h-10 2xl:min-h-12 min-[2500px]:min-h-16 min-[3800px]:min-h-20">
            <div className="endomed-product-pagination hidden md:flex md:col-start-2 !static !w-auto !translate-x-0 !transform-none items-center justify-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 min-[2500px]:[&_.swiper-pagination-bullet]:w-4 min-[2500px]:[&_.swiper-pagination-bullet]:h-4 min-[3800px]:[&_.swiper-pagination-bullet]:w-5 min-[3800px]:[&_.swiper-pagination-bullet]:h-5 [&_.swiper-pagination-bullet]:bg-[#D9D9D9] [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:w-3.5 [&_.swiper-pagination-bullet-active]:h-3.5 min-[2500px]:[&_.swiper-pagination-bullet-active]:w-5 min-[2500px]:[&_.swiper-pagination-bullet-active]:h-5 min-[3800px]:[&_.swiper-pagination-bullet-active]:w-7 min-[3800px]:[&_.swiper-pagination-bullet-active]:h-7" />

            <div className="flex items-center justify-end md:col-start-3 gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10">
              <button type="button" aria-label="Previous products" className={`endomed-product-prev ${navButtonClass}`}>
                <ChevronLeft className={navIconClass} strokeWidth={1.5} />
              </button>
              <button type="button" aria-label="Next products" className={`endomed-product-next ${navButtonClass}`}>
                <ChevronRight className={navIconClass} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
