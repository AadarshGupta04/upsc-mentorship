'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown, Target, RotateCcw, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const handleBookCall = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('openFreeCallModal'));
    }
  };

  const scrollToStory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const expectations = [
    {
      num: '01',
      title: 'A realistic strategy',
      desc: 'A plan designed around your preparation stage, strengths, constraints and goals.',
    },
    {
      num: '02',
      title: 'Honest feedback',
      desc: 'Direct guidance that helps you identify mistakes before they become habits.',
    },
    {
      num: '03',
      title: 'Focused resources',
      desc: 'Less resource collection. More attention on what truly matters.',
    },
    {
      num: '04',
      title: 'Weekly accountability',
      desc: 'Support to stay consistent without making you dependent on a mentor.',
    },
  ];

  const metrics = [
    { value: '18K+', label: 'LinkedIn community', highlight: false },
    { value: '3.5M+', label: 'Professional content impressions', highlight: true },
    { value: '6.7K+', label: 'Newsletter subscribers', highlight: false },
    { value: '12+', label: 'Published articles', highlight: true },
  ];

  const philosophy = [
    {
      num: '01',
      title: 'Clarity creates confidence',
      desc: 'Preparation should make the next step clear—not make life heavier.',
    },
    {
      num: '02',
      title: 'Consistency beats intensity',
      desc: 'A sustainable routine outlasts short, exhausting bursts.',
    },
    {
      num: '03',
      title: 'Strategy beats random hard work',
      desc: 'Effort matters most when it is directed toward the right work.',
    },
    {
      num: '04',
      title: 'Mentors create independent thinkers',
      desc: 'The aim is guidance, not dependence—no false guarantees or shortcuts.',
    },
  ];

  const milestones = [
    {
      tag: 'FOUNDATION',
      title: 'VIT Vellore',
      desc: 'B.Tech. in Electronics and Communication Engineering.',
    },
    {
      tag: 'EXPERIENCE',
      title: 'BHEL',
      desc: 'Internship experience in a public-sector engineering environment.',
    },
    {
      tag: 'STARTUPS',
      title: 'KrazyBee · Slice · RedCarpet',
      desc: 'Exposure to fast-moving Indian startup ecosystems.',
    },
    {
      tag: 'ANALYSIS',
      title: 'miniOrange',
      desc: 'Former Business Analyst, focused on strategy, product thinking and customer-focused solutions.',
    },
    {
      tag: 'CONSULTING',
      title: 'Edge Rick Soft Solutions',
      desc: 'Business consulting across growth strategy and business development.',
    },
    {
      tag: 'CONSULTING',
      title: 'Insta Global Source Pvt. Ltd.',
      desc: 'Business consulting, strategy and growth support.',
    },
    {
      tag: 'PURPOSE',
      title: 'The UPSC journey',
      desc: 'Four years in Delhi, learning the real human side of preparation.',
    },
    {
      tag: 'TODAY',
      title: 'UPSCwithEshwar',
      desc: 'A strategy-first, personal mentorship platform for serious aspirants.',
    },
  ];

  const activities = [
    {
      img: '/images/about/ai_summit.png',
      title: 'AI Impact Summit, India',
    },
    {
      img: '/images/about/tech_engagement.png',
      title: 'Technology & AI engagement',
    },
    {
      img: '/images/about/bharat_mandapam.png',
      title: 'Professional events at Bharat Mandapam',
    },
  ];

  const values = [
    {
      icon: <ArrowUpRight className="w-6 h-6 text-gold" />,
      title: 'No shortcuts',
      desc: 'No guaranteed ranks. Only a preparation strategy that can stand up to honest review.',
    },
    {
      icon: <Target className="w-6 h-6 text-gold" />,
      title: 'No noise',
      desc: 'Focus on the resources and actions that matter instead of every new distraction.',
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-gold" />,
      title: 'Personal guidance',
      desc: "A mentor should understand a student's context—not just complete a batch syllabus.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: 'Accessible quality',
      desc: 'Genuine, personalised mentorship should remain within reach for serious aspirants.',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">MEET YOUR MENTOR</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-serif font-bold text-navy leading-[1.1] text-balance">
              I built the mentorship I <br />
              <span className="italic font-serif text-gold-dark">wish I had.</span>
            </h1>

            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-xl">
              UPSCwithEshwar is built for aspirants who want clarity, accountability and a strategy that fits their real life—not another source of noise.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={handleBookCall}
                className="flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-navy/20 hover:bg-gold transition-all duration-300 hover:scale-105"
              >
                Book a Free Call
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#story"
                onClick={scrollToStory}
                className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-navy border-b-2 border-gold hover:text-gold transition-colors pb-1"
              >
                Read my story
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Right Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden group shadow-[0_20px_50px_rgba(11,20,38,0.15)] border-4 border-white">
              <Image
                src="/images/about/eshwar_portrait.png"
                alt="Eshwar Ramisetti"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Bottom text overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-6 pt-16 flex flex-col justify-end">
                <span className="text-gold font-bold uppercase tracking-widest text-xxs">FOUNDER</span>
                <span className="text-2xl font-serif font-bold text-white">Eshwar Ramisetti</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider details */}
        <div className="mt-20 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xxs font-bold tracking-[0.25em] text-gray-400">
          <span>CLARITY OVER CONFUSION</span>
          <span>STRATEGY OVER STRUGGLE</span>
        </div>
      </section>

      {/* Navy full-width Banner */}
      <section className="w-full bg-navy py-8 mb-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-lg sm:text-xl font-serif text-white">
            Not another coaching institute.{' '}
            <span className="italic text-gold font-semibold">A more personal way to prepare.</span>
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Heading */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">THE FOUNDER STORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">
              The story behind <br />UPSCwithEshwar.
            </h2>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-8 text-gray-600 font-medium leading-relaxed">
            <p>
              Every UPSC aspirant starts with a dream of serving the nation, creating impact and changing lives. But somewhere between endless booklists, coaching classes, YouTube videos, Telegram channels and conflicting advice, that dream can turn into confusion.
            </p>
            <p>
              I have seen it. I have lived it. After graduating in Electronics and Communication Engineering from VIT Vellore, I worked across India's startup ecosystem before becoming a Business Analyst at miniOrange and consulting on business growth and strategy.
            </p>
            <p>
              Then I chose the UPSC Civil Services Examination. Over four years in Delhi, I met deeply capable aspirants who were working hard but losing confidence—constantly changing strategies, buying every new course and collecting resources instead of mastering them.
            </p>
            <p>
              UPSCwithEshwar exists because the problem is not always a lack of effort. Often, it is a lack of direction: a personal strategy, honest feedback and someone who stays invested in the journey.
            </p>

            <div className="pt-6 border-l-[3px] border-gold pl-6 space-y-2">
              <blockquote className="text-xl sm:text-2xl font-serif italic text-navy leading-relaxed">
                “UPSC isn't won by the person who studies the most. It's won by the person who studies with clarity, consistency and the right strategy.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Built around you, not the batch. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-[2px] w-6 bg-gold" />
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">WHAT YOU CAN EXPECT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy mb-12">
          Built around you, not the batch.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {expectations.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md shadow-navy/5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-serif italic text-gold text-lg font-bold mb-4">{exp.num}</span>
              <h4 className="text-lg font-bold text-navy mb-2">{exp.title}</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-navy p-10 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-navy/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">OUR MISSION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Make quality guidance more accessible.</h3>
            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              To offer affordable, genuinely personalized UPSC mentorship built on strategic preparation, clear structure and ongoing accountability.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#FAF7F2] p-10 rounded-3xl text-navy relative overflow-hidden shadow-xl shadow-navy/5 border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">OUR VISION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">A trusted place to prepare with purpose.</h3>
            <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed">
              To build a strategy-first mentorship platform where serious aspirants feel supported in planning, executing and growing through the UPSC journey.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mb-12 text-center">
          Credibility built in public.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md shadow-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`text-4xl font-extrabold block mb-2 ${m.highlight ? 'text-gold-dark' : 'text-navy'}`}>
                {m.value}
              </span>
              <span className="text-sm text-gray-500 font-semibold">{m.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Metrics are rounded from Eshwar's LinkedIn and newsletter records.{' '}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-bold hover:underline inline-flex items-center gap-1"
          >
            View LinkedIn profile <ArrowUpRight className="w-3 h-3" />
          </a>
        </p>
      </section>

      {/* Brand Philosophy (Dark Navy Section) */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-navy py-24 text-white overflow-hidden mb-28">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Brand Content */}
            <div className="lg:col-span-5 lg:pr-8 flex gap-6">
              {/* Vertical Text */}
              <div className="hidden lg:flex items-center [writing-mode:vertical-lr] rotate-180 text-xxs font-bold tracking-[0.3em] text-white/30 border-r border-white/10 pr-6 uppercase">
                THE APPROACH
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gold" />
                  <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">BRAND PHILOSOPHY</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                  More material is <br />not always more <br />progress.
                </h2>
                <p className="text-slate-300 font-medium leading-relaxed">
                  UPSCwithEshwar brings the discipline of strategic planning into preparation: understand the starting point, focus on the highest-value actions, review honestly, and adjust without losing momentum.
                </p>
              </div>
            </div>

            {/* Right Approach Pillars */}
            <div className="lg:col-span-7 divide-y divide-white/10">
              {philosophy.map((item, idx) => (
                <div key={idx} className="py-6 first:pt-0 last:pb-0 flex gap-6 items-start">
                  <span className="font-serif italic text-gold text-lg font-bold">{item.num}</span>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-slate-300 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="h-[2px] w-6 bg-gold" />
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">PROFESSIONAL JOURNEY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-16">
          A strategist's lens on a demanding exam.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((ms, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md shadow-navy/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
            >
              {/* Colored tag dot */}
              <div className="absolute top-4 left-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="text-xxs font-bold text-gold tracking-widest">{ms.tag}</span>
              </div>

              <div className="pt-6 mt-2 flex-1">
                <h4 className="text-lg font-bold text-navy mb-2">{ms.title}</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{ms.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond UPSC Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-[2px] w-6 bg-gold" />
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">BEYOND UPSC</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy mb-4">
          A mindset of lifelong learning.
        </h2>
        <p className="text-gray-500 font-medium max-w-2xl mb-12">
          Alongside mentorship, Eshwar builds communities and continues to engage with technology, public policy, business, leadership and global affairs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={act.img}
                  alt={act.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-black p-5 flex-1 flex items-center justify-start">
                <h4 className="text-sm font-semibold text-white leading-snug">{act.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: The standards behind every interaction. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-28">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="h-[2px] w-6 bg-gold" />
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">CORE VALUES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy text-center mb-16">
          The standards behind every interaction.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md shadow-navy/5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">{val.title}</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: Let's build your journey together. (CTA Banner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0B1426] rounded-[2.5rem] p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl shadow-navy/30">
          {/* Saffron background glow */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gold" />
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">BEGIN WITH CLARITY</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
              Let's build your journey <br />together.
            </h2>
            
            <p className="text-slate-300 font-medium leading-relaxed text-sm sm:text-base">
              Whether you are beginning your first attempt, preparing alongside a job, or returning stronger after earlier attempts, the commitment stays the same: clarity, confidence and a strategy you can trust.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={handleBookCall}
                className="flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-navy shadow-lg shadow-gold/20 hover:bg-gold-light transition-all duration-300 hover:scale-105"
              >
                Book a Free Call
                <ArrowUpRight className="w-4 h-4 text-navy" />
              </button>

              <a
                href="/"
                className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-white border-b-2 border-gold/50 hover:border-gold hover:text-gold transition-colors pb-1"
              >
                Visit UPSCwithEshwar
                <ArrowUpRight className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
