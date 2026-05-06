"use client";

import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="px-12 md:px-24 lg:px-40 xl:px-52">
      {/* Top Divider */}
      <div className="h-[3px] bg-primary" />

      {/* Content */}
      <div className="flex items-center justify-between py-8">
        {/* Left Links */}
        <nav className="flex items-center gap-1 text-base font-medium text-primary">
          <a href="mailto:1samanthacheng@gmail.com" className="hover:underline">
            email
          </a>
          <span className="text-primary">•</span>
          <Link href="https://drive.google.com/file/d/1LHSMNdxSdx8YOiZg-sMNXgTVcZH7OG57/view?usp=drive_link" className="hover:underline">
            resume
          </Link>
          <span className="text-primary">•</span>
          <a
            href="https://linkedin.com/in/samanthacheng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin
          </a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-6">
          <span className="text-base font-medium text-primary">© Sam Cheng, 2026</span>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-8 w-8 items-center justify-center text-foreground"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
