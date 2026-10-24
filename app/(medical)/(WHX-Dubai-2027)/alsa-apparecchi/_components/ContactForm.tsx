"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { ChevronDown } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    country: "",
    model: "EXCELL NHP/T (High-End Digital Surgical Unit)",
    message: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Main Form Card */}
        <div
          className="w-full xl:max-w-[70%] max-w-[90%] mx-auto bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-6 sm:p-10 md:p-14 lg:p-16 min-[2500px]:p-20 min-[3800px]:p-28 shadow-sm"
          data-aos="fade-up"
        >
          {/* Form Header */}
          <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-12 w-full mx-auto">
            <Typography
              variant="h4"
              color="muted"
              className="!font-bold tracking-wide w-full xl:max-w-[70%] max-w-[90%] mx-auto"
            >
              Connect with Our Team
            </Typography>
            <Typography
              variant="h2"
              color="dark"
              className="!font-extrabold leading-tight text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl text-[#0F172A] w-full xl:max-w-[70%] max-w-[90%] mx-auto"
            >
              Request Quotation or Clinical Demonstration
            </Typography>
            <Typography
              variant="p"
              color="dark"
              className="text-[#111111] leading-relaxed mt-1 w-full xl:max-w-[70%] max-w-[90%] mx-auto"
            >
              Contact our engineering and sales representatives for technical specifications, hospital
              tenders, or distributor inquiries worldwide.
            </Typography>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#334155] font-secondary">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Andrea Rossi"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-6 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#334155] font-secondary">
                  Institutional / Hospital Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="a.rossi@hospital.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-6 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Hospital / Facility / Company & Country / Destination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#334155] font-secondary">
                  Hospital / Facility / Company
                </label>
                <input
                  type="text"
                  placeholder="General Hospital Department of Surgery"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-6 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-[#334155] font-secondary">
                  Country / Destination *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Italy, Germany, Brazil..."
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-6 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                />
              </div>
            </div>

            {/* Row 3: Model of Interest */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#334155] font-secondary">
                Electrosurgical Model of Interest
              </label>
              <div className="relative">
                <select
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-6 text-gray-700 appearance-none focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all cursor-pointer pr-10"
                >
                  <option value="EXCELL NHP/T (High-End Digital Surgical Unit)">
                    EXCELL NHP/T (High-End Digital Surgical Unit)
                  </option>
                  <option value="EXCELL MCDSe (Versatile Operating Room Unit)">
                    EXCELL MCDSe (Versatile Operating Room Unit)
                  </option>
                  <option value="ALSATOM SU MPC (Precision Outpatient & Specialized Unit)">
                    ALSATOM SU MPC (Precision Outpatient & Specialized Unit)
                  </option>
                  <option value="Surgical Smoke Evacuators & Certified Accessories">
                    Surgical Smoke Evacuators & Certified Accessories
                  </option>
                </select>
                <ChevronDown className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Row 4: Message / Clinical Requirements */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#334155] font-secondary">
                Message / Clinical Requirements
              </label>
              <textarea
                rows={5}
                placeholder="Please specify requested quantities, special voltages, or clinical accessories..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-[#CBD5E1] rounded-xl p-4 min-[2500px]:p-6 min-[3800px]:p-8 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-y"
              />
            </div>

            {/* Row 5: GDPR Agreement Checkbox */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <input
                type="checkbox"
                id="gdpr"
                required
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)] rounded border-gray-300 focus:ring-[var(--color-primary)] cursor-pointer shrink-0"
              />
              <label
                htmlFor="gdpr"
                className="text-gray-600 font-secondary cursor-pointer"
              >
                I agree to the processing of personal data according to the ALSA Privacy Policy and EU
                GDPR.
              </label>
            </div>

            {/* Row 6: Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-primary font-semibold py-3 px-10 min-[2500px]:py-5 min-[2500px]:px-16 min-[3800px]:py-7 min-[3800px]:px-20 rounded-full shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span className="button">{submitted ? "Request Sent Successfully!" : "Send Official Request"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
