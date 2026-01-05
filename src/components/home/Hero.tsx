import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#F3EDC9]">
      {/* Mobile/Tablet Layout (Image Top, Text Center) */}
      <div className="flex flex-col lg:hidden">
        {/* Image Section */}
        <div className="relative w-full aspect-2/1 bg-[#F3EDC9]">
          <Image 
            src="/heroImageMd.png" 
            alt="Hero Background" 
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
        
        {/* Content Section */}
        <div className="px-6 py-10 text-center space-y-6">
          <h1 className="text-4xl font-light text-[#2E2E2E] leading-tight">
            Shop <span className="text-[#00C6D7]">Computer</span>
            <br />
            <span className="text-[#00C6D7]">& experience</span>
          </h1>
          
          <p className="text-sm text-[#2E2E2E] opacity-80 leading-relaxed font-medium max-w-md mx-auto">
            You cannot inspect quality into the product; it is already there.
            <br />
            I am not a product of my circumstances. I am a product of my decisions.
          </p>
          
          <Button className="bg-[#00C6D7] hover:bg-[#00b0bf] text-white px-10 py-6 rounded-[10px] text-lg font-medium shadow-none transition-transform active:scale-95">
            View More
          </Button>
        </div>
      </div>

      {/* Desktop/LG Layout (Original Logic Preserved) */}
      <div className="hidden lg:block relative xl:h-[380px] h-[250px]">
        {/* Background Image - fit to screen without zoom */}
        <div className="absolute inset-0 w-full h-full">
           <Image 
              src="/heroImage.png" 
              alt="Hero Background" 
              fill
              className="object-contain object-center lg:object-fill"
              priority
           />
        </div>

        <Container className="relative z-10 h-full">
          <div className="flex flex-col justify-center h-full xl:py-16 lg:py-6 max-w-2xl">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-3xl xl:text-[64px]  leading-[1.1] text-[#2E2E2E]">
                <span className="font-light">Shop </span> 
                <span className="font-light text-[#00C6D7]">Computer</span> 
                <br />
                <span className="font-light text-[#00C6D7]">& experience</span>
              </h1>
              
              <p className="text-sm xl:text-base text-[#2E2E2E] max-w-md opacity-80 leading-relaxed font-medium">
                You cannot inspect quality into the product; it is already there.
                <br />
                I am not a product of my circumstances. I am a product of my decisions.
              </p>
              
              <Button className="bg-[#00C6D7] hover:bg-[#00b0bf] text-white px-10 py-6 rounded-[10px] text-lg font-medium shadow-none transition-transform active:scale-95">
                View More
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
