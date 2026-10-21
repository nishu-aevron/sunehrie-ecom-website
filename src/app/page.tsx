import HeroCarousel from "@/components/home/HeroCarousel";
import GoldTicker from "@/components/home/GoldTicker";
import { BestSellers, FeaturedCollection, FineGold } from "@/components/home/ProductSections";
import { ExploreCategories, FestiveBanner, ShopByGender, ShopByOccasion, ShopByPurity, StoryBanner } from "@/components/home/ImageSections";
import { MarkYourMoment, Showroom, Testimonials } from "@/components/home/StorySections";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <main className="bg-white pb-[83px]">
      <HeroCarousel />
      <GoldTicker />
      <div className="mt-[21px] flex flex-col gap-[23px]">
        <FineGold />
        <BestSellers />
        <ExploreCategories />
        <StoryBanner />
        <div className="pb-[25px]">
          <ShopByGender />
          <ShopByPurity />
        </div>
        <FestiveBanner />
        <FeaturedCollection />
        <ShopByOccasion />
        <TrustStrip />
        <MarkYourMoment />
        <Showroom />
        <Testimonials />
      </div>
    </main>
  );
}
