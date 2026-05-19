import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, Gamepad2,
  Wind, Droplets, Flame, Sun, Moon,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

const PRODUCT_ICONS = [Wind, Droplets, Flame, Sun, Moon];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const sanctuaryRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: 'power2.out',
          delay: 0.6,
        });
      }

      const sections = [philosophyRef, productRef, sanctuaryRef, gameRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
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
      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-josefin text-xs tracking-[0.4em] uppercase text-[#9ca3af]">
            {config.name}
          </span>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.3em] uppercase text-[#c4b5fd] hover:text-[#9ca3af] transition-colors duration-700"
          >
            GHOULVERSE
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div ref={heroTextRef} className="z-10 pt-20 md:pt-0 max-w-2xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c4b5fd] mb-10">
              The Tranquil Gardens
            </p>

            <h1 className="font-josefin text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight mb-8 text-[#374151]">
              Zen
              <span className="block text-[#c4b5fd]">Ghoul</span>
            </h1>

            <p className="text-[#9ca3af] text-sm md:text-base max-w-sm mb-12 leading-relaxed font-light">
              {config.tagline}. In the silence between breaths, purpose is found.
            </p>

            <a
              href="#philosophy"
              className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9ca3af] hover:text-[#c4b5fd] transition-colors duration-700 group"
            >
              <span className="w-8 h-px bg-[#c4b5fd] group-hover:w-12 transition-all duration-700" />
              Discover
            </a>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section id="philosophy" ref={philosophyRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c4b5fd] mb-16">
              Philosophy
            </p>

            <blockquote className="font-josefin text-2xl md:text-4xl font-light leading-relaxed text-[#374151] mb-12">
              "In the silence between breaths,
              <span className="text-[#c4b5fd]"> ZEN GHOUL </span>
              finds its purpose."
            </blockquote>

            <p className="text-[#9ca3af] text-sm leading-[1.8] max-w-md font-light">
              This meditative entity brings tranquility to your cleaning routine.
              Every surface wiped is a moment of mindfulness. Every room cleared,
              a mind uncluttered.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THE PRACTICE (PRODUCTS) ===== */}
      <section ref={productRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c4b5fd] mb-6">
              The Practice
            </p>
            <h2 className="font-josefin text-3xl md:text-4xl font-light text-[#374151]">
              Essentials
            </h2>
          </div>

          <div className="space-y-0">
            {config.products.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#c4b5fd', '#a5b4fc', '#93c5fd', '#ddd6fe', '#e9d5ff'];
              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className="reveal group py-8 border-b border-[#e5e7eb] transition-all duration-700 hover:pl-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className="text-[10px] tracking-[0.3em] text-[#d1d5db] font-josefin">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-josefin text-lg md:text-xl font-light text-[#374151] group-hover:text-[#c4b5fd] transition-colors duration-700">
                          {product.name}
                        </h3>
                        <p className="text-[#9ca3af] text-xs mt-1 font-light">
                          {product.description || 'A mindful addition to your ritual.'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {product.comingSoon && (
                        <span className="text-[9px] tracking-[0.2em] uppercase text-[#c4b5fd]">
                          Soon
                        </span>
                      )}
                      <Icon className="w-4 h-4 transition-colors duration-700" style={{ color: `${color}60` }}
                        strokeWidth={1} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THE SANCTUARY (UNIVERSE) ===== */}
      <section ref={sanctuaryRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="reveal mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c4b5fd] mb-6">
              The Sanctuary
            </p>
            <h2 className="font-josefin text-3xl md:text-4xl font-light text-[#374151]">
              The GHOULVERSE
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e5e7eb]">
            {OTHER_GHOULS.map((g) => (
              <a
                key={g.id}
                href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group p-6 md:p-8 bg-[#f8f9fa] text-center transition-all duration-700 hover:bg-[#f3e8ff]/30"
              >
                <span className="text-xl md:text-2xl block mb-3 group-hover:scale-110 transition-transform duration-700">
                  {g.icon}
                </span>
                <span className="font-josefin text-xs tracking-wider text-[#374151] group-hover:text-[#c4b5fd] transition-colors duration-700">
                  {g.name}
                </span>
                <span className="block text-[9px] tracking-[0.2em] uppercase text-[#d1d5db] mt-1">
                  {g.realm}
                </span>
                {!g.live && (
                  <span className="text-[8px] tracking-[0.15em] uppercase text-[#e5e7eb] block mt-1">
                    Resting
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="reveal mt-16 text-center">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9ca3af] hover:text-[#c4b5fd] transition-colors duration-700 group"
            >
              <span className="w-8 h-px bg-[#c4b5fd] group-hover:w-12 transition-all duration-700" />
              Enter the GHOULVERSE
              <span className="w-8 h-px bg-[#c4b5fd] group-hover:w-12 transition-all duration-700" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal">
            <Gamepad2 className="w-6 h-6 text-[#c4b5fd] mx-auto mb-8" strokeWidth={1} />

            <h2 className="font-josefin text-3xl md:text-4xl font-light text-[#374151] mb-6">
              Play GHOULVERSE
            </h2>

            <p className="text-[#9ca3af] text-sm leading-[1.8] max-w-md mx-auto mb-10 font-light">
              Pilot {config.name} through the Void in this epic endless runner.
              Battle bacteria, unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>

            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9ca3af] hover:text-[#c4b5fd] transition-colors duration-700 group"
            >
              <span className="w-8 h-px bg-[#c4b5fd] group-hover:w-12 transition-all duration-700" />
              Begin
              <span className="w-8 h-px bg-[#c4b5fd] group-hover:w-12 transition-all duration-700" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CTA ===== */}
      <section ref={ctaRef} className="relative py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-md mx-auto text-center">
          <div className="reveal mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c4b5fd] mb-8">
              Begin Your Journey
            </p>
            <h2 className="font-josefin text-3xl md:text-4xl font-light text-[#374151] mb-4">
              {config.cta.headline}
            </h2>
            <p className="text-[#9ca3af] text-sm font-light">
              {config.cta.subheadline}
            </p>
          </div>

          <div className="reveal flex flex-col gap-4 mb-20">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="w-full px-0 py-4 text-center text-sm text-[#374151] placeholder:text-[#d1d5db] outline-none bg-transparent border-b border-[#e5e7eb] focus:border-[#c4b5fd] transition-colors duration-700 font-light"
            />
            <button
              className="py-4 font-josefin text-xs tracking-[0.3em] uppercase text-[#9ca3af] hover:text-[#c4b5fd] transition-colors duration-700"
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-8 mb-16">
            {[Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-[#d1d5db] hover:text-[#c4b5fd] transition-colors duration-700"
              >
                <Icon className="w-4 h-4" strokeWidth={1} />
              </a>
            ))}
          </div>

          <div className="reveal mb-8 flex items-center justify-center gap-6 text-[10px] tracking-[0.2em] uppercase">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d1d5db] hover:text-[#c4b5fd] transition-colors duration-700"
            >
              GHOULVERSE
            </a>
            <span className="text-[#e5e7eb]">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d1d5db] hover:text-[#c4b5fd] transition-colors duration-700"
            >
              Play
            </a>
          </div>

          <p className="reveal text-[#e5e7eb] text-[10px] tracking-[0.3em]">
            &copy; 2025 <span className="text-[#c4b5fd]">{config.name}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
