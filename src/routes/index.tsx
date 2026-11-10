import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ShopProvider } from "@/lib/shop/store";
import { TopBar, MainHeader } from "@/components/shop/Header";
import { CategorySidebar, HeroSlider, MobileCategoryStrip, PromotionalBannerGrid } from "@/components/shop/Hero";
import {
  ResultsSection, FlashSaleSection, TrendingSection, MainCampaignBanner, NewArrivalsSection, ShopByCategory, MoreToLoveSection,
} from "@/components/shop/Sections";
import { ProductDetailDialog } from "@/components/shop/ProductCard";
import { CartDrawer, WishlistDrawer, LocationDialog, AccountDialog, SellerDialog, OfferPopup } from "@/components/shop/Overlays";
import { SiteFooter } from "@/components/shop/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sholok Shopping — Fashion, Beauty, Home & More" },
      { name: "description", content: "Shop women's and men's fashion, beauty, personal care, home, baby, pet and more at Sholok Shopping." },
      { property: "og:title", content: "Sholok Shopping — Discover More, Love More" },
      { property: "og:description", content: "Fashion, beauty, home and everyday essentials in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ShopProvider>
      <TopBar />
      <MainHeader />
      <main className="container-shop flex flex-col gap-10 py-5 md:gap-14 md:py-6">
        <div className="flex flex-col gap-4">
          <MobileCategoryStrip />
          <div className="flex gap-5"><CategorySidebar /><HeroSlider /></div>
          <PromotionalBannerGrid />
        </div>
        <ResultsSection />
        <FlashSaleSection />
        <TrendingSection />
        <MainCampaignBanner />
        <ShopByCategory />
        <NewArrivalsSection />
        <MoreToLoveSection />
      </main>
      <SiteFooter />
      <ProductDetailDialog />
      <CartDrawer />
      <WishlistDrawer />
      <LocationDialog />
      <AccountDialog />
      <SellerDialog />
      <OfferPopup />
      <Toaster position="bottom-center" />
    </ShopProvider>
  );
}
