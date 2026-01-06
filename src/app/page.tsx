import { getProducts, getCategories, getProductsByCategory } from "@/actions/products";
import { Product } from "@/types";
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
  const categories = categoriesRes.success ? categoriesRes.data : [];

  // For New Arrivals, just take the first few new items (assuming the API returns sorted or we just take first ones)
  const arrivalProducts = products.slice(0, 10); // Pass more than 6 to let component handle slicing/responsive logic if needed, but component slices 0-6.

  // For Best Deals, we want to show products for the first category initially
  let bestDealProducts: Product[] = [];
  if (categories.length > 0) {
    const firstCategory = categories[0].name;
    // Try to filter from existing products first to save a request
    bestDealProducts = products.filter(p => p.category === firstCategory);
    
    // If we didn't find any (maybe products list is partial?), fetch specifically
    if (bestDealProducts.length === 0) {
       const catProductsRes = await getProductsByCategory(firstCategory);
       if (catProductsRes.success) {
         bestDealProducts = catProductsRes.data;
       }
    }
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <ShopSlider />
      <NewArrivals products={arrivalProducts} />
      <BestDeals products={bestDealProducts} categories={categories} />
    </main>
  );
}
