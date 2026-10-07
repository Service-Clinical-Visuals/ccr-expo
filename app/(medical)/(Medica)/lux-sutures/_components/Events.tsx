"use client";

import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Button from "./Button";

interface EventItem {
  title: string;
  date: string;
  location: string;
  image: string;
}

const EVENTS: EventItem[] = [
  {
    title: "MEDICA 2024",
    date: "11/11/2024",
    location: "Messe Düsseldorf",
    image: "/medical/lux-sutures/medicalogo.webp",
  },
  {
    title: "MEDICA 2023",
    date: "13/11/2023",
    location: "Messe Düsseldorf",
    image: "/medical/lux-sutures/medicalogo.webp",
  },
  {
    title: "MEDICA 2021",
    date: "15/11/2021",
    location: "Messe Düsseldorf",
    image: "/medical/lux-sutures/medicalogo.webp",
  },
];

export default function Events() {
  return (
    <section id="events" className="w-full bg-white py-14 sm:py-16 desk:py-20 2xl:py-24">
      <div className="custom-container custom-grid items-center">
        {/* Left: Content */}
        <div
          className="col-span-12 desk:col-span-3"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <span className="section-text block font-semibold uppercase tracking-wide text-[#0071ce]">
            Global Medical Congresses
          </span>
          <h2 className="section-title mt-2 sm:mt-3 font-bold leading-tight text-[#0b1b2b]">
            Meet LUXSUTURES Worldwide
          </h2>
          <p className="section-text mt-4 sm:mt-5 leading-relaxed text-slate-600">
            Reach our Luxembourg headquarters in Weiswampach for tender specifications,
            international wholesale distributorships, or sterile sample evaluation kits.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button href="" variant="secondary">
              View All Events
            </Button>
          </div>
        </div>

        {/* Right: Event Cards */}
        <div className="col-span-12 desk:col-span-9 custom-grid mt-4 desk:mt-0 desk:pl-4 xl:pl-6">
          {EVENTS.map((event, index) => (
            <article
              key={event.title}
              className="col-span-12 sm:col-span-6 md:col-span-4 rounded-xl border border-slate-100 bg-white p-2 sm:p-2.5 shadow-[0_4px_18px_rgba(15,40,80,0.10)] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(0,113,206,0.18)]"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={`${index * 120}`}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="px-2.5 sm:px-3 pt-5 pb-3">
                <h3 className="card-title font-semibold text-[#0b1b2b]">{event.title}</h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <CalendarDays
                      className="h-4 w-4 2k:h-7 2k:w-7 shrink-0 text-[#0071ce]"
                      strokeWidth={1.75}
                    />
                    <span className="section-text">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <MapPin
                      className="h-4 w-4 2k:h-7 2k:w-7 shrink-0 text-[#0071ce]"
                      strokeWidth={1.75}
                    />
                    <span className="section-text">{event.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
