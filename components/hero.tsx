"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Happy } from "@/components/icons";
import { useIsVisible } from "@/hooks/use-is-invisible";

export function Hero() {
  const { ref, isVisible } = useIsVisible();

  return (
    <section className="relative flex h-[calc(100vh-91px)] flex-col justify-center px-12 md:px-24 lg:px-40 xl:px-52 overflow-hidden">
      <div className="w-full flex items-center justify-between gap-8">
        {/* Left: copy */}
        <div className="flex-1 min-w-0">
          {/* Welcome Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2">
            <span className="text-base text-primary md:text-base font-medium">
              Welcome
            </span>
            <Happy className="text-[#FF5D1F]" />
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 max-w-4xl text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="font-serif italic">Sam is a </span>
            <span className="font-sans font-semibold">product designer </span>
            <span className="font-serif italic">building for </span>
            <span className="font-sans font-semibold">social good.</span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed font-medium text-muted-foreground md:text-xl">
            Designing research-driven, human-centered experiences for a more
            equitable and resilient world (with a soft spot for food, climate,
            and community-building).
          </p>

          {/* CTA Link */}
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 text-primary underline underline-offset-4 transition-colors duration-200 hover:text-[#FF5D1F]"
          >
            <span className="text-base font-medium">View my work</span>
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.75 hover:text-[#FF5D1F]" />
          </Link>
        </div>

        {/* Right: photos — visible md+ */}
        <div className="relative hidden md:block flex-shrink-0 w-[320px] lg:w-[400px] xl:w-[520px] h-[520px] xl:h-[580px]">
          {/* Landscape — top right, flush to right edge */}
          <div className="group absolute top-0 right-0 w-[200px] h-[250px] lg:w-[220px] lg:h-[275px] xl:w-[260px] xl:h-[325px] rounded-[24px] overflow-hidden border border-[#2b2b2b]">
            <Image
              src="/images/landscape.jpg"
              alt="Mountain landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 200px, (max-width: 1280px) 220px, 260px"
            />
            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-[#2b2b2b] text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                another world is possible
              </span>
            </div>
          </div>

          {/* Oranges — lower left */}
          <div className="group absolute bottom-0 left-4 w-[170px] h-[170px] lg:w-[185px] lg:h-[185px] xl:w-[210px] xl:h-[210px] rounded-[24px] overflow-hidden border border-[#2b2b2b]">
            <Image
              src="/images/oranges.jpeg"
              alt="Oranges on a tree"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 170px, (max-width: 1280px) 185px, 210px"
            />
            <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-[#2b2b2b] text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                good systems bear fruit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
