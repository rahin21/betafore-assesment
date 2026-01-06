import { Product } from "@/types";
import { Container } from "../ui/Container";
import { ProductCard } from "../ui/ProductCard";

interface BestDealsProps {
  products: Product[];
}

export function BestDeals({ products }: BestDealsProps) {
  return (
    <div className="py-12 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-normal text-[#00C6D7]">Best</h2>
            <span className="text-2xl font-light text-black">Deals</span>
          </div>
          
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-6 text-sm font-medium text-gray-500">
             <button className="text-[#00C6D7] border-b-2 border-[#00C6D7] pb-1 whitespace-nowrap">Kitchen Appliances</button>
             <button className="hover:text-[#03484D] pb-1 whitespace-nowrap">Consoles</button>
             <button className="hover:text-[#03484D] pb-1 whitespace-nowrap">TV & Videos</button>
             <button className="hover:text-[#03484D] pb-1 whitespace-nowrap">Cell Phones</button>
             <button className="hover:text-[#03484D] pb-1 whitespace-nowrap">Grocery</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
