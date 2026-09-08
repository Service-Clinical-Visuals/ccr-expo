"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
      offset: 50,
      delay: 50,
      mirror: true,
    });
    
    // Refresh AOS after a short delay to ensure dynamic content positions are captured
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
