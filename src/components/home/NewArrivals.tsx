import { Product } from "@/types";
import { Container } from "../ui/Container";
import { ProductCard } from "../ui/ProductCard";

interface NewArrivalsProps {
  products: Product[];
}

export function NewArrivals({ products }: NewArrivalsProps) {
  return (
    <div className="py-12 bg-white">
      <Container>
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-2xl font-bold text-[#00C6D7]">New</h2>
          <span className="text-2xl font-light text-black">Arrivals</span>
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
