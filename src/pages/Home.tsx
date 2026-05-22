import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, Wind, CircleDot, Waves, Flame,
  Briefcase, Building2,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';
import ZenParticles from '@/components/ZenParticles';
import EcosystemMap from '@/components/EcosystemMap';
import MarketStats from '@/components/MarketStats';
import IPBadge from '@/components/IPBadge';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import InvestorCTA from '@/components/InvestorCTA';

gsap.registerPlugin(ScrollTrigger);

const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');
const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');

const PRODUCT_ICONS = [Wind, CircleDot, Waves, Flame, Flame];
const TABS = [
  { key: 'core' as const, label: 'Core' },
  { key: 'pro' as const, label: 'Pro' },
  { key: 'tool' as const, label: 'Tools' },
  { key: 'refill' as const, label: 'Refills' },
  { key: 'limited' as const, label: 'Limited' },
];

function FloatingOrb({ delay, size, color, className }: { delay: number; size: number; color: string; className?: string }) {
  return (
    <div className={`absolute rounded-full pointer-events-none blur-3xl opacity-[0.08] ${className || ''}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        animation: `float-orb 12s ease-in-out infinite ${delay}s`,
      }} />
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'core' | 'pro' | 'tool' | 'refill' | 'limited'>('core');
  const heroRef = useRef<HTMLDivElement>(null);
  const breathRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const collectiveRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const ipRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero: fade in like dawn
      gsap.from('.hero-fade', {
        opacity: 0,
        y: 30,
        duration: 2,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 0.5,
      });

      // Breathing animation on key elements
      gsap.to('.breathe', {
        scale: 1.03,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Floating orbs gentle drift
      gsap.utils.toArray('.orb-drift').forEach((orb: any, i: number) => {
        gsap.to(orb, {
          y: i % 2 === 0 ? -40 : 40,
          x: i % 3 === 0 ? 20 : -20,
          duration: 10 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // Scroll reveals — very slow and gentle
      [breathRef, scienceRef, productRef, collectiveRef, gameRef, portfolioRef, ctaRef, ecosystemRef, marketRef, ipRef, roadmapRef].forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            opacity: 0,
            y: 30,
            duration: 1.5,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play none none none' },
          });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const filtered = config.products.filter((p) => p.category === activeTab);

  return (
    <div className="relative font-sans min-h-screen overflow-x-hidden" style={{ background: '#f8f5ff' }}>
      {/* Floating orbs background */}
      <FloatingOrb delay={0} size={500} color="#a855f7" className="-top-32 -left-32" />
      <FloatingOrb delay={3} size={400} color="#06b6d4" className="top-1/3 -right-24" />
      <FloatingOrb delay={6} size={350} color="#a855f7" className="bottom-0 left-1/3" />
      <FloatingOrb delay={2} size={300} color="#c4b5fd" className="top-1/2 left-1/2" />

      <ZenParticles />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16"
        style={{ background: 'rgba(248,245,255,0.7)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/ghoul_logo.png" alt={config.name} className="w-10 h-10 object-contain" draggable={false} />
            <span className="font-zen text-sm tracking-[0.3em] text-[#a855f7]">{config.name}</span>
          </div>
          <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-[0.3em] uppercase text-[#78716c] hover:text-[#06b6d4] transition-colors">
            GHOULVERSE
          </a>
          <a href="#ecosystem" className="hidden md:flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#94a3b8] hover:text-[#a855f7] transition-colors">
            <Briefcase className="w-3 h-3" /> Investors
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center px-8 text-center">
        <div className="hero-fade mb-8 flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[9px] tracking-[0.3em] uppercase text-[#a855f7]/70"
            style={{ background: 'rgba(168,85,247,0.06)', borderRadius: '9999px', border: '1px solid rgba(168,85,247,0.1)' }}>
            <Building2 className="w-3 h-3" /> House of GHOUL
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#a855f7]/60">The Tranquil Gardens</span>
        </div>

        <h1 className="hero-fade font-zen leading-[0.9] mb-10">
          <span className="block text-[18vw] md:text-[12rem] text-[#a855f7]/90">Zen</span>
          <span className="block text-[18vw] md:text-[12rem] text-[#06b6d4]/80 -mt-4 md:-mt-8">Ghoul</span>
        </h1>

        <p className="hero-fade text-[#78716c]/70 text-base md:text-lg max-w-sm mb-12 leading-relaxed font-light">
          Calm in the chaos. Serenity in the storm. Restore your spirit — one breath at a time.
        </p>

        <div className="hero-fade">
          <a href="#sanctuary" className="group inline-flex items-center gap-3 px-8 py-4 font-zen text-sm tracking-wider text-[#a855f7] transition-all hover:scale-105"
            style={{ border: '1px solid rgba(168,85,247,0.3)', borderRadius: '9999px' }}>
            Find Your Calm
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-12 w-64 h-64 mx-auto">
          <img src="/ghoul_mascot.png" alt="ZenGhoul mascot" className="w-full h-full object-contain" draggable={false} style={{ animation: 'ghost-bob 2.5s ease-in-out infinite, ghost-sway 3.5s ease-in-out infinite' }} />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 mx-auto" style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.3), transparent)' }} />
        </div>
      </section>

      {/* ===== BREATH ===== */}
      <section ref={breathRef} className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal mb-16">
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-6 leading-tight">
              The chaos ends.<br />
              <span className="text-[#a855f7]">The calm begins.</span>
            </h2>
            <p className="text-[#78716c]/70 text-base max-w-md mx-auto leading-relaxed font-light">
              Stress that won't let go. Tension that lives in your shoulders. A mind that races at 3am. We don't fight the chaos — we dissolve it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Wind, value: '∞', label: 'Breaths Taken', color: '#a855f7' },
              { icon: CircleDot, value: '0', label: 'Stress Remaining', color: '#06b6d4' },
              { icon: Waves, value: '100%', label: 'Stillness Rate', color: '#a855f7' },
              { icon: Building2, value: '12', label: 'House of GHOUL', color: '#a855f7' },
            ].map((stat, i) => (
              <div key={i} className="reveal breathe p-10 text-center transition-all duration-700 hover:scale-[1.02]"
                style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '50%', aspectRatio: '1 / 1.1' }}>
                <stat.icon className="w-6 h-6 mx-auto mb-4" style={{ color: stat.color, opacity: 0.6 }} />
                <div className="font-zen text-3xl text-[#292524] mb-2">{stat.value}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#78716c]/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ECOSYSTEM ===== */}
      <section ref={ecosystemRef} id="ecosystem" className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#a855f7]/50 mb-4 block">The Ecosystem</span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-3">House of GHOUL</h2>
            <p className="font-zen text-lg text-[#a855f7]/80">Twelve brands. One universe. Infinite potential.</p>
          </div>
          <div className="reveal">
            <EcosystemMap />
          </div>
        </div>
      </section>

      {/* ===== SCIENCE ===== */}
      <section ref={scienceRef} className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#a855f7]/50 mb-4 block">Proprietary Technology</span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-3">The Science</h2>
            <p className="font-zen text-lg text-[#a855f7]/80">{config.science.subtitle}</p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-10" style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '32px' }}>
              <p className="text-[#78716c]/80 leading-relaxed font-light">{config.science.description}</p>
            </div>
            <div className="p-10" style={{ background: 'rgba(255,255,255,0.3)', borderRadius: '32px' }}>
              <p className="text-[#78716c]/60 leading-relaxed text-sm font-light">{config.science.adaptation}</p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.science.stats.map((stat, i) => (
              <div key={i} className="p-8 text-center" style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '24px' }}>
                <div className="font-zen text-2xl text-[#a855f7] mb-1">{stat.value}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IP ===== */}
      <section ref={ipRef} className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#a855f7]/50 mb-4 block">Intellectual Property</span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-3">Protected Assets</h2>
            <p className="text-[#78716c]/60 max-w-sm mx-auto font-light">Trademarked. Registered. Defensible.</p>
          </div>
          <div className="reveal">
            <IPBadge />
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section ref={productRef} id="sanctuary" className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#a855f7]/50 mb-4 block">Product Architecture</span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-3">The Sanctuary</h2>
            <p className="text-[#78716c]/60 max-w-sm mx-auto font-light">Five lines. Nine formulations. Total serenity.</p>
          </div>

          {/* Tabs */}
          <div className="reveal flex flex-wrap justify-center gap-3 mb-16">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = config.products.filter((p) => p.category === tab.key).length;
              return (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                  className="px-6 py-2.5 text-xs tracking-wider transition-all min-h-11"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #a855f7, #06b6d4)' : 'rgba(255,255,255,0.4)',
                    color: isActive ? '#fff' : '#78716c',
                    borderRadius: '9999px',
                    boxShadow: isActive ? '0 8px 25px rgba(168,85,247,0.2)' : 'none',
                  }}>
                  {tab.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Product Grid — Floating circles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#a855f7', '#06b6d4', '#c4b5fd'];
              const color = colors[i % colors.length];

              return (
                <div key={i} className="reveal orb-drift group p-10 text-center transition-all duration-700 hover:scale-[1.03]"
                  style={{
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: '50%',
                    aspectRatio: '1 / 1.15',
                    boxShadow: `0 8px 40px ${color}08`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 16px 50px ${color}15`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 8px 40px ${color}08`; }}>

                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${color}10`, border: `1px solid ${color}15` }}>
                    <Icon className="w-6 h-6" style={{ color, opacity: 0.7 }} />
                  </div>

                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#78716c]/40 block mb-3">{product.category}</span>

                  <h3 className="font-zen text-lg text-[#292524] mb-2 break-words">{product.name}</h3>
                  <p className="text-[#a855f7]/70 text-xs mb-3">{product.tagline}</p>
                  <p className="text-[#78716c]/50 text-xs leading-relaxed mb-4 font-light">{product.description}</p>

                  {product.heroIngredient && (
                    <div className="mb-3">
                      <span className="text-[9px] tracking-wider uppercase text-[#78716c]/30">Powered by </span>
                      <span className="text-[10px] font-medium" style={{ color }}>{product.heroIngredient}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-3 pt-3">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716c]/30">{product.volume}</span>
                    <span className="font-zen text-sm" style={{ color }}>{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MARKET ===== */}
      <section ref={marketRef} className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#a855f7]/50 mb-4 block">Market Opportunity</span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-3">The Numbers</h2>
            <p className="text-[#78716c]/60 max-w-sm mx-auto font-light">Wellness meets gaming. A $4.5T+ intersection.</p>
          </div>
          <div className="reveal">
            <MarketStats />
          </div>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section ref={roadmapRef} className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#a855f7]/50 mb-4 block">The Road Ahead</span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-3">Roadmap</h2>
            <p className="text-[#78716c]/60 max-w-sm mx-auto font-light">From idea to empire. Milestone by milestone.</p>
          </div>
          <div className="reveal">
            <RoadmapTimeline />
          </div>
        </div>
      </section>

      {/* ===== COLLECTIVE (LINEUP) ===== */}
      <section ref={collectiveRef} className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#06b6d4]/50 mb-4 block">The Collective</span>
            <h2 className="font-zen text-4xl md:text-5xl text-[#292524] mb-3">The Ghoulverse</h2>
            <p className="text-[#78716c]/60 max-w-sm mx-auto font-light">Twelve spirits. One universe. Find your path.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {OTHER_GHOULS.map((g) => (
              <a key={g.id}
                href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                target="_blank" rel="noopener noreferrer"
                className="reveal group flex flex-col items-center p-6 transition-all duration-700 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '50%', width: '120px', height: '120px' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 12px 40px ${g.color}10`; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="text-3xl mb-2">{g.icon}</div>
                <h3 className="font-zen text-[10px] text-[#292524] tracking-wider">{g.name}</h3>
                {!g.live && <span className="text-[8px] text-[#78716c]/20 mt-0.5">TBA</span>}
              </a>
            ))}
          </div>

          <div className="reveal text-center">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-zen text-sm tracking-wider text-[#a855f7] transition-all hover:scale-105"
              style={{ border: '1px solid rgba(168,85,247,0.3)', borderRadius: '9999px' }}>
              Enter the GHOULVERSE <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="reveal p-12 md:p-20 text-center"
            style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '50%', aspectRatio: '1' }}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 rounded-full opacity-[0.03] blur-3xl" style={{ background: '#a855f7' }} />
            </div>
            <Gamepad2 className="w-10 h-10 text-[#a855f7]/60 mx-auto mb-6" />
            <h2 className="font-zen text-3xl md:text-4xl text-[#292524] mb-4">Play GHOULVERSE</h2>
            <p className="text-[#78716c]/60 max-w-sm mx-auto mb-8 font-light">Pilot {config.name} through the Void. Battle bacteria, unlock all 12 ghouls.</p>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-zen text-sm tracking-wider text-[#a855f7] transition-all hover:scale-105"
              style={{ border: '1px solid rgba(168,85,247,0.3)', borderRadius: '9999px' }}>
              <Gamepad2 className="w-4 h-4" /> Play Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section ref={portfolioRef} className="relative py-20 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#78716c]/30 mb-2 block">The House of GHOUL</span>
            <h3 className="font-zen text-2xl text-[#292524]">The Portfolio</h3>
          </div>
          <div className="reveal flex flex-wrap justify-center gap-4">
            {config.crossLinks.map((g) => {
              const isActive = g.id === config.id;
              return (
                <a key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 transition-all duration-500"
                  style={{
                    background: isActive ? `${g.color}08` : 'rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    width: '90px',
                    height: '90px',
                    border: isActive ? `1px solid ${g.color}30` : '1px solid transparent',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.borderColor = `${g.color}20`; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'transparent'; }}>
                  <div className="text-xl group-hover:scale-110 transition-transform">{g.icon}</div>
                  <p className="text-[8px] tracking-wider uppercase text-[#292524] mt-1">{g.name.replace(' GHOUL', '')}</p>
                  {isActive && <span className="text-[7px] mt-0.5" style={{ color: g.color }}>{config.products.length} Products</span>}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INVESTOR CTA ===== */}
      <section className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="reveal">
            <InvestorCTA />
          </div>
        </div>
      </section>

      {/* ===== CTA / FOOTER ===== */}
      <section ref={ctaRef} className="relative py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-xl mx-auto text-center">
          <div className="reveal mb-10">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#a855f7]/50 mb-4 block">Stay in the Loop</span>
            <h2 className="font-zen text-4xl text-[#292524] mb-4">{config.cta.headline}</h2>
            <p className="text-[#78716c]/60 font-light">{config.cta.subheadline}</p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input type="email" placeholder={config.cta.placeholderText}
              className="flex-1 px-6 py-4 text-sm text-[#292524] placeholder:text-[#78716c]/25 outline-none bg-transparent font-light"
              style={{ border: '1px solid rgba(168,85,247,0.15)', borderRadius: '9999px' }} />
            <button className="px-8 py-4 font-zen text-sm tracking-wider text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', borderRadius: '9999px', boxShadow: '0 8px 25px rgba(168,85,247,0.2)' }}>
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-4 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#a855f7', '#06b6d4', '#a855f7'];
              return (
                <a key={i} href="#" className="w-11 h-11 flex items-center justify-center transition-all hover:scale-110"
                  style={{ borderRadius: '50%', border: `1px solid ${colors[i]}15`, background: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${colors[i]}30`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${colors[i]}15`; }}>
                  <Icon className="w-4 h-4" style={{ color: colors[i], opacity: 0.6 }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex items-center justify-center gap-4 text-xs font-light">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="text-[#78716c]/50 hover:text-[#a855f7] transition-colors flex items-center gap-1 py-2 px-3 min-h-11">
              <Ghost className="w-3 h-3" /> Explore GHOULVERSE
            </a>
            <span className="text-[#78716c]/10">|</span>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="text-[#78716c]/50 hover:text-[#06b6d4] transition-colors flex items-center gap-1 py-2 px-3 min-h-11">
              <Gamepad2 className="w-3 h-3" /> Play GHOULVERSE
            </a>
            <span className="text-[#78716c]/10">|</span>
            <a href="#ecosystem"
              className="text-[#78716c]/50 hover:text-[#f59e0b] transition-colors flex items-center gap-1 py-2 px-3 min-h-11">
              <Briefcase className="w-3 h-3" /> Investors
            </a>
          </div>

          <p className="reveal text-[#78716c]/15 text-xs tracking-wider font-light">
            &copy; 2025 <span className="font-zen text-[#a855f7]/30">{config.name}</span> — Part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition-colors">GHOULVERSE</a>
          </p>
        </div>
      </section>
    </div>
  );
}
