import Link from "next/link";

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
    <section className="relative flex h-[calc(100vh-91px)] flex-col justify-center px-12 md:px-24 lg:px-40 xl:px-52">
      <div className="w-full max-w-5xl">
        {/* Welcome Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border-[2px] border-primary px-5 py-2">
          <span className="text-lg text-primary md:text-xl font-medium">Welcome</span>
          <SmileyIcon className="h-5 w-5 text-primary md:h-6 md:w-6" />
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 max-w-4xl text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
          <span className="whitespace-nowrap">
            <span className="font-serif italic">Sam is a</span>{" "}
            <span className="font-sans font-semibold">product designer</span>{" "}
            <span className="font-serif italic">building</span>
          </span>
          <br />
          <span className="font-serif italic">for</span>{" "}
          <span className="font-sans font-semibold">social good.</span>
        </h1>

        {/* Description */}
        <p className="mb-2 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Designing research-driven, human-centered experiences for a more equitable and resilient world (with a soft spot for food, nature, and community-building).
        </p>

        {/* CTA Link */}
        <div className="flex items-end justify-between">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
          >
            <span className="text-base font-medium">View my work</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>

          {/* Decorative Image */}
          <div className="hidden lg:block">
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-[#1a1a1a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-28 w-28">
                  <div className="absolute inset-0 rounded-full bg-[#3d3d3d]"></div>
                  <div className="absolute inset-4 rounded-full bg-[#2a2a2a]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-[#e67a54]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
