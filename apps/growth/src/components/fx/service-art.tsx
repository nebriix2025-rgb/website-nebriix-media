import { cn } from "@/lib/utils";

/**
 * Hand-built SVG illustration per service, replacing the flat icon on service
 * pages and cards.
 *
 * All strokes inherit `currentColor` so each piece picks up the brand token
 * from its container — no per-illustration colour to keep in sync, and they
 * stay crisp at any size for a fraction of a raster's weight.
 */

type ArtProps = { className?: string };

const frame = "0 0 320 200";

function Svg({
  children,
  className,
}: ArtProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox={frame}
      fill="none"
      aria-hidden
      className={cn("w-full text-primary", className)}
    >
      {children}
    </svg>
  );
}

/** AI Search Optimization — a knowledge graph with one lit node. */
function AiSearchArt({ className }: ArtProps) {
  const nodes = [
    [60, 60], [130, 40], [200, 70], [265, 45],
    [45, 130], [115, 115], [190, 140], [260, 120],
  ];
  const links = [[0, 1], [1, 2], [2, 3], [0, 5], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7]];

  return (
    <Svg className={className}>
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="currentColor" strokeWidth="1" opacity="0.28"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i} cx={x} cy={y} r={i === 5 ? 7 : 3}
          fill="currentColor" opacity={i === 5 ? 1 : 0.45}
        />
      ))}
      <circle cx={115} cy={115} r="16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx={115} cy={115} r="26" stroke="currentColor" strokeWidth="1" opacity="0.22" />
    </Svg>
  );
}

/** Google Business Profile — street grid with one active pin. */
function MapPackArt({ className }: ArtProps) {
  return (
    <Svg className={className}>
      {[30, 70, 110, 150].map((y) => (
        <line key={y} x1="10" y1={y} x2="310" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.16" />
      ))}
      {[50, 110, 170, 230, 290].map((x) => (
        <line key={x} x1={x} y1="10" x2={x} y2="180" stroke="currentColor" strokeWidth="1" opacity="0.16" />
      ))}
      {[[110, 70], [230, 30], [290, 150]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="currentColor" opacity="0.3" />
      ))}
      <g>
        <circle cx="170" cy="110" r="24" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <path
          d="M170 92c-8 0-14 6-14 14 0 10 14 24 14 24s14-14 14-24c0-8-6-14-14-14z"
          fill="currentColor"
        />
        <circle cx="170" cy="106" r="5" className="fill-background" />
      </g>
    </Svg>
  );
}

/** Local SEO — layered page wireframes receding into depth. */
function WebsiteArt({ className }: ArtProps) {
  return (
    <Svg className={className}>
      {[
        { x: 30, y: 30, o: 0.2 },
        { x: 60, y: 50, o: 0.35 },
        { x: 90, y: 70, o: 0.9 },
      ].map((l, i) => (
        <g key={i} opacity={l.o}>
          <rect x={l.x} y={l.y} width="190" height="110" rx="8" stroke="currentColor" strokeWidth="1" />
          <line x1={l.x + 16} y1={l.y + 26} x2={l.x + 96} y2={l.y + 26} stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <line x1={l.x + 16} y1={l.y + 46} x2={l.x + 150} y2={l.y + 46} stroke="currentColor" strokeWidth="2" opacity="0.55" strokeLinecap="round" />
          <line x1={l.x + 16} y1={l.y + 60} x2={l.x + 128} y2={l.y + 60} stroke="currentColor" strokeWidth="2" opacity="0.55" strokeLinecap="round" />
          <rect x={l.x + 16} y={l.y + 78} width="58" height="16" rx="8" fill="currentColor" opacity="0.8" />
        </g>
      ))}
    </Svg>
  );
}

/** Video — frame strip with motion trails. */
function VideoArt({ className }: ArtProps) {
  return (
    <Svg className={className}>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={40 + i * 84} y={56} width="68" height="88" rx="8"
          stroke="currentColor" strokeWidth="1" opacity={0.3 + i * 0.28}
        />
      ))}
      <path d="M212 88l26 12-26 12V88z" fill="currentColor" />
      {[70, 100, 130].map((y, i) => (
        <line
          key={y} x1="10" y1={y} x2={30 - i * 6} y2={y}
          stroke="currentColor" strokeWidth="2" opacity="0.4" strokeLinecap="round"
        />
      ))}
      {[70, 100, 130].map((y, i) => (
        <line
          key={y} x1={296 + i * 4} y1={y} x2="312" y2={y}
          stroke="currentColor" strokeWidth="2" opacity="0.4" strokeLinecap="round"
        />
      ))}
    </Svg>
  );
}

/** Social — a feed grid with a few lit tiles. */
function SocialArt({ className }: ArtProps) {
  const lit = new Set([1, 4, 8]);
  return (
    <Svg className={className}>
      {Array.from({ length: 12 }).map((_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        return (
          <rect
            key={i}
            x={36 + col * 64} y={26 + row * 52}
            width="52" height="42" rx="8"
            stroke="currentColor" strokeWidth="1"
            fill={lit.has(i) ? "currentColor" : "none"}
            opacity={lit.has(i) ? 0.9 : 0.22}
          />
        );
      })}
    </Svg>
  );
}

/** Lead generation — streams converging to a point. */
function LeadGenArt({ className }: ArtProps) {
  return (
    <Svg className={className}>
      {[30, 65, 100, 135, 170].map((y, i) => (
        <path
          key={y}
          d={`M12 ${y} C 110 ${y}, 150 100, 250 100`}
          stroke="currentColor" strokeWidth="1"
          opacity={0.2 + i * 0.1}
        />
      ))}
      <circle cx="250" cy="100" r="9" fill="currentColor" />
      <circle cx="250" cy="100" r="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="250" cy="100" r="32" stroke="currentColor" strokeWidth="1" opacity="0.22" />
    </Svg>
  );
}

/** Reviews — a constellation of stars, dense on one side. */
function ReviewsArt({ className }: ArtProps) {
  const stars = [
    [60, 50, 1], [95, 92, 0.8], [48, 128, 0.6], [128, 44, 0.7], [140, 120, 1],
    [186, 74, 0.5], [214, 132, 0.35], [252, 56, 0.28], [286, 112, 0.2],
  ] as const;

  const star = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 10 }, (_, i) => {
      const ang = (Math.PI / 5) * i - Math.PI / 2;
      const rad = i % 2 === 0 ? r : r / 2.4;
      return `${(cx + Math.cos(ang) * rad).toFixed(1)},${(cy + Math.sin(ang) * rad).toFixed(1)}`;
    });
    return pts.join(" ");
  };

  return (
    <Svg className={className}>
      {stars.map(([x, y, o], i) => (
        <polygon
          key={i}
          points={star(x, y, 9 + o * 6)}
          fill="currentColor"
          opacity={o}
        />
      ))}
    </Svg>
  );
}

const ART: Record<string, (p: ArtProps) => React.JSX.Element> = {
  "ai-search-optimization": AiSearchArt,
  "google-business-profile": MapPackArt,
  "local-seo-website": WebsiteArt,
  "video-production": VideoArt,
  "social-media-management": SocialArt,
  "lead-generation-system": LeadGenArt,
  "review-reputation-management": ReviewsArt,
};

export function ServiceArt({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Art = ART[slug];
  if (!Art) return null;
  return <Art className={className} />;
}
