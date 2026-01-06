'use client';
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [slide, setSlide] = useState(0);
  const desktopSlides = ["/heroImage.png", "/heroImage.png", "/heroImage.png"];
  const mobileSlides = ["/heroImageMd.png", "/heroImageMd.png", "/heroImageMd.png"];
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % desktopSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [desktopSlides.length]);
  return (
    <div className="relative w-full overflow-hidden bg-hero-bg">
      <div className="flex flex-col lg:hidden">
        <motion.div
          className="relative w-full aspect-2/1 bg-hero-bg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image 
            src={mobileSlides[slide]} 
            alt="Hero Background" 
            fill
            className="object-cover object-bottom"
            priority
          />
        </motion.div>
        
        <div className="flex items-center justify-center gap-3 py-2 md:py-3">
          {mobileSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-2 w-6 rounded-full ${i === slide ? "bg-teal-dark" : "bg-gray"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        <motion.div
          className="px-6 py-10 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h1 
            className="text-4xl font-light text-text leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Shop <span className="text-brand">Computer</span>
            <br />
            <span className="text-brand">& experience</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm text-text opacity-80 leading-relaxed font-medium max-w-md mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            You cannot inspect quality into the product; it is already there.
            <br />
            I am not a product of my circumstances. I am a product of my decisions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Button className="bg-brand hover:bg-brand-dark text-white px-10 py-6 rounded-[10px] text-lg font-medium shadow-none transition-transform active:scale-95">
              View More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden lg:block relative xl:h-[380px] h-[250px]">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
              src={desktopSlides[slide]} 
              alt="Hero Background" 
              fill
              className="object-contain object-center lg:object-fill"
              priority
           />
           <div className="absolute lg:bottom-6 left-0 right-0 flex items-center justify-center gap-3">
             {desktopSlides.map((_, i) => (
              <button
                 key={i}
                 onClick={() => setSlide(i)}
                className={`h-2 w-8 rounded-full ${i === slide ? "bg-teal-dark" : "bg-gray"}`}
                 aria-label={`Go to slide ${i + 1}`}
               />
             ))}
           </div>
        </motion.div>

        <Container className="relative z-10 h-full">
          <motion.div 
            className="flex flex-col justify-center h-full xl:py-16 lg:py-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="space-y-2">
              <motion.h1 
                className="text-4xl lg:text-3xl xl:text-[64px]  leading-[1.1] text-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="font-light">Shop </span> 
                <span className="font-light text-brand">Computer</span> 
                <br />
                <span className="font-light text-brand">& experience</span>
              </motion.h1>
              
              <motion.p 
                className="text-sm xl:text-base text-text max-w-md opacity-80 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                You cannot inspect quality into the product; it is already there.
                <br />
                I am not a product of my circumstances. I am a product of my decisions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button className="bg-brand hover:bg-brand-dark text-white px-10 py-6 rounded-[10px] text-lg font-medium shadow-none transition-transform active:scale-95">
                  View More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}
