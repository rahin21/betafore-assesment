import Link from "next/link";
import { Search, User, Heart, Menu, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Container } from "../ui/Container";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="w-full relative z-50 font-sans">
      {/* Top Header */}
      <div className="bg-[#03484D] text-white py-4">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
            {/* Logo */}
            <Link href="/" className="block relative h-10 w-32 shrink-0">
               {/* Using text fallback for exact Figma match if SVG isn't perfect, but prompt said use SVG. 
                   I will use the SVG but ensure it's sized correctly. */}
               <img 
                 src="/winStore-Icon.svg" 
                 alt="win store" 
                 className="w-full h-full object-contain brightness-0 invert" 
               />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl w-full">
              <div className="flex h-10 w-full rounded-md overflow-hidden bg-white">
                {/* Categories Dropdown */}
                <button className="hidden sm:flex items-center gap-2 px-4 text-gray-500 bg-[#F3F3F3] hover:bg-gray-200 transition-colors text-xs border-r border-gray-200 whitespace-nowrap">
                  All categories
                  <ChevronDown className="h-3 w-3" />
                </button>
                
                {/* Input */}
                <input
                  type="text"
                  placeholder="Search for products"
                  className="flex-1 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                
                {/* Search Button */}
                <button className="px-6 bg-[#A3A3A3] hover:bg-[#8f8f8f] transition-colors flex items-center justify-center">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-8 shrink-0">
              {/* Contact & Sign In (right aligned) */}
              <div className="hidden md:flex flex-col items-start text-white leading-tight text-left">
                <span className="text-[10px] font-light">Call Us Now</span>
                <div className="flex items-center gap-2 justify-start">
                   <img src="/headphone-icon.png" alt="Headphone" className="h-5 w-5 opacity-90" />
                   <span className="text-sm font-semibold">+011 5827918</span>
                </div>
                <Link href="/signin" className="text-[12px] hover:underline mt-0.5">
                  Sign In
                </Link>
              </div>

              {/* Icons */}
              <div className="flex items-center gap-5 text-white">
                <Link href="/profile" className="hover:text-[#EDA415] transition-colors">
                  <User className="h-6 w-6" />
                </Link>
                
                <Link href="/wishlist" className="hover:text-[#EDA415] transition-colors">
                  <Heart className="h-6 w-6" />
                </Link>
                
                <Link href="/cart" className="relative hover:text-[#EDA415] transition-colors flex items-center gap-2">
                  <div className="relative">
                    <img src="/cart-icon.svg" alt="Cart" className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 bg-[#EDA415] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      3
                    </span>
                  </div>
                  <span className="hidden lg:block text-sm ml-1">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#03484D] border-t border-white/10 text-white shadow-[0_6px_10px_rgba(0,0,0,0.15)]">
        <Container>
          <div className="flex items-center justify-between h-12">
            {/* Left Side: Browse Category & Links */}
            <div className="flex items-center gap-8">
              {/* Browse Category */}
              <div className="relative group hidden md:flex items-center gap-2 cursor-pointer hover:text-[#EDA415] transition-colors">
                <Menu className="h-5 w-5" />
                <span className="text-sm font-medium">Browse By Category</span>
              </div>

              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-6 text-xs font-medium">
                <Link href="/" className="hover:text-[#EDA415] transition-colors">Home</Link>
                <Link href="/installments" className="hover:text-[#EDA415] transition-colors">Easy Monthly Installments</Link>
                <Link href="/brands" className="hover:text-[#EDA415] transition-colors">Shop by Brands</Link>
                <Link href="/vendor" className="hover:text-[#EDA415] transition-colors">Become a Vendor</Link>
              </nav>
            </div>

            {/* Right Side: Social Icons */}
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="hover:text-[#EDA415] transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="hover:text-[#EDA415] transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="hover:text-[#EDA415] transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="hover:text-[#EDA415] transition-colors"><Instagram className="h-4 w-4" /></a>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenu />
          </div>
        </Container>
      </div>
    </header>
  );
}
