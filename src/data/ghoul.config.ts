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
  fundingAsk: string;
  valuation: string;
  equityOffered: string;
  projectedRevenue: { year: string; amount: string; sources: string }[];
  roiTarget: string;
  partnerships: { type: string; description: string }[];
  revenueStreams: { stream: string; description: string; timeline: string }[];
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
      id: "goo",
      name: "GOO GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/goo/",
      icon: "👻",
      color: "#ff00ff",
      realm: "The Goo Dimension",
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
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
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
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
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
      id: "geek",
      name: "GEEK GHOUL",
      domain: "https://www.geekghoul.com",
      icon: "💻",
      color: "#00d4ff",
      realm: "The Mainframe",
      live: true,
    },
    {
      id: "sport",
      name: "SPORT GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/sport/",
      icon: "🏆",
      color: "#f97316",
      realm: "The Arena",
      live: false,
    },
    {
      id: "googoo",
      name: "GOO GOO",
      domain: "https://www.ghoulverse.com/ghouls/googoo/",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Nursery",
      live: false,
    },
    {
      id: "kid",
      name: "KID GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/kid/",
      icon: "🧒",
      color: "#ef4444",
      realm: "The Playground",
      live: false,
    },
    {
      id: "teen",
      name: "TEEN GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/teen/",
      icon: "🎧",
      color: "#8b5cf6",
      realm: "The Hangout",
      live: false,
    },
    {
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/scholar/",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full investor deck and financial projections.",
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
    { label: "Character Websites", value: "6 Live", status: "complete" },
    { label: "GOO GHOUL™ Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "GHOULVERSE Game", value: "Live", status: "complete" },
    { label: "Brand Partnerships", value: "Seeking First Deals", status: "upcoming" },
  ],
  ipStatus: "Trademark filed — Class 3 (essential oils & spa products), Class 44 (wellness & spa services) and Class 41 (yoga & meditation instruction).",
  ipClasses: [
    "Class 3 — Essential oils, spa products & aromatherapy preparations",
    "Class 44 — Wellness services, spa services & health retreats",
    "Class 41 — Yoga instruction, meditation classes & wellness education",
    "Class 10 — Massage apparatus, wellness devices & therapeutic equipment",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Foundation", items: ["12 character websites live", "GOO GHOUL™ Class 3 (AU) filed", "GHOULVERSE game launched"], status: "complete" },
    { phase: "Phase 1.5", title: "International IP", items: ["US trademark via Madrid Protocol", "EU trademark filing", "Defensive name registrations"], status: "in-progress" },
    { phase: "Phase 2", title: "Mascot Creation", items: ["24 professional mascots (2 per ghoul)", "$120K investment across 12 characters"], status: "upcoming" },
    { phase: "Phase 3", title: "Partnerships & Revenue", items: ["Sector sponsorships", "Affiliate deals", "Event appearances", "Influencer recruitment"], status: "upcoming" },
    { phase: "Phase 4", title: "Entertainment Scale", items: ["Animated series pilot", "Convention circuit", "Merchandise licensing"], status: "upcoming" },
    { phase: "Phase 5", title: "Product Launch", items: ["GOO GHOUL household cleaners", "Vertical-specific product lines"], status: "upcoming" },
  ],

  fundingAsk: "$250,000 AUD",
  valuation: "$1,250,000 pre-money",
  equityOffered: "20%",
  projectedRevenue: [
    { year: "Year 1", amount: "$200,000", sources: "Brand sponsorships, event appearances, affiliate commissions" },
    { year: "Year 2", amount: "$560,000", sources: "Licensing, events, merch royalties, content" },
    { year: "Year 3", amount: "$1,200,000", sources: "Full licensing engine + product sales" },
  ],
  roiTarget: "5–8x over 3–5 years (40–70% IRR)",
  partnerships: [
    { type: "Brand Sponsorships", description: "Existing companies in each vertical pay to associate with our character IP at events and online." },
    { type: "Affiliate Marketing", description: "Partner products featured on ghoul websites — we earn commission on referred sales." },
    { type: "Event Appearances", description: "Mascots appear at sports events, conventions, retail launches — appearance fees + brand exposure." },
    { type: "Licensing", description: "Brands license ghoul characters for their own marketing, packaging, and promotions." },
  ],
  revenueStreams: [
    { stream: "Sponsorships", description: "Sector-specific brand deals per ghoul", timeline: "Year 1" },
    { stream: "Events", description: "Mascot appearances and activations", timeline: "Year 1" },
    { stream: "Affiliate", description: "Commission on partner product sales", timeline: "Year 1" },
    { stream: "Licensing", description: "Character IP licensing to brands", timeline: "Year 2" },
    { stream: "Merchandise", description: "Royalties on plush, apparel, accessories", timeline: "Year 2" },
    { stream: "Animation", description: "YouTube/streaming ad revenue, distribution deals", timeline: "Year 2" },
    { stream: "Products", description: "Owned product lines (GOO GHOUL cleaners first)", timeline: "Year 3" },
  ],
};
