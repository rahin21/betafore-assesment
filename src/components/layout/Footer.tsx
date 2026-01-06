import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="relative z-20 w-full bg-footer-bg text-white pt-20 -mt-2 transform-gpu">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <Link href="/" className="block mb-6 h-10 w-32 relative">
              <Image src="/winStore-Icon.svg" alt="Winstore" fill className="object-contain" />
            </Link>
            
            <div className="space-y-2">
              <p className="text-brand font-medium">Got questions? Call us 24/7!</p>
              <p className="text-base">03 111 666 144</p>
              <p className="text-base">0317 1777015</p>
            </div>
            
            <div className="space-y-2 text-footer-muted">
              <p className="font-medium text-brand">Contact info</p>
              <p className="">info@winstore.pk</p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-brand transition-colors"><FaFacebookF className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brand transition-colors"><FaTwitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brand transition-colors"><FaLinkedinIn className="h-6 w-6" /></a>
              <a href="#" className="hover:text-brand transition-colors"><FaInstagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Trending */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand">Trending</h3>
            <ul className="space-y-3 text-footer-muted">
              <li><Link href="#" className="hover:text-white">Installments</Link></li>
              <li><Link href="#" className="hover:text-white">Electronics</Link></li>
              <li><Link href="#" className="hover:text-white">Grocery</Link></li>
              <li><Link href="#" className="hover:text-white">Health & Beauty</Link></li>
              <li><Link href="#" className="hover:text-white">Home Appliances</Link></li>
              <li><Link href="#" className="hover:text-white">Mobile Accessories</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand">Information</h3>
            <ul className="space-y-3 text-footer-muted">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white">Shipping & Return</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand">Customer Care</h3>
            <ul className="space-y-3 text-footer-muted">
              <li><Link href="#" className="hover:text-white">My Account</Link></li>
              <li><Link href="#" className="hover:text-white">Track Your Order</Link></li>
              <li><Link href="#" className="hover:text-white">Recently Viewed</Link></li>
              <li><Link href="#" className="hover:text-white">Wishlist</Link></li>
              <li><Link href="#" className="hover:text-white">Compare</Link></li>
              <li><Link href="#" className="hover:text-white">Become a Vendor</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Icons row aligned right */}
        <div className="flex justify-end items-center gap-4 pb-10">
          <div className="bg-white rounded-md px-3 py-2 shadow-sm">
            <Image src="/footer-Icons/visa-icon.svg" alt="VISA" width={124} height={52} className="h-[52px] w-auto" style={{ width: "auto" }} />
          </div>
          <div className="bg-white rounded-md px-3 py-2 shadow-sm">
            <Image src="/footer-Icons/mastercard-icon.svg" alt="MasterCard" width={94} height={52} className="h-[52px] w-auto" style={{ width: "auto" }} />
          </div>
          <div className="bg-white rounded-md px-3 py-2 shadow-sm">
            <Image src="/footer-Icons/cashOnDelivery-icon.svg" alt="Cash On Delivery" width={120} height={52} className="h-[52px] w-auto" style={{ width: "auto" }} />
          </div>
          <div className="bg-white rounded-md px-3 py-2 shadow-sm">
            <Image src="/footer-Icons/easyInstallmentPlans.svg" alt="Easy Installment Plans" width={140} height={56} className="h-[56px] w-auto" style={{ width: "auto" }} />
          </div>
        </div>
      </Container>
      
      {/* All rights bar */}
      <div className="bg-footer-bottom py-4">
        <Container>
          <p className="text-white/85 text-sm">© 2021 Winstore. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
