import { useContext } from "react";
import { CartContext } from "../components/context/CartContext"; // adjust path if needed
import Link from "next/link";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const freeShippingThreshold = 2000000;
  const shippingLeft = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Shopping cart</h2>
        <button onClick={onClose} className="text-xl">
          ×
        </button>
      </div>

      <div className="p-4 space-y-4 max-h-[50vh] overflow-y-auto">
        {cart.length === 0 && (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        )}

        {cart.map((item, i) => (
          <div key={i} className="flex justify-between items-center gap-4">
            <img
              src={item.image}
              className="w-14 h-14 object-cover rounded"
              alt={item.name}
            />
            <div className="flex-1">
              <p className="font-semibold text-sm">
                {item.name} - {item.size}
              </p>
              <p className="text-xs text-gray-500">
                {item.quantity} × ₦{item.price.toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.productId, item.size)}
              className="text-red-500"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Subtotal and Progress */}
      <div className="p-4 border-t">
        <p className="text-right font-bold text-lg">
          Subtotal: ₦{subtotal.toLocaleString()}
        </p>

        {shippingLeft > 0 ? (
          <>
            <p className="text-sm mt-2 text-gray-500">
              Add ₦{shippingLeft.toLocaleString()} to cart and get free
              shipping!
            </p>
            <div className="w-full bg-gray-200 rounded h-2 mt-1">
              <div
                className="bg-green-500 h-2 rounded"
                style={{
                  width: `${(subtotal / freeShippingThreshold) * 100}%`,
                }}
              ></div>
            </div>
          </>
        ) : (
          <p className="text-sm mt-2 text-green-600 font-semibold">
            ✅ You unlocked free shipping!
          </p>
        )}

        <div className="mt-4 space-y-2">
          <button className="w-full bg-white border py-2 rounded">
            View cart
          </button>

          <Link href="/checkout">
            <button className="w-full bg-black text-white py-2 rounded">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
