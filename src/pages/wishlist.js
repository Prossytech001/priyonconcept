// pages/wishlist.js
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// const WishlistPage = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchWishlist = async () => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist`, {
//         credentials: 'include',
//       });
//       const data = await res.json();
//       if (res.ok) setWishlist(data);
//     } catch (err) {
//       console.error('Error fetching wishlist:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeFromWishlist = async (productId) => {
//     try {
//       await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/remove/${productId}`, {
//         method: 'DELETE',
//         credentials: 'include',
//       });
//       setWishlist(wishlist.filter(item => item._id !== productId));
//     } catch (err) {
//       console.error('Error removing from wishlist:', err);
//     }
//   };

//   useEffect(() => {
//     fetchWishlist();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : wishlist.length === 0 ? (
//         <p>No items in wishlist.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
     
//           {Array.isArray(wishlist) && wishlist.length > 0 ? (
//   wishlist.map((item) => (
//     <ProductCard key={item._id} product={item} />
//   ))
// ) : (
//   <p>No items in wishlist.</p>
// )}

//         </div>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import ProductCard from '../components/ProductCard'; // ✅ Make sure path is correct

// const WishlistPage = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch wishlist on page load
//   const fetchWishlist = async () => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist`, {
//         credentials: 'include',
//       });
//       const data = await res.json();
//       if (res.ok && Array.isArray(data.wishlist)) {
//         setWishlist(data.wishlist);
//       } else {
//         setWishlist([]); // fallback in case data is malformed
//       }
//     } catch (err) {
//       console.error('Error fetching wishlist:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Remove a product from wishlist
//   const removeFromWishlist = async (productId) => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/remove/${productId}`, {
//         method: 'DELETE',
//         credentials: 'include',
//       });

//       if (res.ok) {
//         setWishlist(prev => prev.filter(item => item._id !== productId));
//       } else {
//         console.error('Failed to remove from wishlist');
//       }
//     } catch (err) {
//       console.error('Error removing from wishlist:', err);
//     }
//   };

//   useEffect(() => {
//     fetchWishlist();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

//       {loading ? (
//         <p className="text-gray-500">Loading...</p>
//       ) : wishlist.length === 0 ? (
//         <p className="text-gray-700">You have no items in your wishlist.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {wishlist.map((item) => (
//             <div key={item._id} className="relative group">
//               <ProductCard product={item} />
//               <button
//                 onClick={() => removeFromWishlist(item._id)}
//                 className="absolute top-2 right-2 text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;
'use client';

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';
import { UserContext } from "../components/context/UserContext";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { user, checking } = useContext(UserContext);
  const router = useRouter();


   useEffect(() => {
      if (!checking && !user) {
        router.replace('/auth/login?redirect=/wishlist');
      } 
    }, [checking, user]);
  
  // Fetch wishlist and check auth
  const fetchWishlist = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist`, {
        credentials: 'include',
      });

      // if (res.status === 401) {
      //   // Not authenticated
      //   setIsAuthenticated(false);
      //   return;
      // }

      const data = await res.json();
      if (res.ok && Array.isArray(data.wishlist)) {
        setWishlist(data.wishlist);
      } else {
        setWishlist([]);
      }
    } catch (err) {
      console.error('Error fetching wishlist:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  // // If not logged in, redirect to login
  // useEffect(() => {
  //   if (!isAuthenticated && !loading) {
  //     router.push('/auth/login');
  //   }
  // }, [isAuthenticated, loading]);

  // if (loading || !isAuthenticated) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-700">You have no items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item._id} className="relative group">
              <ProductCard product={item}  hideWishlist/>
              <button
                onClick={async () => {
                  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/remove/${item._id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                  });
                  setWishlist(prev => prev.filter(p => p._id !== item._id));
                }}
                className="absolute top-2 right-2 text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
