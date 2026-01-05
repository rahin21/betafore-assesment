"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui/Container";

const categories = [
  { name: "Electronics", image: "/shop-slider/ElectronicsShopImage.png" },
  { name: "Fashion", image: "/shop-slider/FashionShopImage.png" },
  { name: "Appliances", image: "/shop-slider/AppliancesShopImage.png" },
  { name: "Babies Store", image: "/shop-slider/BabiesStoreShopImage.png" },
  // Adding more to demonstrate slider capability if needed, or loop these
  { name: "Home & Lifestyle", image: "/shop-slider/HomeLivestyleShop.png" },
  { name: "WinMart", image: "/shop-slider/WinMartShopImage.png" },
];

export function ShopSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-white py-4 group">
			 {/* Bottom gradient from #F3EDC9 to #FFFFFF */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 md:h-28 bg-gradient-to-t from-white to-[#F3EDC9] -mt-2"></div>
      <Container className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block"
          aria-label="Previous"
        >
          <Image src="/leftArrowSli.svg" alt="Previous" width={24} height={40} className="w-6 h-10" />
        </button>

        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hidden md:block"
          aria-label="Next"
        >
          <Image 
            src="/leftArrowSli.svg" 
            alt="Next" 
            width={24} 
            height={40} 
            className="w-6 h-10 rotate-180" 
          />
        </button>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              className="relative min-w-[280px] md:min-w-[320px] lg:min-w-[350px] aspect-[1.4] shrink-0 snap-start shadow-sm rounded-sm overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
                
                {/* Text Bar */}
                <div className="absolute bottom-6 left-0 w-3/4 bg-white/95 backdrop-blur-sm px-6 py-3 flex items-center justify-between shadow-sm">
                   <span className="text-lg font-normal text-[#2E2E2E] truncate pr-2">
                     {cat.name}
                   </span>
                   <span className="text-sm font-medium text-[#00C6D7] uppercase tracking-wide cursor-pointer hover:underline">
                     Shop
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
