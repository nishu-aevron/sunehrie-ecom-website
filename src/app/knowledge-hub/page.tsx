import type { Metadata } from "next";
import { EduHero } from "@/components/education/EduBlocks";
import KnowledgeGrid, { type KnowledgeArticle } from "@/components/education/KnowledgeGrid";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Stories, guides, and education to help you choose, care for, and understand your jewellery with confidence.",
};

const featured: KnowledgeArticle = {
  href: "/metal-education",
  image: "/img/knowledge/hallmark-guide.png",
  tag: "Education",
  topics: ["Education", "Gold", "Diamonds"],
  readMins: 5,
  title: "Jewellery Certification Guide: What the Hallmark Means",
  excerpt: "Understand why BIS hallmarking and IGI certification matter — and what to look for when buying fine jewellery in India.",
};

const articles: KnowledgeArticle[] = [
  {
    href: "/diamond-education",
    image: "/img/knowledge/4cs-guide.png",
    tag: "Education",
    topics: ["Education", "Diamonds"],
    readMins: 6,
    title: "Understanding the 4Cs of Diamonds",
    excerpt: "Learn how cut, colour, clarity, and carat weight affect a diamond's beauty and value.",
  },
  {
    href: "/gold-rate-guide",
    image: "/img/knowledge/gold-rate-guide.png",
    tag: "Gold",
    topics: ["Gold"],
    readMins: 4,
    title: "Gold Rate Guide",
    excerpt: "How karat purity, weight, and market rates come together to determine the price you pay.",
  },
  {
    href: "/metal-education",
    image: "/img/knowledge/metal-guide.png",
    tag: "Education",
    topics: ["Education", "Gold"],
    readMins: 5,
    title: "Metal Education Guide",
    excerpt: "A practical guide to gold purity, gold colour variations, and the qualities of platinum.",
  },
  {
    href: "/size-guide",
    image: "/img/knowledge/size-guide.png",
    tag: "Guides",
    topics: ["Guides"],
    readMins: 3,
    title: "Size Guide",
    excerpt: "How to measure your ring and bangle size accurately at home before you order.",
  },
  {
    href: "/blog/caring-for-gold-jewellery",
    image: "/img/home/cat-necklace-set.jpg",
    tag: "Care & Styling",
    topics: ["Care & Styling"],
    readMins: 3,
    title: "How to Care for Your Gold Jewellery",
    excerpt: "Simple, safe methods to clean and store your hallmarked gold and diamond pieces at home.",
  },
  {
    href: "/blog/styling-statement-earrings",
    image: "/img/home/cat-earrings.jpg",
    tag: "Care & Styling",
    topics: ["Care & Styling"],
    readMins: 4,
    title: "Styling Statement Earrings",
    excerpt: "From boardroom to brunch — let bold earrings shine without overdoing it.",
  },
];

export default function KnowledgeHubPage() {
  return (
    <main className="bg-white">
      <EduHero
        crumb="Knowledge Hub"
        title="Knowledge That Shines as Bright as Our Jewellery"
        intro="Stories, guides, and education to help you choose, care for, and understand your jewellery with confidence."
      />
      <KnowledgeGrid featured={featured} articles={articles} />
    </main>
  );
}
