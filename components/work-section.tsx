import Image from "next/image";
import Link from "next/link";

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

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24">
      {/* Top divider line */}
      <div className="h-[3px] w-full bg-primary" />

      <div className="px-12 py-16 md:px-24 md:py-20 lg:px-40 lg:py-24 xl:px-52">
        {/* Work Badge */}
        <div className="mb-12 inline-flex items-center rounded-full border-[2px] border-primary px-5 py-2">
          <span className="text-lg text-primary md:text-xl font-medium">Work</span>
        </div>

        {/* Project Card */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          {/* Image Container */}
          <Link href="/constituent" className="flex-shrink-0 lg:w-1/2">
  <div className="group overflow-hidden rounded-3xl border border-foreground bg-[#e8e6e1]">
    <Image
      src="/images/constituent-thumbnail.png"
      alt="Constituent app mockups showing civic engagement features"
      width={800}
      height={600}
      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
      priority
    />
  </div>
</Link>

          {/* Content */}
          <div className="flex flex-col lg:w-1/2">
            <h2 className="mb-4 font-sans text-xl font-semibold text-foreground md:text-2xl">
              Constituent
            </h2>

            <p className="mb-4 font-sans text-lg leading-relaxed text-foreground">
              Creating a civic engagement app that makes finding and contacting your elected
              officials simple and approachable.
            </p>

            <p className="mb-6 text-base text-muted-foreground">
              User research • information architecture • UI design
            </p>

            <Link
               href="/constituent"
               className="group inline-flex items-center gap-2 text-primary underline underline-offset-4 transition-colors duration-200 hover:text-[#FF5D1F]"
            >
              <span className="text-base font-medium">View case study</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="h-[3px] w-full bg-primary" />
    </section>
  );
}
