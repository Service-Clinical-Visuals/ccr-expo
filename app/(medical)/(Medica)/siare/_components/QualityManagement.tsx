import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function QualityManagement() {
  const news = [
    {
      image: "/medical/siare/latest1.png",
      title: "50 years of Siare Engineering International Group",
      description: "On Friday May 10th last, on the occasion of the General Assembly of Confindustria Emilia, Siare Engineering International Group, through our President and founder Giuseppe Preziosa, received the commemorative plaque for the 50th anniversary of our foundation.",
      link: "#read-more-1"
    },
    {
      image: "/medical/siare/latest2.png",
      title: "MDR certificate",
      description: "We are proud to announce that SIARE ENGINEERING INTERNATIONAL GROUP S.p.A. has obtained CE certification in compliance with the European Regulation on medical devices 2017/745 (MDR): Kiwa Cermet Italia S.p.A. has released the new certificate No. MDR 00056-A dated 02/20/2024.",
      link: "#read-more-2"
    }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-[90%] mx-auto mb-12 sm:mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-title font-semibold tracking-tight font-exo2 text-[#111111] mb-4 sm:mb-6 leading-snug">
            Latest from SIARE
          </h2>
          <p className="section-text leading-relaxed font-dm-sans text-[#111111] font-regular">
            Stay up to date with SIARE's latest medical technology innovations, company updates, events, and industry developments from around the world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row bg-white shadow-[0px_2px_6px_2px_#3C404326,0px_1px_2px_0px_#3C40434D] hover:shadow-[0px_4px_10px_2px_#3C404333,0px_2px_4px_0px_#3C40434D] transition-shadow duration-300 relative"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={idx * 150}
            >
              {/* Image Section */}
              <div className="w-full h-auto sm:h-full sm:w-[45%] flex-shrink-0 relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content Section */}
              <div className="w-full h-auto sm:w-[55%] p-8 sm:p-8 flex flex-col justify-center relative bg-white">
                {/* Vertical Blue Line */}
                <div className="absolute right-6 sm:right-8 top-[10%] bottom-[50%] w-[3px] bg-[#1B489F] rounded-full hidden sm:block"></div>

                <h3 className="font-exo2 font-semibold text-[#111111] card-title leading-snug mb-4 sm:pr-8">
                  {item.title}
                </h3>

                <p className="font-dm-sans text-[#111111] section-text leading-relaxed font-light sm:pr-8">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <Link href={item.link} className="text-[#1B489F] section-text font-dm-sans font-medium flex items-center gap-2 group hover:underline w-max">
                    <span>Read More</span> <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-end pr-4 mt-8">
          <Link href="#view-all-news" className="text-[#1B489F] font-dm-sans section-text hover:underline font-medium underline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
