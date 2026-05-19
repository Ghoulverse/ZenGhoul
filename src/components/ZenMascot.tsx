import { useEffect, useRef, useState, useCallback } from 'react';
import { useZenCursor } from '@/hooks/useZenCursor';

interface SmokeWisp {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  opacity: number;
  maxSize: number;
}

interface MiniZenGhoul {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
  rotation: number;
}

const SPEECH_LINES = [
  "Breathe deeply...",
  "Find your center...",
  "Namaste...",
  "Be present...",
  "Let go...",
  "Peace flows...",
];

function ZenGhostSVG({ expression, breathPhase, isHovered }: {
  expression: number;
  breathPhase: number;
  isHovered: boolean;
}) {
  const breathScale = 1 + Math.sin(breathPhase * Math.PI * 2) * 0.03;
  const hoverScale = isHovered ? 1.04 : 1;
  const totalScale = breathScale * hoverScale;

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      style={{
        filter: `drop-shadow(0 0 ${isHovered ? 18 : 10}px rgba(196,181,253,${isHovered ? 0.35 : 0.2}))`,
        transform: `scale(${totalScale})`,
        transition: 'transform 0.6s ease-out',
      }}
    >
      <defs>
        <radialGradient id="zenBody" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#e9d5ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ddd6fe" stopOpacity="0.75" />
        </radialGradient>
        <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ensō circle behind (Zen expression) */}
      {expression === 0 && (
        <circle cx="100" cy="100" r="88" fill="none" stroke="#c4b5fd" strokeWidth="1.5" opacity="0.15" />
      )}

      {/* Breath aura ring (Breathe expression) */}
      {expression === 1 && (
        <circle cx="100" cy="100" r={75 + Math.sin(breathPhase * Math.PI * 2) * 10}
          fill="none" stroke="#c4b5fd" strokeWidth="1" opacity={0.15 + Math.sin(breathPhase * Math.PI * 2) * 0.1} />
      )}

      {/* Enlightenment aura */}
      {expression === 2 && (
        <>
          <circle cx="100" cy="100" r="95" fill="url(#auraGrad)" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="#c4b5fd" strokeWidth="0.5" opacity="0.2" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="#ddd6fe" strokeWidth="0.5" opacity="0.15" />
          {/* Chakra points */}
          <circle cx="100" cy="55" r="4" fill="#c4b5fd" opacity="0.6" />
          <circle cx="100" cy="75" r="4" fill="#a5b4fc" opacity="0.5" />
          <circle cx="100" cy="95" r="4" fill="#93c5fd" opacity="0.5" />
          <circle cx="100" cy="115" r="4" fill="#a5b4fc" opacity="0.5" />
          <circle cx="100" cy="135" r="4" fill="#c4b5fd" opacity="0.6" />
        </>
      )}

      {/* Ghost body */}
      <path
        d="M100 15 C140 15 170 45 170 88 C170 112 165 132 160 148 C157 156 150 152 146 160 C142 168 135 164 130 172 C125 180 119 176 114 184 C109 192 103 188 100 196 C97 188 91 192 86 184 C81 176 75 180 70 172 C65 164 58 168 54 160 C50 152 43 156 40 148 C35 130 30 110 30 88 C30 45 60 15 100 15Z"
        fill="url(#zenBody)"
        stroke="rgba(196,181,253,0.25)"
        strokeWidth="1"
      />

      {expression === 0 && (
        <>
          {/* Zen - Closed eyes, gentle smile, incense */}
          {/* Closed eyes */}
          <path d="M56 78 Q68 82 80 78" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M120 78 Q132 82 144 78" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
          {/* Eyebrows - relaxed */}
          <path d="M58 68 Q68 65 78 68" fill="none" stroke="#9ca3af" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M122 68 Q132 65 142 68" fill="none" stroke="#9ca3af" strokeWidth="0.8" strokeLinecap="round" />

          {/* Gentle smile */}
          <path d="M90 110 Q100 116 110 110" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />

          {/* Incense stick */}
          <line x1="155" y1="120" x2="165" y2="85" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
          {/* Incense tip glow */}
          <circle cx="165" cy="85" r="3" fill="#fbbf24" opacity="0.8" />
          <circle cx="165" cy="83" r="1.5" fill="#f97316" opacity="0.6" />

          {/* Third eye dot */}
          <circle cx="100" cy="58" r="2.5" fill="#c4b5fd" opacity="0.6" />
        </>
      )}

      {expression === 1 && (
        <>
          {/* Breathe - Open calm eyes, expanding */}
          <ellipse cx="68" cy="78" rx="13" ry="11" fill="#fff" />
          <circle cx="68" cy="78" r="5.5" fill="#6b7280" />
          <circle cx="69" cy="76" r="2" fill="#fff" />
          <ellipse cx="132" cy="78" rx="13" ry="11" fill="#fff" />
          <circle cx="132" cy="78" r="5.5" fill="#6b7280" />
          <circle cx="133" cy="76" r="2" fill="#fff" />

          {/* Calm smile */}
          <path d="M92 112 Q100 118 108 112" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />

          {/* Hands in mudra position */}
          <ellipse cx="45" cy="125" rx="10" ry="8" fill="#e9d5ff" opacity="0.5" transform="rotate(-20 45 125)" />
          <ellipse cx="155" cy="125" rx="10" ry="8" fill="#e9d5ff" opacity="0.5" transform="rotate(20 155 125)" />

          {/* Breath indicator circles around body */}
          <circle cx="100" cy="100" r={60 + Math.sin(breathPhase * Math.PI * 2) * 8}
            fill="none" stroke="#c4b5fd" strokeWidth="0.5" opacity={0.1 + Math.sin(breathPhase * Math.PI * 2) * 0.05} />
        </>
      )}

      {expression === 2 && (
        <>
          {/* Enlightenment - Glowing eyes, radiant */}
          <ellipse cx="68" cy="78" rx="14" ry="12" fill="#fff" />
          <circle cx="68" cy="78" r="6" fill="#c4b5fd">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="69" cy="76" r="2.5" fill="#fff" />
          <ellipse cx="132" cy="78" rx="14" ry="12" fill="#fff" />
          <circle cx="132" cy="78" r="6" fill="#c4b5fd">
            <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="133" cy="76" r="2.5" fill="#fff" />

          {/* Serene smile */}
          <path d="M90 112 Q100 120 110 112" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />

          {/* Lotus position legs */}
          <ellipse cx="70" cy="175" rx="25" ry="12" fill="#ddd6fe" opacity="0.4" transform="rotate(-15 70 175)" />
          <ellipse cx="130" cy="175" rx="25" ry="12" fill="#ddd6fe" opacity="0.4" transform="rotate(15 130 175)" />

          {/* Third eye - glowing */}
          <circle cx="100" cy="56" r="4" fill="#c4b5fd" opacity="0.8">
            <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="56" r="8" fill="none" stroke="#c4b5fd" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
          </circle>
        </>
      )}

      {/* Subtle body glow ring */}
      <ellipse cx="100" cy="100" rx="75" ry="75" fill="none" stroke="rgba(196,181,253,0.06)" strokeWidth="1" />
    </svg>
  );
}

export default function ZenMascot() {
  const { x, y, isMoving, velocity, breathPhase } = useZenCursor();
  const [expression, setExpression] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [speechBubble, setSpeechBubble] = useState('');
  const [enlightened, setEnlightened] = useState(false);

  const wispsRef = useRef<SmokeWisp[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const miniGhoulsRef = useRef<MiniZenGhoul[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const clickCountRef = useRef(0);
  const typedRef = useRef('');

  const mascotSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 90 : 140;

  const spawnRipples = useCallback((cx: number, cy: number, count = 3) => {
    for (let i = 0; i < count; i++) {
      ripplesRef.current.push({
        x: cx + mascotSize / 2,
        y: cy + mascotSize / 2,
        size: 5,
        opacity: 0.5,
        maxSize: 40 + i * 20,
      });
    }
  }, [mascotSize]);

  const handleClick = useCallback(() => {
    clickCountRef.current = (clickCountRef.current + 1) % 3;
    const newExpr = clickCountRef.current;
    setExpression(newExpr);
    spawnRipples(x, y, newExpr === 2 ? 5 : 3);

    const line = SPEECH_LINES[newExpr] || SPEECH_LINES[0];
    setSpeechBubble(line);
    setTimeout(() => setSpeechBubble(''), 3000);
  }, [x, y, spawnRipples]);

  const handleDoubleClick = useCallback(() => {
    if (miniGhoulsRef.current.length >= 4) return;
    for (let i = 0; i < 2; i++) {
      miniGhoulsRef.current.push({
        x: x + mascotSize / 2 + (Math.random() - 0.5) * 50,
        y: y + mascotSize,
        vx: (Math.random() - 0.5) * 1,
        vy: -Math.random() * 2 - 0.5,
        opacity: 1,
        scale: 0.25 + Math.random() * 0.15,
        rotation: Math.random() * 360,
      });
    }
  }, [x, y, mascotSize]);

  // Easter egg: type "om"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        spawnRipples(x, y, 2);
        return;
      }
      typedRef.current += e.key.toLowerCase();
      if (typedRef.current.length > 8) typedRef.current = typedRef.current.slice(-8);

      if (typedRef.current.includes('om')) {
        typedRef.current = '';
        setExpression(2);
        setEnlightened(true);
        setSpeechBubble('Enlightenment...');
        spawnRipples(x, y, 8);
        setTimeout(() => {
          setExpression(0);
          setEnlightened(false);
          setSpeechBubble('');
          clickCountRef.current = 0;
        }, 5000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [x, y, spawnRipples]);

  // Animation loop
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

    let wispTimer = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smoke wisps from incense / movement
      if (isMoving && velocity > 1) {
        wispTimer++;
        if (wispTimer > 12) {
          wispTimer = 0;
          const cx = x + mascotSize / 2;
          const cy = y + mascotSize / 2;
          wispsRef.current.push({
            x: cx + (Math.random() - 0.5) * 15,
            y: cy + (Math.random() - 0.5) * 15,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -Math.random() * 0.8 - 0.3,
            size: Math.random() * 12 + 6,
            opacity: 0.25,
            life: 0,
            maxLife: Math.random() * 80 + 50,
          });
        }
      }

      // Always spawn a few wisps for ambiance
      if (Math.random() < 0.03) {
        wispsRef.current.push({
          x: x + mascotSize / 2 + (Math.random() - 0.5) * 30,
          y: y + mascotSize * 0.3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -Math.random() * 0.5 - 0.2,
          size: Math.random() * 10 + 5,
          opacity: 0.15,
          life: 0,
          maxLife: Math.random() * 100 + 60,
        });
      }

      // Wisps
      wispsRef.current = wispsRef.current.filter((w) => {
        w.x += w.vx;
        w.y += w.vy;
        w.vx += Math.sin(w.life * 0.05) * 0.02;
        w.size += 0.1;
        w.life++;
        const lifeRatio = w.life / w.maxLife;
        w.opacity = Math.max(0, 0.3 * (1 - lifeRatio));

        if (w.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(w.x, w.y, w.size, 0, Math.PI * 2);
        ctx.fillStyle = '#c4b5fd';
        ctx.globalAlpha = w.opacity;
        ctx.fill();

        return true;
      });

      // Ripples
      ripplesRef.current = ripplesRef.current.filter((r) => {
        r.size += 1.5;
        r.opacity -= 0.008;
        if (r.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.size, 0, Math.PI * 2);
        ctx.strokeStyle = '#c4b5fd';
        ctx.lineWidth = 1;
        ctx.globalAlpha = r.opacity;
        ctx.stroke();

        return true;
      });

      // Mini zen ghouls
      miniGhoulsRef.current = miniGhoulsRef.current.filter((mg) => {
        mg.x += mg.vx;
        mg.y += mg.vy;
        mg.vy -= 0.008;
        mg.vx *= 0.998;
        mg.opacity -= 0.002;
        mg.rotation += 0.5;

        if (mg.opacity <= 0) return false;

        ctx.save();
        ctx.globalAlpha = mg.opacity;
        ctx.translate(mg.x, mg.y);
        ctx.rotate((mg.rotation * Math.PI) / 180);
        ctx.scale(mg.scale, mg.scale);

        // Mini ghost - very simple, orb-like
        ctx.beginPath();
        ctx.arc(0, -5, 16, Math.PI, 0);
        ctx.bezierCurveTo(16, 10, 12, 22, 8, 18);
        ctx.bezierCurveTo(4, 24, 0, 20, -4, 22);
        ctx.bezierCurveTo(-8, 24, -12, 20, -16, 18);
        ctx.bezierCurveTo(-20, 14, -16, 6, -16, -5);
        ctx.fillStyle = '#e9d5ff';
        ctx.fill();

        // Mini closed eyes
        ctx.beginPath();
        ctx.moveTo(-8, -5);
        ctx.quadraticCurveTo(-5, -3, -2, -5);
        ctx.moveTo(2, -5);
        ctx.quadraticCurveTo(5, -3, 8, -5);
        ctx.strokeStyle = '#9ca3af';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
        return true;
      });

      // Enlightenment mode - soft purple overlay
      if (enlightened) {
        ctx.fillStyle = 'rgba(196, 181, 253, 0.015)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [x, y, isMoving, velocity, mascotSize, enlightened]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9996 }}
      />

      <div
        className="fixed pointer-events-none"
        style={{
          left: x,
          top: y,
          zIndex: 9997,
          width: mascotSize,
          height: mascotSize,
        }}
      >
        {speechBubble && (
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl whitespace-nowrap font-josefin text-xs tracking-wider pointer-events-none"
            style={{
              background: 'rgba(248, 249, 250, 0.95)',
              border: '1px solid #c4b5fd',
              color: '#6b7280',
              boxShadow: '0 4px 20px rgba(196,181,253,0.12)',
              animation: 'bounce-subtle 0.6s ease-in-out infinite',
              zIndex: 9999,
            }}
          >
            {speechBubble}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #c4b5fd',
              }}
            />
          </div>
        )}

        <div
          className="relative pointer-events-auto cursor-pointer"
          style={{
            width: mascotSize,
            height: mascotSize,
            animation: !isMoving ? `ghost-bob 4s ease-in-out infinite, ghost-sway 5s ease-in-out infinite` : undefined,
          }}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ZenGhostSVG expression={expression} breathPhase={breathPhase} isHovered={isHovered} />
        </div>
      </div>
    </>
  );
}
