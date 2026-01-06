import { Category } from "@/types";
import { Container } from "../ui/Container";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryShowcaseProps {
  categories: Category[];
}

export function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  
  return (
    <div className="py-12 bg-white relative">
      <Container>
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full items-center justify-center text-gray-500 hover:text-brand hidden lg:flex">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full  items-center justify-center text-gray-500 hover:text-brand hidden lg:flex">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="relative group overflow-hidden rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-4/3 bg-gray-100 relative">
                   {/* Placeholder Image */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-4xl font-bold uppercase tracking-widest opacity-20 select-none">
                      {category.name.substring(0, 2)}
                   </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg flex items-center justify-between">
                  <span className="font-semibold capitalize text-teal-dark truncate mr-2">
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-500 font-medium whitespace-nowrap group-hover:text-brand">
                    Shop
                  </span>
                </div>
                
                <Link href={`/category/${category.name}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {category.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
