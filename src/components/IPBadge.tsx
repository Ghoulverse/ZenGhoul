import { config } from '@/data/ghoul.config';
import { Shield, FileCheck, Lock, Globe } from 'lucide-react';

export default function IPBadge() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00f0ff] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Intellectual Property
          </span>
          <h2 className="font-mono text-4xl md:text-5xl text-white mb-4">
            IP & Trademark Portfolio
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">
            Every ghoul is a trademarked entity. The GHOULVERSE is a protected intellectual property 
            ecosystem designed for multi-channel monetisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Main IP Card */}
          <div className="glass-glow rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at top right, #00f0ff, transparent 70%)' }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <p className="font-mono text-sm text-white font-bold">{config.name}</p>
                  <p className="text-[#94a3b8] text-xs">Trademark Protected</p>
                </div>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{config.ipStatus}</p>
              <div className="flex items-center gap-2 text-[#00f0ff] text-xs">
                <FileCheck className="w-4 h-4" />
                <span>IP Australia — Class 3 (Cleaning Products)</span>
              </div>
            </div>
          </div>

          {/* Protection Grid */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Lock, title: 'Brand Lockup', desc: 'Logo, name, and character design trademarked across all classes.', color: '#ff00ff' },
              { icon: Globe, title: 'International Strategy', desc: 'US, UK, and EU trademark filings planned for Phase 3.', color: '#00f0ff' },
              { icon: Shield, title: 'Character IP', desc: 'Each ghoul is a distinct character with product-line, game, and merch potential.', color: '#f59e0b' },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${item.color}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="font-mono text-sm text-white font-bold mb-1">{item.title}</p>
                  <p className="text-[#94a3b8] text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TM Certificates Strip */}
        <div className="glass rounded-xl p-6 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-[#94a3b8] text-xs">
            <FileCheck className="w-4 h-4 text-[#00ff41]" />
            <span>IP Australia Filed</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-[#94a3b8] text-xs">
            <FileCheck className="w-4 h-4 text-[#00ff41]" />
            <span>IP Right Accepted</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-[#94a3b8] text-xs">
            <FileCheck className="w-4 h-4 text-[#00ff41]" />
            <span>Early Acceptance</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-[#94a3b8] text-xs">
            <Shield className="w-4 h-4 text-[#00f0ff]" />
            <span>6 Independent TM Filings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
