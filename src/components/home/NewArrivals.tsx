import { Product } from "@/types";
import { Container } from "../ui/Container";
import { ProductCard } from "../ui/ProductCard";
import clsx from "clsx";

interface NewArrivalsProps {
  products: Product[];
}

export function NewArrivals({ products }: NewArrivalsProps) {
  
  return (
    <div className="py-12 bg-white">
      <Container>
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-2xl font-normal text-[#00C6D7]">New</h2>
          <span className="text-2xl font-light text-black">Arrivals</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.slice(0, 6).map((product, index) => (
            <div 
              key={product.id}
              className={clsx(
                // Base: Visible
                "block",
                // Mobile (default): Show only first 3 items (index 0, 1)
                index >= 3 && "hidden md:block",
                // Medium (md): Show 4 items (index 0-3). 
                index >= 4 && "md:hidden lg:block",
                // Large (lg): Show 5 items (index 0-4).
                index >= 5 && "lg:hidden xl:block"
              )}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
