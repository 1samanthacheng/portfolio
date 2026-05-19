"use client";

import Link from "next/link";
import Image from "next/image";
import { Grid3x3 as Grid3X3, Linkedin, Mail } from "lucide-react";
import React, { useState } from "react";
import { BackToTop } from "@/components/back-to-top";
import { Header } from "@/components/header";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "ideation", label: "Ideation" },
  { id: "design", label: "Design" },
  { id: "reflections", label: "Reflections" },
];

function CaseStudyNav() {
  const [activeId, setActiveId] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    // Show nav once overview is reached
    const overviewEl = document.getElementById("overview");
    if (overviewEl) {
      const visibilityObserver = new IntersectionObserver(
        ([entry]) =>
          setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0),
        { threshold: 0 },
      );
      visibilityObserver.observe(overviewEl);
      observers.push(visibilityObserver);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col items-start gap-0.5 transition-opacity duration-500 lg:flex"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={() => setHoveredId(null)}
          className="flex items-center gap-3 group"
          aria-label={`Jump to ${label}`}
        >
          {/* Line */}
          <div
            className="rounded-full transition-all duration-200"
            style={{
              height: "2px",
              width:
                activeId === id ? "48px" : hoveredId === id ? "40px" : "32px",
              backgroundColor: activeId === id ? "#0B1D51" : "#A1869E",
              opacity: activeId === id ? 1 : 0.5,
            }}
          />
          {/* Label — appears on hover, now on the right */}
          <span
            className="text-xs font-medium tracking-widest uppercase transition-all duration-200"
            style={{
              color: "#0B1D51",
              opacity: hoveredId === id ? 1 : 0,
              transform:
                hoveredId === id ? "translateX(0)" : "translateX(-4px)",
            }}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}

const quotes = [
  {
    quote:
      "It's demotivating that the information is not easily findable and that it's not all in one place. It takes a lot of time and effort to get an understanding of your reps.",
    attribution: "— Survey response",
  },
  {
    quote:
      "I want transparent, non-biased information but it's hard to find a neutral overview that's not Wikipedia.",
    attribution: "— Survey response",
  },
  {
    quote:
      "The websites I used felt really outdated. When something looks confusing or old, I'm already less confident that I'm doing the right thing.",
    attribution: "— User interview participant",
  },
  {
    quote:
      "Does reaching out to elected officials even matter? I want to feel like my engagement is actually doing something, not just shouting into the void.",
    attribution: "— User interview participant",
  },
];

function QuoteCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  };

  const prev = () =>
    goTo(current === 0 ? quotes.length - 1 : current - 1, "left");
  const next = () =>
    goTo(current === quotes.length - 1 ? 0 : current + 1, "right");

  return (
    <div className="space-y-4">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#FFFDFC",
          border: "1px solid #2B2B2B",
          borderRadius: "32px",
          minHeight: "200px",
        }}
      >
        <div
          key={current}
          className="p-8"
          style={{
            animation: `${animating ? "" : direction === "right" ? "slideInFromRight" : "slideInFromLeft"} 0.3s ease forwards`,
          }}
        >
          <Image
            src="images/quotation-mark.svg"
            alt=""
            width={22}
            height={17}
            className="mb-6"
          />
          <p
            className="text-base font-semibold leading-relaxed mb-4"
            style={{ color: "#2B2B2B" }}
          >
            {quotes[current].quote}
          </p>
          <p className="text-sm" style={{ color: "#727272" }}>
            {quotes[current].attribution}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          aria-label="Previous"
          className="p-2 transition-colors"
          style={{ color: "#0B1D51", cursor: "pointer" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#726E8C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#0B1D51")}
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              aria-label={`Go to quote ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "10px" : "8px",
                height: i === current ? "10px" : "8px",
                backgroundColor: i === current ? "#0B1D51" : "#D4D1CC",
                cursor: "pointer",
                border: "none",
                padding: 0,
              }}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="p-2 hover:opacity-60 transition-opacity"
          style={{ color: "#2B2B2B", cursor: "pointer" }}
        >
          →
        </button>
      </div>
    </div>
  );
}

const visualDesignSections = [
  {
    id: "visual-approach",
    heading: (
      <>
        Visual design{" "}
        <span className="font-serif italic font-normal">approach</span>
      </>
    ),
    body: "I wanted to balance civic professionalism with approachability, creating an interface that feels trustworthy without being intimidating. The visual language needed to communicate nonpartisan reliability while remaining modern and accessible to digital-native users.",
    visual: (
      <div className="w-full max-w-[280px] mx-auto md:max-w-[320px]">
        <Image
          src="/images/home-screen.png"
          alt="Constituent app home screen"
          width={400}
          height={800}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    id: "color-palette",
    heading: (
      <>
        Color <span className="font-serif italic font-normal">palette</span>
      </>
    ),
    body: "Deep navy anchors the design with classic civic trustworthiness, while light purple and soft neutral hues add warmth, in addition to distinguishing the app from typical government blue. Purple was also intentionally chosen for its association with nonpartisanship.",
    visual: (
      <div className="space-y-3">
        <p className="text-sm" style={{ color: "#727272", fontWeight: 500 }}>
          Brand Colors
        </p>
        <div className="grid grid-cols-3 gap-3">
          {/* Deep Navy — tall */}
          <div
            className="row-span-2 rounded-2xl flex flex-col justify-end p-4 min-h-[220px]"
            style={{ backgroundColor: "#0B1D51", border: "1px solid #2B2B2B" }}
          >
            <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
              Deep Navy
            </p>
            <p className="text-xs" style={{ color: "#FFFFFF" }}>
              #0B1D51
            </p>
          </div>
          {/* Lavender Grey */}
          <div
            className="rounded-2xl flex flex-col justify-end p-4 min-h-[100px]"
            style={{ backgroundColor: "#797596", border: "1px solid #2B2B2B" }}
          >
            <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
              Lavender Grey
            </p>
            <p className="text-xs" style={{ color: "#FFFFFF" }}>
              #797596
            </p>
          </div>
          {/* Mauve */}
          <div
            className="rounded-2xl flex flex-col justify-end p-4 min-h-[100px]"
            style={{ backgroundColor: "#A1869E", border: "1px solid #2B2B2B" }}
          >
            <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
              Mauve
            </p>
            <p className="text-xs" style={{ color: "#FFFFFF" }}>
              #A1869E
            </p>
          </div>
          {/* Warm Taupe */}
          <div
            className="rounded-2xl flex flex-col justify-end p-4 min-h-[100px]"
            style={{ backgroundColor: "#BBADA0", border: "1px solid #2B2B2B" }}
          >
            <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
              Warm Taupe
            </p>
            <p className="text-xs" style={{ color: "#FFFFFF" }}>
              #BBADA0
            </p>
          </div>
          {/* Cream */}
          <div
            className="rounded-2xl flex flex-col justify-end p-4 min-h-[100px]"
            style={{ backgroundColor: "#D1C6AD", border: "1px solid #2B2B2B" }}
          >
            <p className="text-sm font-medium" style={{ color: "#FFFFFF" }}>
              Cream
            </p>
            <p className="text-xs" style={{ color: "#FFFFFF" }}>
              #D1C6AD
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "typography",
    heading: (
      <>
        Typography <span className="font-serif italic font-normal">styles</span>
      </>
    ),
    body: "I chose Epilogue for headings because it carries quiet authority — geometric and minimal, but with just enough personality to feel distinct from the sterile sans-serifs common in government design. I paired it with DM Sans for body text, which prioritizes clarity and legibility while maintaining a polished, modern look.",
    visual: (
      <div className="flex justify-center">
        <Image
          src="/images/typography-screen.png"
          alt="Typography styles showing DM Sans and Epilogue used in the Constituent app"
          width={600}
          height={700}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  {
    id: "design-system",
    heading: (
      <>
        Design system{" "}
        <span className="font-serif italic font-normal">and components</span>
      </>
    ),
    body: "I established rules for color application, typography, hierarchy, spacing (based on a soft 8px grid), and component behavior. This systematic approach creates a unified experience while ensuring the design remains scalable and maintainable.",
    visual: (
      <Image
        src="/images/design-system.svg"
        alt="Constituent design system components including list items, badges, chips, and navigation bar states"
        width={600}
        height={800}
        className="w-full h-auto"
      />
    ),
  },
];

function VisualDesignScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = visualDesignSections.map(() =>
    React.createRef<HTMLDivElement>(),
  );

  React.useEffect(() => {
    const observers = sectionRefs.map((ref, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.7, rootMargin: "-10% 0px -20% 0px" },
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Mobile: stacked layout */}
      <div className="md:hidden space-y-16">
        {visualDesignSections.map((section) => (
          <div key={section.id} className="space-y-6">
            <div className="space-y-4">
              <h2
                className="text-2xl leading-tight font-semibold"
                style={{ color: "#2B2B2B" }}
              >
                {section.heading}
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                {section.body}
              </p>
            </div>
            <div className="flex justify-center">{section.visual}</div>
          </div>
        ))}
      </div>

      {/* Desktop: sticky scroll layout */}
      <div className="hidden md:grid grid-cols-2 gap-16 relative">
        {/* Left: sticky text */}
        <div className="sticky top-0 self-start h-screen flex flex-col justify-center space-y-4">
          <h2
            className="text-2xl md:text-3xl font-semibold leading-tight transition-all duration-300"
            style={{ color: "#2B2B2B" }}
          >
            {visualDesignSections[activeIndex].heading}
          </h2>
          <p
            className="text-base font-medium leading-relaxed transition-all duration-300"
            style={{ color: "#2B2B2B" }}
          >
            {visualDesignSections[activeIndex].body}
          </p>
        </div>
        {/* Right: scrolling visuals */}
        <div className="space-y-32 pt-32">
          {visualDesignSections.map((section, i) => (
            <div
              key={section.id}
              ref={sectionRefs[i]}
              className="flex justify-center"
            >
              {section.visual}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function ConstituentPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F8F6F2" }}
    >
      <CaseStudyNav />
      {/* rest of page */}
      <Header pageName="constituent" />

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-screen lg:min-h-0 overflow-hidden">
        {/* Left Column */}
        <div
          className="px-12 md:px-24 lg:px-40 xl:px-52 py-12 flex flex-col justify-center overflow-y-auto"
          style={{ backgroundColor: "#F8F6F2" }}
        >
          <div className="space-y-8 w-full lg:-mt-8">
            <div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-3"
                style={{ color: "#0B1D51" }}
              >
                Constituent
              </h1>
              <p
                className="text-base md:text-lg font-medium"
                style={{ color: "#2B2B2B" }}
              >
                Know your reps. Make your voice heard.
              </p>
            </div>

            <div className="w-16 h-16">
              <Image
                src="/app icon.png"
                alt="Constituent App Icon"
                width={64}
                height={64}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-0">
              {[
                { label: "Type", value: "Passion Project" },
                { label: "Timeline", value: "2025–Present" },
                { label: "Role", value: "Product Designer + UX Researcher" },
                { label: "Platform", value: "iOS" },
                { label: "Tools", value: "Figma, Claude, Pen + Paper" },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  className={`py-4 grid grid-cols-2 ${i < arr.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "#E0DBDE" }}
                >
                  <p className="text-base" style={{ color: "#727272" }}>
                    {item.label}
                  </p>
                  <p
                    className="text-base font-medium"
                    style={{ color: "#2B2B2B" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <a
                href="https://www.figma.com/proto/4S5A1vuaOJpVHWwKcuAklj/-external--Constituent?node-id=1-1769&t=WdJA5izv6TmLpGG2-1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0B1D51", color: "white" }}
              >
                View prototype <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="px-12 md:px-24 lg:px-20 xl:px-32 py-12 flex items-center justify-center h-full"
          style={{ backgroundColor: "#E0DBDE" }}
        >
          <div className="w-full max-w-xs lg:max-w-sm max-h-[75vh] flex items-center justify-center">
            <video
              src="/images/hero-onboarding.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-auto h-full max-h-[75vh] object-contain rounded-[40px]"
            />
          </div>
        </div>
      </section>

      {/* 3px Divider */}
      <div style={{ height: "3px", backgroundColor: "#0B1D51" }} />

      {/* Overview Section */}
      <section
        id="overview"
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span
              className="inline-block rounded-full px-5 py-2 text-base font-medium"
              style={{ border: "2px solid #A1869E", color: "#0B1D51" }}
            >
              Overview
            </span>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  Building a{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  civic tool{" "}
                </span>
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  that{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  empowers everyone{" "}
                </span>
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  to{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  participate in democracy.
                </span>
              </h2>
              <div
                className="space-y-4 text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                <p>
                  Constituent is a mobile-first civic tech app that allows users
                  to identify and contact their elected representatives at all
                  levels of government and all in one place. Its namesake serves
                  as a reminder that elected officials work for <em>us</em>, and
                  we all play a part in making sure they remain accountable for
                  their actions.
                </p>
                <p>
                  As a self-initiated project, I led every phase of the design
                  process, from research and problem definition through
                  prototyping and developer handoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screens */}
      <section
        className="px-12 md:px-24 lg:px-40 xl:px-52 pb-16 pt-2"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="flex items-center justify-center">
          <Image
            src="images/constituent-thumbnail.png"
            alt="Constituent app screens"
            width={1200}
            height={800}
            className="w-full h-auto rounded-[32px] border"
            style={{ borderColor: "#2B2B2B" }}
          />
        </div>
      </section>

      {/* Problem Section */}
      <section
        id="problem"
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span
              className="inline-block rounded-full px-5 py-2 text-base font-medium"
              style={{ border: "2px solid #A1869E", color: "#0B1D51" }}
            >
              Problem
            </span>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  Civic engagement{" "}
                </span>
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  is{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  harder{" "}
                </span>
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  than it should be.
                </span>
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                For people who want to make their voices heard, it can be
                difficult to know where to start. Existing civic tools
                (especially government websites) are often clunky and
                fragmented, making it hard for people to find clear information,
                contact their representatives, or keep up with issues that
                matter to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape Carousel */}
      <section className="pt-0 pb-16" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="relative">
          <div
            className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, transparent, #F8F6F2)",
            }}
          />
          <div
            className="flex gap-6 overflow-x-auto pb-6 px-12 md:px-24 lg:px-40 xl:px-52"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {["one", "two", "three", "four", "five", "six", "seven"].map(
              (name) => (
                <div
                  key={name}
                  className="shrink-0 w-[420px] h-[280px] rounded-[32px] overflow-hidden"
                  style={{ border: "1px solid #2B2B2B" }}
                >
                  <Image
                    src={`images/competitor-${name}.png`}
                    alt={`Competitor ${name} screenshot`}
                    width={420}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
              ),
            )}
          </div>
        </div>
        <div className="px-12 md:px-24 lg:px-40 xl:px-52 mt-3">
          <p
            className="text-center text-sm leading-relaxed"
            style={{ color: "#727272" }}
          >
            The current landscape for finding info on elected officials is
            fragmented by design-level, device, and use case, leaving everyday
            people to stitch together their own process across multiple sites
            and platforms.
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section
        id="research"
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span
              className="inline-block rounded-full px-5 py-2 text-base font-medium"
              style={{ border: "2px solid #A1869E", color: "#0B1D51" }}
            >
              Research
            </span>
          </div>
          <div className="space-y-10">
            {/* Heading + intro — grouped tightly */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  What are some of the{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  main barriers{" "}
                </span>
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  to{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  civic participation?
                </span>
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Through a survey (50+ respondents), 5 user interviews, and
                competitive analysis of 7 tools, I explored how people across
                different levels of civic engagement currently find information
                about their elected officials—and why the process often stops
                them from taking action.
              </p>
            </div>
            <QuoteCarousel />

            {/* Insights intro + card */}
            <div className="space-y-4">
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                From the research, four key insights emerged:
              </p>
              <div
                className="p-8 space-y-6"
                style={{
                  backgroundColor: "#FFFDFC",
                  border: "1px solid #2B2B2B",
                  borderRadius: "32px",
                }}
              >
                {[
                  {
                    title: "Scattered Information:",
                    body: " Users have to visit multiple websites to find basic information about their representatives, making a simple task unnecessarily time-consuming.",
                  },
                  {
                    title: "Unreliable Sources",
                    body: ": People struggle to determine which websites provide trustworthy, nonpartisan, and up-to-date information about elected officials.",
                  },
                  {
                    title: "Outdated Government Sites",
                    body: ": Official government websites are cluttered, slow, and difficult to navigate (especially on mobile devices where most people search).",
                  },
                  {
                    title: "Lack of Feedback",
                    body: ": People question whether their outreach actually matters, with no confirmation or sense of collective impact which makes it easy to give up after the first try.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 w-6 h-6 flex items-center justify-center">
                      <Image
                        src="images/star.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-base font-medium leading-relaxed">
                      <span
                        className="font-semibold"
                        style={{ color: "#0B1D51" }}
                      >
                        {item.title}
                      </span>
                      <span style={{ color: "#2B2B2B" }}>{item.body}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Centering user needs subsection */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  Centering{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  user needs
                </span>
              </h3>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                With a clearer picture of the problem space, I created personas
                and{" "}
                <a
                  href="https://www.figma.com/board/NaqFdbLpNTNUmjm1H8K8zW/-external--Constituent?node-id=1-380&t=HWDhqa1QM3lYtEyI-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-70"
                  style={{ color: "#0B1D51" }}
                >
                  journey maps
                </a>{" "}
                to translate these research findings into a human story,
                revealing distinct user needs and pain points. Amal Greene
                became my primary anchor: someone who wants to be more civically
                engaged but doesn't know where to start or whether her voice
                will land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Section */}
      <section
        className="px-12 md:px-24 lg:px-40 xl:px-52 pt-0 pb-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div
          className="overflow-hidden"
          style={{ border: "1px solid #2B2B2B", borderRadius: "32px" }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-8 p-8"
            style={{
              borderBottom: "1px solid #2B2B2B",
              backgroundColor: "#EDE9ED",
            }}
          >
            <div className="w-48 h-48 shrink-0 rounded-xl overflow-hidden">
              <Image
                src="/images/amal.png"
                alt="Amal Greene headshot"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#2B2B2B" }}
              >
                Amal Greene
              </h3>
              <p
                className="text-base font-semibold italic leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                "I care about what's happening — I just wish it were easier to
                turn that care into action. I don't always know where to start."
              </p>
              <ul className="space-y-1 text-base" style={{ color: "#2B2B2B" }}>
                {[
                  { label: "Age", value: "29" },
                  { label: "Location", value: "Queens, NY" },
                  {
                    label: "Occupation",
                    value: "Operations associate at a retail company",
                  },
                  { label: "Education", value: "Bachelor's degree" },
                  {
                    label: "Tech proficiency",
                    value: "High (smartphone native)",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold">• {item.label}:</span>{" "}
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p
                className="text-base font-semibold"
                style={{ color: "#2B2B2B" }}
              >
                Bio
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Amal juggles a full life in Queens — balancing time with
                friends, taking care of herself, and keeping up with a demanding
                job. Living with a chronic illness has made her especially aware
                of how policy decisions shape everyday life. Amal cares deeply
                about healthcare and environmental issues and wants to be more
                civically engaged, but often struggles to find clear, accessible
                ways to take action.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8"
            style={{ backgroundColor: "#EDE9ED" }}
          >
            {[
              {
                title: "Goals",
                items: [
                  "Understand who represents her at all levels of government.",
                  "Stay informed about policy decisions related to healthcare and environment.",
                  "Take meaningful action when issues she cares about are at stake.",
                  "Feel like an engaged citizen without it consuming all her time.",
                ],
              },
              {
                title: "Pain Points",
                items: [
                  "Feels overwhelmed by the amount of information scattered across the internet.",
                  "Finds it hard to know if the information she finds is reliable.",
                  "Has limited time and energy to research issues in depth due to work and health management.",
                  "Unsure which representative to contact about specific issues.",
                ],
              },
              {
                title: "Motivations",
                items: [
                  "Wants to be an informed resident and engage beyond just voting.",
                  "Feels urgency around issues that directly impact her life.",
                  "Values efficiency and will engage more if the process is simplified and streamlined.",
                  "Wants to feel that her voice and action will make a difference.",
                ],
              },
            ].map((col) => (
              <div key={col.title} className="space-y-3">
                <p
                  className="text-base font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  {col.title}
                </p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-base leading-relaxed flex items-start gap-2"
                      style={{ color: "#2B2B2B" }}
                    >
                      <span className="mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Define Section */}
      <section
        id="define"
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span
              className="inline-block rounded-full px-5 py-2 text-base font-medium"
              style={{ border: "2px solid #A1869E", color: "#0B1D51" }}
            >
              Define
            </span>
          </div>
          <div className="space-y-10">
            {/* Heading + intro + first blockquote — all one thought */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  Narrowing the{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  focus
                </span>
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Next, I needed to distill everything I learned into a single,
                honest articulation of the problem — one I could keep returning
                to as a gut-check throughout the design work. Grounding this in
                Amal's story kept the process honest:
              </p>
              <blockquote
                className="pl-5 py-1 text-base font-semibold leading-relaxed"
                style={{ borderLeft: "4px solid #726E8C", color: "#2B2B2B" }}
              >
                Amal is an eager community member who needs to find relevant
                information on government policies and representatives, because
                she wants to stay informed and act on issues that affect her
                daily life.
              </blockquote>
            </div>

            {/* Transition paragraph + second blockquote — one thought */}
            <div className="space-y-4">
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                With the problem defined, I could articulate what a successful
                solution would actually need to deliver. The goal statement:
              </p>
              <blockquote
                className="pl-5 py-1 text-base font-semibold leading-relaxed"
                style={{ borderLeft: "4px solid #726E8C", color: "#2B2B2B" }}
              >
                The platform will allow users to stay engaged with issues they
                care about by consolidating the process of looking up and
                contacting elected officials into one organized, approachable
                experience. I will measure effectiveness through task completion
                rates and user satisfaction in usability testing.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Ideation Section */}
      <section
        id="ideation"
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span
              className="inline-block rounded-full px-5 py-2 text-base font-medium"
              style={{ border: "2px solid #A1869E", color: "#0B1D51" }}
            >
              Ideation
            </span>
          </div>

          <div className="space-y-10">
            {/* Heading + intro + HMW blockquote — all one thought */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  Project{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  scoping
                </span>
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                To inform my early ideation process, I started with a HMW
                statement:
              </p>
              <blockquote
                className="pl-5 py-1 text-base font-semibold leading-relaxed"
                style={{ borderLeft: "4px solid #726E8C", color: "#2B2B2B" }}
              >
                How might we simplify how people discover information about
                their elected officials?
              </blockquote>
            </div>

            {/* Target audience paragraph */}
            <p
              className="text-base font-medium leading-relaxed"
              style={{ color: "#2B2B2B" }}
            >
              Keeping Amal in mind, I then began zeroing in on the product's
              core features and target audience. I chose to design for the users
              who showed up most in my research: people who are somewhat to
              moderately civically engaged and also eager to do more.
            </p>

            {/* Donut chart + caption */}
            <div className="space-y-3">
              <div
                className="p-8 space-y-6"
                style={{
                  backgroundColor: "#FFFDFC",
                  border: "1px solid #2B2B2B",
                  borderRadius: "16px",
                }}
              >
                <p
                  className="text-base font-medium"
                  style={{ color: "#2B2B2B" }}
                >
                  How would you describe your level of civic engagement?
                </p>
                <Image
                  src="images/survey-chart.svg"
                  alt="Donut chart: responses to 'How would you describe your level of civic engagement?' Very engaged 26.9%, Moderately engaged 36.5%, Somewhat engaged 26.9%, Not very engaged 9.6%"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p
                className="text-sm text-center leading-relaxed"
                style={{ color: "#727272" }}
              >
                Over 63% of people surveyed consider themselves somewhat to
                moderately engaged in civic activities, revealing a clear
                majority to design for.
              </p>
            </div>

            {/* MVP intro + card */}
            <div className="space-y-4">
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Three MVP features emerged from their needs:
              </p>
              <div
                className="p-8 space-y-6"
                style={{
                  backgroundColor: "#FFFDFC",
                  border: "1px solid #2B2B2B",
                  borderRadius: "32px",
                }}
              >
                {[
                  {
                    title: "Representative lookup:",
                    body: " Enter your address once and see all your elected officials across federal, state, and local levels in one place.",
                  },
                  {
                    title: "Rep profile overviews:",
                    body: " Browse basic information about each representative (biography, committee assignments, recent activity, etc.)",
                  },
                  {
                    title: "Multi-rep contact flow:",
                    body: " Reach out to one or multiple representatives at once, with the option to write your own message or start from a template.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 w-6 h-6 flex items-center justify-center">
                      <Image
                        src="images/star.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-base font-medium leading-relaxed">
                      <span
                        className="font-semibold"
                        style={{ color: "#0B1D51" }}
                      >
                        {item.title}
                      </span>
                      <span style={{ color: "#2B2B2B" }}>{item.body}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scoping note */}
            <p
              className="text-base font-medium leading-relaxed"
              style={{ color: "#2B2B2B" }}
            >
              I kept the MVP focused on these three features deliberately.
              Features like bill tracking, notifications, issue-based filtering,
              and impact stats are all on the roadmap, but scoping them out of
              v1 meant the core experience could be built, tested, and validated
              first.
            </p>

            {/* IA subsection — pt-6 signals new chapter, same as "Centering user needs" in Research */}
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  Information{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  architecture
                </span>
              </h3>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Before diving into any design work, I created a{" "}
                <a
                  href="https://www.figma.com/board/NaqFdbLpNTNUmjm1H8K8zW/-external--Constituent?node-id=1-443&t=Jfc3mqSCy6ExKAPJ-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-70"
                  style={{ color: "#0B1D51" }}
                >
                  sitemap
                </a>{" "}
                to establish the app's underlying structure. Navigation is
                focused around the two actions that matter most in v1: finding
                your representatives and contacting them. From there, I mapped
                out the key user journey, accounting for the choices a user
                might face and defining a clear happy path.
              </p>
            </div>

            {/* User flow image + caption */}
            <div className="space-y-3">
              <div
                className="p-16 overflow-hidden"
                style={{
                  backgroundColor: "#FFFDFC",
                  border: "1px solid #2B2B2B",
                  borderRadius: "16px",
                }}
              >
                <Image
                  src="/images/user-flow.png"
                  alt="Constituent user flow diagram"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section
        id="design"
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span
              className="inline-block rounded-full px-5 py-2 text-base font-medium"
              style={{ border: "2px solid #A1869E", color: "#0B1D51" }}
            >
              Design
            </span>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl leading-tight">
              <span className="font-serif italic" style={{ color: "#2B2B2B" }}>
                Drafting{" "}
              </span>
              <span
                className="font-sans font-semibold"
                style={{ color: "#2B2B2B" }}
              >
                wireframes
              </span>
            </h2>
            <p
              className="text-base font-medium leading-relaxed"
              style={{ color: "#2B2B2B" }}
            >
              I started with paper sketches to explore potential layouts before
              combining the best elements from each into digital lo-fi
              wireframes. These wireframes helped identify potential usability
              issues early and establish a strong foundation for the visual
              design.
            </p>
          </div>
        </div>
      </section>

      {/* Sketches Carousel + caption */}
      <section className="pt-0 pb-16" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="relative">
          <div
            className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, transparent, #F8F6F2)",
            }}
          />
          <div
            className="flex gap-6 overflow-x-auto pb-6 px-12 md:px-24 lg:px-40 xl:px-52"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="shrink-0 w-56 h-72 rounded-[32px] overflow-hidden"
                style={{ border: "1px solid #2B2B2B" }}
              >
                <Image
                  src={`/images/paper-wireframe-${i}.jpeg`}
                  alt={`Paper wireframe sketch ${i}`}
                  width={224}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <p
          className="text-center text-sm mt-3 px-12 md:px-24 lg:px-40 xl:px-52"
          style={{ color: "#727272" }}
        >
          Early sketches exploring layout options for the core screens.
        </p>
      </section>

      {/* Wireframes Carousel + caption */}
      <section className="pt-0 pb-16" style={{ backgroundColor: "#F8F6F2" }}>
        <div className="relative">
          <div
            className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, transparent, #F8F6F2)",
            }}
          />
          <div
            className="flex gap-6 overflow-x-auto pb-6 px-12 md:px-24 lg:px-40 xl:px-52"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="shrink-0">
                <Image
                  src={`/images/digital-wireframe-${i}.png`}
                  alt={`Digital wireframe ${i}`}
                  width={192}
                  height={384}
                  className="rounded-[32px] h-auto"
                  style={{ border: "1px solid #2B2B2B" }}
                />
              </div>
            ))}
          </div>
        </div>
        <p
          className="text-center text-sm mt-3 px-12 md:px-24 lg:px-40 xl:px-52"
          style={{ color: "#727272" }}
        >
          Lo-fi wireframes translating the best sketch ideas into a testable
          structure.
        </p>
      </section>

      {/* Final Designs */}
      <section
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div />
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  Final{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  designs
                </span>
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                After validating the structure through wireframes, I moved into
                high-fidelity design, studying successful UI patterns in
                directory and contact flows (Dribbble and Mobbin were especially
                useful resources) and developing a basic design system to apply
                to the screens.
              </p>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Here's a breakdown of Constituent's key features and visual
                design system:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rep Directory + Profiles */}
      <section
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl leading-tight">
              <span className="font-serif italic" style={{ color: "#2B2B2B" }}>
                Rep directory +{" "}
              </span>
              <span
                className="font-sans font-semibold"
                style={{ color: "#2B2B2B" }}
              >
                profiles
              </span>
            </h3>
            <p
              className="text-base font-medium leading-relaxed"
              style={{ color: "#2B2B2B" }}
            >
              Users can view all of their elected officials in one place. Each
              rep profile surfaces the information people actually look for,
              like biography and recent legislative activity. From the profile,
              users can contact their representative directly through the in-app
              form, or find alternative contact methods like phone numbers and
              mailing addresses.
            </p>
            <p
              className="text-base font-medium leading-relaxed"
              style={{ color: "#2B2B2B" }}
            >
              The goal was to prioritize the most sought-after information
              without overwhelming users who are just getting started.
            </p>
            <a
              href="https://www.figma.com/proto/4S5A1vuaOJpVHWwKcuAklj/-external--Constituent?node-id=1-1769&t=WdJA5izv6TmLpGG2-1"
              className="inline-flex items-center gap-2 font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
              style={{ color: "#0B1D51" }}
            >
              View prototype →
            </a>
          </div>
          {/* Right: video */}
          <div className="flex justify-center">
            <video
              src="/images/reps.mov"
              autoPlay
              loop
              muted
              playsInline
              width={256}
              className="rounded-[40px]"
            />
          </div>
        </div>
      </section>

      {/* Multi-rep contact flow */}
      <section
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="space-y-10">
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl leading-tight text-center">
            <span className="font-serif italic" style={{ color: "#2B2B2B" }}>
              Multi-rep{" "}
            </span>
            <span
              className="font-sans font-semibold"
              style={{ color: "#2B2B2B" }}
            >
              contact flow
            </span>
          </h3>

          {/* Screens + captions */}
          <div className="space-y-3">
            {/* Image row + arrows */}
            <div className="flex items-center justify-between gap-2">
              {[
                {
                  src: "/images/contact-screen-1.png",
                  caption: "Select which representative(s) to contact",
                },
                {
                  src: "/images/contact-screen-2.png",
                  caption: "Choose a template",
                },
                {
                  src: "/images/contact-screen-3.png",
                  caption: "Customize your message",
                },
                {
                  src: "/images/contact-screen-4.png",
                  caption: "Send message",
                },
              ].map((screen, i, arr) => (
                <>
                  <div key={screen.src} className="flex-1">
                    <Image
                      src={screen.src}
                      alt={screen.caption}
                      width={240}
                      height={480}
                      className="rounded-[32px] w-full h-auto"
                    />
                  </div>
                  {i < arr.length - 1 && (
                    <div key={`arrow-${i}`} className="shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="#0B1D51"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </>
              ))}
            </div>

            {/* Caption row */}
            <div className="flex justify-between gap-2">
              {[
                "Select which representative(s) to contact",
                "Choose a template",
                "Customize your message",
                "Send message",
              ].map((caption) => (
                <p
                  key={caption}
                  className="flex-1 text-sm text-center max-w-[240px] mx-auto"
                  style={{ color: "#727272" }}
                >
                  {caption}
                </p>
              ))}
            </div>
          </div>

          {/* Description */}
          <p
            className="text-base font-medium text-center leading-relaxed"
            style={{ color: "#2B2B2B" }}
          >
            The primary flow is where Constituent's core value plays out. Users
            can contact multiple representatives at once and choose from message
            templates if they need help framing their outreach. The multi-rep
            capability was a deliberate design choice: one of the biggest
            friction points in the current landscape is having to repeat this
            process from scratch for each official.
          </p>
        </div>
      </section>

      {/* Visual Design Sticky Scroll */}
      <section
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <VisualDesignScroll />
      </section>

      {/* Accessibility */}
      <section
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div />
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  Accessibility{" "}
                </span>
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  considerations
                </span>
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Equity and inclusion is central to my design philosophy, so I
                made sure that accessibility featured into my design decisions
                early on, not just after the fact:
              </p>
              <div
                className="p-8 space-y-6"
                style={{
                  backgroundColor: "#FFFDFC",
                  border: "1px solid #2B2B2B",
                  borderRadius: "32px",
                }}
              >
                {[
                  {
                    title: "High Contrast:",
                    body: "Text color combinations meet or exceed WCAG AA accessibility standards, ensuring legibility for users with visual impairments.",
                  },
                  {
                    title: "Accessible Touch Targets:",
                    body: "Interactive elements are 44x44px minimum with adequate spacing, supporting users with motor impairments or limited dexterity.",
                  },
                  {
                    title: "Clear Structure:",
                    body: "Consistent layouts and descriptive labels create predictable patterns that reduce cognitive load and support screen reader users.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1 w-6 h-6 flex items-center justify-center">
                      <Image
                        src="images/star.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-base font-medium leading-relaxed">
                      <span
                        className="font-semibold"
                        style={{ color: "#0B1D51" }}
                      >
                        {item.title}
                      </span>{" "}
                      <span style={{ color: "#2B2B2B" }}>{item.body}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section
        id="reflections"
        className="px-12 md:px-24 lg:px-40 xl:px-52 py-16"
        style={{ backgroundColor: "#F8F6F2" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span
              className="inline-block rounded-full px-5 py-2 text-base font-medium"
              style={{ border: "2px solid #A1869E", color: "#0B1D51" }}
            >
              Reflections
            </span>
          </div>
          <div className="space-y-10">
            {/* Next steps */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  Next{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  steps
                </span>
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Constituent is currently in development with an engineering
                partner. At the same time, I'm running a usability study on the
                primary contact flow, with plans to iterate on the designs as
                findings come in.
              </p>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Immediate next steps include incorporating study results,
                designing additional flows and screens (bill summaries, outreach
                impact stats, etc.), and continuing to seek feedback from other
                designers along the way.
              </p>
            </div>

            {/* Key takeaways */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl leading-tight">
                <span
                  className="font-serif italic"
                  style={{ color: "#2B2B2B" }}
                >
                  Key{" "}
                </span>
                <span
                  className="font-sans font-semibold"
                  style={{ color: "#2B2B2B" }}
                >
                  takeaways
                </span>
              </h2>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                Working on this project truly helped me grow my skills as a
                designer and researcher. I learned the importance of defining a
                clear MVP, seeking feedback often, and investing early in a
                design system — all of which helped in keeping the work focused,
                efficient, and user-centered.
              </p>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#2B2B2B" }}
              >
                More than anything, Constituent deepened my interest in the
                world of civic tech. My biggest takeaway from this project is
                the reminder that (good) design is one of the most powerful
                tools we can leverage to make democracy more inclusive and
                strengthen civic (people) power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ borderTop: "3px solid #0B1D51", backgroundColor: "#F8F6F2" }}
      >
        <div className="px-12 md:px-24 lg:px-40 xl:px-52 py-8 flex items-center justify-between">
          <nav
            className="flex items-center gap-1 text-base font-medium"
            style={{ color: "#0B1D51" }}
          >
            <a
              href="mailto:1samanthacheng@gmail.com"
              className="hover:underline"
            >
              email
            </a>
            <span>•</span>
            <Link
              href="https://drive.google.com/file/d/1LHSMNdxSdx8YOiZg-sMNXgTVcZH7OG57/view?usp=drive_link"
              className="hover:underline"
            >
              resume
            </Link>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/s-cheng/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin
            </a>
          </nav>
          <div className="flex items-center gap-6">
            <span
              className="text-base font-medium"
              style={{ color: "#2B2B2B" }}
            >
              © Sam Cheng, 2026
            </span>
          </div>
        </div>
      </footer>
      <BackToTop
        borderColor="border-[#0B1D51]"
        hoverBorderColor="hover:border-[#726E8C]"
        arrowColor="text-[#0B1D51]"
        hoverArrowColor="group-hover:text-[#726E8C]"
        bg="bg-[#FFFDFC]"
      />
    </div>
  );
}
