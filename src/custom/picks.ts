// Product picks for each guide. They stay hidden while AFFILIATE_ACTIVE is
// false in siteFlags.ts, and the build fails if you go live with gaps.
//
// Rules this file is built around (check Associate Central before go-live):
// - No prices and no star ratings or review counts. Amazon only allows these
//   from its own product data, so we describe each pick in our own words.
// - Every pick needs a real ASIN from Associate Central and a tagged link.
// - Say plainly whether we have tried the item.
import { AFFILIATE_ACTIVE } from "./siteFlags";

export type PickTier = "small" | "upgrade" | "saving";

export type Pick = {
  tier: PickTier;
  item: string; // the item type from the guide, e.g. "An eye mask"
  name: string;
  why: string; // our own words
  watchFor?: string; // an honest caution, shown with the pick
  asin?: string; // fill in when approved
};

// Your Amazon Associates store ID for amazon.ca, e.g. "travelwell-20".
export const AMAZON_TAG = "REPLACE-WITH-YOUR-STORE-ID";

export const picks: Record<string, Pick[]> = {
  "in-the-air": [
    {
      tier: "small",
      item: "An eye mask",
      name: "LitBear 3D contoured eye mask",
      why: "The contoured cups sit off your eyelids, so you can open your eyes under it. Researched Nov 24, 2026; not yet tried by us.",
    },
    {
      tier: "small",
      item: "Earplugs",
      name: "Alpine FlyFit earplugs",
      why: "Made to ease the pressure feeling on take-off and landing, and reusable many times. Researched Nov 24, 2026; not yet tried by us.",
    },
    {
      tier: "small",
      item: "Compression socks",
      name: "360 Relief compression socks, 15 to 20 mmHg",
      why: "A moderate level that suits most people on a long flight. Researched Nov 24, 2026; not yet tried by us.",
      watchFor:
        "Check with a doctor first if you have circulation or vein problems.",
    },
    {
      tier: "small",
      item: "Noise-cancelling headphones",
      name: "Soundcore Q20i headphones",
      why: "A budget over-ear pair that independent testers treat as the sensible value pick. Researched Nov 24, 2026; not yet tried by us.",
    },
    {
      tier: "upgrade",
      item: "A supportive neck pillow",
      name: "Cabeau Evolution S3 neck pillow",
      why: "Named best travel pillow in several independent tests for a snug, supportive fit. Researched Nov 24, 2026; not yet tried by us.",
    },
  ],
};

export function getPicks(slug: string): Pick[] {
  const list = picks[slug] ?? [];
  if (!AFFILIATE_ACTIVE) return [];
  if (AMAZON_TAG.startsWith("REPLACE")) {
    throw new Error(
      "picks.ts: set AMAZON_TAG before turning affiliate mode on."
    );
  }
  const missing = list.filter(p => !p.asin);
  if (missing.length > 0) {
    throw new Error(
      `picks.ts: add an ASIN for ${missing.map(p => p.name).join(", ")} (guide ${slug}), or remove the pick.`
    );
  }
  return list;
}

export function amazonUrl(asin: string): string {
  return `https://www.amazon.ca/dp/${asin}?tag=${AMAZON_TAG}`;
}
