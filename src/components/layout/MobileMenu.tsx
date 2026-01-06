"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-accent transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <button 
              className="flex items-center gap-2 text-[#FDDE3B] font-medium text-left"
              onClick={() => setIsOpen(false)}
            >
              <Menu className="h-5 w-5" />
              <span>Browse By Category</span>
            </button>
            <Link 
              href="/" 
              className="text-gray-700 hover:text-teal-dark font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/installments" 
              className="text-gray-700 hover:text-teal-dark font-medium"
              onClick={() => setIsOpen(false)}
            >
              Easy Monthly Installments
            </Link>
            <Link 
              href="/brands" 
              className="text-gray-700 hover:text-teal-dark font-medium"
              onClick={() => setIsOpen(false)}
            >
              Shop by Brands
            </Link>
            <Link 
              href="/vendor" 
              className="text-gray-700 hover:text-teal-dark font-medium"
              onClick={() => setIsOpen(false)}
            >
              Become a Vendor
            </Link>

            <div className="border-t border-gray-100 my-2 pt-2">
              <div className="flex flex-col gap-1">
                 <div className="flex flex-col gap-1">
                   <span className="text-xs text-gray-500 font-light">Call Us Now</span>
                   <div className="flex items-center gap-2 text-gray-700">
                      <Image src="/headphone-icon.png" alt="Headphone" width={28} height={28} className="bg-teal-dark rounded-full p-1" />
                      <span className="text-sm font-semibold">+011 5827918</span>
                   </div>
                 </div>
                 <Link href="/signin" className="text-sm text-teal-dark font-medium hover:underline" onClick={() => setIsOpen(false)}>
                    Sign In
                 </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-teal-dark transition-colors hover:bg-accent"><FaFacebookF className="h-4 w-4" /></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-teal-dark transition-colors hover:bg-accent"><FaTwitter className="h-4 w-4" /></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-teal-dark transition-colors hover:bg-accent"><FaLinkedinIn className="h-4 w-4" /></a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-teal-dark transition-colors hover:bg-accent"><FaInstagram className="h-4 w-4" /></a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
