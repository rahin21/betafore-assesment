"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <button 
              className="flex items-center gap-2 text-[#EDA415] font-medium text-left"
              onClick={() => setIsOpen(false)}
            >
              <Menu className="h-5 w-5" />
              <span>Browse By Category</span>
            </button>
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#03484D] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/installments" 
              className="text-gray-700 hover:text-[#03484D] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Easy Monthly Installments
            </Link>
            <Link 
              href="/brands" 
              className="text-gray-700 hover:text-[#03484D] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Shop by Brands
            </Link>
            <Link 
              href="/vendor" 
              className="text-gray-700 hover:text-[#03484D] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Become a Vendor
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
