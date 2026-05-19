import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  type: 'mote' | 'sand' | 'wisp';
}

export default function ZenParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#c4b5fd', '#ddd6fe', '#e9d5ff', '#f3e8ff', '#d1d5db', '#e5e7eb'];

    const createParticle = (): Particle => {
      const typeRoll = Math.random();
      let type: Particle['type'];
      if (typeRoll < 0.5) type = 'mote';
      else if (typeRoll < 0.8) type = 'sand';
      else type = 'wisp';

      return {
        x: Math.random() * canvas.width,
        y: type === 'wisp' ? canvas.height + Math.random() * 30 : Math.random() * canvas.height,
        size: type === 'wisp' ? Math.random() * 15 + 8 : Math.random() * 2.5 + 0.5,
        speedY: type === 'wisp' ? -(Math.random() * 0.3 + 0.1) : (Math.random() - 0.5) * 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.2 + 0.04,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 1200 + 800,
        type,
      };
    };

    for (let i = 0; i < 40; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        const lifeRatio = p.life / p.maxLife;
        const fadeIn = Math.min(lifeRatio * 4, 1);
        const fadeOut = lifeRatio > 0.92 ? (1 - lifeRatio) / 0.08 : 1;
        const currentOpacity = p.opacity * fadeIn * fadeOut;

        ctx.save();
        ctx.globalAlpha = currentOpacity;

        if (p.type === 'mote') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentOpacity * 0.05;
          ctx.fill();
        } else if (p.type === 'sand') {
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        } else {
          // wisp
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentOpacity * 0.08;
          ctx.fill();
        }

        ctx.restore();

        if (p.life >= p.maxLife || (p.type === 'wisp' && p.y < -30)) {
          particlesRef.current[i] = createParticle();
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
