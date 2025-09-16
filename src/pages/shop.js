
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import FiltersSidebar from "../components/FiltersSidebar";
import DynamicProductCard from "../components/DynamicProductCard";

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
                  <DynamicProductCard key={product._id} product={product} />
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
