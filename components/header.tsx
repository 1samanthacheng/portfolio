"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Email, LinkedIn, Resume } from "@/components/icons";

type PageName = "home" | "constituent";
interface Theme {
  text: string;
  burger: string;
  menuBg: string;
  line: string;
}

const themes: Record<PageName, Theme> = {
  home: {
    text: "text-primary",
    burger: "bg-primary",
    menuBg: "bg-[#CED8CE]",
    line: "bg-primary",
  },
  constituent: {
    text: "text-[#0B1D51]",
    burger: "bg-[#0B1D51]",
    menuBg: "bg-[#E0DBDE]",
    line: "bg-[#0B1D51]",
  },
};

export function Header({
  activePage,
  pageName = "home",
}: {
  activePage?: string;
  pageName?: PageName;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = themes[pageName];

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="relative z-50 flex items-center justify-between px-12 md:px-24 lg:px-40 xl:px-52 py-6">
        <Link href="/" className={`flex items-center gap-2 ${theme.text}`}>
          <span className="text-xl font-medium">郑</span>
          <span className="text-xl font-medium">Sam Cheng</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 md:gap-8">
          <div className="hidden items-center gap-6 sm:flex">
            <Link
              href="/#work"
              className={`${theme.text} text-base font-medium underline-offset-4 hover:underline transition-all ${activePage === "work" ? "underline underline-offset-4" : ""}`}
            >
              work
            </Link>
            <Link
              href="/about"
              className={`${theme.text} text-base font-medium underline-offset-4 hover:underline transition-all ${activePage === "about" ? "underline underline-offset-4" : ""}`}
            >
              about
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://drive.google.com/file/d/1LHSMNdxSdx8YOiZg-sMNXgTVcZH7OG57/view?usp=drive_link"
              className={theme.text}
              aria-label="View resume"
            >
              <Resume />
            </Link>
            <Link
              href="https://linkedin.com/in/s-cheng"
              target="_blank"
              rel="noopener noreferrer"
              className={theme.text}
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </Link>
            <Link
              href="mailto:1samanthacheng@gmail.com"
              className={theme.text}
              aria-label="Email"
            >
              <Email />
            </Link>
          </div>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 ${theme.burger} transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 ${theme.burger} transition-all ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 ${theme.burger} transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-dvh px-12 flex flex-col items-start justify-center ${theme.menuBg} md:hidden z-40`}
        >
          <div className="flex flex-col text-4xl gap-12">
            <Link
              href="/#work"
              className={`${theme.text} font-medium underline-offset-4 hover:underline transition-all ${activePage === "work" ? "underline underline-offset-4" : ""}`}
            >
              work
            </Link>
            <Link
              href="/about"
              className={`${theme.text} font-medium underline-offset-4 hover:underline transition-all ${activePage === "about" ? "underline underline-offset-4" : ""}`}
            >
              about
            </Link>
          </div>
          <div className="absolute bottom-48 flex items-center gap-4">
            <Link
              href="https://drive.google.com/file/d/1LHSMNdxSdx8YOiZg-sMNXgTVcZH7OG57/view?usp=drive_link"
              className={theme.text}
              aria-label="View resume"
            >
              <Resume width={36} height={36} />
            </Link>
            <Link
              href="https://linkedin.com/in/s-cheng"
              target="_blank"
              rel="noopener noreferrer"
              className={theme.text}
              aria-label="LinkedIn"
            >
              <LinkedIn width={36} height={36} />
            </Link>
            <Link
              href="mailto:1samanthacheng@gmail.com"
              className={theme.text}
              aria-label="Email"
            >
              <Email width={36} height={36} />
            </Link>
          </div>
        </div>
      )}
      <div className={`relative z-50 h-0.75 w-full ${theme.line}`} />
    </header>
  );
}
