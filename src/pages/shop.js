// import React, { useEffect, useState } from "react";
// import ProductCard from "../components/ProductCard";
// import FiltersSidebar from "../components/FiltersSidebar";

// const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const [total, setTotal] = useState(0);

//   const [filters, setFilters] = useState({
//     search: "",
//     minPrice: "",
//     maxPrice: "",
//     size: "",
//     category: "",
//     inStock: "",
//     featured: "",
//     sort: "",
//     page: 1,
//     limit: 12,
//   });

//   const fetchProducts = async () => {
//     const params = new URLSearchParams();
//     for (const key in filters) {
//       if (filters[key]) params.append(key, filters[key]);
//     }

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/products?${params.toString()}`
//       );
//       const data = await res.json();

//       // Support both old and new backend responses
//       if (Array.isArray(data)) {
//         setProducts(data);
//         setTotal(data.length);
//       } else {
//         setProducts(data.products || []);
//         setTotal(data.total || 0);
//       }
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [filters]);

//   const totalPages = Math.ceil(total / filters.limit);

//   return (
//     <>
//       <div className="page-title  page-title-default title-size-large title-design-default wd-section-stretch color-scheme-light title-shop">
//         <div class="container">
//           <h1 class="entry-title title">Shop</h1>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
//         {/* <FiltersSidebar filters={filters} setFilters={setFilters} /> */}
//         <FiltersSidebar filters={filters} setFilters={setFilters} />

//         <div className="flex-1 px-4 py-8">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">Shop All Products</h1>
//             <select
//               className="border p-2 rounded"
//               value={filters.sort}
//               onChange={(e) =>
//                 setFilters((prev) => ({ ...prev, sort: e.target.value }))
//               }
//             >
//               <option value="">Sort by</option>
//               <option value="asc">Price: Low → High</option>
//               <option value="desc">Price: High → Low</option>
//             </select>
//           </div>

//           {products.length === 0 ? (
//             <p>No products found.</p>
//           ) : (
//             <>
//               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
//                 {products.map((product) => (
//                   <ProductCard key={product._id} product={product} />
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className="mt-10 flex justify-center gap-2">
//                   {Array.from({ length: totalPages }, (_, i) => (
//                     <button
//                       key={i}
//                       onClick={() =>
//                         setFilters((prev) => ({ ...prev, page: i + 1 }))
//                       }
//                       className={`px-3 py-1 border rounded ${
//                         filters.page === i + 1
//                           ? "bg-black text-white"
//                           : "bg-white text-black"
//                       }`}
//                     >
//                       {i + 1}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;
// import React, { useState } from "react";
// import ProductCard from "../components/ProductCard";
// import FiltersSidebar from "../components/FiltersSidebar";

// // Hardcoded products (example)
// const sampleProducts = [
//   {
//     _id: "1",
//     name: "Red T-Shirt",
//     price: 25,
//     size: "M",
//     category: "Clothing",
//     inStock: true,
//     featured: false,
//     image: "/images/red-shirt.jpg",
//   },
//   {
//     _id: "2",
//     name: "Blue Sneakers",
//     price: 70,
//     size: "42",
//     category: "Footwear",
//     inStock: true,
//     featured: true,
//     image: "/images/blue-sneakers.jpg",
//   },
//   // Add more products here
// ];

// const Shop = () => {
//   const [filters, setFilters] = useState({
//     search: "",
//     minPrice: "",
//     maxPrice: "",
//     size: "",
//     category: "",
//     inStock: "",
//     featured: "",
//     sort: "",
//     page: 1,
//     limit: 12,
//   });

//   // Apply filters and sorting manually
//   // const filteredProducts = sampleProducts
//   //   .filter((product) => {
//   //     const matchesSearch = product.name
//   //       .toLowerCase()
//   //       .includes(filters.search.toLowerCase());

//   //     const matchesMinPrice =
//   //       filters.minPrice === "" || product.price >= Number(filters.minPrice);

//   //     const matchesMaxPrice =
//   //       filters.maxPrice === "" || product.price <= Number(filters.maxPrice);

//   //     const matchesCategory =
//   //       !filters.category || product.category === filters.category;

//   //     const matchesSize = !filters.size || product.size === filters.size;

//   //     const matchesInStock =
//   //       filters.inStock === "" ||
//   //       product.inStock === (filters.inStock === "true");

//   //     const matchesFeatured =
//   //       filters.featured === "" ||
//   //       product.featured === (filters.featured === "true");

//   //     return (
//   //       matchesSearch &&
//   //       matchesMinPrice &&
//   //       matchesMaxPrice &&
//   //       matchesCategory &&
//   //       matchesSize &&
//   //       matchesInStock &&
//   //       matchesFeatured
//   //     );
//   //   })
//   //   .sort((a, b) => {
//   //     if (filters.sort === "asc") return a.price - b.price;
//   //     if (filters.sort === "desc") return b.price - a.price;
//   //     return 0;
//   //   });
// const filteredProducts = sampleProducts
//   .filter((product) => {
//     const matchesSearch = (product?.name ?? "")
//       .toLowerCase()
//       .includes((filters.search ?? "").toLowerCase());

//     const matchesMinPrice =
//       filters.minPrice === "" || product.price >= Number(filters.minPrice);

//     const matchesMaxPrice =
//       filters.maxPrice === "" || product.price <= Number(filters.maxPrice);

//     const matchesCategory =
//       !filters.category || product.category === filters.category;

//     const matchesSize = !filters.size || product.size === filters.size;

//     const matchesInStock =
//       filters.inStock === "" ||
//       product.inStock === (filters.inStock === "true");

//     const matchesFeatured =
//       filters.featured === "" ||
//       product.featured === (filters.featured === "true");

//     return (
//       matchesSearch &&
//       matchesMinPrice &&
//       matchesMaxPrice &&
//       matchesCategory &&
//       matchesSize &&
//       matchesInStock &&
//       matchesFeatured
//     );
//   })
//   .sort((a, b) => {
//     if (filters.sort === "asc") return a.price - b.price;
//     if (filters.sort === "desc") return b.price - a.price;
//     return 0;
//   });

//   const total = filteredProducts.length;
//   const totalPages = Math.ceil(total / filters.limit);

//   // Paginate
//   const paginatedProducts = filteredProducts.slice(
//     (filters.page - 1) * filters.limit,
//     filters.page * filters.limit
//   );

//   return (
//     <>
//       <div className="page-title page-title-default title-size-large title-design-default wd-section-stretch color-scheme-light title-shop">
//         <div className="container">
//           <h1 className="entry-title title">Shop</h1>
//         </div>
//       </div>
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
//         <FiltersSidebar filters={filters} setFilters={setFilters} />

//         <div className="flex-1 px-4 py-8">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">Shop All Products</h1>
//             <select
//               className="border p-2 rounded"
//               value={filters.sort}
//               onChange={(e) =>
//                 setFilters((prev) => ({ ...prev, sort: e.target.value }))
//               }
//             >
//               <option value="">Sort by</option>
//               <option value="asc">Price: Low → High</option>
//               <option value="desc">Price: High → Low</option>
//             </select>
//           </div>

//           {paginatedProducts.length === 0 ? (
//             <p>No products found.</p>
//           ) : (
//             <>
//               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
//                 {paginatedProducts.map((product) => (
//                   <ProductCard key={product._id} product={product} />
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className="mt-10 flex justify-center gap-2">
//                   {Array.from({ length: totalPages }, (_, i) => (
//                     <button
//                       key={i}
//                       onClick={() =>
//                         setFilters((prev) => ({ ...prev, page: i + 1 }))
//                       }
//                       className={`px-3 py-1 border rounded ${
//                         filters.page === i + 1
//                           ? "bg-black text-white"
//                           : "bg-white text-black"
//                       }`}
//                     >
//                       {i + 1}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import FiltersSidebar from "../components/FiltersSidebar";

const Shop = () => {
  const [filters, setFilters] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    size: "",
    category: "",
    inStock: "",
    featured: "",
    sort: "",
    page: 1,
    limit: 12,
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams(filters).toString();

        // ✅ Replace with your backend URL
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products?${query}`
        );
        const data = await res.json();

        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  // Pagination
  const total = products.length;
  const totalPages = Math.ceil(total / filters.limit);
  const paginatedProducts = products.slice(
    (filters.page - 1) * filters.limit,
    filters.page * filters.limit
  );

  return (
    <>
      <div className="page-title page-title-default title-size-large title-design-default wd-section-stretch color-scheme-light title-shop">
        <div className="container">
          <h1 className="entry-title title">Shop</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <FiltersSidebar filters={filters} setFilters={setFilters} />

        <div className="flex-1 px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Shop All Products</h1>
            <select
              className="border p-2 rounded"
              value={filters.sort}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, sort: e.target.value }))
              }
            >
              <option value="">Sort by</option>
              <option value="asc">Price: Low → High</option>
              <option value="desc">Price: High → Low</option>
            </select>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : paginatedProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        setFilters((prev) => ({ ...prev, page: i + 1 }))
                      }
                      className={`px-3 py-1 border rounded ${
                        filters.page === i + 1
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
