// import Link from 'next/link';

// const MobileMenu = ({ isOpen, onClose }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transition-transform duration-300 ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       }`}
//     >
      
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b">
//         <input
//           type="text"
//           placeholder="Search for products"
//           className="w-full border rounded-full px-4 py-2 text-sm"
//         />
//       </div>

//       {/* Nav Links */}
//       <nav className="flex flex-col p-4 gap-4 text-sm font-medium">
//         <Link href="/" onClick={onClose}>HOME</Link>
//         <Link href="/shop" onClick={onClose}>SHOP NOW</Link>
//         <Link href="/contact" onClick={onClose}>CONTACT US</Link>
//         <Link href="/about" onClick={onClose}>ABOUT KOKOLET LUXURY</Link>
//         <Link href="/track" onClick={onClose}>TRACK YOUR ORDER</Link>
//         <Link href="/stores" onClick={onClose}>LOCATE OUR STORE</Link>
//         <Link href="/instagram" onClick={onClose}>SHOP ON IG</Link>
//       </nav>
//     </div>
//   );
// };

// export default MobileMenu;
// import Link from 'next/link';
// import { FaTimes } from 'react-icons/fa';
// import LiveSearch from './LiveSearch';

// const MobileMenu = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black-50 bg-opacity-50 z-40"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         {/* Header */}
//          <div className="flex items-center justify-between p-4 border-b">
//       {/* <input
//            type="text"
//            placeholder="Search for products"
//            className="w-full border rounded-full px-4 py-2 text-sm"
//          /> */}
//           <LiveSearch variant="sidebar" />
//        </div>

//         {/* Links */}
//         <nav className="flex flex-col gap-4 px-4 py-6">
//           <Link href="/" onClick={onClose} className="text-gray-800">HOME</Link>
//           <Link href="/shop" onClick={onClose} className="text-gray-800">SHOP NOW</Link>
//           <Link href="/contact" onClick={onClose} className="text-gray-800">CONTACT US</Link>
//           <Link href="/about" onClick={onClose} className="text-gray-800">ABOUT KOKOLET LUXURY</Link>
//           <Link href="/track" onClick={onClose} className="text-gray-800">TRACK YOUR ORDER</Link>
//           <Link href="/stores" onClick={onClose} className="text-gray-800">LOCATE OUR STORE</Link>
//           <Link href="/instagram" onClick={onClose} className="text-gray-800">SHOP ON IG</Link>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default MobileMenu;
'use client';

import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import LiveSearch from './LiveSearch';
import { useEffect, useRef } from 'react';

const MobileMenu = ({ isOpen, onClose, user, onLogout }) => {
  const menuRef = useRef();

  // Detect outside clicks
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black-200 bg-opacity-50 z-40" />
      )}

      {/* Sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <LiveSearch variant="sidebar" />
          <button onClick={onClose} className="ml-2 text-gray-600">
            <FaTimes />
          </button>
        </div>

        {/* User Info & Navigation */}
        <nav className="flex flex-col gap-4 px-4 py-6">
          <Link href="/" onClick={onClose} className="text-gray-800">HOME</Link>
          <Link href="/shop" onClick={onClose} className="text-gray-800">SHOP NOW</Link>
          <Link href="/Contacts" onClick={onClose} className="text-gray-800">CONTACT US</Link>
          <Link href="/about" onClick={onClose} className="text-gray-800">ABOUT KOKOLET LUXURY</Link>
          <Link href="/track" onClick={onClose} className="text-gray-800">TRACK YOUR ORDER</Link>
          <Link href="/stores" onClick={onClose} className="text-gray-800">LOCATE OUR STORE</Link>
          <Link href="/instagram" onClick={onClose} className="text-gray-800">SHOP ON IG</Link>

          <hr className="my-4" />

          {user ? (
            <>
              <p className="text-gray-700 font-medium">Hi, {user.name}</p>
              <Link href="/orders" onClick={onClose} className="text-gray-800">Your Orders</Link>
              <Link href="/wishlist" onClick={onClose} className="text-gray-800">Wishlist</Link>
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="text-left text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/auth/login" onClick={onClose} className="text-blue-600 font-semibold">
              Login / Register
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
