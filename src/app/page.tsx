import { getProducts, getCategories } from "@/actions/products";
import { Hero } from "@/components/home/Hero";
import { ShopSlider } from "@/components/home/ShopSlider";
import { NewArrivals } from "@/components/home/NewArrivals";
import { BestDeals } from "@/components/home/BestDeals";

export default async function Home() {
  // Fetch data using Server Actions
  const [productsRes, categoriesRes] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const products = productsRes.success ? productsRes.data : [];
  // We might not use categoriesRes for the slider since we are using static images as per requirements
  // but we keep the fetch in case needed later or for other parts.

  // For the demo, we'll slice products for different sections
  const arrivalProducts = products.slice(0, 6);
  const bestDealProducts = products.slice(5, 15);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <ShopSlider />
      <NewArrivals products={arrivalProducts} />
      <BestDeals products={bestDealProducts} />
    </main>
  );
}
