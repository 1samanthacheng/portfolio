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

interface BackToTopProps {
  borderColor?: string;
  hoverBorderColor?: string;
  arrowColor?: string;
  hoverArrowColor?: string;
  bg?: string;
}

export function BackToTop({
  borderColor = "border-primary",
  hoverBorderColor = "hover:border-[#FF5D1F]",
  arrowColor = "text-primary",
  hoverArrowColor = "group-hover:text-[#FF5D1F]",
  bg = "bg-[#FFFDFC]",
}: BackToTopProps) {
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
      className={`group fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded border transition-all duration-200 hover:-translate-y-[3px] ${borderColor} ${hoverBorderColor} ${bg}`}      
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <ArrowUpIcon className={`transition-all duration-200 ${arrowColor} ${hoverArrowColor}`} />
    </button>
  );
}