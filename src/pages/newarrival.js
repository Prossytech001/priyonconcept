// import { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import Head from "next/head";
// import Navbar from "../components/Navbar";

// const NewArrivalPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/products?isNew=true`
//         );
//         const data = await res.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching new arrivals:", err);
//         setLoading(false);
//       }
//     };

//     fetchNewArrivals();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Head>
//         <title>New Arrivals | Kokolet Luxury</title>
//       </Head>

//       <section className="min-h-screen py-10 px-4 md:px-12">
//         <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
//           Shop All New Arrivals
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading new products...</p>
//         ) : products.length === 0 ? (
//           <p className="text-center text-gray-500">
//             No new arrivals at the moment.
//           </p>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default NewArrivalPage;
"use client";


import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Head from "next/head";


const NewArrivalPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?isNew=true`
        );
        const data = await res.json();

        // Handle both possible response formats
        const fetchedProducts = Array.isArray(data) ? data : data.products;

        setProducts(fetchedProducts || []);
      } catch (err) {
        console.error("Error fetching new arrivals:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  return (
    <>
    
      <Head>
        <title>New Arrivals | Kokolet Luxury</title>
      </Head>

      <section className="min-h-screen py-10 px-4 md:px-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Shop All New Arrivals
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading new products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500">
            No new arrivals at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default NewArrivalPage;
