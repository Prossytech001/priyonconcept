// import { useContext, useState } from 'react';
// import { CartContext } from '../components/context/CartContext';
// import CartDrawer from './CartDrawer';
// import { FaHeart, FaUser, FaShoppingCart, FaSyncAlt } from 'react-icons/fa';
// import Link from 'next/link';

// const Navbar = () => {
//   const { cart } = useContext(CartContext);
//   const [cartOpen, setCartOpen] = useState(false);
//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <>
//       {/* TOP NAV */}
//       <div className="bg-black text-white px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold flex items-center gap-2">
//           <img src="/logo.svg" alt="logo" className="w-8 h-8" />
//           KOKOLET <span className="font-thin">LUXURY</span>
//         </Link>

//         {/* Search + Icons */}
//         <div className="flex-1 max-w-2xl mx-6 flex items-center">
//           <div className="relative flex-1">
//             <input
//               type="text"
//               placeholder="Search for products"
//               className="w-full rounded-full px-4 py-2 text-black"
//             />
//             <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
//           </div>
//           <button className="ml-4 text-white"><FaSyncAlt /></button>
//           <button className="ml-4 text-white"><FaHeart /></button>
//         </div>

//         {/* User & Cart */}
//         <div className="flex items-center gap-4">
//           <button className="bg-white text-black px-4 py-1 rounded-full flex items-center gap-2">
//             <FaUser /> Hello, Prosperonyebuchio1
//           </button>

//           <button
//             onClick={() => setCartOpen(true)}
//             className="bg-black text-white px-4 py-1 rounded-full relative flex items-center gap-2 border border-white"
//           >
//             <FaShoppingCart />
//             ₦{subtotal.toLocaleString()}
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-2 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* BOTTOM LINKS */}
//       <div className="bg-neutral-50 flex justify-between items-center px-6 py-2 text-sm font-medium">
//         <div className="flex gap-6">
//           <Link href="/">HOME</Link>
//           <Link href="/shop">SHOP NOW</Link>
//           <Link href="/contact">CONTACT US</Link>
//           <Link href="/about">ABOUT KOKOLET LUXURY</Link>
//           <Link href="/track">TRACK YOUR ORDER</Link>
//           <Link href="/stores">LOCATE OUR STORE</Link>
//           <Link href="/instagram">SHOP ON IG</Link>
//         </div>
//         <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-xs">
//           Free shipping for all orders above ₦2M
//         </div>
//       </div>

//       <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
//     </>
//   );
// };

// export default Navbar;
// import { useContext, useState } from 'react';
// import { CartContext } from '../components/context/CartContext';
// import CartDrawer from './CartDrawer';
// import MobileMenu from './MobileMenu';
// import { FaHeart, FaUser, FaShoppingCart, FaSyncAlt } from 'react-icons/fa';
// import { HiMenu } from 'react-icons/hi';
// import Link from 'next/link';

// const Navbar = () => {
//   const { cart } = useContext(CartContext);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <>
//       {/* TOP NAV */}
//       <div className="bg-black text-white px-4 md:px-6 py-3 flex justify-between items-center">
//         {/* Mobile Hamburger Icon */}
//         <button onClick={() => setMenuOpen(true)} className="md:hidden text-2xl">
//           <HiMenu />
//         </button>

//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold flex items-center gap-2">
//           <img src="/logo.svg" alt="logo" className="w-8 h-8" />
//           KOKOLET <span className="font-thin">LUXURY</span>
//         </Link>

//         {/* Search + Icons (Desktop only) */}
//         <div className="hidden md:flex flex-1 max-w-2xl mx-6 items-center">
//           <div className="relative flex-1">
//             <input
//               type="text"
//               placeholder="Search for products"
//               className="w-full rounded-full px-4 py-2 text-black"
//             />
//             <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
//           </div>
//           <button className="ml-4 text-white"><FaSyncAlt /></button>
//           <button className="ml-4 text-white"><FaHeart /></button>
//         </div>

//         {/* User & Cart */}
//         <div className="flex items-center gap-4">
//           <button className="bg-white text-black px-4 py-1 rounded-full hidden md:flex items-center gap-2">
//             <FaUser /> Hello, Prosperonyebuchio1
//           </button>

//           <button
//             onClick={() => setCartOpen(true)}
//             className="bg-black text-white px-4 py-1 rounded-full relative flex items-center gap-2 border border-white"
//           >
//             <FaShoppingCart />
//             <span className="hidden md:inline">
//               ₦{subtotal.toLocaleString()}
//             </span>
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-2 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* BOTTOM NAV LINKS (Desktop only) */}
//       <div className="bg-neutral-50 justify-between items-center px-4 md:px-6 py-2 text-sm font-medium hidden md:flex">
//         <div className="flex gap-6">
//           <Link href="/">HOME</Link>
//           <Link href="/shop">SHOP NOW</Link>
//           <Link href="/contact">CONTACT US</Link>
//           <Link href="/about">ABOUT KOKOLET LUXURY</Link>

//           <Link href="/stores">LOCATE OUR STORE</Link>
//           <Link href="/instagram">SHOP ON IG</Link>
//         </div>
//         <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-xs">
//           Free shipping for all orders above ₦2M
//         </div>
//       </div>

//       {/* Drawers */}
//       <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
//       <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
//     </>
//   );
// };

// export default Navbar;
// 'use client';

// import { useContext, useState ,useEffect} from "react";
// import { CartContext } from "../components/context/CartContext";
// import CartDrawer from "./CartDrawer";
// import MobileMenu from "./MobileMenu";
// import { FaHeart, FaUser, FaShoppingCart, FaSyncAlt } from "react-icons/fa";
// import { HiMenu } from "react-icons/hi";
// import Link from "next/link";
// import { CiSearch } from "react-icons/ci";
// import LiveSearch from "./LiveSearch";
// import { useRouter } from "next/router";


// const Navbar = () => {
//   const { cart } = useContext(CartContext);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [checkingUser, setCheckingUser] = useState(true);
//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

// const router = useRouter();

// useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
//         credentials: 'include',
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setUser(data);
//       }
//     } catch (err) {
//       console.log('User not logged in');
//     } finally {
//       setCheckingUser(false);
//     }
//   };

//   fetchUser(); // initial load

//   const handleRouteChange = () => fetchUser();
//   router.events.on('routeChangeComplete', handleRouteChange);

//   return () => {
//     router.events.off('routeChangeComplete', handleRouteChange);
//   };
// }, [router]);


// const handleLogout = async () => {
//     await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
//       method: 'POST',
//       credentials: 'include',
//     });
//     setUser(null);
//   };



//   return (
//     <>
//       {/* TOP NAVIGATION */}
//       <div className="bg-black text-white px-4 lg:px-6 w-full py-3 flex justify-between items-center">
//         {/* Hamburger (Mobile Only) */}
//         <button
//           onClick={() => setMenuOpen(true)}
//           className="lg:hidden text-2xl"
//         >
//           <HiMenu />
//         </button>

//         {/* LOGO */}
//         <Link href="/" className="text-2xl font-bold flex items-center gap-2">
//           KOKOLET <span className="font-thin">LUXURY</span>
//         </Link>

//         {/* SEARCH + ICONS (Desktop Only) */}
//         <div className="hidden lg:flex flex-1 max-w-2xl mx-6 items-center">
//           <div className="relative flex-1">
//             {/* <input
//               type="text"
//               placeholder="Search for products"
//               className="w-full bg-white pl-10 outline-none rounded-full px-4 py-2 text-black"
//             />
//             <span className="absolute left-3 top-2.5 text-gray-400">
//               <CiSearch />
//             </span> */}
//             <LiveSearch variant="topbar" />
//           </div>

//           <button className="ml-4 text-white">
//             <FaHeart />
//           </button>
//         </div>

//         {/* USER + CART */}
//         <div className="flex items-center gap-4 ">
//           <div>
//         {user ? (
//           <div className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full">
//             <span className="font-semibold">Hi, {user.name}</span>
//             <button
//               onClick={async () => {
//                 await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
//                   credentials: 'include',
//                   method: 'POST',
//                 });
//                 setUser(null);
//               }}
//               className="text-red-500 ml-4"
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <Link href="/auth/login" className="text-blue-600 font-semibold">
//             Login / Register
//           </Link>
//         )}
//       </div>

//           <button
//             onClick={() => setCartOpen(true)}
//             className="bg-black text-white px-4 py-1 rounded-full relative flex items-center gap-2 border border-white"
//           >
//             <FaShoppingCart />
//             <span className="hidden lg:inline">
//               ₦{subtotal.toLocaleString()}
//             </span>
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-2 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* BOTTOM LINKS (Desktop Only) */}
//       <div className="bg-neutral-50 justify-between items-center px-4 lg:px-6 py-2 text-sm font-medium hidden lg:flex">
//         <div className="flex gap-6">
//           <Link href="/">HOME</Link>
//           <Link href="/shop">SHOP NOW</Link>
//           <Link href="/Contacts">CONTACT US</Link>
//           <Link href="/about">ABOUT KOKOLET LUXURY</Link>

//           <Link href="/stores">LOCATE OUR STORE</Link>
//           <Link href="/instagram">SHOP ON IG</Link>
//         </div>
//         <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-xs">
//           Free shipping for all orders above ₦2M
//         </div>
//       </div>

//       {/* DRAWERS */}
//       <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
//       <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
//     </>
//   );
// };

// export default Navbar;
// 'use client';

// import { useContext, useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { CartContext } from '../components/context/CartContext';
// import CartDrawer from './CartDrawer';
// import MobileMenu from './MobileMenu';
// import LiveSearch from './LiveSearch';
// import { HiMenu } from 'react-icons/hi';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   const { cart } = useContext(CartContext);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [checkingUser, setCheckingUser] = useState(true);
//   const router = useRouter();

//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   // Fetch user on load and after route change
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
//           credentials: 'include',
//         });
//         if (res.ok) {
//           const data = await res.json();
//           setUser(data);
//         }
//       } catch {
//         console.log('Not logged in');
//       } finally {
//         setCheckingUser(false);
//       }
//     };

//     fetchUser();
//     router.events.on('routeChangeComplete', fetchUser);
//     return () => {
//       router.events.off('routeChangeComplete', fetchUser);
//     };
//   }, [router]);

//   const handleLogout = async () => {
//     await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
//       method: 'POST',
//       credentials: 'include',
//     });
//     setUser(null);
//     router.push('/');
//   };

//   return (
//     <>
//       {/* Top Navbar */}
//       <div className="bg-black text-white px-4 lg:px-6 w-full py-3 flex justify-between items-center">
//         <button onClick={() => setMenuOpen(true)} className="lg:hidden text-2xl">
//           <HiMenu />
//         </button>

//         <Link href="/" className="text-2xl font-bold flex items-center gap-2">
//           KOKOLET <span className="font-thin">LUXURY</span>
//         </Link>

//         <div className="hidden lg:flex flex-1 max-w-2xl mx-6 items-center">
//           <LiveSearch variant="topbar" />
//         </div>

//         {/* User / Cart */}
//         <div className="flex items-center gap-4">
//           {user ? (
//             <div className="relative group">
//               <div className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full cursor-pointer">
//                 <span className="font-semibold">Hi, {user.name}</span>
//                 <FaUser className="text-gray-600" />
//               </div>
//               <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50">
//                 <Link href="/orders" className="block text-black px-4 py-2 text-sm hover:bg-gray-100">
//                   Your Orders
//                 </Link>
//                 <Link href="/wishlist" className="block text-black px-4 py-2 text-sm hover:bg-gray-100">
//                   Wishlist
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             !checkingUser && (
//               <Link href="/auth/login" className="text-blue-600 font-semibold">
//                 Login / Register
//               </Link>
//             )
//           )}

//           <button
//             onClick={() => setCartOpen(true)}
//             className="bg-black text-white px-4 py-1 rounded-full relative flex items-center gap-2 border border-white"
//           >
//             <FaShoppingCart />
//             <span className="hidden lg:inline">
//               ₦{subtotal.toLocaleString()}
//             </span>
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-2 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Bottom Nav */}
//       <div className="bg-neutral-50 justify-between items-center px-4 lg:px-6 py-2 text-sm font-medium hidden lg:flex">
//         <div className="flex gap-6">
//           <Link href="/">HOME</Link>
//           <Link href="/shop">SHOP NOW</Link>
//           <Link href="/Contacts">CONTACT US</Link>
//           <Link href="/about">ABOUT KOKOLET LUXURY</Link>
//           <Link href="/stores">LOCATE OUR STORE</Link>
//           <Link href="/instagram">SHOP ON IG</Link>
//         </div>
//         <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-xs">
//           Free shipping for all orders above ₦2M
//         </div>
//       </div>

//       {/* Drawers */}
//       <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
//       <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
//     </>
//   );
// };

// export default Navbar;
'use client';

import { useContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CartContext } from '../components/context/CartContext';
import CartDrawer from './CartDrawer';
import MobileMenu from './MobileMenu';
import LiveSearch from './LiveSearch';
import { HiMenu } from 'react-icons/hi';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [checkingUser, setCheckingUser] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Fetch user on load and after route change
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
        console.log('Not logged in');
      } finally {
        setCheckingUser(false);
      }
    };

    fetchUser();
    router.events.on('routeChangeComplete', fetchUser);
    return () => router.events.off('routeChangeComplete', fetchUser);
  }, [router]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
    router.push('/');
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-black text-white px-4 lg:px-6 w-full py-3 flex justify-between items-center">
        <button onClick={() => setMenuOpen(true)} className="lg:hidden text-2xl">
          <HiMenu />
        </button>

        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          KOKOLET <span className="font-thin">LUXURY</span>
        </Link>

        <div className="hidden lg:flex flex-1 max-w-2xl mx-6 items-center">
          <LiveSearch variant="topbar" />
        </div>
        <Link href="/wishlist" className="hidden lg:flex items-center gap-2 text-white">
          <MdOutlineFavoriteBorder className="text-2xl" />
          </Link>

        {/* User / Cart Section */}
        {/* <div className="flex items-center gap-4">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full"
              >
                <span className="font-semibold">Hi, {user.name}</span>
                <FaUser className="text-gray-600" />
              </button>

              {/* Dropdown Menu *
              <div
                className={`absolute right-0 mt-2 w-44 bg-white rounded shadow-md z-50 transition-all duration-200 ease-in-out ${
                  showDropdown ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                <Link
                  href="/orders"
                  className="block text-black px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Your Orders
                </Link>
                <Link
                  href="/wishlist"
                  className="block text-black px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Wishlist
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            !checkingUser && (
              <Link href="/auth/login" className="text-blue-600 font-semibold">
                Login / Register
              </Link>
            )
          )}

          <button
            onClick={() => setCartOpen(true)}
            className="bg-black text-white px-4 py-1 rounded-full relative flex items-center gap-2 border border-white"
          >
            <FaShoppingCart />
            <span className="hidden lg:inline">₦{subtotal.toLocaleString()}</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div> */}
        {/* USER + CART */}
<div className="flex items-center gap-4">
  {/* USER - Hide on small screens */}
  <div className="hidden lg:block">
    {user ? (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded-full"
        >
          <span className="font-semibold">Hi, {user.name}</span>
          <FaUser className="text-gray-600" />
        </button>
        <div
          className={`absolute right-0 mt-2 w-44 bg-white rounded shadow-md z-50 transition-all duration-200 ease-in-out ${
            showDropdown ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
          }`}
        >
          <Link href="/YourOrders" className="block px-4 py-2 text-black text-sm hover:bg-gray-100">Your Orders</Link>
          <Link href="/wishlist" className="block px-4 py-2 text-black text-sm hover:bg-gray-100">Wishlist</Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    ) : (
      !checkingUser && (
        <Link href="/auth/login" className="text-blue-600 font-semibold">
          Login / Register
        </Link>
      )
    )}
  </div>

  {/* CART - Always visible */}
  <button
    onClick={() => setCartOpen(true)}
    className="bg-black text-white px-3 py-1 rounded-full relative flex items-center gap-1 border border-white"
  >
    <FaShoppingCart />
    <span className="hidden lg:inline">₦{subtotal.toLocaleString()}</span>
    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-2 rounded-full">
        {cart.length}
      </span>
    )}
  </button>
</div>

      </div>

      {/* Bottom Navbar */}
      <div className="bg-neutral-50 justify-between items-center px-4 lg:px-6 py-2 text-sm font-medium hidden lg:flex">
        <div className="flex gap-6">
          <Link href="/">HOME</Link>
          <Link href="/shop">SHOP NOW</Link>
          <Link href="/Contacts">CONTACT US</Link>
          <Link href="/about">ABOUT KOKOLET LUXURY</Link>
          <Link href="/stores">LOCATE OUR STORE</Link>
          <Link href="/instagram">SHOP ON IG</Link>
        </div>
        <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-xs">
          Free shipping for all orders above ₦2M
        </div>
      </div>

      {/* Drawers */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <MobileMenu
  isOpen={menuOpen}
  onClose={() => setMenuOpen(false)}
  user={user}
  onLogout={handleLogout}
/>

    </>
  );
};

export default Navbar;
