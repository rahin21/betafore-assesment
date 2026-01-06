'use client';

import { useState } from "react";
import { Product, Category } from "@/types";
import { Container } from "../ui/Container";
import { ProductCard } from "../ui/ProductCard";
import { getProductsByCategory } from "@/actions/products";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface BestDealsProps {
  products: Product[]; // Initial products (can be empty or pre-filled)
  categories: Category[];
}

export function BestDeals({ products: initialProducts, categories }: BestDealsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?.name || "");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCategoryChange = async (categoryName: string) => {
    if (categoryName === selectedCategory) return;
    
    setSelectedCategory(categoryName);
    setIsLoading(true);
    setError(null);

    try {
      const response = await getProductsByCategory(categoryName);
      if (response.success) {
        setProducts(response.data);
      } else {
        setError(response.message);
        setProducts([]);
      }
    } catch (err) {
      setError("Failed to load products");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-normal text-brand">Best</h2>
            <span className="text-2xl font-light text-black">Deals</span>
          </div>
          
          <div 
            className="flex overflow-x-auto pb-2 md:pb-0 gap-6 text-sm font-medium text-gray-500 scrollbar-hide"
            role="tablist"
            aria-label="Product categories"
          >
             {categories.map((cat) => (
               <button 
                 key={cat.id || cat.name}
                 onClick={() => handleCategoryChange(cat.name)}
                 className={clsx(
                   "pb-1 whitespace-nowrap transition-colors",
                   selectedCategory === cat.name 
                    ? "text-brand border-b-2 border-brand" 
                    : "hover:text-teal-dark"
                 )}
                 role="tab"
                 aria-selected={selectedCategory === cat.name}
                 aria-controls="deals-grid"
               >
                 {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
               </button>
             ))}
          </div>
        </div>
        
        {error ? (
          <div className="text-center text-red-500 py-10" role="alert">
            {error}
          </div>
        ) : (
          <div 
            id="deals-grid"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 min-h-[300px]"
            aria-busy={isLoading}
          >
            {isLoading ? (
               // Loading Skeleton
               Array.from({ length: 5 }).map((_, i) => (
                 <div key={i} className="animate-pulse space-y-4">
                   <div className="bg-gray-200 h-48 rounded-lg w-full"></div>
                   <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                 </div>
               ))
            ) : (
              <AnimatePresence mode="popLayout">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
            
            {!isLoading && products.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-10">
                No products found in this category.
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}
