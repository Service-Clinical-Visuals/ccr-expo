"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Button from "./Button";

import "swiper/css";
import "swiper/css/pagination";

const careStages = [
  {
    title: "Neonatal Transport",
    description:
      "Transporting a critically ill infant requires unique equipment and highly trained clinicians to accomplish the live saving mission.",
    image: "/medical/international-biomedical/1.webp",
  },
  {
    title: "Labor & Delivery",
    description:
      "A newborn's transition into the world should be as smooth and safe as possible.",
    image: "/medical/international-biomedical/2.webp",
  },
  {
    title: "NICU & Nursery",
    description:
      "Newborns in the NICU and Special Care Nursery require specialized care and equipment to support their delicate needs.",
    image: "/medical/international-biomedical/3.webp",
  },
  {
    title: "Neuro NICU",
    description:
      "A newborn's developing brain is incredibly fragile, requiring specialized care and protection.",
    image: "/medical/international-biomedical/4.webp",
  },
  {
    title: "Developmental Care",
    description:
      "At International Biomedical, we understand that caring for infants in the Neonatal Intensive Care Unit (NICU) goes beyond medical treatment.",
    image: "/medical/international-biomedical/5.webp",
  },
];

export default function NeonatalCare() {
  return (
    <section
      id="products"
      className="relative w-full bg-white overflow-hidden py-14 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44"
    >
      <div className="custom-container">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6 min-[2500px]:gap-10 mb-6 sm:mb-8 min-[2500px]:mb-12 min-[3800px]:mb-16">
          <div
            className="flex flex-col gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-9 md:max-w-[62%] xl:max-w-[52%]"
            data-aos="fade-right"
          >
            <h2>Supporting Every Stage Of Neonatal Care</h2>
            <p>
              International Biomedical offers neonatal care equipment designed to enhance safety and
              support newborn health across transport, NICU, and developmental care environments.
            </p>
          </div>

          <div className="shrink-0" data-aos="fade-left">
            <Button text="Discover Products" variant="secondary" href="#products" />
          </div>
        </div>

        {/* Auto-sliding cards */}
        <div data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop
            speed={800}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ el: ".ib-care-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
              2500: { slidesPerView: 3, spaceBetween: 40 },
              3800: { slidesPerView: 3, spaceBetween: 64 },
            }}
            className="!px-1 !py-4 min-[2500px]:!py-6 min-[3800px]:!py-10"
          >
            {careStages.map((item) => (
              <SwiperSlide key={item.title} className="!h-auto">
                <article className="group h-full flex flex-col bg-white rounded-tl-md rounded-br-3xl min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-br-[56px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] p-3.5 sm:p-4 2xl:p-5 min-[2500px]:p-7 min-[3800px]:p-10">
                  <div className="relative w-full aspect-[484/382] overflow-hidden rounded-br-2xl min-[2500px]:rounded-br-[32px] min-[3800px]:rounded-br-[44px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col flex-1 pt-4 sm:pt-5 min-[2500px]:pt-8 min-[3800px]:pt-12">
                    <h4 className="mb-2 min-[2500px]:mb-3 min-[3800px]:mb-5">{item.title}</h4>
                    <p className="card-text line-clamp-2 mb-4 min-[2500px]:mb-6 min-[3800px]:mb-9">
                      {item.description}
                    </p>
                    <Link
                      href="#products"
                      className="link-text mt-auto self-start text-primary underline underline-offset-4 hover:text-secondary transition-colors"
                    >
                      Review Products &gt;&gt;
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="ib-care-pagination ib-pagination" />
        </div>
      </div>
    </section>
  );
}
