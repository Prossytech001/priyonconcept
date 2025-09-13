import { useEffect, useState } from "react";
import Link from "next/link";
import { debounce } from "lodash";

const LiveSearch = ({ variant = "topbar" }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchResults = debounce(async (searchTerm) => {
    if (!searchTerm) {
      setResults([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?search=${searchTerm}`
      );
      const data = await res.json();
      setResults(data.products || []);
      setShowDropdown(true);
    } catch (err) {
      console.error("Live search error:", err);
    } finally {
      setLoading(false);
    }
  }, 400);

  useEffect(() => {
    fetchResults(query);
    return () => fetchResults.cancel();
  }, [query]);

  const baseStyle = variant === "sidebar" ? "w-full" : "w-full max-w-md mx-auto";

  return (
    <div className={`relative ${baseStyle}`}>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full inputs bg-white pl-10 outline-none rounded-full px-4 py-2 text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay for click
      />

      {showDropdown && (
        <div className="absolute z-50 bg-white shadow-lg w-full mt-1 max-h-96 overflow-y-auto rounded border">
          {loading ? (
            <div className="px-4 py-2 text-gray-500 text-sm">Loading...</div>
          ) : results.length === 0 ? (
            <div className="px-4 py-2 text-gray-500 text-sm">No products found.</div>
          ) : (
            results.slice(0, 8).map((product) => (
              <Link
                key={product._id}
                href={`/product/${product.slug}`}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 border-b"
              >
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm text-black ">{product.name}</p>
                  <p className="text-green-700 text-sm">₦{product.basePrice?.toLocaleString()}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default LiveSearch;
