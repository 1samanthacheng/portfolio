'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Grid3x3 as Grid3X3, Linkedin, Mail } from 'lucide-react';
import React, { useState } from 'react';

const quotes = [
  {
    quote: "It's demotivating that the information is not easily findable and that it's not all in one place.",
    attribution: '— Survey response',
  },
  {
    quote: "I want transparent, non-biased information but it's hard to find a neutral overview that's not Wikipedia.",
    attribution: '— Survey response',
  },
  {
    quote: "The websites I used felt really outdated. When something looks confusing or old, I'm already less confident that I'm doing the right thing.",
    attribution: '— User interview participant',
  },
  {
    quote: "I want to feel like my engagement is actually doing something, not just shouting into the void.",
    attribution: '— Use interview participant',
  },
];

function QuoteCarousel() {
  const [current, setCurrent] = useState(0);

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
{/* Persona Section */}
<section className="px-10 md:px-20 lg:px-32 xl:px-40 py-20" style={{ backgroundColor: '#F8F6F2' }}>
  <div
    className="overflow-hidden"
    style={{ border: '1px solid #2B2B2B', borderRadius: '32px' }}
  >
    {/* Top: photo + details + bio */}
    <div
      className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-8 p-8"
      style={{ borderBottom: '1px solid #2B2B2B' }}
    >
      {/* Photo placeholder */}
      <div
        className="w-48 h-48 shrink-0 rounded-xl overflow-hidden flex items-center justify-center text-sm"
        style={{ backgroundColor: '#E0DBDE', color: '#A1869E' }}
      >
        Amal photo
      </div>
      {/* Name + quote + details */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold" style={{ color: '#2B2B2B' }}>Amal Greene</h3>
        <p className="text-base font-serif italic leading-relaxed" style={{ color: '#2B2B2B' }}>
          "I care about what's happening — I just wish it were easier to turn that care into action. I don't always know where to start."
        </p>
        <ul className="space-y-1 text-base" style={{ color: '#2B2B2B' }}>
          {[
            { label: 'Age', value: '29' },
            { label: 'Location', value: 'Queens, NY' },
            { label: 'Occupation', value: 'Operations associate at a retail company' },
            { label: 'Education', value: "Bachelor's degree" },
            { label: 'Tech proficiency', value: 'High (smartphone native)' },
          ].map((item) => (
            <li key={item.label}>
              <span className="font-semibold">• {item.label}:</span>{' '}
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Bio */}
      <div className="space-y-3">
        <p className="text-base font-semibold" style={{ color: '#2B2B2B' }}>Bio</p>
        <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
          Amal juggles a full life in Queens — balancing time with friends, taking care of herself, and keeping up with a demanding job. Living with a chronic illness has made her especially aware of how policy decisions shape everyday life. Amal cares deeply about healthcare and environmental issues and wants to be more civically engaged, but often struggles to find clear, accessible ways to take action.
        </p>
      </div>
    </div>
    {/* Bottom: goals + pain points + motivations */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8" style={{ backgroundColor: '#EDE9ED' }}>
      {[
        {
          title: 'Goals',
          items: [
            'Understand who represents her at all levels of government.',
            'Stay informed about policy decisions related to healthcare and environment.',
            'Take meaningful action when issues she cares about are at stake.',
            'Feel like an engaged citizen without it consuming all her time.',
          ],
        },
        {
          title: 'Pain Points',
          items: [
            'Feels overwhelmed by the amount of information scattered across the internet.',
            'Finds it hard to know if the information she finds is reliable.',
            'Has limited time and energy to research issues in depth due to work and health management.',
            'Unsure which representative to contact about specific issues.',
          ],
        },
        {
          title: 'Motivations',
          items: [
            'Wants to be an informed resident and engage beyond just voting.',
            'Feels urgency around issues that directly impact her life.',
            'Values efficiency and will engage more if the process is simplified and streamlined.',
            "Wants to feel that her voice and action will make a difference.",
          ],
        },
      ].map((col) => (
        <div key={col.title} className="space-y-3">
          <p className="text-base font-semibold" style={{ color: '#2B2B2B' }}>{col.title}</p>
          <ul className="space-y-2">
            {col.items.map((item) => (
              <li key={item} className="text-base leading-relaxed flex items-start gap-2" style={{ color: '#2B2B2B' }}>
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
<section className="px-10 md:px-20 lg:px-32 xl:px-40 py-20" style={{ backgroundColor: '#F8F6F2' }}>
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
    <div>
      <span className="inline-block rounded-full px-5 py-2 text-base font-medium" style={{ border: '2px solid #A1869E', color: '#0B1D51' }}>
        Define
      </span>
    </div>
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl leading-tight">
        <span className="font-serif italic" style={{ color: '#2B2B2B' }}>Narrowing the </span>
        <span className="font-sans font-semibold" style={{ color: '#2B2B2B' }}>focus</span>
      </h2>
      <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
        Next, I needed to distill everything I learned into a single, honest articulation of the problem — one I could keep returning to as a gut-check throughout the design work. Grounding this in Amal's story kept the process honest:
      </p>
      {/* Block quote 1 */}
      <blockquote
        className="pl-5 py-1 text-base font-semibold leading-relaxed"
        style={{ borderLeft: '4px solid #726E8C', color: '#2B2B2B' }}
      >
        Amal is an eager community member who needs to find relevant information on government policies and representatives, because she wants to stay informed and act on issues that affect her daily life.
      </blockquote>
      <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
        With the problem defined, I could articulate what a successful solution would actually need to deliver. The goal statement:
      </p>
      {/* Block quote 2 */}
      <blockquote
        className="pl-5 py-1 text-base font-semibold leading-relaxed"
        style={{ borderLeft: '4px solid #726E8C', color: '#2B2B2B' }}
      >
        The platform will allow users to stay engaged with issues they care about by consolidating the process of looking up and contacting elected officials into one organized, approachable experience. I will measure effectiveness through task completion rates and user satisfaction in usability testing.
      </blockquote>
    </div>
  </div>
</section>
      {/* Ideation Section */}
<section className="px-10 md:px-20 lg:px-32 xl:px-40 py-20" style={{ backgroundColor: '#F8F6F2' }}>
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
    <div>
      <span className="inline-block rounded-full px-5 py-2 text-base font-medium" style={{ border: '2px solid #A1869E', color: '#0B1D51' }}>
        Ideation
      </span>
    </div>
    <div className="space-y-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl leading-tight">
        <span className="font-serif italic" style={{ color: '#2B2B2B' }}>Project </span>
        <span className="font-sans font-semibold" style={{ color: '#2B2B2B' }}>scoping</span>
      </h2>

      {/* Intro */}
      <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
        To inform my early ideation process, I started with a HMW statement:
      </p>

      {/* Block quote */}
      <blockquote
        className="pl-5 py-1 text-base font-semibold leading-relaxed"
        style={{ borderLeft: '4px solid #726E8C', color: '#2B2B2B' }}
      >
        How might we simplify how people discover information about their elected officials?
      </blockquote>

      {/* Body */}
      <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
        Keeping Amal in mind, I then began zeroing in on the product's core features and target audience. I chose to design for the users who showed up most in my research: people who are somewhat to moderately civically engaged and also eager to do more.
      </p>

      {/* Donut chart placeholder */}
      <div
        className="p-8 space-y-4"
        style={{ backgroundColor: '#FFFDFC', border: '1px solid #2B2B2B', borderRadius: '16px' }}
      >
        <p className="text-base" style={{ color: '#2B2B2B' }}>How would you describe your level of civic engagement?</p>
        <div
          className="w-full h-64 rounded-xl flex items-center justify-center text-sm"
          style={{ backgroundColor: '#E0DBDE', color: '#A1869E' }}
        >
          Donut chart — replace with actual asset
        </div>
      </div>

      {/* Caption */}
      <p className="text-base text-center leading-relaxed" style={{ color: '#727272' }}>
        Over 63% of people surveyed consider themselves somewhat to moderately engaged in civic activities, revealing a clear majority to design for.
      </p>

      {/* MVP intro */}
      <p className="text-base leading-relaxed" style={{ color: '#2B2B2B' }}>
        Three MVP features emerged from their needs:
      </p>

      {/* MVP features card */}
      <div
        className="p-8 space-y-6"
        style={{ backgroundColor: '#FFFDFC', border: '1px solid #2B2B2B', borderRadius: '32px' }}
      >
        {[
          {
            title: 'Representative lookup:',
            body: 'Enter your address once and see all your elected officials across federal, state, and local levels in one place.',
          },
          {
            title: 'Rep profile overviews:',
            body: 'Browse basic information about each representative (biography, committee assignments, recent activity, etc.)',
          },
          {
            title: 'Multi-rep contact flow',
            body: ': Reach out to one or multiple representatives at once, with the option to write your own message or start from a template.',
          },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-4">
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

      {/* Scoping note */}
      <div
        className="p-6 text-base leading-relaxed"
        style={{
          border: '1.5px dashed #0B1D51',
          borderRadius: '8px',
          color: '#2B2B2B',
        }}
      >
        I kept the MVP focused on these three features deliberately. Features like bill tracking, notifications, issue-based filtering, and impact stats are all on the roadmap, but scoping them out of v1 meant the core experience could be built, tested, and validated first.
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
