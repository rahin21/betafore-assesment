'use client';
import { Product } from "@/types";
import { Container } from "../ui/Container";
import { ProductCard } from "../ui/ProductCard";
import clsx from "clsx";
import { motion } from "framer-motion";

interface NewArrivalsProps {
  products: Product[];
}

export function NewArrivals({ products }: NewArrivalsProps) {
  return (
    <motion.div className="py-12 bg-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <Container>
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-2xl font-normal text-[#00C6D7]">New</h2>
          <span className="text-2xl font-light text-black">Arrivals</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.slice(0, 6).map((product, index) => (
            <motion.div 
              key={product.id}
              className={clsx(
                "block",
                index >= 3 && "hidden md:block",
                index >= 4 && "md:hidden lg:block",
                index >= 5 && "lg:hidden xl:block"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
