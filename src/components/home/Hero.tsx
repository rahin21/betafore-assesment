'use client';
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F3EDC9]">
      <div className="flex flex-col lg:hidden">
        <motion.div
          className="relative w-full aspect-2/1 bg-[#F3EDC9]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image 
            src="/heroImageMd.png" 
            alt="Hero Background" 
            fill
            className="object-cover object-bottom"
            priority
          />
        </motion.div>
        
        <motion.div
          className="px-6 py-10 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h1 
            className="text-4xl font-light text-[#2E2E2E] leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Shop <span className="text-[#00C6D7]">Computer</span>
            <br />
            <span className="text-[#00C6D7]">& experience</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm text-[#2E2E2E] opacity-80 leading-relaxed font-medium max-w-md mx-auto"
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
            <Button className="bg-[#00C6D7] hover:bg-[#00b0bf] text-white px-10 py-6 rounded-[10px] text-lg font-medium shadow-none transition-transform active:scale-95">
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
              src="/heroImage.png" 
              alt="Hero Background" 
              fill
              className="object-contain object-center lg:object-fill"
              priority
           />
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
                className="text-4xl lg:text-3xl xl:text-[64px]  leading-[1.1] text-[#2E2E2E]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="font-light">Shop </span> 
                <span className="font-light text-[#00C6D7]">Computer</span> 
                <br />
                <span className="font-light text-[#00C6D7]">& experience</span>
              </motion.h1>
              
              <motion.p 
                className="text-sm xl:text-base text-[#2E2E2E] max-w-md opacity-80 leading-relaxed font-medium"
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
                <Button className="bg-[#00C6D7] hover:bg-[#00b0bf] text-white px-10 py-6 rounded-[10px] text-lg font-medium shadow-none transition-transform active:scale-95">
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
