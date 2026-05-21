import { config } from '@/data/ghoul.config';
import { ArrowRight, Globe, Gamepad2 } from 'lucide-react';

const ALL_GHOULS = [
  { id: 'party', name: 'PARTY', color: '#ff00ff', icon: '🎉', live: true },
  { id: 'beauty', name: 'BEAUTY', color: '#ec4899', icon: '💄', live: true },
  { id: 'garden', name: 'GARDEN', color: '#22c55e', icon: '🌿', live: true },
  { id: 'zen', name: 'ZEN', color: '#a855f7', icon: '🧘', live: true },
  { id: 'tradie', name: 'TRADIE', color: '#eab308', icon: '🔧', live: true },
  { id: 'geek', name: 'GEEK', color: '#00d4ff', icon: '💻', live: true },
];

export default function EcosystemMap() {
  const currentId = config.id;

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#ff00ff] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            The House of GHOUL
          </span>
          <h2 className="font-mono text-4xl md:text-5xl text-white mb-4">
            You Are Looking at 1 of 6
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            The House of GHOUL is a portfolio of specialised cleaning brands, each owning a 
            distinct market vertical — unified under one universe, one game, and one investment thesis.
          </p>
        </div>

        {/* Constellation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {ALL_GHOULS.map((g) => {
            const isCurrent = g.id === currentId;
            return (
              <a
                key={g.id}
                href={config.crossLinks.find((c) => c.id === g.id)?.domain || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-1 ${
                  isCurrent
                    ? 'border-2 border-[#ff00ff] bg-[#ff00ff]/10'
                    : 'border border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                {isCurrent && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#ff00ff] text-white">
                    You Are Here
                  </span>
                )}
                <div className="text-3xl mb-2">{g.icon}</div>
                <p className="font-mono text-xs text-white font-bold">{g.name}</p>
                <div
                  className="w-2 h-2 rounded-full mx-auto mt-2"
                  style={{ backgroundColor: g.color, boxShadow: `0 0 8px ${g.color}` }}
                />
              </a>
            );
          })}
        </div>

        {/* Aggregate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Product SKUs', value: '54', sub: 'Across 6 brands' },
            { label: 'Market Verticals', value: '6', sub: 'Zero overlap' },
            { label: 'Game Characters', value: '8', sub: 'In GOO RUNNER' },
            { label: 'Trademarks', value: '6+', sub: 'IP Australia' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-5 text-center">
              <p className="font-mono text-3xl md:text-4xl text-[#ff00ff] mb-1">{stat.value}</p>
              <p className="text-white text-xs font-bold tracking-wider uppercase mb-1">{stat.label}</p>
              <p className="text-[#94a3b8] text-[10px]">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.ghoulverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs tracking-wider uppercase text-[#0a0a1a] transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #ff00ff, #00f0ff)' }}
          >
            <Globe className="w-4 h-4" />
            Explore the Full Portfolio
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={config.gameUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs tracking-wider uppercase border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all"
          >
            <Gamepad2 className="w-4 h-4" />
            Play GOO RUNNER
          </a>
        </div>
      </div>
    </section>
  );
}
