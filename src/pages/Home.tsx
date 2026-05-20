import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Wind, CircleDot, Waves, Flame,
  FlaskConical, Leaf, Hammer, Package, Star,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

const PRODUCT_ICONS = [Wind, CircleDot, Waves, Flame, Flame];
const CATEGORY_TABS = [
  { key: 'core' as const, label: 'Core Range', icon: Star },
  { key: 'pro' as const, label: 'Pro Range', icon: FlaskConical },
  { key: 'tool' as const, label: 'Tools', icon: Hammer },
  { key: 'refill' as const, label: 'Refills', icon: Package },
  { key: 'limited' as const, label: 'Limited Drops', icon: Leaf },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'core' | 'pro' | 'tool' | 'refill' | 'limited'>('core');
  const heroRef = useRef<HTMLDivElement>(null);
  const aftermathRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const lineupRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          x: -60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      const sections = [aftermathRef, scienceRef, productRef, lineupRef, gameRef, portfolioRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredProducts = config.products.filter((p) => p.category === activeTab);

  return (
    <div className="relative font-sans bg-[#f8f5ff]">
      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 bg-[#f8f5ff]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#a855f7] flex items-center justify-center">
              <span className="text-sm">{config.icon}</span>
            </div>
            <span className="font-zen text-sm md:text-base tracking-widest text-[#a855f7]">
              {config.name}
            </span>
          </div>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#78716c] hover:text-[#06b6d4] transition-colors"
          >
            Enter the GHOULVERSE
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-4 md:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroTextRef} className="z-10 pt-20 md:pt-0">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.3em] uppercase border border-[#a855f7]/30 text-[#a855f7] bg-[#a855f7]/5">
                The Tranquil Gardens
              </span>
            </div>

            <h1 className="font-zen text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight mb-6"
              style={{
                color: '#a855f7',
              }}>
              ZEN
              <br />
              <span style={{ color: '#06b6d4' }}>GHOUL</span>
            </h1>

            <p className="text-[#78716c] text-base md:text-lg max-w-md mb-8 leading-relaxed">
              Calm in the chaos. Serenity in the storm. Our formulations quiet the mind,
              soften the body, and restore the spirit — one breath at a time.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#aftermath"
                className="inline-flex items-center gap-2 px-6 py-3 font-zen text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                  boxShadow: '0 4px 20px rgba(168,85,247,0.3)',
                }}
              >
                Find Your Calm
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[#78716c]/50 text-xs tracking-wider">
                Click the ghoul to breathe!
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center h-[60vh] relative">
            <div
              className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
            />
            <div
              className="absolute w-48 h-48 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', animation: 'float-around 8s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      {/* ===== THE AFTERMATH ===== */}
      <section id="aftermath" ref={aftermathRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-16 md:mb-24">
            <h2 className="font-zen text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
              style={{ color: '#292524' }}>
              THE CHAOS ENDS.
              <br />
              <span className="text-[#a855f7]">
                THE CALM BEGINS.
              </span>
            </h2>
            <p className="text-[#78716c] text-lg max-w-xl">
              Stress that won't let go. Tension that lives in your shoulders. A mind that
              races at 3am. We don't fight the chaos — we dissolve it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Wind, value: '∞', label: 'Breaths Taken', color: '#a855f7' },
              { icon: CircleDot, value: '0', label: 'Stress Remaining', color: '#06b6d4' },
              { icon: Waves, value: '100%', label: 'Stillness Rate', color: '#a855f7' },
            ].map((stat, i) => (
              <div
                key={i}
                className="reveal relative p-6 md:p-8 border text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: `${stat.color}20`,
                  background: 'rgba(255, 255, 255, 0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = stat.color;
                  e.currentTarget.style.boxShadow = `0 8px 25px ${stat.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${stat.color}20`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <stat.icon className="w-6 h-6 mb-4 mx-auto" style={{ color: stat.color }} />
                <div className="font-zen text-3xl md:text-4xl mb-1" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-[#78716c] text-xs tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE SCIENCE ===== */}
      <section ref={scienceRef} className="relative py-24 md:py-40 px-4 md:px-8 border-t border-[#a855f7]/10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#a855f7]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a855f7]">
                Proprietary Technology
              </span>
            </div>
            <h2 className="font-zen text-4xl md:text-6xl text-[#292524] mb-4">
              {config.science.title}
            </h2>
            <p className="text-[#a855f7] text-xl md:text-2xl font-zen mb-6">
              {config.science.subtitle}
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <p className="text-[#78716c] text-base leading-relaxed">
              {config.science.description}
            </p>
            <p className="text-[#78716c]/70 text-sm leading-relaxed">
              {config.science.adaptation}
            </p>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.science.stats.map((stat, i) => (
              <div key={i} className="p-5 border text-center transition-all duration-300"
                style={{ borderColor: '#a855f720', background: 'rgba(255,255,255,0.6)' }}>
                <div className="font-zen text-2xl md:text-3xl text-[#a855f7] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#78716c] text-[10px] tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS - TABBED BROWSER ===== */}
      <section ref={productRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12 md:mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a855f7] mb-4 block">
              Product Architecture
            </span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-4">
              THE SANCTUARY
            </h2>
            <p className="text-[#78716c] max-w-md mx-auto">
              Five product lines. Nine formulations. One mission: total serenity.
            </p>
          </div>

          {/* Tabs */}
          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = config.products.filter((p) => p.category === tab.key).length;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #a855f7, #06b6d4)' : 'transparent',
                    color: isActive ? '#fff' : '#78716c',
                    border: isActive ? 'none' : '1px solid #a855f720',
                    boxShadow: isActive ? '0 4px 20px rgba(168,85,247,0.2)' : 'none',
                    borderRadius: '9999px',
                  }}
                >
                  <tab.icon className="w-3 h-3" />
                  {tab.label}
                  <span className="text-[10px] opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#a855f7', '#06b6d4', '#a855f7', '#06b6d4', '#a855f7'];
              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className="reveal group relative p-8 border text-center transition-all duration-300 hover:-translate-y-2"
                  style={{
                    borderColor: `${color}15`,
                    background: 'rgba(255,255,255,0.7)',
                    borderRadius: '50%',
                    aspectRatio: '1 / 1.1',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.boxShadow = `0 12px 40px ${color}12`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${color}15`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center border mx-auto mb-4"
                    style={{ borderColor: `${color}30` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 mb-3 inline-block"
                    style={{ color, border: `1px solid ${color}20` }}>
                    {product.category}
                  </span>

                  <h3 className="font-zen text-lg text-[#292524] mb-1">
                    {product.name.toUpperCase()}
                  </h3>
                  <p className="text-[#a855f7] text-xs font-bold mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-[#78716c] text-xs leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {product.heroIngredient && (
                    <div className="mb-3">
                      <span className="text-[9px] tracking-wider uppercase text-[#78716c]/50">
                        Powered by
                      </span>
                      <span className="text-[10px] font-bold ml-2" style={{ color }}>
                        {product.heroIngredient}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-1 mb-4">
                    {product.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center justify-center gap-2 text-[10px] text-[#78716c]/70">
                        <span className="w-1 h-1 rounded-full" style={{ background: color }} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-center gap-4 pt-4 border-t"
                    style={{ borderColor: `${color}10` }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]/50">
                      {product.volume}
                    </span>
                    <span className="text-sm font-bold font-zen" style={{ color }}>
                      {product.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LINEUP (UNIVERSE) ===== */}
      <section ref={lineupRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#06b6d4] mb-4 block">
              The Collective
            </span>
            <h2 className="font-zen text-4xl md:text-6xl text-[#292524] mb-4">
              THE GHOULVERSE
            </h2>
            <p className="text-[#78716c] max-w-lg mx-auto">
              Eight spirits. One universe. Find your path.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
            {OTHER_GHOULS.map((g) => {
              const isHeadliner = ['goo', 'zen'].includes(g.id);

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative p-4 md:p-6 border text-center transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  style={{
                    borderColor: isHeadliner ? `${g.color}30` : `${g.color}10`,
                    background: isHeadliner
                      ? `linear-gradient(135deg, ${g.color}08, transparent)`
                      : 'rgba(255,255,255,0.6)',
                    borderRadius: '50%',
                    aspectRatio: '1',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = g.color;
                    e.currentTarget.style.boxShadow = `0 8px 25px ${g.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = isHeadliner ? `${g.color}30` : `${g.color}10`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {g.icon}
                  </div>

                  <h3 className="font-zen text-xs md:text-sm text-[#292524] tracking-wider mb-0.5">
                    {g.name}
                  </h3>
                  <p className="text-[#78716c]/60 text-[10px] uppercase tracking-wider">
                    {g.realm}
                  </p>
                  {!g.live && (
                    <span className="text-[9px] text-[#78716c]/40 uppercase tracking-wider block mt-1">
                      TBA
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="reveal text-center">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-zen text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                boxShadow: '0 4px 30px rgba(168,85,247,0.3)',
                borderRadius: '9999px',
              }}
            >
              Enter the GHOULVERSE
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className="reveal relative p-8 md:p-16 text-center overflow-hidden border"
            style={{
              borderColor: '#a855f715',
              background: 'linear-gradient(135deg, rgba(168,85,247,0.05), rgba(6,182,212,0.05))',
              borderRadius: '50%',
              aspectRatio: '1',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full opacity-5 blur-3xl"
                style={{ background: '#a855f7' }} />
            </div>

            <Gamepad2 className="reveal w-12 h-12 text-[#a855f7] mx-auto mb-6" />

            <h2 className="reveal font-zen text-4xl md:text-6xl text-[#292524] mb-4">
              PLAY GHOULVERSE
            </h2>

            <p className="reveal text-[#78716c] max-w-xl mx-auto mb-8">
              Pilot {config.name} through the Void in this epic endless runner.
              Battle bacteria, unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>

            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative z-10 inline-flex items-center gap-2 px-8 py-4 font-zen text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                boxShadow: '0 4px 30px rgba(168,85,247,0.3)',
                borderRadius: '9999px',
              }}
            >
              <Gamepad2 className="w-5 h-5" />
              PLAY NOW
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO STRIP ===== */}
      <section ref={portfolioRef} className="relative py-16 md:py-24 px-4 md:px-8 border-t border-[#a855f7]/10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#78716c]/50 mb-2 block">
              The House of GHOUL
            </span>
            <h3 className="font-zen text-2xl md:text-3xl text-[#292524]">
              THE GHOULVERSE PORTFOLIO
            </h3>
          </div>

          <div className="reveal flex flex-wrap justify-center gap-4">
            {config.crossLinks.map((g) => {
              const isActive = g.id === config.id;
              const productCount = g.id === config.id ? config.products.length : '-';

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-center p-4 transition-all duration-300"
                  style={{
                    background: isActive ? `${g.color}10` : 'rgba(255,255,255,0.6)',
                    border: isActive ? `1px solid ${g.color}` : '1px solid transparent',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = `${g.color}30`;
                      e.currentTarget.style.background = `${g.color}05`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                    }
                  }}
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {g.icon}
                  </div>
                  <p className="text-[8px] font-bold tracking-wider uppercase text-[#292524] mt-1">
                    {g.name.replace(' GHOUL', '')}
                  </p>
                  {isActive && (
                    <span className="text-[7px] mt-0.5 inline-block" style={{ color: g.color }}>
                      {productCount} Products
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CTA ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a855f7] mb-4 block">
              {config.id === 'party' ? 'Guest List' : 'Investor Relations'}
            </span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-4">
              {config.cta.headline}
            </h2>
            <p className="text-[#78716c]">
              {config.cta.subheadline}
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-4 font-sans text-sm text-[#292524] placeholder:text-[#78716c]/40 outline-none transition-all bg-transparent border"
              style={{ borderColor: '#a855f720', borderRadius: '9999px' }}
            />
            <button
              className="px-8 py-4 font-zen text-sm tracking-wider uppercase transition-all hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                boxShadow: '0 4px 20px rgba(168,85,247,0.3)',
                borderRadius: '9999px',
              }}
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#a855f7', '#06b6d4', '#a855f7'];
              return (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center transition-all hover:scale-110 border"
                  style={{
                    borderColor: `${colors[i]}20`,
                    background: 'rgba(255,255,255,0.6)',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors[i];
                    e.currentTarget.style.boxShadow = `0 4px 15px ${colors[i]}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${colors[i]}20`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#a855f7] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Ghost className="w-3 h-3" />
              Explore the GHOULVERSE
            </a>
            <span className="text-[#78716c]/20 hidden sm:inline">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#78716c] hover:text-[#06b6d4] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Gamepad2 className="w-3 h-3" />
              Play GHOULVERSE
            </a>
          </div>

          <p className="reveal text-[#78716c]/30 text-xs tracking-wider">
            &copy; 2025 <span className="font-zen text-[#a855f7]/60">{config.name}</span> — All rights reserved.
          </p>
          <p className="reveal text-[#78716c]/20 text-[10px] mt-2 tracking-wider">
            {config.name} is part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'} target="_blank" rel="noopener noreferrer"
              className="hover:text-[#a855f7] transition-colors">
              GHOULVERSE
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
