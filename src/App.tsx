import ZenMascot from '@/components/ZenMascot';
import ZenParticles from '@/components/ZenParticles';
import Home from '@/pages/Home';

export default function App() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Ambient zen particles (smoke, sand, motes) */}
      <ZenParticles />

      {/* The interactive zen mascot */}
      <ZenMascot />

      {/* Page content */}
      <Home />
    </>
  );
}
