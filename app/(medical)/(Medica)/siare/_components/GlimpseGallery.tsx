import React from "react";
import Button from "./Button";
import { Calendar, MapPin } from "lucide-react";

export default function GlimpseGallery() {
  const events = [
    {
      image: "/medical/siare/event1.png",
      title: "AARC Congress 2025",
      date: "06/12/2025",
      location: "Phoenix Convention Center"
    },
    {
      image: "/medical/siare/event2.png",
      title: "MEDICA 2025",
      date: "17/11/2025",
      location: "Messe Düsseldorf"
    },
    {
      image: "/medical/siare/event3.png",
      title: "SMART 2025",
      date: "07/05/2025",
      location: "Milan, Italy"
    }
  ];

  return (
    <section className="w-full relative py-16 sm:py-24 bg-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Content */}
          <div className="xl:col-span-3 flex flex-col items-start gap-4 xl:pr-4" data-aos="fade-right" data-aos-duration="800">
            <h2 className="section-title font-semibold text-[#111111] tracking-tight font-exo2 leading-tight mb-2">
              Events
            </h2>
            <p className="section-text text-[#111111] font-regular font-dm-sans leading-relaxed mb-6">
              Discover the exhibitions, congresses, and industry events where SIARE showcases its latest innovations in anaesthesia and respiratory care. Meet our team and explore our medical technologies at upcoming events around the world.
            </p>
            <Button href="#events" variant="primary" showArrow={false}>
              View All Events
            </Button>
          </div>

          <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white rounded-[16px] overflow-hidden flex flex-col shadow-[0px_2px_6px_2px_#3C404326,0px_1px_2px_0px_#3C40434D] hover:shadow-[0px_4px_10px_2px_#3C404333,0px_2px_4px_0px_#3C40434D] transition-shadow duration-300 h-full">
                {/* Event Image */}
                <div className="w-full flex items-center justify-center p-5">
                  <img src={event.image} alt={event.title} className="w-full h-auto object-contain" />
                </div>

                {/* Event Details */}
                <div className="p-6 sm:p-8 flex flex-col gap-4 flex-1">
                  <h3 className="font-dm-sans font-bold text-[#111111] card-title leading-tight text-[18px] sm:text-[20px]">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-3 mt-auto">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B489F] flex-shrink-0" strokeWidth={2} />
                      <span className="font-dm-sans font-regular text-[#111111] section-text">{event.date}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B489F] mt-1 flex-shrink-0" strokeWidth={2} />
                      <span className="font-dm-sans font-regular text-[#111111] section-text">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
