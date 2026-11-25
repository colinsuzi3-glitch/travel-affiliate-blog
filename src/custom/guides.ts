// Traveling Well guides. Content only: no product names, no prices and no
// affiliate links until an affiliate program has approved the site.
// Rules notes carry a "last checked" date. Re-check before changing a date.

export type RuleNote = {
  text: string;
  source: string;
  url: string;
  lastChecked: string;
};

export type Guide = {
  slug: string;
  title: string;
  image?: string; // faded header photo
  imagePosition?: string; // CSS object-position
  summary: string;
  audience: string[];
  tint: string;
  wonder: string; // one evocative line, no product claims
  number: string; // passport stamp number
  color: string; // destination color
  ink: string; // deeper shade for text on light backgrounds
  intro: string;
  sections: { heading: string; points: string[] }[];
  forHer?: string[];
  forHim?: string[];
  tiers: { small: string[]; upgrade: string[]; saving: string[] };
  rules?: RuleNote[];
};

export const tierLabels = {
  small: { name: "Small comforts", range: "Under $50" },
  upgrade: { name: "Smart upgrades", range: "$50 to $200" },
  saving: { name: "Worth saving for", range: "$200 and up" },
} as const;

const liquidsRule: RuleNote = {
  text: "In a carry-on, liquids, aerosols and gels (sunscreen, shampoo, moisturizer, liquid makeup) must be in containers of 100 ml or less, all fitting in one clear, resealable 1 L bag. Medication has its own exception.",
  source: "CATSA",
  url: "https://www.catsa-acsta.gc.ca/en/travel-tips/what-can-bring-through-airport-security",
  lastChecked: "November 24, 2026",
};

const batteryRule: RuleNote = {
  text: "Spare lithium batteries and power banks go in your carry-on, never your checked bag. Up to 100 Wh is permitted; 100 to 160 Wh needs airline approval, with a limit of two spares. Airlines can set stricter limits on how many power banks you carry and when you may use them, so check yours before you fly.",
  source: "CATSA",
  url: "https://www.catsa-acsta.gc.ca/en/node/8904",
  lastChecked: "November 24, 2026",
};

export const guides: Guide[] = [
  {
    slug: "power-and-plugs",
    image: "/images/budapest-parliament.jpg",
    imagePosition: "center 55%",
    title: "Power and plugs",
    summary:
      "Plug adapters, voltage converters, dual-voltage hair tools, cables and travel-approved power banks.",
    audience: ["For her", "For him"],
    tint: "bg-blossom/15",
    number: "01",
    wonder:
      "Somewhere there is a hotel room with a view you have never seen. Be ready to stay a little longer.",
    color: "#4a74bd",
    ink: "#2a4a8a",
    intro:
      "Most trouble with electronics abroad comes down to two different things: the shape of the plug and the voltage behind it. Sort those out first and everything else is simple.",
    sections: [
      {
        heading: "Adapter, converter or neither?",
        points: [
          "A plug adapter only changes the shape of the prongs. It does nothing about voltage.",
          "A voltage converter or transformer changes the voltage. You need one only for a device that cannot handle the local supply.",
          "Check the small print on the charger or the tool. If it says 100-240 V, the device is dual voltage and only needs an adapter.",
          "Phones, tablets and most laptops are dual voltage. Many hair dryers, straighteners and curling tools are not, so read the label before you pack.",
        ],
      },
      {
        heading: "Hair tools and heat",
        points: [
          "The simplest answer is a dual-voltage tool plus a plug adapter. There is no converter to carry.",
          "A single-voltage heat tool on the wrong supply can fail or become unsafe. Do not rely on a plug adapter alone.",
          "Converters often struggle with high-wattage heat tools. Check the wattage on the tool against the converter's limit.",
        ],
      },
      {
        heading: "Cables, chargers and protection",
        points: [
          "One multi-port charger usually replaces several single chargers.",
          "Pack a spare cable. It is the item that goes missing most often.",
          "A sturdy case and a screen protector are cheaper than a repair abroad.",
        ],
      },
    ],
    tiers: {
      small: [
        "Plug adapters for your destinations",
        "Spare charging cables",
        "A small cable pouch",
      ],
      upgrade: [
        "A multi-port charger",
        "A power bank that stays under the carry-on limit",
        "A dual-voltage styling tool",
      ],
      saving: [
        "A quality dual-voltage hair dryer",
        "A high-capacity charger for work travel",
      ],
    },
    rules: [batteryRule],
  },
  {
    slug: "skin-and-sun",
    image: "/images/beach-bahia.jpg",
    imagePosition: "center 60%",
    title: "Skin and sun",
    summary:
      "Moisturizer, sunscreen, after-sun care and the small routines that keep your skin well on the road.",
    audience: ["For her", "For him"],
    tint: "bg-blossom/15",
    number: "02",
    wonder:
      "The best afternoons happen outside. Let the sun be the only thing you are thinking about.",
    color: "#e8a838",
    ink: "#855400",
    intro:
      "Flying dries skin out, and sun and salt water finish the job. A short routine in small containers is enough.",
    sections: [
      {
        heading: "Make it fit the 1 L bag",
        points: [
          "Decant favorites into 100 ml containers, or buy travel sizes.",
          "Solid and stick formats, such as sunscreen sticks, cleansing bars and solid moisturizers, skip the liquid rule altogether.",
          "Keep the bag at the top of your carry-on so it comes out quickly at security.",
        ],
      },
      {
        heading: "Sun and after-sun",
        points: [
          "Choose a broad-spectrum sunscreen you will actually reapply.",
          "Pack something cooling for after sun, such as an aloe-based gel in a small size.",
          "Lip balm with sun protection is the item most people forget.",
        ],
      },
    ],
    forHer: [
      "A light moisturizer for the plane and a richer one for the evening",
      "Gentle cleansing wipes for long flights",
      "Sunscreen that sits well under makeup",
      "Skin-type specific options: dry, oily, sensitive, mature",
    ],
    forHim: [
      "A simple moisturizer and a sunscreen stick",
      "Deodorant in solid form",
      "Shave and beard care in compact sizes",
    ],
    tiers: {
      small: [
        "Travel-size moisturizer and sunscreen",
        "Lip balm with sun protection",
        "Cleansing wipes",
      ],
      upgrade: [
        "A skin-care set in travel sizes",
        "A refillable set of 100 ml bottles",
      ],
      saving: ["A full travel skin-care routine you will keep using at home"],
    },
    rules: [liquidsRule],
  },
  {
    slug: "hair-care",
    image: "/images/hair-brushing.jpg",
    imagePosition: "center 38%",
    title: "Hair care",
    summary:
      "Hair-type specific care for curls and coils, straight and fine hair, color-treated hair and short hair.",
    audience: ["For her", "For him"],
    tint: "bg-gold/20",
    number: "03",
    wonder:
      "Salt air, strange water, a morning that starts at dawn. Arrive looking and feeling like yourself.",
    color: "#d25f92",
    ink: "#a1346a",
    intro:
      "Humidity, hard water and cabin air all change how hair behaves. The right few products, matched to your hair type, beat a bag full of everything.",
    sections: [
      {
        heading: "Choose by hair type",
        points: [
          "Curly and coily hair: moisture comes first. A leave-in conditioner, a detangling tool and a satin cap or scarf cover most needs.",
          "Straight and fine hair: lighter products, so it does not go flat in humid weather.",
          "Color-treated hair: a gentle shampoo and a heat protectant, especially in strong sun.",
          "Short hair and beards: a compact balm or oil and a small comb.",
        ],
      },
      {
        heading: "Make it travel well",
        points: [
          "Shampoo and conditioner bars skip the liquid rule and last longer.",
          "Aerosols are liquids for the security rule. Go for pump or solid versions.",
          "Any heat tool must suit the voltage where you are going. See the Power and plugs guide.",
        ],
      },
    ],
    forHer: [
      "Curl and coil care in 100 ml sizes",
      "A silk or satin pillowcase or sleep cap",
      "A dual-voltage tool for heat styling",
    ],
    forHim: [
      "A simple wash-and-go routine",
      "Beard oil or balm in a small container",
    ],
    tiers: {
      small: [
        "Travel-size leave-in conditioner",
        "A detangling brush",
        "A satin scrunchie or cap",
      ],
      upgrade: ["Shampoo and conditioner bars", "A heat protectant"],
      saving: ["A dual-voltage dryer or styling tool"],
    },
    rules: [liquidsRule],
  },
  {
    slug: "clothes-that-pack-small",
    image: "/images/rio-street-sunset.jpg",
    imagePosition: "center 50%",
    title: "Clothes that pack small",
    summary:
      "Light, wrinkle-resistant layers and swimwear that take up little space and still look good.",
    audience: ["For her", "For him"],
    tint: "bg-sage/25",
    number: "04",
    wonder:
      "Pack light enough to say yes to the back street, the ferry, the invitation.",
    color: "#cb6e45",
    ink: "#9a4524",
    intro:
      "Pack for the whole trip in one carry-on by choosing pieces that mix, dry quickly and need no ironing.",
    sections: [
      {
        heading: "What to look for",
        points: [
          "Fabrics that resist creases and dry overnight, such as technical blends, merino and linen blends.",
          "A small color palette so every top works with every bottom.",
          "One packable layer for cold cabins and cool evenings.",
          "Shoes that cover walking, dinner and the beach.",
        ],
      },
    ],
    forHer: [
      "A light wrap or cover-up for the plane and the beach",
      "A dress that works day and night",
      "Swimwear that dries fast",
    ],
    forHim: [
      "Two shirts that resist creases",
      "A pair of shorts that can handle a swim",
      "A light jacket that packs into its own pocket",
    ],
    tiers: {
      small: ["A packable scarf or wrap", "Quick-dry socks and underlayers"],
      upgrade: [
        "Wrinkle-resistant tops and trousers",
        "A packable light jacket",
      ],
      saving: ["A quality travel jacket or a versatile travel dress"],
    },
  },
  {
    slug: "in-the-air",
    image: "/images/window-seat.jpg",
    imagePosition: "center 42%",
    title: "In the air",
    summary:
      "Neck support, eye masks, compression socks, wipes and the small comforts that make a long flight easier.",
    audience: ["For her", "For him"],
    tint: "bg-sage/25",
    number: "05",
    wonder:
      "The journey begins long before you land. Make the hours between places part of the story.",
    color: "#35a3a8",
    ink: "#146a70",
    intro:
      "A few small things change how you feel when you land: support for your neck, darkness, warmth and clean hands.",
    sections: [
      {
        heading: "What helps most",
        points: [
          "Neck support that suits how you sleep. Some people prefer a wrap, others a strap-in pillow.",
          "A contoured eye mask that does not press on your eyelids.",
          "Compression socks for long flights.",
          "A light blanket or wrap, because cabins are cold.",
          "Hand wipes and a small bottle of sanitiser within the 100 ml rule.",
        ],
      },
    ],
    tiers: {
      small: ["An eye mask", "Earplugs", "Hand wipes", "Compression socks"],
      upgrade: [
        "A supportive neck pillow",
        "A light travel blanket",
        "A foot rest",
      ],
      saving: ["Noise-cancelling headphones"],
    },
    rules: [liquidsRule],
  },
  {
    slug: "bags-and-packing",
    image: "/images/iguana-palms.jpg",
    imagePosition: "center 55%",
    title: "Bags and packing",
    summary:
      "Carry-on backpacks, weekender bags, packing cubes and clear liquids bags.",
    audience: ["For her", "For him"],
    tint: "bg-blossom/10",
    number: "06",
    wonder:
      "Everything has its place, so your head can be somewhere else: wandering.",
    color: "#62a054",
    ink: "#3a6e30",
    intro:
      "The best travel bag is the one that fits your airline's limits, stays comfortable and packs in a way that makes sense when you are tired.",
    sections: [
      {
        heading: "Choosing a bag",
        points: [
          "Check your airline's size and weight limits before you buy. They differ between airlines and between fare types.",
          "A carry-on backpack is easy on stairs and cobblestones. A wheeled case is easier in long airports.",
          "A weekender is ideal for two or three days.",
          "Packing cubes keep things tidy and make repacking quick.",
        ],
      },
      {
        heading: "Pack so security is easy",
        points: [
          "Put the clear liquids bag and electronics where you can reach them.",
          "Keep your passport and boarding pass in one small pocket.",
        ],
      },
    ],
    tiers: {
      small: ["Packing cubes", "A clear liquids bag", "A toiletry bag"],
      upgrade: ["A carry-on backpack", "A weekender bag"],
      saving: ["A well-made carry-on suitcase"],
    },
    rules: [liquidsRule],
  },
  {
    slug: "worth-saving-for",
    image: "/images/ornate-hall.jpg",
    imagePosition: "center 50%",
    title: "Worth saving for",
    summary:
      "A few well-made pieces, like an exceptional carry-on or a handbag that lasts: buy once, buy well.",
    audience: ["For her", "For him"],
    tint: "bg-gold/20",
    number: "07",
    wonder:
      "A few things are worth waiting for, the ones that go with you to a hundred new places.",
    color: "#8656a0",
    ink: "#5e3270",
    intro:
      "A few pieces earn their place by lasting years. This guide is about how to decide, and it is fine to decide not to.",
    sections: [
      {
        heading: "How to decide",
        points: [
          "Think cost per trip. A bag used forty times costs far less per use than it looks.",
          "Look for a real warranty and the option to repair, not just replace.",
          "Weight matters. A heavy bag uses up part of your airline allowance before you pack.",
          "Quality shows in zips, wheels, stitching and handles.",
          "If it will stay in a cupboard, it is not worth it.",
        ],
      },
    ],
    forHer: [
      "A handbag that carries a day, a flight and a dinner",
      "A carry-on that is beautiful and light",
    ],
    forHim: ["A quality weekender", "A travel jacket that lasts"],
    tiers: {
      small: [],
      upgrade: [],
      saving: [
        "An exceptional carry-on suitcase",
        "A handbag that lasts",
        "A quality weekender",
        "A travel jacket",
      ],
    },
  },
];
