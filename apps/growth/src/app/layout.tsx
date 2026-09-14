import type { Metadata, Viewport } from "next";
import { Figtree, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { site } from "@/content/site";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyAuditCta } from "@/components/layout/sticky-audit-cta";
import { Toaster } from "@/components/ui/sonner";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  // Variable axis; 400 is the display weight, 300 for the largest sizes.
  weight: ["300", "400"],
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  keywords: [
    "AI search optimization",
    "get recommended by ChatGPT",
    "Google Business Profile optimization",
    "local SEO",
    "map pack ranking",
    "local lead generation",
    "review management",
    "local business marketing",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0d14",
  colorScheme: "dark",
};

/** Organization + LocalBusiness, per the brief's schema requirements. */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  sameAs: Object.values(site.socials),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${figtree.variable} ${sourceSerif.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/*
          Motion server-renders its `initial` state as inline opacity:0. Without
          JS those blocks would never animate in and the page would read as
          blank, so force them visible when scripting is unavailable.
        */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-dvh bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <SmoothScroll>
            <SiteHeader />
            <main id="main">{children}</main>
            <SiteFooter />
          </SmoothScroll>
          <StickyAuditCta />
        </ThemeProvider>
        <Toaster position="bottom-right" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
