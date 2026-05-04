import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About | Sam Cheng",
  description:
    "Sam Cheng is a product designer building for social good at the intersection of technology, community, and regenerative systems change.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Header activePage="about" />
      <section className="px-12 md:px-24 lg:px-40 xl:px-52 py-16 md:py-24">
        {/* Label */}
        <div className="mb-10">
          <span className="inline-block rounded-full border-[2px] border-primary px-5 py-2 text-base font-medium text-primary">
            About me
          </span>
        </div>
        {/* Heading + Photo row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          <div className="md:max-w-2xl">
            <h1 className="mb-8 text-4xl leading-tight tracking-tight md:text-5xl">
              <span className="font-serif italic">Hello, I&apos;m</span>{" "}
              <span className="font-sans font-semibold">Sam!</span>
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                My path to design runs through urban farms, café counters, and startup teams — each
                stop along the way deepening my appreciation for thoughtfully crafted experiences
                that bring people together. I&apos;m motivated by the belief that design is one of
                the most powerful tools we have for imagining and enacting more livable futures for
                people and planet, and I bring that conviction into my practice through
                human-centered design, systems thinking, and equity work.
              </p>
              <p>
                Outside of work, you can find me making (and eating) ice cream, exploring someplace
                outdoors, and playing with my cat Boots.
              </p>
              <p>
                <Link href="/resume" className="underline underline-offset-4 hover:text-primary transition-colors">
                  Take a look at my resume
                </Link>
              </p>
              <p>
                Get in touch at{" "}
                <a
                  href="mailto:1samanthacheng@gmail.com"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                  1samanthacheng@gmail.com
                </a>
              </p>
            </div>
          </div>
          {/* Photo */}
          <div className="shrink-0 md:mt-20">
            <div className="h-72 w-72 overflow-hidden rounded-full border-2 border-primary md:h-80 md:w-80">
              <Image
                src="/images/sam-headshot.jpg"
                alt="Sam Cheng at a street market holding green grapes on a skewer"
                width={320}
                height={320}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        {/* Experience Section */}
<div className="mt-16">
  <div className="h-[3px] bg-primary mb-16" />
  <div className="mb-10">
    <span className="inline-block rounded-full border-[2px] border-primary px-5 py-2 text-base font-medium text-primary">
      Experience
    </span>
  </div>
  <div className="space-y-0">
    {[
      {
        title: "Marketing Associate",
        company: "Material",
        years: "2023–2025",
        description: "Designing digital (web, email + social) experiences for a kitchenware startup",
      },
      {
        title: "Marketing Coordinator",
        company: "Material",
        years: "2022–2023",
        description: "Building brand voice and content systems across digital channels",
      },
      {
        title: "Community Coordinator",
        company: "Row 7 Seed Company",
        years: "2021–2022",
        description: "Growing a new kind of food system alongside chefs and farmers",
      },
      {
        title: "Barista",
        company: "ACRE",
        years: "2021–2022; 2025",
        description: "Crafting connection through specialty coffee and Japanese hospitality",
      },
      {
        title: "Apprentice",
        company: "Eagle Street Rooftop Farm",
        years: "2021",
        description: "Farming the city, tending to the earth",
      },
    ].map((job) => (
      <div key={job.title + job.company}>
        <div className="flex items-start justify-between py-6">
          <div>
            <p className="text-base font-semibold text-foreground">
              {job.title} • {job.company}
            </p>
            <p className="mt-1 text-base text-muted-foreground">{job.description}</p>
          </div>
          <span className="ml-8 shrink-0 text-base text-foreground">{job.years}</span>
        </div>
        <div className="h-px bg-border" />
      </div>
    ))}
  </div>
</div>

{/* Skills + Tools Section */}
<div className="mt-16">
  <div className="h-[3px] bg-primary mb-16" />
  <div className="mb-10">
    <span className="inline-block rounded-full border-[2px] border-primary px-5 py-2 text-base font-medium text-primary">
      Skills + tools
    </span>
  </div>
  {/* Skills pills */}
  <div className="flex flex-wrap gap-3 mb-10">
    {[
      "Design thinking",
      "User research",
      "Journey mapping",
      "User flows",
      "Information architecture",
      "Wireframing",
      "Prototyping",
      "UI + visual design",
      "Usability testing",
      "Content strategy",
      "Performance tracking",
    ].map((skill) => (
      <span
        key={skill}
        className="inline-block rounded-full border-[2px] border-foreground px-5 py-2 text-base font-medium text-foreground"
      >
        {skill}
      </span>
    ))}
  </div>
  {/* Tools */}
  <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
    {[
      "Figma",
      "Claude",
      "Bolt",
      "Maze",
      "Pen + Paper",
    ].map((tool) => (
      <div
        key={tool}
        className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border py-6 px-4"
      >
        {/* Placeholder icon — swap with real logo later */}
        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-xs text-muted-foreground font-medium">
          {tool.slice(0, 2)}
        </div>
        <span className="text-base font-medium text-foreground">{tool}</span>
      </div>
    ))}
  </div>
</div>
        {/* Currently Section */}
<div className="mt-16">
  <div className="h-[3px] bg-primary mb-16" />
  <div className="flex flex-col md:flex-row md:items-start gap-10">
    {/* Left: label + photo */}
    <div className="flex flex-col gap-6 md:w-64 shrink-0">
      <span className="inline-block rounded-full border-[2px] border-primary px-5 py-2 text-base font-medium text-primary w-fit">
        Currently
      </span>
      {/* Placeholder image — swap with real photo of Boots later */}
      <div className="rounded-2xl border-2 border-primary overflow-hidden w-64 h-72 bg-muted flex items-center justify-center text-sm text-muted-foreground">
        photo of Boots
      </div>
    </div>
    {/* Right: table */}
    <div className="flex-1">
      {[
        {
          label: "Reading:",
          value: "The City and Its Uncertain Walls by Haruki Murakami",
          link: null,
        },
        {
          label: "Listening to:",
          value: "Madwoman by Laufey",
          link: null,
        },
        {
          label: "Training for:",
          value: "Grand Teton Half Marathon",
          link: null,
        },
        {
          label: "Inspired by:",
          value: "Are.na boards (like ",
          suffix: "this one",
          link: "https://www.are.na/j-split/wild-wild-web",
          after: ")",
        },
        {
          label: "Dreaming of:",
          value: "San Tung chicken wings",
          link: null,
        },
      ].map((item) => (
        <div key={item.label}>
          <div className="flex items-baseline gap-12 py-6">
            <span className="w-36 shrink-0 text-base text-foreground">{item.label}</span>
            <span className="text-base text-foreground">
              {item.link ? (
                <>
                  {item.value}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    {item.suffix}
                  </a>
                  {item.after}
                </>
              ) : (
                item.value
              )}
            </span>
          </div>
          <div className="h-px bg-border" />
        </div>
      ))}
    </div>
  </div>
</div>
      </section>
      <Footer />
    </main>
  );
}
