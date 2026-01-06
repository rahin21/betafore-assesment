'use client';
import { Product } from "@/types";
import Image from "next/image";
import { Button } from "./Button";
import { motion } from "framer-motion";

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
    <motion.div 
      className="group relative flex flex-col justify-between overflow-hidden bg-white p-4 border border-gray-200 hover:border-brand transition-all duration-300 hover:shadow-lg h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-1 mb-4">
        <p className="text-[10px] text-gray-500 truncate uppercase tracking-wide">
          {product.category}
        </p>
        <h3 className="text-sm font-normal text-brand line-clamp-2 h-[35px] leading-tight overflow-hidden">
          {product.title}
        </h3>
      </div>

      <div className="relative aspect-square w-full mb-4 overflow-hidden bg-transparent">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex flex-col gap-3 mt-auto">
        <div className="flex items-baseline gap-2">
           <span className="text-xs text-gray-400 line-through">
            RS {originalPrice}
          </span>
          <span className="text-sm font-medium text-price">
            RS {product.price}
          </span>
        </div>
        
        <div>
          <Button className="w-full bg-price hover:bg-brand-dark text-white h-9 text-xs font-normal">
            Add to cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
