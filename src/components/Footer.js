// src/components/Footer.js

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import logo from "/public/Black-Bold-Gradient-Business-Tips-Carousel-Instagram-Post-Facebook-Post-Landscape-1-modified.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white gap-4 h-auto pt-10 pb-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Logo + Socials */}
        <div className="flex flex-col items-center  md:items-start col-span-1">
          <div className="mb-4">
            <Image src={logo} alt="Kokolet Logo" width={100} height={100} />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">GET IN TOUCH</h3>
          <p className="text-sm">Plot 40 Okigwe Rd, Aba, Abia State.</p>
          <p className="mt-2 mb-2 text-sm">Tel: 091 5135 2746 </p>

          <p className="text-center md:text-left text-sm mb-2">
            DMZ/PROSSY
            <br />
            SNEAKERS
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">QUICK LINKS</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop Now</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Track Your Order</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-2">COMPANY</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Return & Refund Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
                   <Link href="/admin/AdminLogin">ooh</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© 2023, Luis DMZ, All Rights Reserved - DMZ / PROSSYTECH</p>
        <div className="flex gap-2 items-center justify-center">
          <Image
            src="/mastercard.png"
            alt="visa"
            width={50}
            height={50}
            className="rounded object-cover w-[50px] h-[25px]"
          />
          <Image
            src="/visa.png"
            alt="visa"
            width={50}
            height={50}
            className="rounded object-cover w-[50px] h-[25px]"
          />
          <Image
            src="/verve.png"
            alt="visa"
            width={50}
            height={50}
            className="rounded object-cover w-[50px] h-[25px]"
          />
          <Image
            src="/applepay.png"
            alt="visa"
            width={50}
            height={50}
            className="rounded object-cover w-[50px] h-[25px]"
          />
        </div>
      </div>
    </footer>
  );
}
