/**
 * Ghoul Site Configuration
 */

export interface CrossLink {
  id: string;
  name: string;
  domain: string;
  icon: string;
  color: string;
  realm: string;
  live: boolean;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  category: 'core' | 'pro' | 'tool' | 'refill' | 'limited';
  volume: string;
  price: string;
  features: string[];
  heroIngredient?: string;
}

export interface GhoulConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  icon: string;
  isLeader: boolean;
  products: Product[];
  crossLinks: CrossLink[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    placeholderText: string;
  };
  gameUrl: string;
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  science: {
    title: string;
    subtitle: string;
    description: string;
    adaptation: string;
    stats: { label: string; value: string }[];
  };
  marketSize: string;
  traction: { label: string; value: string; status: 'complete' | 'in-progress' | 'upcoming' }[];
  ipStatus: string;
  ipClasses: string[];
  roadmap: { phase: string; title: string; items: string[]; status: 'complete' | 'in-progress' | 'upcoming' }[];
}

export const config: GhoulConfig = {
  id: "zen",
  name: "ZEN GHOUL",
  tagline: "Clean Mind, Clean Space",
  description:
    "In the silence between breaths, ZEN GHOUL finds its purpose. This meditative entity brings tranquility to your cleaning routine.",
  domain: "https://www.zenghoul.com",
  icon: "🧘",
  isLeader: false,

  products: [
    {
      name: "Aromatherapy Mist",
      tagline: "Clean air, clear mind",
      description: "Room-fine mist with essential oil blend of lavender, sandalwood, and vetiver. Neutralises airborne odours while promoting mental clarity.",
      category: "core",
      volume: "250ml",
      price: "$24.99 AUD",
      features: ["Essential oil blend", "4-hour scent life", "Pet-safe formula"],
      heroIngredient: "Slow-Release Ectoplasm™",
    },
    {
      name: "Calming Floor Wash",
      tagline: "Meditation for your floors",
      description: "Low-foaming floor concentrate with chamomile extract. Designed for slow, mindful application with a mop or cloth.",
      category: "core",
      volume: "1L Concentrate",
      price: "$22.99 AUD",
      features: ["Low-foam ritual", "Chamomile infused", "Makes 10L diluted"],
      heroIngredient: "Slow-Release Ectoplasm™",
    },
    {
      name: "Meditation Space Spray",
      tagline: "Sanctuary in a bottle",
      description: "Surface and air spray for yoga mats, cushions, and meditation nooks. Removes sweat, dust, and energetic residue without harsh chemicals.",
      category: "core",
      volume: "300ml",
      price: "$19.99 AUD",
      features: ["Yoga mat safe", "Sweat neutralising", "Non-slip residue"],
      heroIngredient: "Slow-Release Ectoplasm™",
    },
    {
      name: "Essential Oil Diffuser Cleaner",
      tagline: "Purity for your purifier",
      description: "Deep-cleans ultrasonic and nebulising diffusers. Dissolves essential oil buildup and hard water deposits to restore mist output.",
      category: "pro",
      volume: "200ml",
      price: "$16.99 AUD",
      features: ["Ultrasonic safe", "Hard water dissolver", "Restores mist output"],
      heroIngredient: "Slow-Release Ectoplasm™",
    },
    {
      name: "Zen Garden Maintenance Solution",
      tagline: "Balance for your bonsai",
      description: "Specialised care for moss, raked gravel, and miniature plantings. Prevents algae growth while preserving the aesthetic of Japanese-inspired gardens.",
      category: "pro",
      volume: "500ml",
      price: "$29.99 AUD",
      features: ["Algae prevention", "Gravel brightening", "Moss conditioning"],
      heroIngredient: "Slow-Release Ectoplasm™",
    },
    {
      name: "Bamboo Cleaning Cloths",
      tagline: "Soft on surfaces, kind to earth",
      description: "Set of 6 ultra-soft bamboo fibre cloths in earth tones. Naturally antimicrobial and compostable at end of life.",
      category: "tool",
      volume: "6 Pack",
      price: "$19.99 AUD",
      features: ["Naturally antimicrobial", "Compostable", "Earth-tone set"],
    },
    {
      name: "The Ritual Caddy",
      tagline: "Organized tranquility",
      description: "Handwoven seagrass caddy with ceramic liner. Holds your full Zen Ghoul collection with compartments for bottles, cloths, and incense.",
      category: "tool",
      volume: "Basket",
      price: "$39.99 AUD",
      features: ["Handwoven seagrass", "Ceramic liner", "Compartmentalised"],
    },
    {
      name: "Aromatherapy Mist Refill",
      tagline: "Sustainable serenity",
      description: "Concentrated refill for the Aromatherapy Mist. Same essential oil blend in a glass amber bottle with measured dosing cap.",
      category: "refill",
      volume: "500ml",
      price: "$19.99 AUD",
      features: ["Glass amber bottle", "Measured dosing cap", "2x refills"],
      heroIngredient: "Slow-Release Ectoplasm™",
    },
    {
      name: "Winter Solstice Blend",
      tagline: "Limited winter release",
      description: "A seasonal formulation with frankincense, myrrh, and cedarwood. Available December through February only.",
      category: "limited",
      volume: "250ml",
      price: "$27.99 AUD",
      features: ["Winter botanicals", "Seasonal only", "Gift packaging"],
      heroIngredient: "Slow-Release Ectoplasm™",
    },
  ],

  crossLinks: [
    {
      id: "ghoulverse",
      name: "GHOULVERSE",
      domain: "https://www.ghoulverse.com",
      icon: "🌌",
      color: "#00f0ff",
      realm: "The Universe",
      live: true,
    },
    {
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
      live: true,
    },
    {
      id: "party",
      name: "PARTY GHOUL",
      domain: "https://www.partyghoul.com",
      icon: "🎉",
      color: "#ff00ff",
      realm: "The Neon District",
      live: true,
    },
    {
      id: "tradie",
      name: "TRADIE GHOUL",
      domain: "https://www.tradieghoul.com",
      icon: "🔧",
      color: "#eab308",
      realm: "The Industrial Wastes",
      live: true,
    },
    {
      id: "garden",
      name: "GARDEN GHOUL",
      domain: "https://www.gardenghoul.com",
      icon: "🌿",
      color: "#22c55e",
      realm: "The Verdant Wilds",
      live: true,
    },
    {
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
      live: true,
    },
    {
      id: "geek",
      name: "GEEK GHOUL",
      domain: "https://www.geekghoul.com",
      icon: "💻",
      color: "#00d4ff",
      realm: "The Mainframe",
      live: true,
    },
    {
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.scholarghoul.com",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
    {
      id: "toddler",
      name: "TODDLER GHOUL",
      domain: "https://www.toddlerghoul.com",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Playful Realm",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full product deck and financial projections.",
    buttonText: "Request Deck",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },

  science: {
    title: "The Science",
    subtitle: "Slow-Release Ectoplasm™",
    description: "Every ZEN GHOUL product is powered by Slow-Release Ectoplasm™ — a proprietary enzyme complex that activates gradually over time rather than in a single burst. This creates a sustained cleaning action that maintains harmony with the environment rather than disrupting it.",
    adaptation: "For the Tranquil Gardens, we engineered a time-released variant that works in harmony with mindful pacing — no harsh chemical reactions, no sudden odours, just steady, gentle effectiveness.",
    stats: [
      { label: "Release Duration", value: "4 hrs" },
      { label: "Essential Oil Retention", value: "92%" },
      { label: "Surface Stress", value: "Zero" },
      { label: "Mindfulness Score", value: "10/10" },
    ],
  },

  marketSize: "$4.5T global wellness economy",
  traction: [
    { label: "Formulations", value: "9 Complete", status: "complete" },
    { label: "Manufacturing", value: "Partners Secured", status: "complete" },
    { label: "Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "Retail", value: "In Negotiation", status: "in-progress" },
  ],
  ipStatus: "Trademark filed — Class 3 (essential oils & spa products), Class 44 (wellness & spa services) and Class 41 (yoga & meditation instruction).",
  ipClasses: [
    "Class 3 — Essential oils, spa products & aromatherapy preparations",
    "Class 44 — Wellness services, spa services & health retreats",
    "Class 41 — Yoga instruction, meditation classes & wellness education",
    "Class 10 — Massage apparatus, wellness devices & therapeutic equipment",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Brand Launch", items: ["6 sites live", "54 SKUs formulated", "GOO RUNNER game launched"], status: "complete" },
    { phase: "Phase 2", title: "Retail Partnerships", items: ["Endota Spa", "Jurlique", "Wellness retreats"], status: "in-progress" },
    { phase: "Phase 3", title: "International", items: ["US TM filing", "UK/EU expansion", "Amazon FBA launch"], status: "upcoming" },
    { phase: "Phase 4", title: "Game Monetisation", items: ["In-app purchases", "Character skins", "NFT collectibles"], status: "upcoming" },
    { phase: "Phase 5", title: "New Ghouls", items: ["Toddler Ghoul", "Scholar Ghoul", "2 mystery verticals"], status: "upcoming" },
  ],
};
