// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "../components/context/CartContext"; // adjust path if needed

// const deliveryFees = {
//   Nigeria: {
//     Lagos: 800,
//     Abuja: 1000,
//     Ogun: 900,
//     Kano: 1200,
//   },
//   Ghana: {
//     Accra: 1000,
//     Kumasi: 1200,
//     Tamale: 1300,
//     Takoradi: 1100,
//   },
//   Kenya: {
//     Nairobi: 900,
//     Mombasa: 1000,
//     Kisumu: 1100,
//     Eldoret: 950,
//   },
//   SouthAfrica: {
//     Johannesburg: 1000,
//     CapeTown: 1100,
//     Durban: 1050,
//     Pretoria: 950,
//   },
// };

// const CheckoutPage = ({ user = {} }) => {
//   const { cart: cartItems } = useContext(CartContext);

//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");
//   const [availableStates, setAvailableStates] = useState([]);
//   const [deliveryFee, setDeliveryFee] = useState(0);
//   const [email, setEmail] = useState(user?.email || "");
//   const [phone, setPhone] = useState(user?.phone || "");

//   useEffect(() => {
//     if (country) {
//       setAvailableStates(Object.keys(deliveryFees[country] || {}));
//       setState("");
//     }
//   }, [country]);

//   useEffect(() => {
//     if (country && state) {
//       setDeliveryFee(deliveryFees[country]?.[state] || 0);
//     }
//   }, [country, state]);

//   const cartTotal = (cartItems || []).reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   if (!cartItems || cartItems.length === 0) {
//     return <p className="p-4 text-center">🛒 Your cart is empty.</p>;
//   }

//   const totalWithDelivery = cartTotal + deliveryFee;

//   const handlePayment = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/checkout/paystack`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email,
//           phone,
//           cartItems,
//           country,
//           state,
//           userId: user._id,
//         }),
//       }
//     );

//     const data = await res.json();
//     if (data.authorization_url) {
//       window.location.href = data.authorization_url;
//     } else {
//       alert("Failed to start payment.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       {/* Country Selector */}
//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Country</label>
//         <select
//           className="border p-2 w-full"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//         >
//           <option value="">-- Select Country --</option>
//           {Object.keys(deliveryFees).map((c) => (
//             <option key={c} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* State Selector */}
//       <div className="mb-4">
//         <label className="block mb-1 font-medium">State</label>
//         <select
//           className="border p-2 w-full"
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//         >
//           <option value="">-- Select State --</option>
//           {availableStates.map((s) => (
//             <option key={s} value={s}>
//               {s}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Email Field */}
//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Email</label>
//         <input
//           type="email"
//           className="border p-2 w-full"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       {/* Phone Field */}
//       <div className="mb-4">
//         <label className="block mb-1 font-medium">Phone</label>
//         <input
//           type="tel"
//           className="border p-2 w-full"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </div>

//       {/* Summary */}
//       <div className="border-t pt-4">
//         <p>Cart Total: ₦{cartTotal.toLocaleString()}</p>
//         <p>Delivery Fee: ₦{deliveryFee.toLocaleString()}</p>
//         <h2 className="text-xl font-bold">
//           Total: ₦{totalWithDelivery.toLocaleString()}
//         </h2>
//       </div>

//       {/* Pay Button */}
//       <button
//         onClick={handlePayment}
//         className="mt-6 bg-black text-white p-3 rounded w-full"
//         disabled={!country || !state || !email || !phone}
//       >
//         Pay with Paystack
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;
// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "../components/context/CartContext"; // adjust if needed

// const deliveryFees = {
//   Nigeria: {
//     Lagos: 800,
//     Abuja: 1000,
//     Ogun: 900,
//     Kano: 1200,
//   },
//   // ... rest same as before
// };

// const CheckoutPage = ({ user = {} }) => {
//   const { cart: cartItems } = useContext(CartContext);

//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");
//   const [availableStates, setAvailableStates] = useState([]);
//   const [deliveryFee, setDeliveryFee] = useState(0);

//   const [email, setEmail] = useState(user?.email || "");
//   const [phone, setPhone] = useState(user?.phone || "");
//   const [name, setName] = useState(user?.name || "");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");

//   useEffect(() => {
//     if (country) {
//       setAvailableStates(Object.keys(deliveryFees[country] || {}));
//       setState("");
//     }
//   }, [country]);

//   useEffect(() => {
//     if (country && state) {
//       setDeliveryFee(deliveryFees[country]?.[state] || 0);
//     }
//   }, [country, state]);

//   const cartTotal = (cartItems || []).reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const totalWithDelivery = cartTotal + deliveryFee;

//   const handlePayment = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/checkout/paystack`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email,
//           phone,
//           name,
//           address,
//           city,
//           state,
//           postalCode,
//           country,
//           cartItems,
//           userId: user._id,
//         }),
//       }
//     );

//     const data = await res.json();
//     if (data.authorization_url) {
//       window.location.href = data.authorization_url;
//     } else {
//       alert(data.message || "Failed to start payment.");
//     }
//   };

//   const isDisabled =
//     !email || !phone || !name || !address || !city || !postalCode || !state || !country;

//   if (!cartItems || cartItems.length === 0) {
//     return <p className="p-4 text-center">🛒 Your cart is empty.</p>;
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       {/* Country and State */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1 font-medium">Country</label>
//           <select
//             className="border p-2 w-full"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           >
//             <option value="">-- Select Country --</option>
//             {Object.keys(deliveryFees).map((c) => (
//               <option key={c} value={c}>{c}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">State</label>
//           <select
//             className="border p-2 w-full"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           >
//             <option value="">-- Select State --</option>
//             {availableStates.map((s) => (
//               <option key={s} value={s}>{s}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Contact + Shipping Info */}
//       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1 font-medium">Full Name</label>
//           <input
//             className="border p-2 w-full"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Phone</label>
//           <input
//             type="tel"
//             className="border p-2 w-full"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             className="border p-2 w-full"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">City</label>
//           <input
//             className="border p-2 w-full"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <div className="md:col-span-2">
//           <label className="block mb-1 font-medium">Street Address</label>
//           <input
//             className="border p-2 w-full"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Postal Code</label>
//           <input
//             className="border p-2 w-full"
//             value={postalCode}
//             onChange={(e) => setPostalCode(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="border-t pt-6 mt-6">
//         <p>Cart Total: ₦{cartTotal.toLocaleString()}</p>
//         <p>Delivery Fee: ₦{deliveryFee.toLocaleString()}</p>
//         <h2 className="text-xl font-bold">
//           Total: ₦{totalWithDelivery.toLocaleString()}
//         </h2>
//       </div>

//       {/* Pay Button */}
//       <button
//         onClick={handlePayment}
//         className="mt-6 bg-black text-white p-3 rounded w-full"
//         disabled={isDisabled}
//       >
//         Pay with Paystack
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;
// import React, { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/router";
// import { CartContext } from "../components/context/CartContext"; // adjust if needed
// import { UserContext } from '../components/context/UserContext';
// const deliveryFees = {
//   Nigeria: {
//     Lagos: 800,
//     Abuja: 1000,
//     Ogun: 900,
//     Kano: 1200,
//   },
//   // ...rest same as before
// };

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart: cartItems } = useContext(CartContext);

//   const [authChecked, setAuthChecked] = useState(false);
  
//    const { user, checking } = useContext(UserContext);

//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");
//   const [availableStates, setAvailableStates] = useState([]);
//   const [deliveryFee, setDeliveryFee] = useState(0);

//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");

//   // // 🔒 Check authentication
//   // useEffect(() => {
//   //   const token = document.cookie
//   //     .split("; ")
//   //     .find((row) => row.startsWith("token="))
//   //     ?.split("=")[1];

//   //   if (!token) {
//   //     router.replace("/auth/login");
//   //   } else {
//   //     // Optional: fetch user info from /api/auth/me if needed
//   //     setAuthChecked(true);
//   //   }
//   // }, []);
// useEffect(() => {
//     if (!checking && !user) {
//       router.push('/auth/login');
//     }
//   }, [checking, user]);

//   if (checking || !user) {
//     return <p className="p-4 text-center">Checking authentication...</p>;
//   }

//   useEffect(() => {
//     if (country) {
//       setAvailableStates(Object.keys(deliveryFees[country] || {}));
//       setState("");
//     }
//   }, [country]);

//   useEffect(() => {
//     if (country && state) {
//       setDeliveryFee(deliveryFees[country]?.[state] || 0);
//     }
//   }, [country, state]);

//   const cartTotal = (cartItems || []).reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const totalWithDelivery = cartTotal + deliveryFee;

//   const handlePayment = async () => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/checkout/paystack`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email,
//           phone,
//           name,
//           address,
//           city,
//           state,
//           postalCode,
//           country,
//           cartItems,
//           userId: user?._id, // optional
//         }),
//       }
//     );

//     const data = await res.json();
//     if (data.authorization_url) {
//       window.location.href = data.authorization_url;
//     } else {
//       alert(data.message || "Failed to start payment.");
//     }
//   };

//   const isDisabled =
//     !email || !phone || !name || !address || !city || !postalCode || !state || !country;

//   if (!authChecked) {
//     return <p className="text-center p-6">Checking authentication...</p>;
//   }

//   if (!cartItems || cartItems.length === 0) {
//     return <p className="p-4 text-center">🛒 Your cart is empty.</p>;
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       {/* Country and State */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1 font-medium">Country</label>
//           <select
//             className="border p-2 w-full"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           >
//             <option value="">-- Select Country --</option>
//             {Object.keys(deliveryFees).map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">State</label>
//           <select
//             className="border p-2 w-full"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           >
//             <option value="">-- Select State --</option>
//             {availableStates.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Contact + Shipping Info */}
//       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1 font-medium">Full Name</label>
//           <input
//             className="border p-2 w-full"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Phone</label>
//           <input
//             type="tel"
//             className="border p-2 w-full"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             className="border p-2 w-full"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">City</label>
//           <input
//             className="border p-2 w-full"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <div className="md:col-span-2">
//           <label className="block mb-1 font-medium">Street Address</label>
//           <input
//             className="border p-2 w-full"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Postal Code</label>
//           <input
//             className="border p-2 w-full"
//             value={postalCode}
//             onChange={(e) => setPostalCode(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="border-t pt-6 mt-6">
//         <p>Cart Total: ₦{cartTotal.toLocaleString()}</p>
//         <p>Delivery Fee: ₦{deliveryFee.toLocaleString()}</p>
//         <h2 className="text-xl font-bold">
//           Total: ₦{totalWithDelivery.toLocaleString()}
//         </h2>
//       </div>

//       {/* Pay Button */}
//       <button
//         onClick={handlePayment}
//         className="mt-6 bg-black text-white p-3 rounded w-full"
//         disabled={isDisabled}
//       >
//         Pay with Paystack
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;
// import React, { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/router";
// import { CartContext } from "../components/context/CartContext";
// import { UserContext } from "../components/context/UserContext";

// const deliveryFees = {
//   Nigeria: {
//     Lagos: 800,
//     Abuja: 1000,
//     Ogun: 900,
//     Kano: 1200,
//   },
// };

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart: cartItems } = useContext(CartContext);
//   const { user, checking } = useContext(UserContext);

//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");
//   const [availableStates, setAvailableStates] = useState([]);
//   const [deliveryFee, setDeliveryFee] = useState(0);

//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");

//   // 🔒 Redirect unauthenticated users
//   useEffect(() => {
//     if (!checking && !user) {
//       router.push("/auth/login");
//     } else if (user) {
//       // Prefill if user is available
//       setEmail(user.email || "");
//       setPhone(user.phone || "");
//       setName(user.name || "");
//     }
//   }, [checking, user]);

//   // While checking user status
//   if (checking || !user) {
//     return <p className="p-4 text-center">Checking authentication...</p>;
//   }

//   // No items in cart
//   if (!cartItems || cartItems.length === 0) {
//     return <p className="p-4 text-center">🛒 Your cart is empty.</p>;
//   }

//   useEffect(() => {
//     if (country) {
//       setAvailableStates(Object.keys(deliveryFees[country] || {}));
//       setState("");
//     }
//   }, [country]);

//   useEffect(() => {
//     if (country && state) {
//       setDeliveryFee(deliveryFees[country]?.[state] || 0);
//     }
//   }, [country, state]);

//   const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const totalWithDelivery = cartTotal + deliveryFee;

//   const handlePayment = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkout/paystack`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email,
//         phone,
//         name,
//         address,
//         city,
//         state,
//         postalCode,
//         country,
//         cartItems,
//         userId: user._id,
//       }),
//     });

//     const data = await res.json();
//     if (data.authorization_url) {
//       window.location.href = data.authorization_url;
//     } else {
//       alert(data.message || "Failed to start payment.");
//     }
//   };

//   const isDisabled =
//     !email || !phone || !name || !address || !city || !postalCode || !state || !country;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       {/* Country and State */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1 font-medium">Country</label>
//           <select
//             className="border p-2 w-full"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           >
//             <option value="">-- Select Country --</option>
//             {Object.keys(deliveryFees).map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">State</label>
//           <select
//             className="border p-2 w-full"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           >
//             <option value="">-- Select State --</option>
//             {availableStates.map((s) => (
//               <option key={s} value={s}>
//                 {s}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Contact + Shipping Info */}
//       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1 font-medium">Full Name</label>
//           <input
//             className="border p-2 w-full"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Phone</label>
//           <input
//             type="tel"
//             className="border p-2 w-full"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             className="border p-2 w-full"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">City</label>
//           <input
//             className="border p-2 w-full"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <div className="md:col-span-2">
//           <label className="block mb-1 font-medium">Street Address</label>
//           <input
//             className="border p-2 w-full"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Postal Code</label>
//           <input
//             className="border p-2 w-full"
//             value={postalCode}
//             onChange={(e) => setPostalCode(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="border-t pt-6 mt-6">
//         <p>Cart Total: ₦{cartTotal.toLocaleString()}</p>
//         <p>Delivery Fee: ₦{deliveryFee.toLocaleString()}</p>
//         <h2 className="text-xl font-bold">Total: ₦{totalWithDelivery.toLocaleString()}</h2>
//       </div>

//       {/* Pay Button */}
//       <button
//         onClick={handlePayment}
//         className="mt-6 bg-black text-white p-3 rounded w-full"
//         disabled={isDisabled}
//       >
//         Pay with Paystack
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;
// import React, { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/router";
// import { CartContext } from "../components/context/CartContext";
// import { UserContext } from "../components/context/UserContext";

// // const deliveryFees = {
// //   Nigeria: {
// //     Lagos: 800,
// //     Abuja: 1000,
// //     Ogun: 900,
// //     Kano: 1200,
// //   },
// // };

// const CheckoutPage = () => {
//   const router = useRouter();
//   const { cart: cartItems } = useContext(CartContext);
//   const { user, checking } = useContext(UserContext);

//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");
//   const [availableStates, setAvailableStates] = useState([]);
//   const [deliveryFee, setDeliveryFee] = useState(0);
//   const [deliveryFees, setDeliveryFees] = useState({});


//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");

//   // Only run effects at top level
//   useEffect(() => {
//     if (!checking && !user) {
//       router.replace('/auth/login?redirect=/checkout');
//     } else if (user) {
//       setEmail(user.email || "");
//       setPhone(user.phone || "");
//       setName(user.name || "");
//     }
//   }, [checking, user]);

//   useEffect(() => {
//     if (country) {
//       setAvailableStates(Object.keys(deliveryFees[country] || {}));
//       setState("");
//     }
//   }, [country]);

//   // useEffect(() => {
//   //   if (country && state) {
//   //     setDeliveryFee(deliveryFees[country]?.[state] || 0);
//   //   }
//   // }, [country, state]);
//   useEffect(() => {
//   fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/delivery-fees`)
//     .then(res => res.json())
//     .then(data => {
//       // Convert flat list into nested object { [country]: { [state]: fee } }
//       const mapped = {};
//       data.forEach(({ country, state, fee }) => {
//         if (!mapped[country]) mapped[country] = {};
//         mapped[country][state] = fee;
//       });
//       setDeliveryFees(mapped);
//     })
//     .catch(err => {
//       console.error('Failed to load delivery fees:', err);
//     });
// }, []);


//   // Don’t render form until user is ready
//   if (checking || !user) {
//     return <p className="p-4 text-center">Checking authentication...</p>;
//   }

//   if (!cartItems || cartItems.length === 0) {
//     return <p className="p-4 text-center">🛒 Your cart is empty.</p>;
//   }

//   const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const totalWithDelivery = cartTotal + deliveryFee;

//   const handlePayment = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkout/paystack`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email,
//         phone,
//         name,
//         address,
//         city,
//         state,
//         postalCode,
//         country,
//         cartItems,
//         userId: user._id,
//       }),
//     });

//     const data = await res.json();
//     if (data.authorization_url) {
//       window.location.href = data.authorization_url;
//     } else {
//       alert(data.message || "Failed to start payment.");
//     }
//   };

//   const isDisabled =
//     !email || !phone || !name || !address || !city || !postalCode || !state || !country;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       {/* Country and State */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Country */}
//         <div>
//           <label className="block mb-1 font-medium">Country</label>
//           <select
//             className="border p-2 w-full"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           >
//             <option value="">-- Select Country --</option>
//             {Object.keys(deliveryFees).map((c) => (
//               <option key={c} value={c}>{c}</option>
//             ))}
//           </select>
//         </div>

//         {/* State */}
//         <div>
//           <label className="block mb-1 font-medium">State</label>
//           <select
//             className="border p-2 w-full"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           >
//             <option value="">-- Select State --</option>
//             {availableStates.map((s) => (
//               <option key={s} value={s}>{s}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Contact Info */}
//       <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1 font-medium">Full Name</label>
//           <input className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Phone</label>
//           <input type="tel" className="border p-2 w-full" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input type="email" className="border p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">City</label>
//           <input className="border p-2 w-full" value={city} onChange={(e) => setCity(e.target.value)} />
//         </div>
//         <div className="md:col-span-2">
//           <label className="block mb-1 font-medium">Street Address</label>
//           <input className="border p-2 w-full" value={address} onChange={(e) => setAddress(e.target.value)} />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Postal Code</label>
//           <input className="border p-2 w-full" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="border-t pt-6 mt-6">
//         <p>Cart Total: ₦{cartTotal.toLocaleString()}</p>
//         <p>Delivery Fee: ₦{deliveryFee.toLocaleString()}</p>
//         <h2 className="text-xl font-bold">Total: ₦{totalWithDelivery.toLocaleString()}</h2>
//       </div>

//       <button
//         onClick={handlePayment}
//         className="mt-6 bg-black text-white p-3 rounded w-full"
//         disabled={isDisabled}
//       >
//         Pay with Paystack
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { CartContext } from "../components/context/CartContext";
import { UserContext } from "../components/context/UserContext";

const CheckoutPage = () => {
  const router = useRouter();
  const { cart: cartItems } = useContext(CartContext);
  const { user, checking } = useContext(UserContext);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [availableStates, setAvailableStates] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [deliveryFees, setDeliveryFees] = useState({});

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // 🔐 Redirect unauthenticated users
  useEffect(() => {
    if (!checking && !user) {
      router.replace("/auth/login?redirect=/checkout");
    } else if (user) {
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setName(user.name || "");
    }
  }, [checking, user]);

  // 🌍 Fetch delivery fees from DB
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/delivery-fees`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = {};
        data.forEach(({ country, state, fee }) => {
          if (!mapped[country]) mapped[country] = {};
          mapped[country][state] = fee;
        });
        setDeliveryFees(mapped);
      })
      .catch((err) => {
        console.error("Failed to load delivery fees:", err);
      });
  }, []);

  // 🏙 Update available states when country changes
  useEffect(() => {
    setState("");
    setDeliveryFee(0);
    setAvailableStates(Object.keys(deliveryFees[country] || {}));
  }, [country]);

  // 💰 Update delivery fee when state changes
  useEffect(() => {
    if (country && state && deliveryFees[country]?.[state]) {
      setDeliveryFee(deliveryFees[country][state]);
    } else {
      setDeliveryFee(0);
    }
  }, [state, country, deliveryFees]);

  if (checking || !user) {
    return <p className="p-4 text-center">Checking authentication...</p>;
  }

  if (!cartItems || cartItems.length === 0) {
    return <p className="p-4 text-center">🛒 Your cart is empty.</p>;
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalWithDelivery = cartTotal + deliveryFee;

  const handlePayment = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkout/paystack`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        phone,
        name,
        address,
        city,
        state,
        postalCode,
        country,
        cartItems,
        userId: user._id,
      }),
    });

    const data = await res.json();
    if (data.authorization_url) {
      window.location.href = data.authorization_url;
    } else {
      alert(data.message || "Failed to start payment.");
    }
  };

  const isDisabled = !email || !phone || !name || !address || !city || !postalCode || !state || !country;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Country and State */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Country</label>
          <select
            className="border border-blue-200 p-2 w-full rounded-xl"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            {Object.keys(deliveryFees).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">State</label>
          <select
            className="border border-blue-200 rounded-xl p-2 w-full text-grey"
            value={state}
            onChange={(e) => setState(e.target.value)}
            disabled={!country}
          >
            <option value=""> Select State</option>
            {availableStates.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input className="border p-2 w-full border-blue-200 rounded-xl" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input type="tel" className="border p-2 w-full border-blue-200 rounded-xl" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="border p-2 w-full border-blue-200 rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block mb-1 font-medium">City</label>
          <input className="border p-2 w-full border-blue-200 rounded-xl" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Street Address</label>
          <input className="border p-2 w-full border-blue-200 rounded-xl" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label className="block mb-1 font-medium">Postal Code</label>
          <input className="border p-2 w-full border-blue-200 rounded-xl" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>
      </div>

      {/* Summary */}
      <div className="border-t pt-6 mt-6 space-y-2">
        <div className="flex justify-between "> <p className="font-bold "> Cart Total</p> <span className="text-green-500">₦{cartTotal.toLocaleString()}</span></div>
        <div className="flex justify-between"> <p className="font-bold ">Delivery Fee</p> <span className="text-green-500">₦{deliveryFee.toLocaleString()}</span></div>
        <div className="text-xl font-bold flex justify-between"> <p>Total </p><span className="text-green-500">₦{totalWithDelivery.toLocaleString()}</span></div>
      </div>

      <button
        onClick={handlePayment}
        className="mt-6 bg-black text-white p-3 rounded w-full"
        disabled={isDisabled}
      >
        Pay with Paystack
      </button>
    </div>
  );
};

export default CheckoutPage;
