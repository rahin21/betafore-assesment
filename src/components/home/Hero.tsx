import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden min-h-[300px] md:min-h-[300px]">
      {/* Background Image - fit to screen without zoom */}
      <div className="absolute inset-0 w-full h-full">
         <Image 
            src="/heroImage.png" 
            alt="Hero Background" 
            fill
            className="object-contain object-center"
            priority
         />
      </div>

      <Container className="relative z-10 h-full">
        <div className="flex flex-col justify-center h-full py-16 max-w-2xl">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] text-[#2E2E2E]">
              <span className="font-light">Shop </span> 
              <span className="font-light text-[#00C6D7]">Computer</span> 
              <br />
              <span className="font-light text-[#00C6D7]">& experience</span>
            </h1>
            
            <p className="text-sm md:text-base text-[#2E2E2E] max-w-md opacity-80 leading-relaxed font-medium">
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
  );
}
