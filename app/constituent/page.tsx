'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Grid3x3 as Grid3X3, Linkedin, Mail } from 'lucide-react';

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

      {/* 3px Divider */}
      <div style={{ height: '3px', backgroundColor: '#0B1D51' }} />

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
