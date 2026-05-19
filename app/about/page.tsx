import Image from "next/image";
import { Hand } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

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
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2 text-base font-medium text-primary">
            About me
            <Hand className="text-[#FF5D1F]" />
          </span>
        </div>

        {/* Heading + Photo row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-24 mb-12">
          <div className="md:max-w-2xl">
            <h1 className="mb-8 text-4xl leading-tight tracking-tight md:text-5xl">
              <span className="font-serif italic">Hello, I&apos;m</span>{" "}
              <span className="font-sans font-semibold">Sam!</span>
            </h1>
            <div className="space-y-6 text-lg leading-relaxed font-medium text-foreground">
              <p>
                My path to design runs through urban farms, café counters, and
                startup teams — each stop along the way deepening my
                appreciation for thoughtfully crafted experiences that bring
                people together. I&apos;m motivated by the belief that design is
                one of the most powerful tools we have for imagining and
                enacting more livable futures for people and planet, and I bring
                that conviction into my practice through human-centered design,
                systems thinking, and equity work.
              </p>
              <p>
                Outside of the office, you can find me making (and eating) ice
                cream, exploring someplace outdoors, and playing with my cat
                Boots.
              </p>
              <p>
                Take a look at{" "}
                <a
                  href="https://drive.google.com/file/d/1LHSMNdxSdx8YOiZg-sMNXgTVcZH7OG57/view"
                  className="underline underline-offset-4 text-primary hover:text-[#FF5D1F] transition-colors"
                >
                  my resume
                </a>
              </p>
              <p>
                Get in touch at{" "}
                <a
                  href="mailto:1samanthacheng@gmail.com"
                  className="underline underline-offset-4 text-primary hover:text-[#FF5D1F] transition-colors"
                >
                  1samanthacheng@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Photo Column */}
          <div className="shrink-0 flex flex-col items-end gap-0 md:min-w-[280px] lg:min-w-[320px]">
            {/* Headshot */}
            <div className="group relative w-64 md:w-72 lg:w-80 aspect-[4/5] overflow-hidden rounded-[24px] border border-[#2b2b2b] lg:-mt-12">
              <Image
                src="/images/sam-headshot.JPG"
                alt="Sam Cheng in Chinatown holding green grapes on a skewer"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-[#2b2b2b] text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                  photo by Joel Lee
                </span>
              </div>
            </div>

            {/* Spring snapshot */}
            <div className="group relative z-10 w-36 h-36 lg:w-40 lg:h-40 overflow-hidden rounded-[16px] border border-[#2b2b2b] mt-3 lg:-mt-20 lg:-ml-12 mr-auto">
              <Image
                src="/images/cherry-blossoms.jpeg"
                alt="Cherry blossom tree against blue sky with the moon"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-[#2b2b2b] text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                  spring snapshot
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section - Increased mt to 32 */}
        <div className="mt-40">
          {/* Reduced mb to 6 to match Skills section */}
          <div className="mb-6">
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
                description:
                  "Designing digital (web, email + social) experiences for a kitchenware startup",
              },
              {
                title: "Marketing Coordinator",
                company: "Material",
                years: "2022–2023",
                description:
                  "Building brand voice and content systems across digital channels",
              },
              {
                title: "Community Coordinator",
                company: "Row 7 Seed Company",
                years: "2021–2022",
                description:
                  "Growing a new kind of food system alongside chefs and farmers",
              },
              {
                title: "Barista",
                company: "ACRE",
                years: "2021–2022; 2025",
                description:
                  "Crafting connection through specialty coffee and Japanese hospitality",
              },
              {
                title: "Apprentice",
                company: "Eagle Street Rooftop Farm",
                years: "2021",
                description: "Farming the city, tending to the earth",
              },
            ].map((job, index, array) => (
              <div key={job.title + job.company}>
                <div className="flex items-start justify-between py-6">
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {job.title} • {job.company}
                    </p>
                    <p className="mt-1 text-lg font-medium text-muted-foreground">
                      {job.description}
                    </p>
                  </div>
                  <span className="ml-8 shrink-0 text-lg font-medium text-foreground">
                    {job.years}
                  </span>
                </div>
                {/* Logic to hide last line */}
                {index !== array.length - 1 && (
                  <div className="h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills + Tools Section - Increased mt to 40 */}
        <div className="mt-32">
          <div className="mb-6">
            <span className="inline-block rounded-full border-[2px] border-primary px-5 py-2 text-base font-medium text-primary">
              Skills + tools
            </span>
          </div>
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
                className="inline-block rounded-full px-5 py-2 text-lg font-semibold text-foreground bg-muted"
              >
                {skill}
              </span>
            ))}
          </div>
          {/* Tools — logo + label row */}
          <div className="flex flex-wrap gap-8">
            {[
              { name: "Figma", logo: "/images/figma.png", size: 24 },
              { name: "Claude", logo: "/images/claude.png", size: 32 },
              { name: "Bolt", logo: "/images/bolt.png", size: 42 },
              { name: "Maze", logo: "/images/maze.svg", size: 32 },
              { name: "Pen + Paper", logo: "/images/pen-paper.svg", size: 32 },
            ].map((tool) => (
              <div key={tool.name} className="flex items-center gap-3">
                <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-muted shrink-0">
                  <Image
                    src={tool.logo}
                    alt={tool.name + " logo"}
                    width={tool.size}
                    height={tool.size}
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Section - Increased mt to 40 */}
        <div className="mt-40">
          <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-24">
            <div className="flex flex-col justify-between md:w-64 shrink-0 self-stretch">
              <span className="inline-block rounded-full border-[2px] border-primary px-5 py-2 text-base font-medium text-primary w-fit">
                Currently
              </span>

              <div className="group relative w-64 h-72 overflow-hidden rounded-[24px] border border-[#2b2b2b] mt-12 md:mt-0">
                <Image
                  src="/images/boots.jpeg"
                  alt="Boots, tuxedo cat on buffet table"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-[#2b2b2b] text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                    baby Boots
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: table - removed pt-2 and added logic for first-item padding */}
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
              ].map((item, index, array) => (
                <div key={item.label}>
                  {/* Conditional Padding: 
          - First item (index 0) gets pb-9 (bottom only) to align with badge top.
          - Other items get py-9 (top and bottom).
      */}
                  <div
                    className={`flex items-start gap-12 ${index === 0 ? "pb-9" : "py-9"}`}
                  >
                    <span className="w-36 shrink-0 text-lg font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="text-lg font-medium text-foreground">
                      {item.link ? (
                        <>
                          {item.value}
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 text-primary hover:text-[#FF5D1F] transition-colors"
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

                  {index !== array.length - 1 && (
                    <div className="h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </main>
  );
}
