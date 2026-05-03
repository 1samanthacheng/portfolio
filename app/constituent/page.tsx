'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Grid3x3 as Grid3X3, Linkedin, Mail } from 'lucide-react';

const quotes = [
  {
    quote: "It's demotivating that the information is not easily findable and that it's not all in one place.",
    attribution: '— Survey response',
  },
  {
    quote: "I never know if contacting my rep actually does anything. It feels like shouting into a void.",
    attribution: '— Interview participant',
  },
  {
    quote: "I want to stay informed but government websites are so hard to navigate.",
    attribution: '— Survey response',
  },
  {
    quote: "I didn't even know who my state representatives were until recently.",
    attribution: '— Interview participant',
  },
];

function QuoteCarousel() {
  const [current, setCurrent] = React.useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? quotes.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === quotes.length - 1 ? 0 : c + 1));

  return (
    <div className="space-y-4">
      <div
        className="p-8"
        style={{ backgroundColor: '#FFFDFC', border: '1px solid #2B2B2B', borderRadius: '32px' }}
      >
        <p className="text-2xl font-serif mb-4" style={{ color: '#0B1D51' }}>"</p>
        <p className="text-base font-semibold leading-relaxed mb-4" style={{ color: '#2B2B2B' }}>
          {quotes[current].quote}
        </p>
        <p className="text-sm" style={{ color: '#727272' }}>{quotes[current].attribution}</p>
      </div>
      {/* Controls */}
      <div className="flex items-center justify-between">
        <button onClick={prev} className="p-2 hover:opacity-60 transition-opacity" aria-label="Previous" style={{ color: '#2B2B2B' }}>
          ←
        </button>
        <div className="flex items-center gap-2">
          {quotes.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === current ? '10px' : '8px',
                height: i === current ? '10px' : '8px',
                backgroundColor: i === current ? '#0B1D51' : '#D4D1CC',
              }}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 hover:opacity-60 transition-opacity" aria-label="Next" style={{ color: '#2B2B2B' }}>
          →
        </button>
      </div>
    </div>
  );
}

export default function ConstituentPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F8F6F2' }}>

      {/* Custom Header */}
      <header className="border-b-[3px]" style={{ borderColor: '#0B1D51' }}>
        <nav className="px-10 md:px-20 lg:px-32 xl:px-40 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" style={{ color: '#0B1D51' }}>
            <span className="text-xl font-medium">郑</span>
            <span className="text-xl font-medium">Sam Cheng</span>
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-6">
              <Link href="/#work" className="text-base font-medium transition-opacity hover:opacity-70" style={{ color: '#0B1D51' }}>
                work
              </Link>
              <Link href="/about" className="text-base font-medium transition-opacity hover:opacity-70" style={{ color: '#0B1D51' }}>
                about
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/#work" aria-label="View portfolio" style={{ color: '#0B1D51' }}>
                <Grid3X3 size={20} />
              </Link>
              <a href="https://www.linkedin.com/in/s-cheng/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#0B1D51' }}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:1samanthacheng@gmail.com" aria-label="Email" style={{ color: '#0B1D51' }}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left */}
        <div className="px-10 md:px-20 lg:px-32 xl:px-40 py-20 flex flex-col justify-center" style={{ backgroundColor: '#F8F6F2' }}>
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-4" style={{ color: '#0B1D51' }}>
                Constituent
              </h1>
              <p className="text-lg md:text-xl" style={{ color: '#2B2B2B' }}>
                Know your reps. Make your voice heard.
              </p>
            </div>
            <div className="w-24 h-24">
              <Image src="/app_icon.png" alt="Constituent App Icon" width={96} height={96} className="rounded-2xl" />
            </div>
            <div className="space-y-0">
              {[
                { label: 'Type', value: 'Passion Project' },
                { label: 'Timeline', value: '2025–Present' },
                { label: 'Role', value: 'Product Designer + UX Researcher' },
                { label: 'Platform', value: 'iOS' },
                { label: 'Tools', value: 'Figma, Claude, Pen + Paper' },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  className={`py-6 grid grid-cols-2 gap-8 ${i < arr.length - 1 ? 'border-b' : ''}`}
                  style={{ borderColor: '#E0DBDE' }}
                >
                  <p className="text-sm" style={{ color: '#A1869E' }}>{item.label}</p>
                  <p className="text-base" style={{ color: '#2B2B2B' }}>{item.value}</p>
                </div>
              ))}
            </div>
            <div>
              <button
                className="px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#0B1D51', color: 'white' }}
              >
                View prototype <span>→</span>
              </button>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="px-10 md:px-20 lg:px-32 xl:px-40 py-20 flex items-center justify-center" style={{ backgroundColor: '#E0DBDE' }}>
          <div className="w-full max-w-sm">
            <Image src="/constituent_loading_screen_iphone.png" alt="Constituent App on iPhone" width={400} height={800} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* 3px Divider */}
      <div style={{ height: '3px', backgroundColor: '#0B1D51' }} />

      {/* Overview Section */}
      <section className="px-10 md:px-20 lg:px-32 xl:px-40 py-20" style={{ backgroundColor: '#F8F6F2' }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span className="inline-block rounded-full px-5 py-2 text-base font-medium" style={{ border: '2px solid #A1869E', color: '#0B1D51' }}>
              Overview
            </span>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl leading-tight">
              <span className="font-serif italic" style={{ color: '#2B2B2B' }}>Building a </span>
              <span className="font-sans font-semibold" style={{ color: '#0B1D51' }}>civic tool </span>
              <span className="font-serif italic" style={{ color: '#2B2B2B' }}>that </span>
              <span className="font-sans font-semibold" style={{ color: '#0B1D51' }}>empowers everyone </span>
              <span className="font-serif italic" style={{ color: '#2B2B2B' }}>to participate in democracy.</span>
            </h2>
            <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2B2B2B' }}>
              <p>
                Constituent is a mobile-first civic tech app that allows users to identify and contact their elected representatives at all levels of government and all in one place. Its namesake serves as a reminder that elected officials work for <em>us</em>, and we all play a part in making sure they remain accountable for their actions.
              </p>
              <p>
                As a self-initiated project, I led every phase of the design process, from research and problem definition through prototyping and developer handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3px Divider */}
      <div style={{ height: '3px', backgroundColor: '#0B1D51' }} />

      {/* App Screens Placeholder */}
      <section style={{ backgroundColor: '#E0DBDE' }}>
        <div className="px-10 md:px-20 lg:px-32 xl:px-40 py-20 flex items-center justify-center">
          <div className="w-full h-96 rounded-2xl flex items-center justify-center text-base" style={{ backgroundColor: '#D4CFCD', color: '#A1869E' }}>
            App screens image — replace with actual asset
          </div>
        </div>
      </section>

      {/* 3px Divider */}
      <div style={{ height: '3px', backgroundColor: '#0B1D51' }} />

      {/* Problem Section */}
      <section className="px-10 md:px-20 lg:px-32 xl:px-40 py-20" style={{ backgroundColor: '#F8F6F2' }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div>
            <span className="inline-block rounded-full px-5 py-2 text-base font-medium" style={{ border: '2px solid #A1869E', color: '#0B1D51' }}>
              Problem
            </span>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl leading-tight">
              <span className="font-sans font-semibold" style={{ color: '#2B2B2B' }}>Civic engagement </span>
              <span className="font-serif italic" style={{ color: '#2B2B2B' }}>is </span>
              <span className="font-sans font-semibold" style={{ color: '#2B2B2B' }}>harder </span>
              <span className="font-serif italic" style={{ color: '#2B2B2B' }}>than it should be.</span>
            </h2>
            <div className="text-lg leading-relaxed" style={{ color: '#2B2B2B' }}>
              <p>
                For people who want to make their voices heard, it can be difficult to know where to start. Existing civic tools (especially government websites) are often clunky and fragmented, making it hard for people to find clear information, contact their representatives, or keep up with issues that matter to them.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Competitive Landscape Carousel */}
<section className="py-16" style={{ backgroundColor: '#F8F6F2' }}>
  {/* Scrollable row */}
  <div className="relative">
    {/* Right fade signifier */}
    <div
      className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
      style={{
        background: 'linear-gradient(to right, transparent, #F8F6F2)',
      }}
    />
    <div
      className="flex gap-6 overflow-x-auto pb-6 px-10 md:px-20 lg:px-32 xl:px-40"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="shrink-0 w-80 h-56 flex items-center justify-center text-sm"
          style={{
            border: '1px solid #2B2B2B',
            borderRadius: '32px',
            backgroundColor: '#E0DBDE',
            color: '#A1869E',
          }}
        >
          Competitor screenshot {i}
        </div>
      ))}
    </div>
  </div>
  {/* Caption */}
  <div className="px-10 md:px-20 lg:px-32 xl:px-40 mt-6">
    <p
      className="text-center text-base leading-relaxed"
      style={{ color: '#727272', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
    >
      The current landscape for finding info on elected officials is fragmented by design-level, device, and use case, leaving everyday people to stitch together their own process across multiple sites and platforms.
    </p>
  </div>
</section>

      {/* Research Section */}
<section className="px-10 md:px-20 lg:px-32 xl:px-40 py-20" style={{ backgroundColor: '#F8F6F2' }}>
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
    <div>
      <span className="inline-block rounded-full px-5 py-2 text-base font-medium" style={{ border: '2px solid #A1869E', color: '#0B1D51' }}>
        Research
      </span>
    </div>
    <div className="space-y-10">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl leading-tight">
        <span className="font-serif italic" style={{ color: '#2B2B2B' }}>What are some of the </span>
        <span className="font-sans font-semibold" style={{ color: '#0B1D51' }}>main barriers </span>
        <span className="font-serif italic" style={{ color: '#2B2B2B' }}>to </span>
        <span className="font-sans font-semibold" style={{ color: '#0B1D51' }}>civic participation?</span>
      </h2>

      {/* Body */}
      <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
        Through a survey (50+ respondents), 5 user interviews, and competitive analysis of 7 tools, I explored how people across different levels of civic engagement currently find information about their elected officials—and why the process often stops them from taking action.
      </p>

      {/* Quote Carousel */}
      <QuoteCarousel />

      {/* Insights intro */}
      <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
        From the research, four key insights emerged:
      </p>

      {/* Insights Card */}
      <div
        className="p-8 space-y-6"
        style={{ backgroundColor: '#FFFDFC', border: '1px solid #2B2B2B', borderRadius: '32px' }}
      >
        {[
          {
            title: 'Scattered Information:',
            body: 'Users have to visit multiple websites to find basic information about their representatives, making a simple task unnecessarily time-consuming.',
          },
          {
            title: 'Unreliable Sources',
            body: ': People struggle to determine which websites provide trustworthy, nonpartisan, and up-to-date information about elected officials.',
          },
          {
            title: 'Outdated Government Sites',
            body: ': Official government websites are cluttered, slow, and difficult to navigate (especially on mobile devices where most people search).',
          },
          {
            title: 'Lack of Feedback',
            body: ': People question whether their outreach actually matters, with no confirmation or sense of collective impact which makes it easy to give up after the first try.',
          },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            {/* Star placeholder */}
            <div className="shrink-0 mt-1 w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#A1869E">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <p className="text-base leading-relaxed">
              <span className="font-semibold" style={{ color: '#0B1D51' }}>{item.title}</span>
              <span style={{ color: '#2B2B2B' }}>{item.body}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Centering user needs */}
      <div className="space-y-4 pt-4">
        <h3 className="text-2xl leading-tight">
          <span className="font-serif italic" style={{ color: '#2B2B2B' }}>Centering </span>
          <span className="font-sans font-semibold" style={{ color: '#0B1D51' }}>user needs</span>
        </h3>
        <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
          With a clearer picture of the problem space, I created personas and{' '}
          <a href="#" className="underline underline-offset-4 hover:opacity-70" style={{ color: '#0B1D51' }}>
            journey maps
          </a>{' '}
          to translate these research findings into a human story, revealing distinct user needs and pain points. Amal Greene became my primary anchor: someone who wants to be more civically engaged but doesn't know where to start or whether her voice will land.
        </p>
      </div>

    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer style={{ borderTop: '3px solid #0B1D51', backgroundColor: '#F8F6F2' }}>
        <div className="px-10 md:px-20 lg:px-32 xl:px-40 py-8 flex items-center justify-between">
          <nav className="flex items-center gap-1 text-base font-medium" style={{ color: '#0B1D51' }}>
            <a href="mailto:1samanthacheng@gmail.com" className="hover:underline">email</a>
            <span>•</span>
            <Link href="/resume" className="hover:underline">resume</Link>
            <span>•</span>
            <a href="https://www.linkedin.com/in/s-cheng/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin</a>
          </nav>
          <div className="flex items-center gap-6">
            <span className="text-base font-medium" style={{ color: '#2B2B2B' }}>© Sam Cheng, 2026</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-8 w-8 items-center justify-center"
              style={{ color: '#2B2B2B' }}
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
