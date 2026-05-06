"use client";

import { useEffect, useRef, useState } from "react";

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 10V2M6 2L2 6M6 2L10 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
  onClick={scrollToTop}
  aria-label="Scroll to top"
  className="group fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded border border-primary bg-[#FFFDFC] transition-all duration-200 md:right-16 lg:right-24 xl:right-32 hover:border-[#FF5D1F]"
  style={{
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? "auto" : "none",
  }}
>
  <ArrowUpIcon className="text-primary transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:text-[#FF5D1F]" />
</button>
  );
}
