"use client";

const images = [
  { src: "/medical/international-biomedical/e1.webp", alt: "Neonatal transport team loading an incubator onto an aircraft" },
  { src: "/medical/international-biomedical/e2.webp", alt: "Flight crew caring for an infant during air transport" },
  { src: "/medical/international-biomedical/e3.webp", alt: "Clinicians moving a transport incubator from a helicopter" },
];

export default function InnovatingCare() {
  return (
    <section
      id="our-history"
      className="relative w-full bg-white pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44"
    >
      <div className="custom-container">
        {/* Heading + intro */}
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 sm:gap-6 xl:gap-12 min-[2500px]:gap-20 mb-8 sm:mb-10 xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24">
          <h2 className="xl:max-w-[30%]" data-aos="fade-right">
            Innovating Neonatal Care For Over 50 Years
          </h2>
          <p
            className="xl:max-w-[56%] xl:text-right"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            International Biomedical Ltd. is an Austin, Texas-based company that designs,
            manufactures, and distributes innovative neonatal and perinatal products and
            technologies to hospitals worldwide. For over 50 years, our mission has been to provide
            the best possible outcomes for the newborn infant, the critically ill, and their
            families.
          </p>
        </div>

        {/* Image grid */}
        <div className="custom-grid-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`relative w-full aspect-[533/397] overflow-hidden rounded-tl-2xl rounded-br-2xl sm:rounded-tl-3xl sm:rounded-br-3xl min-[2500px]:rounded-tl-[40px] min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-tl-[56px] min-[3800px]:rounded-br-[56px] ${
                i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] xl:col-span-1 xl:mx-0 xl:w-full" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
