export function ContactSection() {
  return (
    <section className="px-12 md:px-24 lg:px-40 xl:px-52">
      {/* Top Divider */}
      <div className="h-[3px] bg-primary" />

      {/* Content */}
      <div className="py-16 md:py-24">
        <div className="ml-auto max-w-3xl text-center">
          {/* Headline */}
          <h2 className="mb-6 text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="font-serif italic">Let&apos;s</span>{" "}
            <span className="font-sans font-semibold">work together.</span>
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
            I&apos;m open to full-time roles, contract work, and collaborations. I&apos;m especially
            drawn to projects that touch on food systems, climate + environmental justice, and civic
            tech. Say hello!
          </p>

          {/* Email Button */}
          <a
            href="mailto:1samanthacheng@gmail.com"
  className="inline-flex items-center rounded-full border border-foreground bg-[#FFFDFC] px-6 py-3 text-lg font-medium text-primary md:text-xl transition-colors duration-200 hover:bg-[#306032] hover:text-[#FFFDFC] hover:border-transparent"
>
  1samanthacheng@gmail.com
</a>
        </div>
      </div>
    </section>
  );
}
