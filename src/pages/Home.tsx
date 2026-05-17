import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Twitter, Instagram, Youtube, ChevronDown, Droplets, Skull, Heart, Sparkles, ArrowRight, Gamepad2, Ghost, ExternalLink } from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

// Cross-links are now driven by ghoul.config.ts
const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const meetRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const universeRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroGhostRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        });
      }

      if (heroGhostRef.current) {
        gsap.from(heroGhostRef.current, {
          scale: 0,
          opacity: 0,
          duration: 1.2,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.2,
        });
      }

      const sections = [meetRef, productRef, universeRef, gameRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative font-inter">
      {/* ===== TOP BAR ===== */}
      <div className="fixed top-0 left-0 right-0 z-50 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ghost className="w-5 h-5 text-ghoul-cyan" />
            <span className="font-josefin text-lg text-ghoul-cyan tracking-wider">{config.name}</span>
          </div>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-ghoul-muted hover:text-ghoul-cyan transition-colors"
          >
            Enter the GHOULVERSE
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-[100dvh] px-4 overflow-hidden"
      >
        <div ref={heroTextRef} className="flex flex-col items-center text-center z-10">
          <img
            ref={heroGhostRef}
            src="/ghost_main.png"
            alt={config.name}
            className="w-32 h-32 md:w-48 md:h-48 object-contain mb-6 pointer-events-none select-none"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.5)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))',
            }}
          />

          <h1 className="font-josefin text-6xl md:text-8xl lg:text-9xl gradient-text leading-none tracking-wide mb-4">
            {config.name}
          </h1>

          <p className="text-ghoul-muted text-lg md:text-xl font-light tracking-widest uppercase mb-8">
            Your friendly neighborhood ectoplasm
          </p>

          <p className="text-ghoul-cyan/60 text-sm animate-pulse-hint tracking-wider">
            Click me if you dare!
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="w-8 h-8 text-ghoul-cyan/40" />
        </div>
      </section>

      {/* ===== MEET THE GHOST ===== */}
      <section ref={meetRef} className="relative py-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal font-josefin text-4xl md:text-5xl gradient-text text-center mb-16">
            Meet Your Mascot
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="reveal glass-card rounded-2xl p-6 text-center group hover:border-ghoul-cyan/30 transition-all duration-300 hover:-translate-y-2">
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src="/ghost_main.png"
                  alt="Friendly"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.4))' }}
                />
              </div>
              <h3 className="font-josefin text-2xl text-ghoul-cyan mb-2">Friendly</h3>
              <p className="text-ghoul-muted text-sm leading-relaxed">
                Always ready with a smile and a wave. The cutest ghost you'll ever meet!
              </p>
            </div>

            <div className="reveal glass-card rounded-2xl p-6 text-center group hover:border-ghoul-purple/30 transition-all duration-300 hover:-translate-y-2">
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src="/ghost_wave.png"
                  alt="Social"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))' }}
                />
              </div>
              <h3 className="font-josefin text-2xl text-ghoul-purple mb-2">Social</h3>
              <p className="text-ghoul-muted text-sm leading-relaxed">
                Loves making new friends and spreading good vibes across the afterlife.
              </p>
            </div>

            <div className="reveal glass-card rounded-2xl p-6 text-center group hover:border-red-400/30 transition-all duration-300 hover:-translate-y-2">
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src="/ghost_boo.png"
                  alt="Spooky"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.4))' }}
                />
              </div>
              <h3 className="font-josefin text-2xl text-red-400 mb-2">Spooky</h3>
              <p className="text-ghoul-muted text-sm leading-relaxed">
                Don't make him mad... or type "boo". You've been warned.
              </p>
            </div>
          </div>

          <div className="reveal glass-card rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Droplets className="w-5 h-5 text-ghoul-cyan" />
                  <span className="font-josefin text-3xl text-ghoul-cyan">∞</span>
                </div>
                <p className="text-ghoul-muted text-xs uppercase tracking-wider">Ectoplasm</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Skull className="w-5 h-5 text-ghoul-purple" />
                  <span className="font-josefin text-3xl text-ghoul-purple">1,337</span>
                </div>
                <p className="text-ghoul-muted text-xs uppercase tracking-wider">People Scared</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  <span className="font-josefin text-3xl text-pink-400">100%</span>
                </div>
                <p className="text-ghoul-muted text-xs uppercase tracking-wider">Cuteness</p>
              </div>
            </div>
          </div>

          <p className="reveal text-center text-ghoul-muted/50 text-xs mt-8 tracking-wider">
            Try double-clicking the ghost, pressing spacebar, or typing "boo"...
          </p>
        </div>
      </section>

      {/* ===== PRODUCTS TEASER ===== */}
      <section ref={productRef} className="relative py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="reveal font-josefin text-4xl md:text-5xl gradient-text mb-4">
            Something {config.isLeader ? 'Gooey' : 'Magical'} is Coming...
          </h2>
          <p className="reveal text-ghoul-muted text-lg mb-16">Get ready for the drop.</p>

          <div className="reveal flex items-center justify-center gap-8 md:gap-16 mb-16">
            {config.products.slice(0, 3).map((product, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(10, 10, 18, 0.8)',
                    border: '1px solid rgba(0, 212, 255, 0.15)',
                    filter: product.comingSoon ? 'blur(2px)' : 'none',
                  }}
                >
                  <span className="font-josefin text-2xl text-ghoul-muted/60">
                    {product.comingSoon ? '???' : product.name.charAt(0)}
                  </span>
                </div>
                <span className="text-ghoul-muted/40 text-xs tracking-wider">
                  {product.comingSoon ? 'SOON' : product.name}
                </span>
              </div>
            ))}
          </div>

          <div className="reveal flex justify-center">
            <div className="relative w-32 h-12">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #00d4ff, #a855f7)',
                  animation: 'slime-drip 2s ease-in-out infinite',
                }}
              />
              <div
                className="absolute top-0 left-1/3 w-1 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #a855f7, #6366f1)',
                  animation: 'slime-drip 2.5s ease-in-out infinite',
                  animationDelay: '0.5s',
                }}
              />
              <div
                className="absolute top-0 left-2/3 w-1 h-5 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #00d4ff, #6366f1)',
                  animation: 'slime-drip 1.8s ease-in-out infinite',
                  animationDelay: '1s',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE GHOULVERSE PORTAL ===== */}
      <section ref={universeRef} className="relative py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="reveal inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-ghoul-purple/20 text-ghoul-purple bg-ghoul-purple/5 mb-4">
              The Universe
            </span>
            <h2 className="reveal font-josefin text-4xl md:text-6xl gradient-text mb-4">
              You Are Not Alone
            </h2>
            <p className="reveal text-ghoul-muted max-w-2xl mx-auto">
              {config.name} is just one of eight legendary entities in the GHOULVERSE.
              Each realm has its own master. Discover them all.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {OTHER_GHOULS.map((g) => (
              <a
                key={g.id}
                href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal glass-card rounded-xl p-4 text-center group hover:border-ghoul-cyan/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {g.icon}
                </div>
                <h3 className="font-josefin text-sm text-ghoul-text mb-0.5">{g.name}</h3>
                <p className="text-ghoul-muted/60 text-[10px] uppercase tracking-wider">{g.realm}</p>
                {!g.live && (
                  <span className="text-[10px] text-ghoul-muted/40 uppercase tracking-wider">Via GHOULVERSE</span>
                )}
              </a>
            ))}
          </div>

          <div className="reveal text-center">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-ghoul-bg tracking-wider uppercase transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7, #ff00ff)' }}
            >
              Enter the GHOULVERSE
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== PLAY GOO RUNNER ===== */}
      <section ref={gameRef} className="relative py-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-16 text-center relative overflow-hidden" style={{ borderColor: 'rgba(0, 212, 255, 0.2)' }}>
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent 70%)' }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)' }}
            />

            <Gamepad2 className="reveal w-12 h-12 text-ghoul-cyan mx-auto mb-6" />
            <h2 className="reveal font-josefin text-4xl md:text-5xl gradient-text mb-4 relative z-10">
              Play GOO RUNNER
            </h2>
            <p className="reveal text-ghoul-muted max-w-xl mx-auto mb-8 relative z-10">
              Pilot {config.name} through the Void in this epic endless runner. Battle real bacteria,
              unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-ghoul-bg tracking-wider uppercase transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}
            >
              <Gamepad2 className="w-5 h-5" />
              Play Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA / FOOTER ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-32 px-4">
        <div className="max-w-lg mx-auto text-center">
          <Sparkles className="reveal w-8 h-8 text-ghoul-gold mx-auto mb-6" />

          <h2 className="reveal font-josefin text-4xl md:text-5xl gradient-text mb-4">
            {config.cta.headline}
          </h2>
          <p className="reveal text-ghoul-muted mb-10">
            {config.cta.subheadline}
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-3 rounded-xl text-ghoul-text placeholder:text-ghoul-muted/50 outline-none transition-all"
              style={{
                background: 'rgba(10, 10, 18, 0.8)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)'; }}
            />
            <button
              className="px-6 py-3 rounded-xl font-medium text-ghoul-bg transition-all hover:scale-105 hover:shadow-glow active:scale-95"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-4 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:border-ghoul-cyan/50"
                style={{
                  background: 'rgba(10, 10, 18, 0.8)',
                  border: '1px solid rgba(100, 116, 139, 0.2)',
                }}
              >
                <Icon className="w-4 h-4 text-ghoul-muted" />
              </a>
            ))}
          </div>

          {/* Universe links */}
          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghoul-muted hover:text-ghoul-cyan transition-colors flex items-center gap-1"
            >
              <Ghost className="w-3 h-3" />
              Explore the GHOULVERSE
            </a>
            <span className="text-ghoul-muted/30 hidden sm:inline">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ghoul-muted hover:text-ghoul-cyan transition-colors flex items-center gap-1"
            >
              <Gamepad2 className="w-3 h-3" />
              Play GOO RUNNER
            </a>
          </div>

          <p className="reveal text-ghoul-muted/40 text-sm">
            &copy; 2025 <span className="font-josefin text-ghoul-cyan/60">{config.name}</span> — All ectoplasm reserved.
          </p>
          <p className="reveal text-ghoul-muted/30 text-xs mt-2">
            {config.name} is part of the <a href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'} target="_blank" rel="noopener noreferrer" className="hover:text-ghoul-cyan transition-colors">GHOULVERSE</a>
          </p>
        </div>
      </section>
    </div>
  );
}
