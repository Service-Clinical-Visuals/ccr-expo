"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    area: "",
    areaOfInterest: "",
    subject: "",
    message: "",
    acceptPrivacy: false,
    marketingConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        surname: "",
        email: "",
        telephone: "",
        area: "",
        areaOfInterest: "",
        subject: "",
        message: "",
        acceptPrivacy: false,
        marketingConsent: false,
      });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Header - Deleo xl:max-w-[70%] pattern */}
        <div className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(24,25,26,0.15)] bg-white w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] shrink-0" />
            <span className="text-xs sm:text-sm font-secondary font-normal uppercase text-[#4B5563] tracking-wide">
              CONTACT
            </span>
          </div>

          {/* Title */}
          <Typography
            variant="h2"
            color="dark"
            className="text-xl sm:text-2xl lg:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[56px] font-bold"
          >
            Let’s Start a Conversation
          </Typography>

          {/* Description */}
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]"
          >
            Have questions about our products or solutions? Get in touch with our team for expert
            guidance, product information, and personalized support to find the right solutions for
            your needs.
          </Typography>
        </div>

        {/* Form Card - 70% concept */}
        <div
          className="w-full max-w-[95%] xl:max-w-[70%] mx-auto bg-white border border-[rgba(24,25,26,0.15)] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col gap-1 mb-8">
            <Typography variant="h3" color="dark" className="text-xl sm:text-2xl font-bold font-primary">
              Request information
            </Typography>
            <p className="text-xs sm:text-sm font-secondary text-[#4B5563]">
              Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
            {/* Row 1: Name, Surname, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-7 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#333333] placeholder:text-[#333333]/50 placeholder:font-secondary placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[18px] min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-3xl focus:outline-none focus:border-[#3AA5DD] transition-colors"
              />
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Surname"
                required
                className="w-full px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-7 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#333333] placeholder:text-[#333333]/50 placeholder:font-secondary placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[18px] min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-3xl focus:outline-none focus:border-[#3AA5DD] transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-7 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#333333] placeholder:text-[#333333]/50 placeholder:font-secondary placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[18px] min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-3xl focus:outline-none focus:border-[#3AA5DD] transition-colors"
              />
            </div>

            {/* Row 2: Telephone, Area, Area of interest * */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Telephone"
                className="w-full px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-7 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#333333] placeholder:text-[#333333]/50 placeholder:font-secondary placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[18px] min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-3xl focus:outline-none focus:border-[#3AA5DD] transition-colors"
              />
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Area"
                className="w-full px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-7 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#333333] placeholder:text-[#333333]/50 placeholder:font-secondary placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[18px] min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-3xl focus:outline-none focus:border-[#3AA5DD] transition-colors"
              />
              <input
                type="text"
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
                placeholder="Area of interest *"
                required
                className="w-full px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-7 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#333333] placeholder:text-[#333333]/50 placeholder:font-secondary placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[18px] min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-3xl focus:outline-none focus:border-[#3AA5DD] transition-colors"
              />
            </div>

            {/* Row 3: Subject of the request *, Message */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of the request *"
                required
                className="w-full px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-7 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#333333] placeholder:text-[#333333]/50 placeholder:font-secondary placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[18px] min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-3xl focus:outline-none focus:border-[#3AA5DD] transition-colors"
              />
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-4 py-3 min-[2500px]:px-6 min-[2500px]:py-5 min-[3800px]:px-8 min-[3800px]:py-7 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#333333] placeholder:text-[#333333]/50 placeholder:font-secondary placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[18px] min-[2500px]:placeholder:text-2xl min-[3800px]:placeholder:text-3xl focus:outline-none focus:border-[#3AA5DD] transition-colors"
              />
            </div>

            {/* Row 4: Checkboxes */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2">
              <label className="flex items-center gap-2.5 sm:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 rounded border-gray-400 accent-[#1E1E1E] cursor-pointer shrink-0 transition-transform"
                />
                <span className="text-xs sm:text-sm md:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#4B5563]">
                  I have read and accept the privacy policy .
                </span>
              </label>

              <label className="flex items-center gap-2.5 sm:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 rounded border-gray-400 accent-[#1E1E1E] cursor-pointer shrink-0 transition-transform"
                />
                <span className="text-xs sm:text-sm md:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-secondary text-[#4B5563]">
                  I would like to receive updates and marketing communications.
                </span>
              </label>
            </div>

            {/* Row 5: Submit Action Button on Right */}
            <div className="flex justify-end pt-4">
              <Button text="Sent" variant="pill" iconType="arrow-up-right" />
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-green-50 text-green-800 text-sm font-medium text-center border border-green-200">
                Thank you! Your information request has been submitted successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
