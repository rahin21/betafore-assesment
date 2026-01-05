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
          className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 p-2 hidden md:block"
          aria-label="Previous"
        >
          <Image src="/leftArrowSli.svg" alt="Previous" width={24} height={40} className="w-20 h-20" />
        </button>

        <button 
          onClick={scrollRight}
          className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 p-2  hidden md:block"
          aria-label="Next"
        >
          <Image 
            src="/leftArrowSli.svg" 
            alt="Next" 
            width={24} 
            height={40} 
            className="w-20 h-20 rotate-180" 
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
              className="relative min-w-[280px] md:min-w-[320px] lg:min-w-[350px] aspect-[1.4] shrink-0 snap-start shadow-sm rounded-sm overflow-visible"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover z-20"
                />
                {/* Corner Fold  */}
                <div 
                  className="absolute bottom-[82.5px] left-[13px] w-[8.05px] h-[20.06px] bg-[#220F0F] z-10 pointer-events-none"
                  style={{ transform: "rotate(-115.94deg)", transformOrigin: "bottom left" }}
                ></div>
                
                {/* Text Bar */}
                <div className="absolute bottom-8 left-[-9px] w-[270px] h-[49px] bg-gradient-to-r from-white to-white/85 shadow-[0px_1px_7px_0px_#00000091] flex items-center px-[15px] gap-[10px] z-30">
                   <div className="flex items-center justify-between w-full">
                     <span className="text-[25px] leading-[53px] font-normal text-[#000000] truncate">
                       {cat.name}
                     </span>
                     <span className="text-[21px] leading-[53px] font-normal text-[#14B1F0] cursor-pointer hover:underline whitespace-nowrap">
                       Shop
                     </span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
