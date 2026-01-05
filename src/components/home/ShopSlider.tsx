"use client";

import { useRef } from "react";
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
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 md:h-58 bg-linear-to-t from-white to-[#F3EDC9] -mt-2"></div>
      <Container className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={scrollLeft}
          className="absolute xl:-left-20 lg:-left-4 top-1/2 -translate-y-1/2 z-10 p-2 hidden md:block"
          aria-label="Previous"
        >
          <Image src="/leftArrowSli.svg" alt="Previous" width={24} height={40} className="xl:w-20 xl:h-20 lg:w-10 lg:h-10" />
        </button>

        <button 
          onClick={scrollRight}
          className="absolute xl:-right-20 lg:-right-4 top-1/2 -translate-y-1/2 z-10 p-2 hidden md:block"
          aria-label="Next"
        >
          <Image 
            src="/leftArrowSli.svg" 
            alt="Next" 
            width={24} 
            height={40} 
            className="xl:w-20 xl:h-20 lg:w-10 lg:h-10 rotate-180" 
          />
        </button>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="flex gap-0 overflow-x-auto snap-x snap-mandatory md:pb-6 md:-ml-6 "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >

          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              className="relative min-w-[280px] md:min-w-[180px] lg:min-w-[295px] aspect-[1.4] shrink-0 snap-start  overflow-visible pl-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover z-20 border-white border-2"
                />
                {/* Corner Fold  */}
                <div 
                  className="absolute bottom-[82.5px] left-[13px] w-[8.05px] h-[20.06px] bg-[#220F0F] z-10 pointer-events-none"
                  style={{ transform: "rotate(-115.94deg)", transformOrigin: "bottom left" }}
                ></div>
                
                {/* Text Bar */}
                <div className="absolute bottom-8 left-[-9px] w-[220px] md:w-[95%] lg:w-[260px] h-[49px] bg-linear-to-r from-white to-white/85 shadow-[0px_1px_7px_0px_#00000091] flex items-center px-[15px] gap-[10px] z-30">
                   <div className="flex items-center justify-between w-full">
                     <span className="text-[25px] md:text-[16px] lg:text-[25px] leading-[53px] font-normal text-[#000000] truncate">
                       {cat.name}
                     </span>
                     <span className="text-[21px] md:text-[14px] lg:text-[21px] leading-[53px] font-normal text-[#14B1F0] cursor-pointer hover:underline whitespace-nowrap">
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
