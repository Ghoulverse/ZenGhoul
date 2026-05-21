import { config } from '@/data/ghoul.config';
import { TrendingUp, Award, Factory, ShoppingBag } from 'lucide-react';

export default function MarketStats() {
  const ICONS = [TrendingUp, Award, Factory, ShoppingBag];

  return (
    <section className="relative py-24 md:py-32 px-4" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,0,255,0.03), transparent)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00f0ff] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Investor Intelligence
          </span>
          <h2 className="font-mono text-4xl md:text-5xl text-white mb-4">
            Market & Traction
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            {config.name} operates in the {config.marketSize}. Formulations are complete. 
            Manufacturing is secured. The only missing ingredient is scale.
          </p>
        </div>

        {/* Market Size Hero */}
        <div className="glass-glow rounded-2xl p-8 md:p-12 text-center mb-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at center, #ff00ff, transparent 70%)' }} />
          <p className="relative text-[#94a3b8] text-xs tracking-[0.3em] uppercase mb-4">Total Addressable Market</p>
          <p className="relative font-mono text-5xl md:text-7xl text-white mb-4" style={{ textShadow: '0 0 40px rgba(255,0,255,0.4)' }}>
            {config.marketSize.split(' ')[0]}
          </p>
          <p className="relative text-[#94a3b8] text-sm">{config.marketSize.split(' ').slice(1).join(' ')}</p>
        </div>

        {/* Traction Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {config.traction.map((t, i) => {
            const Icon = ICONS[i % ICONS.length];
            const statusColors = {
              complete: { bg: 'rgba(0,255,65,0.1)', border: 'rgba(0,255,65,0.3)', text: '#00ff41' },
              'in-progress': { bg: 'rgba(0,240,255,0.1)', border: 'rgba(0,240,255,0.3)', text: '#00f0ff' },
              upcoming: { bg: 'rgba(255,0,255,0.1)', border: 'rgba(255,0,255,0.3)', text: '#ff00ff' },
            };
            const s = statusColors[t.status];
            return (
              <div
                key={t.label}
                className="rounded-xl p-5 transition-all hover:-translate-y-1"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4" style={{ color: s.text }} />
                  <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: s.text }}>
                    {t.status === 'complete' ? 'COMPLETE' : t.status === 'in-progress' ? 'IN PROGRESS' : 'UPCOMING'}
                  </span>
                </div>
                <p className="font-mono text-xl text-white mb-1">{t.value}</p>
                <p className="text-[#94a3b8] text-xs">{t.label}</p>
              </div>
            );
          })}
        </div>

        {/* Investor CTA */}
        <div className="text-center">
          <a
            href="#investors"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-sm tracking-wider uppercase text-[#0a0a1a] transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #ff00ff, #00f0ff)', boxShadow: '0 0 30px rgba(255,0,255,0.3)' }}
          >
            <TrendingUp className="w-4 h-4" />
            Request the Full Financial Model
          </a>
          <p className="text-[#94a3b8]/50 text-xs mt-3">
            Investor deck available upon NDA. Contact: investors@ghoulverse.com
          </p>
        </div>
      </div>
    </section>
  );
}
