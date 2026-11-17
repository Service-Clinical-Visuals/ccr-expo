"use client";

import React from "react";
import Badge from "./Badge";
import Button from "./Button";
import Typography from "./Typography";

export default function ContactCTA() {
  return (
    <section id="contact-us" className="w-full bg-white py-12 sm:py-16 xl:py-[4.5rem] 2k:py-28 4k:py-40">
      <div className="custom-container flex flex-col items-center text-center gap-3 xl:gap-4 2k:gap-6 4k:gap-8" data-aos="fade-up">
        <Badge text="Contact Us" />
        <Typography variant="h2" color="none" className="text-[var(--color-heading)]">
          Let&apos;s Connect &amp; Support Your Surgical Needs
        </Typography>
        <Typography variant="p" color="muted" className="max-w-[560px] 2k:max-w-[900px] 4k:max-w-[1200px]">
          If you would like more information or have questions, our staff would be happy to assist
          you. Please call or send us an email with either your specialty of interest or specific
          product numbers.
        </Typography>
        <div className="mt-3 2k:mt-6 4k:mt-8">
          <Button text="Contact Us" />
        </div>
      </div>
    </section>
  );
}
