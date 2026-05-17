import GhostMascot from '@/components/GhostMascot';
import AmbientParticles from '@/components/AmbientParticles';
import Home from '@/pages/Home';

export default function App() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Ambient floating particles */}
      <AmbientParticles />

      {/* The interactive ghost mascot */}
      <GhostMascot />

      {/* Page content */}
      <Home />
    </>
  );
}
