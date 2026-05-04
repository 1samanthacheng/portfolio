"use client";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

function GridIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Header({ activePage }: { activePage?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex items-center justify-between px-12 md:px-24 lg:px-40 xl:px-52 py-6">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <span className="text-xl font-medium">郑</span>
          <span className="text-xl font-medium">Sam Cheng</span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <div className="hidden items-center gap-6 sm:flex">
            <Link
              href="/#work"
              className={`text-primary text-base font-medium ${activePage === "work" ? "underline underline-offset-4" : ""}`}
            >
              work
            </Link>
            <Link
              href="/about"
              className={`text-primary text-base font-medium ${activePage === "about" ? "underline underline-offset-4" : ""}`}
            >
              about
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/#work" className="text-primary" aria-label="View portfolio">
              <GridIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/samanthacheng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:1samanthacheng@gmail.com"
              className="text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </div>
      <div className="h-[3px] w-full bg-primary" />
    </header>
  );
}
