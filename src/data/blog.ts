export type BlogBlock = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "ul"; items: string[] } | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  image: string;
  category: "Jewellery Education" | "Style Notes" | "Care" | "Gifting" | "Our Stories";
  readMins: number;
  date: string;
  title: string;
  excerpt: string;
  body: BlogBlock[];
}

export const blogCategories = ["All", "Jewellery Education", "Style Notes", "Care", "Gifting", "Our Stories"] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-your-first-diamond",
    image: "/img/home/festive-banner.jpg",
    category: "Jewellery Education",
    readMins: 8,
    date: "October 2024",
    title: "The Complete Guide to Choosing Your First Diamond",
    excerpt: "Everything you need to know about the 4Cs, certification, and what makes a diamond truly exceptional — in plain language.",
    body: [
      { type: "p", text: "Buying your first diamond is exciting — and, for most people, a little overwhelming. Grading reports, unfamiliar terms and wide price ranges can make a simple decision feel complicated. This guide walks you through what actually matters, so you can choose with confidence." },
      { type: "h2", text: "Start with the 4Cs" },
      { type: "p", text: "Every diamond is described by four qualities: cut, colour, clarity and carat weight. Together they decide how a stone looks and what it is worth." },
      {
        type: "ul",
        items: [
          "Cut — how well the diamond returns light. It has the biggest effect on sparkle, so prioritise it.",
          "Colour — graded from colourless (D) to light yellow (Z). Near-colourless stones (G–J) look white once set in gold.",
          "Clarity — the presence of tiny inclusions. Eye-clean stones (VS–SI) offer the best value.",
          "Carat — the weight of the stone. A well-cut smaller diamond often looks brighter than a poorly cut larger one.",
        ],
      },
      { type: "h2", text: "Always ask for certification" },
      { type: "p", text: "A certificate from an independent laboratory such as the International Gemological Institute (IGI) records your diamond's grades, measurements and a unique report number you can verify online. At Sunehriè, natural diamonds come with IGI documentation where applicable." },
      { type: "quote", text: "A certificate does not make a diamond beautiful — but it makes sure you know exactly what you are paying for." },
      { type: "h2", text: "Match the metal to the moment" },
      { type: "p", text: "The setting matters as much as the stone. 18KT gold gives a rich colour for statement and bridal pieces, while 14KT and 9KT are stronger and lighter on the budget — ideal for everyday diamond jewellery." },
      { type: "h2", text: "Set a budget, then balance" },
      { type: "p", text: "Decide what you are comfortable spending first. Then balance the 4Cs: an excellent cut with slightly lower colour or clarity usually gives a more beautiful result than chasing top grades in every category." },
    ],
  },
  {
    slug: "understanding-gold-purity",
    image: "/img/home/cat-ring.jpg",
    category: "Jewellery Education",
    readMins: 5,
    date: "September 2024",
    title: "Understanding Gold Purity: 9KT, 14KT & 18KT Explained",
    excerpt: "A beginner-friendly breakdown of gold karats, their composition, and which purity suits your lifestyle and budget.",
    body: [
      { type: "p", text: "Pure 24 karat gold is beautiful but soft — too soft for most jewellery that is worn every day. That is why gold is alloyed with other metals to add strength. The karat number tells you how much of the piece is pure gold." },
      { type: "h2", text: "9KT — everyday fine gold" },
      { type: "p", text: "About 37.5% pure gold. Durable, lightweight and the most affordable way to own real, hallmarked gold. Perfect for daily-wear rings, chains and studs." },
      { type: "h2", text: "14KT — the modern sweet spot" },
      { type: "p", text: "About 58.5% pure gold. A richer tone than 9KT with excellent strength, which makes it a favourite for diamond-forward, contemporary designs." },
      { type: "h2", text: "18KT — heirloom gold" },
      { type: "p", text: "About 75% pure gold. The warmest colour and a premium feel, commonly chosen for bridal jewellery and pieces you plan to pass down." },
      { type: "h2", text: "Which one is right for you?" },
      {
        type: "ul",
        items: [
          "Wear it every day and want durability? Choose 9KT or 14KT.",
          "Want a balance of colour, strength and price? 14KT.",
          "Buying for a wedding or as an heirloom? 18KT.",
        ],
      },
      { type: "p", text: "Whatever you choose, look for the BIS hallmark and HUID — your assurance that the purity is exactly what it says." },
    ],
  },
  {
    slug: "styling-statement-earrings",
    image: "/img/home/cat-earrings.jpg",
    category: "Style Notes",
    readMins: 4,
    date: "September 2024",
    title: "5 Ways to Style Statement Earrings for Every Occasion",
    excerpt: "From boardroom to brunch — how to pair bold earrings with outfits that let them shine without overdoing it.",
    body: [
      { type: "p", text: "Statement earrings can carry an entire look on their own. The trick is giving them room to be the hero." },
      {
        type: "ul",
        items: [
          "Pull your hair back — a sleek bun or low ponytail frames drops and chandeliers beautifully.",
          "Keep the neckline simple. Boat necks and collarless kurtas let earrings stand out.",
          "Match the metal tone to the rest of your jewellery for a polished finish.",
          "For the office, choose a structured gold hoop or a single-drop diamond earring.",
          "For festivities, layer colour: ruby or emerald drops against a neutral outfit glow.",
        ],
      },
      { type: "p", text: "When in doubt, remember the one-statement rule: if your earrings are bold, keep the necklace delicate — or skip it entirely." },
    ],
  },
  {
    slug: "art-of-gifting-jewellery",
    image: "/img/home/cat-pendant.jpg",
    category: "Gifting",
    readMins: 3,
    date: "August 2024",
    title: "The Art of Gifting Jewellery: A Thoughtful Guide",
    excerpt: "What to consider when choosing jewellery as a gift — from understanding preferences to picking the right metal and stone.",
    body: [
      { type: "p", text: "Jewellery is one of the most personal gifts you can give. A little observation goes a long way in getting it right." },
      { type: "h2", text: "Notice what they already wear" },
      { type: "p", text: "Do they prefer yellow, white or rose gold? Minimal studs or bold drops? Their current favourites are your best guide." },
      { type: "h2", text: "When unsure, choose versatile pieces" },
      { type: "p", text: "Pendants, stud earrings and bracelets don't need sizing and suit almost every style. Rings are best saved for when you know the size — or choose a design that can be resized." },
      { type: "h2", text: "Make it meaningful" },
      { type: "p", text: "An initial, a birthstone or a design tied to a shared memory turns a beautiful piece into a keepsake. Our 48-hour exchange means they can swap it if it isn't quite right." },
    ],
  },
  {
    slug: "natural-vs-lab-grown-diamonds",
    image: "/img/home/cat-mangalsutra.jpg",
    category: "Jewellery Education",
    readMins: 6,
    date: "August 2024",
    title: "Natural vs Lab-Grown Diamonds: What You Should Know",
    excerpt: "An honest comparison of natural and lab-grown diamonds — covering value, rarity, certification, and long-term worth.",
    body: [
      { type: "p", text: "Natural and lab-grown diamonds look alike to the naked eye and share the same chemical structure. What separates them is origin, rarity and how they hold value over time." },
      { type: "h2", text: "Origin and rarity" },
      { type: "p", text: "Natural diamonds formed deep in the earth over billions of years and are finite. Lab-grown diamonds are produced in weeks in a controlled environment and can be made in any quantity." },
      { type: "h2", text: "Value over time" },
      { type: "p", text: "Because supply is limited, natural diamonds have historically held their value better. Lab-grown prices have fallen steadily as production has scaled." },
      { type: "h2", text: "Certification" },
      { type: "p", text: "Both can be graded by laboratories such as IGI, and the report will clearly state the origin. Always check it." },
      { type: "quote", text: "At Sunehriè we use only natural diamonds — never lab-grown, never simulated." },
    ],
  },
  {
    slug: "caring-for-gold-jewellery",
    image: "/img/home/cat-necklace-set.jpg",
    category: "Care",
    readMins: 3,
    date: "July 2024",
    title: "How to Care for Your Gold Jewellery at Home",
    excerpt: "Simple, safe methods to clean and store your hallmarked gold and diamond pieces — no professional tools required.",
    body: [
      { type: "p", text: "A few simple habits keep gold and diamonds looking new for years." },
      {
        type: "ul",
        items: [
          "Soak pieces in warm water with a drop of mild soap for 15–20 minutes.",
          "Brush gently with a soft toothbrush, especially behind diamond settings.",
          "Rinse, then pat dry with a lint-free cloth.",
          "Store each piece separately in a soft pouch so stones don't scratch metal.",
          "Put jewellery on last — after perfume, lotion and hairspray.",
        ],
      },
      { type: "p", text: "Once a year, bring your pieces to our stores for a complimentary check of prongs and clasps." },
    ],
  },
  {
    slug: "behind-the-craft-godhra-workshop",
    image: "/img/home/cat-pendant-earring-set.jpg",
    category: "Our Stories",
    readMins: 4,
    date: "June 2024",
    title: "Behind the Craft: A Day at Our Godhra Workshop",
    excerpt: "An inside look at how our artisans handcraft each piece — from wax models to final hallmarking and quality checks.",
    body: [
      { type: "p", text: "Every Sunehriè piece passes through many hands before it reaches yours. Here is what a day in our Godhra workshop looks like." },
      { type: "h2", text: "From sketch to wax" },
      { type: "p", text: "Designs begin as sketches and 3D models, then become precise wax patterns that capture every detail." },
      { type: "h2", text: "Casting and setting" },
      { type: "p", text: "The wax is cast in gold, cleaned and polished, and then our setters place each natural diamond by hand under magnification." },
      { type: "h2", text: "Hallmarking and quality checks" },
      { type: "p", text: "Finished pieces are sent for BIS hallmarking and HUID, then checked again by our team before they are packed in tamper-proof packaging." },
    ],
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
