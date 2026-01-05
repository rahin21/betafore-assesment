import { Product } from "@/types";
import Image from "next/image";
import { Button } from "./Button";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "horizontal";
}

export function ProductCard({ product }: ProductCardProps) {
  // Calculate a fake original price for display since API only gives one price
  // The design shows "RS 60,000 RS 56,000", implying a discount.
  // I'll just show the price as the discounted one and a fake higher original price.
  const originalPrice = (product.price * 1.2).toFixed(2);

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden  bg-white p-4 border border-transparent hover:border-[#00C6D7] transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square w-full mb-4 overflow-hidden  bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-500 truncate">{product.category}</p>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10">
          {product.title}
        </h3>
        
        <div className="mt-2 flex items-baseline gap-2">
           <span className="text-xs text-gray-400 line-through">
            ${originalPrice}
          </span>
          <span className="text-sm font-bold text-[#00C6D7]">
            ${product.price}
          </span>
        </div>
        
        <div className="mt-4">
          <Button className="w-full bg-[#00C6D7] hover:bg-[#009ca9]">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
