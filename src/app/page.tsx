import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GoldTicker from "@/components/GoldTicker";
import ProductsSection from "@/components/ProductsSection";
import BestSellers from "@/components/BestSellers";
import ShopByGender from "@/components/ShopByGender";
import ShopByPurity from "@/components/ShopByPurity";
import Banner from "@/components/Banner";
import NewCollection from "@/components/NewCollection";
import ShopByOccasion from "@/components/ShopByOccasion";
import TrustBadges from "@/components/TrustBadges";
import SocialShowcase from "@/components/SocialShowcase";
import Showroom from "@/components/Showroom";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#240632]">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Main Header with Pill Search, Logo & Actions */}
      <Header />

      {/* 3. Horizontal Category Navigation Bar with Icons */}
      <Navigation />

      {/* 4. Hero Banner (Fresh Finds, Just Dropped!) */}
      <HeroSection />

      {/* 5. Live Gold Price Ticker Bar */}
      <GoldTicker />

      {/* 6. 9KT Fine Gold Collection */}
      <ProductsSection />

      {/* 7. Category Chips & Best Sellers */}
      <BestSellers />

      {/* 8. Shop by Gender (Male, Female, Kids Scalloped Indian Arches) */}
      <ShopByGender />

      {/* 9. Shop by Purity (9KT, 14KT, 18KT Metallic Pill Cards) */}
      <ShopByPurity />

      {/* 10. Promotional Festive Banner (20% Off Making Charges) */}
      <Banner />

      {/* 11. Featured New Collection with 6 Products Grid & Sticky Panel */}
      <NewCollection />

      {/* 12. Shop by Occasion (Office, Party, Wedding, Daily Wear) */}
      <ShopByOccasion />

      {/* 13. Certified Trust Badges Strip */}
      <TrustBadges />

      {/* 14. Mark Your Moment with Sunehriè (Instagram Reel Showcase) */}
      <SocialShowcase />

      {/* 15. Showroom & Heritage (Two Generations of Trust) */}
      <Showroom />

      {/* 16. Testimonials (Loved Across Gujarat) */}
      <Testimonials />

      {/* 17. Comprehensive Brand Footer */}
      <Footer />
    </main>
  );
}
