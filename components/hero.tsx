import Link from "next/link";
import Image from "next/image";

function SmileyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="10" r="1.25" fill="currentColor" />
      <circle cx="15" cy="10" r="1.25" fill="currentColor" />
      <path
        d="M8.5 14.5C9 15.5 10.5 17 12 17C13.5 17 15 15.5 15.5 14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-91px)] flex-col justify-center px-12 md:px-24 lg:px-40 xl:px-52 overflow-hidden">
      <div className="w-full max-w-5xl flex items-center justify-between gap-8">

        {/* Left: copy */}
        <div className="flex-1 min-w-0">
          {/* Welcome Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border-[2px] border-primary px-5 py-2">
            <span className="text-lg text-primary md:text-xl font-medium">Welcome</span>
            <SmileyIcon className="h-5 w-5 text-primary md:h-6 md:w-6" />
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 max-w-4xl text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="font-serif italic">Sam is a </span>
            <span className="font-sans font-semibold">product designer </span>
            <span className="font-serif italic">building for </span>
            <span className="font-sans font-semibold">social good.</span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Designing research-driven, human-centered experiences for a more equitable and resilient world (with a soft spot for food, climate, and community-building).
          </p>

          {/* CTA Link */}
          <Link
            href="#work"
            className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
          >
            <span className="text-base font-medium">View my work</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Right: photos — visible md+ */}
        <div className="relative hidden md:block flex-shrink-0 w-[320px] lg:w-[380px] h-[520px] -mr-12 lg:-mr-20 xl:-mr-32">

          {/* Landscape — top right, 4:5 (220×275), flush to right edge */}
          <div className="group absolute top-0 right-0 w-[200px] h-[250px] lg:w-[220px] lg:h-[275px] rounded-[24px] overflow-hidden border border-[#2b2b2b]">
            <Image
              src="/images/landscape.jpg"
              alt="Mountain landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 200px, 220px"
            />
            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-[#2b2b2b] text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                another world is possible
              </span>
            </div>
          </div>

          {/* Oranges — lower, offset left, plenty of gap from landscape */}
          <div className="group absolute bottom-0 left-4 w-[170px] h-[170px] lg:w-[185px] lg:h-[185px] rounded-[24px] overflow-hidden border border-[#2b2b2b]">
            <Image
              src="/images/oranges.jpeg"
              alt="Oranges on a tree"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 170px, 185px"
            />
            {/* Caption centered at bottom */}
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
