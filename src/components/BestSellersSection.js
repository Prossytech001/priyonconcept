// import ProductCard from "./ProductCard"; // Your existing styled ProductCard
// import { useEffect, useState } from "react";

// const BestSellersSection = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchBestSellers = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/products?limit=10`
//         );
//         const data = await res.json();
//         // Optionally filter for "best sellers" if you add a field like isBestSeller
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to fetch best sellers:", error);
//       }
//     };

//     fetchBestSellers();
//   }, []);

//   return (
//     <section className="px-4 md:px-10 py-12 bg-[#f9f8f6]">
//       <h2 className="text-xl md:text-3xl font-bold mb-6 text-center uppercase">
//         Weekly Best Sellers
//       </h2>

// <<<<<<< HEAD
//     <div className="space-y-6">

//   <div className="grid gap-4 grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-fr max-w-screen-xl">
//     {products.slice(0, 10).map((product) => (
//       <div key={product._id} className="w-full h-full">
//         <ProductCard product={product} />
// =======
//       <div className="plase">
//         <div
//           className="grid  gap-4 grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-fr max-w-screen-xl"
//           style={{ placeItems: "center" }}
//         >
//           {products.map((product) => (
//             <div key={product._id} className="w-full h-full">
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
// >>>>>>> 5aaa440d480e9cbf03bbd13273c5947d46c1206b
//       </div>
//     </section>
//   );
// };

// export default BestSellersSection;
// import ProductCard from "./ProductCard"; // Your existing styled ProductCard
// import { useEffect, useState } from "react";

// const BestSellersSection = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchBestSellers = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/products?limit=10`
//         );
//         const data = await res.json();
//         // Optionally filter for "best sellers" if you add a field like isBestSeller
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to fetch best sellers:", error);
//       }
//     };

//     fetchBestSellers();
//   }, []);

//   return (
//     <section className="px-4 md:px-10 py-12 bg-[#f9f8f6]">
//       <h2 className="text-xl md:text-3xl font-bold mb-6 text-center uppercase">
//         Weekly Best Sellers
//       </h2>

//       <div>
//         <div
//           className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-fr max-w-screen-xl"
//           style={{ placeItems: "center" }}
//         >
//           {products.slice(0, 10).map((product) => (
//             <div key={product._id} className="w-full h-full">
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSellersSection;
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const BestSellersSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?limit=10&sort=desc`
        );
        const data = await res.json();

        // Safely extract products array
        const fetchedProducts = Array.isArray(data)
          ? data
          : data.products || [];
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch best sellers:", error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="px-4 flex flex-col justify-center align-center md:px-10 py-12 bg-[#f9f8f6]">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-center uppercase">
        Weekly Best Sellers
      </h2>

      <div>
        <div
          className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-item-center auto-rows-fr max-w-screen-xl"
          style={{ placeItems: "center" }}
        >
          {Array.isArray(products) &&
            products.slice(0, 10).map((product) => (
              <div key={product._id} className="w-full h-full">
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
