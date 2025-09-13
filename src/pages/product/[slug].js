// export default ProductPage;
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FcShipped } from "react-icons/fc";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";

import Link from "next/link";
import ProductCard from "@/components/ProductCard"; // make sure this import matches your path

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [cartOpen, setCartOpen] = useState(false);

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (!slug) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to load product:", err));
  }, [slug]);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product) {
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/category/${product.category}?exclude=${product.slug}`
      )
        .then((res) => res.json())
        .then((data) => setRelated(data))
        .catch((err) => console.error("Failed to load related:", err));
    }
  }, [product]);

  if (!product) return <p className="text-center py-20">Loading...</p>;

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-10 bg-white ">
        {/* Left Side: Product Images */}
        <div className="grid grid-cols-2 gap-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Image ${idx + 1}`}
              width={655}
              height={496}
              className="  object-cover rounded shadow"
            />
          ))}
        </div>

        {/* Right Side: Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-sm text-gray-500">
            SKU: {product.slug.toUpperCase().slice(0, 10)}
          </p>

          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded">
            <FcShipped className="w-15 h-15" />
            <p className="text-green-600 font-semibold text-lg">
              FREE SHIPPING FOR ORDERS ABOVE ₦2M
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="font-medium">Choose Size:</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              {product.sizeVariants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedSize(variant);
                    setQuantity(1);
                  }}
                  className={`px-4 py-1 border rounded ${
                    selectedSize?.size === variant.size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {variant.size} ({variant.quantity} left)
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          {selectedSize && (
            <div>
              <h3 className="font-medium mt-4">Quantity:</h3>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 border rounded"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity((q) => (q < selectedSize.quantity ? q + 1 : q))
                  }
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>
                <span className="text-sm text-gray-500">
                  Max: {selectedSize.quantity}
                </span>
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            {/* 💰 Price Info */}
            <p className="text-lg font-semibold mt-4">
              Unit Price: ₦
              {(selectedSize?.price || product.basePrice).toLocaleString()}
            </p>
            <p className="text-green-600 font-semibold text-lg">
              Total: ₦
              {(
                quantity * (selectedSize?.price || product.basePrice)
              ).toLocaleString()}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            disabled={!selectedSize}
            onClick={() =>
              addToCart({
                productId: product._id,
                slug: product.slug,
                name: product.name,
                size: selectedSize.size,
                quantity,
                price: selectedSize.price || product.basePrice,
                image: product.images[0],
              })
            }
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 disabled:opacity-50 mt-4"
          >
            Add {quantity} to Cart
          </button>
        </div>
      </div>
      {/* Available Sizes */}
      <div className="p-6 max-w-7xl mx-auto">
        <div className="bg-white p-4 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Available Sizes</h2>
          <div className="flex flex-wrap justify-between gap-2">
            <h1>Sizes:</h1>
            <div className="flex gap-2 flex-wrap">
              {product.sizeVariants.map((v, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {v.size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-10 mb-10 relative  p-2 scrollbar-hide">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Related Products
        </h2>

        <div className="relative overflow-hidden md:p-20  flex flex-col items-center">
          <div
            id="related-scroll"
            className="grid place-items-center gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-fr max-w-screen-xl"
          >
            {related.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
                onAddToCart={(productData) => {
                  // You can call your cart context here
                  console.log("Added to cart:", productData);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
