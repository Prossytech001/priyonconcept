"use client";

import { useState } from "react";
import Link from "next/link";

const ClothesProductCard = ({ product }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative w-full rounded-xl bg-white overflow-hidden group shadow-sm transition-all duration-300 ${
        hover ? "shadow-lg scale-[1.01]" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Product Image */}
      <Link href={`/product/${product.slug}`}>
        <img
          src={product?.images?.[0] || "/placeholder.png"}
          alt={product?.name || "Clothes"}
          className="w-full h-[350px] object-cover"
        />
      </Link>

      {/* Product Details */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{product.description}</p>
        <p className="text-gray-800 font-medium">
          Starting Price: ₦{product.basePrice.toLocaleString()}
        </p>

        {/* Sizes */}
        {product.sizeVariants?.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium">Available Sizes:</p>
            <div className="flex gap-2 mt-1">
              {product.sizeVariants.map((variant, i) => (
                <span
                  key={i}
                  className="px-2 py-1 border rounded text-xs bg-gray-100"
                >
                  {variant.size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Negotiation Button */}
        <a
          href={`https://wa.me/2348012345678?text=Hi, I’m interested in ${product.name}`}
          target="_blank"
          className="mt-4 block w-full bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Negotiate on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ClothesProductCard;
