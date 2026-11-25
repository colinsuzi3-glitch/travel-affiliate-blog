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
  imageUrl?: string; // load from Amazon's own feed at go-live; never a saved copy
};

// Your Amazon Associates store ID for amazon.ca, e.g. "travelwell-20".
export const AMAZON_TAG = "REPLACE-WITH-YOUR-STORE-ID";

const CHECKED = " Researched Nov 24, 2026; not yet tried by us.";

function pick(
  tier: PickTier,
  item: string,
  name: string,
  why: string,
  watchFor?: string
): Pick {
  return { tier, item, name, why: why + CHECKED, watchFor };
}

export const picks: Record<string, Pick[]> = {
  "in-the-air": [
    pick(
      "small",
      "An eye mask",
      "LitBear 3D contoured eye mask",
      "The contoured cups sit off your eyelids, so you can open your eyes under it."
    ),
    pick(
      "small",
      "Earplugs",
      "Alpine FlyFit earplugs",
      "Made to ease the pressure feeling on take-off and landing, and reusable many times."
    ),
    pick(
      "small",
      "Hand wipes",
      "Sani-Hands individually wrapped hand wipes",
      "Single-use packets that slip into a pocket and skip the liquids rule.",
      "Check the label for alcohol content and your skin type."
    ),
    pick(
      "small",
      "Compression socks",
      "360 Relief compression socks, 15 to 20 mmHg",
      "A moderate level that suits most people on a long flight.",
      "Check with a doctor first if you have circulation or vein problems."
    ),
    pick(
      "small",
      "A light travel blanket",
      "EverSnug travel blanket",
      "A packable blanket for cold cabins that doubles as a wrap on arrival."
    ),
    pick(
      "small",
      "Noise-cancelling headphones",
      "Soundcore Q20i headphones",
      "A budget over-ear pair that independent testers treat as the sensible value pick."
    ),
    pick(
      "upgrade",
      "A supportive neck pillow",
      "Cabeau Evolution S3 neck pillow",
      "Named best travel pillow in several independent tests for a snug, supportive fit."
    ),
  ],
  "power-and-plugs": [
    pick(
      "small",
      "Plug adapters for your destinations",
      "VYLEE universal travel adapter, 5 in 1",
      "One adapter with the plug shapes for most countries, plus USB ports.",
      "It changes the plug shape only, not the voltage."
    ),
    pick(
      "small",
      "Spare charging cables",
      "Anker USB-C to USB-C cable, 100 W",
      "A well-known, widely bought cable that handles phone and laptop charging."
    ),
    pick(
      "small",
      "A small cable pouch",
      "Arae double-layer electronics organizer",
      "Keeps cables, adapters and chargers in one place in your bag."
    ),
    pick(
      "small",
      "A multi-port charger",
      "Anker Nano 70 W 3-port USB-C charger",
      "One small block that charges a phone, tablet and laptop together.",
      "Pair it with a plug adapter. It does not change the plug shape."
    ),
    pick(
      "small",
      "A power bank that stays under the carry-on limit",
      "INIU 10,000 mAh 45 W power bank",
      "At 10,000 mAh it is well under the 100 Wh carry-on limit and fast-charges a phone.",
      "Power banks go in carry-on only. Your airline may be stricter than CATSA."
    ),
    pick(
      "small",
      "A quality dual-voltage hair dryer",
      "Conair 1600 W folding-handle travel dryer",
      "A compact folding dryer that is a long-time travel-bag staple.",
      "Confirm the voltage switch on the product page before you rely on it abroad."
    ),
    pick(
      "small",
      "A dual-voltage styling tool",
      "Lovani mini travel flat iron, dual voltage",
      "A mini flat iron listed as dual voltage, so it needs only a plug adapter."
    ),
  ],
  "skin-and-sun": [
    pick(
      "small",
      "Travel-size moisturizer and sunscreen",
      "CeraVe Ultra-Light moisturizer SPF 30, travel size",
      "A light moisturizer with sun protection in a size that clears the liquids rule."
    ),
    pick(
      "small",
      "Lip balm with sun protection",
      "NIVEA Sun lip balm SPF 30",
      "A small, cheap balm that is easy to reapply."
    ),
    pick(
      "small",
      "Cleansing wipes",
      "Neutrogena All-in-One makeup removing wipes",
      "Fragrance-free wipes for a long flight or a late arrival."
    ),
    pick(
      "small",
      "A skin-care set in travel sizes",
      "e.l.f. Holy Hydration Jet Set hydration kit",
      "A mini hydration set made for carry-on bags."
    ),
    pick(
      "small",
      "A refillable set of 100 ml bottles",
      "18-pack silicone travel bottles",
      "Leak-resistant 100 ml bottles to decant your own favorites."
    ),
  ],
  "hair-care": [
    pick(
      "small",
      "Travel-size leave-in conditioner",
      "OUAI travel-size leave-in conditioner spray",
      "A light leave-in spray in a size that clears the liquids rule."
    ),
    pick(
      "small",
      "A detangling brush",
      "Wet Brush Original detangler",
      "Flexible bristles that work through wet hair without pulling."
    ),
    pick(
      "small",
      "A satin scrunchie or cap",
      "Kitsch satin scrunchies",
      "Gentler on hair than plain elastics, and they pack flat."
    ),
    pick(
      "small",
      "A satin scrunchie or cap",
      "YANIBEST double-layer satin sleep bonnet",
      "A satin bonnet that keeps curls and coils protected overnight in a hotel bed."
    ),
    pick(
      "small",
      "Shampoo and conditioner bars",
      "Kitsch rice water shampoo bar and coconut oil conditioner bar",
      "Solid bars skip the liquids rule and last longer than bottles."
    ),
    pick(
      "small",
      "A heat protectant",
      "L'Oréal Paris Dream Lengths Heat Slayer",
      "A mist-style heat protectant that is easy to find on the road.",
      "Choose a pump version. Aerosols count as liquids and must be 100 ml or less."
    ),
  ],
  "clothes-that-pack-small": [
    pick(
      "upgrade",
      "A packable light jacket",
      "Baleaf packable women's jacket",
      "A light jacket that folds small for cold cabins and cool evenings.",
      "Check the size chart. Fit varies a lot between brands."
    ),
  ],
  "bags-and-packing": [
    pick(
      "small",
      "Packing cubes",
      "BAGAIL packing cubes set",
      "A budget cube set that keeps a carry-on organized."
    ),
    pick(
      "small",
      "A clear liquids bag",
      "BAGSMART clear toiletry bags, 2-pack",
      "Clear quart-size bags for the airport liquids check."
    ),
    pick(
      "small",
      "A toiletry bag",
      "BAGSMART hanging toiletry bag",
      "Hangs on a hook where hotel counters are small."
    ),
    pick(
      "small",
      "A carry-on backpack",
      "MATEIN 40 L expandable carry-on backpack",
      "A 40 L bag with room to expand, at a friendly price.",
      "Check your airline's size limits before you buy. They differ."
    ),
    pick(
      "small",
      "A weekender bag",
      "BJLFS weekender bag",
      "A roomy duffel-style bag for two or three days away."
    ),
    pick(
      "upgrade",
      "A well-made carry-on suitcase",
      "SwissGear softside carry-on spinner",
      "A widely bought softside carry-on at a mid price.",
      "Check your airline's size limits before you buy. They differ."
    ),
  ],
  "worth-saving-for": [
    pick(
      "saving",
      "An exceptional carry-on suitcase",
      "Travelpro Platinum Elite carry-on spinner",
      "Named best overall carry-on in several 2026 roundups, with a long warranty.",
      "Check the exact size against your airline's limits and the current price."
    ),
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

export function amazonUrl(asin?: string): string {
  if (!asin) return "#";
  return `https://www.amazon.ca/dp/${asin}?tag=${AMAZON_TAG}`;
}
