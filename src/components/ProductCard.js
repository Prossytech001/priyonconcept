'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import {
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaShareAlt,
  FaSearch,
} from 'react-icons/fa';
import { CartContext } from '../components/context/CartContext';
import LoginPromptModal from './LoginPromptModal';

const ProductCard = ({ product, hideWishlist = false }) => {
  const { addToCart } = useContext(CartContext);

  const [hover, setHover] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [buttonHover, setButtonHover] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
          credentials: 'include',
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize) return;

    // addToCart({
    //   productId: product._id,
    //   slug: product.slug,
    //   name: product.name,
    //   image: product.images[0],
    //   size: selectedSize.size,
    //   quantity: 1,
    //   price: selectedSize.price || product.basePrice,
    // });
    addToCart({
  productId: product._id,
  slug: product.slug,
  name: product.name,
  image: product?.images?.[0] || "/placeholder.png", // prevent crash
  size: selectedSize.size,
  quantity: 1,
  price: selectedSize.price || product.basePrice,
});


    setShowSizeModal(false);
    setAddedToCart(true);
  };

  const handleWishlistClick = async () => {
    if (!user) {
      setShowPrompt(true);
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/add/${product._id}`,
        {
          method: 'POST',
          credentials: 'include',
        }
      );

      const data = await res.json();

      if (res.ok) {
        if (data.message === 'Product already in wishlist') {
          alert('This product is already in your wishlist.');
        } else {
          alert('Added to wishlist!');
        }
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Error adding to wishlist');
    }
  };

  // const nextImage = () => {
  //   setImageIndex((prev) => (prev + 1) % product.images.length);
  // };

  // const prevImage = () => {
  //   setImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  // };
  const nextImage = () => {
  if (!product?.images?.length) return; 
  setImageIndex((prev) => (prev + 1) % product.images.length);
};

const prevImage = () => {
  if (!product?.images?.length) return;
  setImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
};


  return (
    <>
      <div
        className={`relative w-full h-[290px] rounded-xl bg-white overflow-hidden group shadow-sm transition-all duration-300 ${
          hover ? 'shadow-lg scale-[1.01]' : ''
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {!hideWishlist && (
          <button
            onClick={handleWishlistClick}
            className="absolute top-2 right-2 text-black-500 hover:text-pink-700 text-lg z-20 bg-white rounded-full p-1"
          >
            <FaHeart />
          </button>
        )}

        <Link href={`/product/${product.slug}`}>
  <img
    src={product?.images?.[imageIndex] || "/placeholder.png"} // fallback image
    alt={product?.name || "Product"}
    className="w-full h-44 object-cover"
  />
</Link>

        <button
          onClick={prevImage}
          className={`absolute top-1/2 left-2 -translate-y-1/2 bg-white p-1 rounded-full z-10 shadow transition-all duration-300 ${
            hover ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className={`absolute top-1/2 right-2 -translate-y-1/2 bg-white p-1 rounded-full z-10 shadow transition-all duration-300 ${
            hover ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <FaChevronRight />
        </button>

        <div
          className={`p-3 absolute ${
            hover ? 'h-[190px]' : 'h-[120px]'
          } bg-white bottom-0 left-0 right-0 transition-all duration-300`}
        >
          <p className="font-semibold text-sm leading-tight">{product.name}</p>
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
          <p className="text-green-600 font-bold text-sm mt-1">
            ₦{(selectedSize?.price ?? product?.basePrice ?? 0).toLocaleString()}
            <span className="text-gray-400 text-xs"> inc. VAT</span>
          </p>

          <div
            className={`bottom-3 left-3 right-3 flex items-center gap-2 transition-all duration-300 ${
              hover && !showSizeModal && !addedToCart
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
          >
            <button
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              onClick={() => setShowSizeModal(true)}
              className={`flex-1 flex items-center justify-center py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                buttonHover ? 'bg-orange-400 text-white' : 'bg-black text-white'
              }`}
            >
              {buttonHover ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M9 21a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              ) : (
                'Select option'
              )}
            </button>
            <button className="p-2 rounded-full bg-gray-100 hidden md:block">
              <FaShareAlt className="text-gray-600 text-xs" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hidden md:block">
              <FaSearch className="text-gray-600 text-xs" />
            </button>
          </div>

          {showSizeModal && (
            <div className="absolute inset-0 bg-white bg-opacity-90 z-50 p-4 flex flex-col justify-start items-center rounded-xl">
              <div className="w-full flex justify-between items-center mb-2">
                <p className="text-sm font-semibold">
                  Size: {selectedSize ? `: ${selectedSize.size}` : ''}
                </p>
                <button
                  onClick={() => {
                    setShowSizeModal(false);
                    setSelectedSize(null);
                  }}
                  className="text-sm text-gray-600"
                >
                  ❌ Close
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.sizeVariants.map((v, i) => (
                  <button
                    key={i}
                    disabled={v.quantity === 0}
                    onClick={() => setSelectedSize(v)}
                    className={`w-10 h-10 border text-sm rounded ${
                      v.quantity === 0
                        ? 'line-through text-red-400 border-red-300 cursor-not-allowed'
                        : selectedSize?.size === v.size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>

              <button
                disabled={!selectedSize}
                onClick={handleAddToCart}
                className={`w-full py-2 rounded text-sm font-semibold transition ${
                  selectedSize
                    ? 'bg-black text-white'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              >
                Add to cart
              </button>
            </div>
          )}

          {addedToCart && (
            <div className="absolute inset-0 bg-white bg-opacity-90 z-40 p-4 rounded-xl flex flex-col items-center">
              <div className="flex justify-between w-full mb-2">
                <p className="text-sm font-semibold">
                  Size: <span className="text-black">{selectedSize?.size}</span>
                </p>
                <button
                  onClick={() => {
                    setAddedToCart(false);
                    setSelectedSize(null);
                  }}
                  className="text-sm text-gray-500"
                >
                  ❌ Clear
                </button>
              </div>

              <p className="text-green-600 font-semibold text-sm flex items-center gap-1 mb-3">
                ✅ {selectedSize?.quantity} in stock
              </p>
              <p className="text-sm text-center text-black font-medium leading-tight">
                {product.name}
              </p>
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-green-600 font-bold text-sm mt-1">
                ₦{product.basePrice.toLocaleString()}
                <span className="text-gray-400 text-xs"> inc. VAT</span>
              </p>
            </div>
          )}
        </div>
      </div>

      <LoginPromptModal isOpen={showPrompt} onClose={() => setShowPrompt(false)} />
    </>
  );
};

export default ProductCard;
