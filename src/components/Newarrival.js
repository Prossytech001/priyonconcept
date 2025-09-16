
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // useEffect(() => {
  //   const fetchNewArrivals = async () => {
  //     try {
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/api/products?isNew=true&limit=10`
  //       );
  //       const data = await res.json();
  //       console.log("Fetched data:", data);
  //       setProducts(data);
  //     } catch (err) {
  //       console.error("Error fetching new arrivals:", err);
  //     }
  //   };

  //   fetchNewArrivals();
  // }, []);
   useEffect(() => {
  const fetchNewArrivals = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products?isNew=true&limit=10`
    );
    const data = await res.json();

    // ✅ Ensure we get only the array part
    const fetchedProducts = Array.isArray(data)
      ? data
      : data.products || [];

    console.log("Fetched products:", fetchedProducts);
    setProducts(fetchedProducts);
  } catch (err) {
    console.error("Error fetching new arrivals:", err);
  }
};

    fetchNewArrivals();
  }, []);


  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(5);
      }
    };

    updateItemsPerPage(); // Run on load
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(
        (prev) => (prev + 1) % Math.ceil(products.length / itemsPerPage)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [products]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  // const visibleProducts = products.slice(
  //   currentPage * itemsPerPage,
  //   currentPage * itemsPerPage + itemsPerPage
  // );
const visibleProducts = Array.isArray(products)
  ? products.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage)
  : [];

  return (
    <section className="w-full mt-12 placeItems-center flex flex-col align-center justify-center">
      <h2 className="flex justify-between text-lg md:text-3xl font-semibold px-4 md:px-8 mb-6 uppercase">
        <p>Our New Arrivals</p>
        <Link
          href="/newarrival"
          className="text-green-700 text-sm font-semibold underline underline-offset-4"
        >
          View All
        </Link>
      </h2>

      <div className="relative px-2 md:px-8">
        {/* Arrows - hidden on small screens */}
        <button
          onClick={() =>
            setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
          }
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10  hover:bg-gray-100 transition"
        >
          <FaChevronLeft size={16} />
        </button>

        {/* Product scroll area */}
        <div className="overflow-hidden flex justify-center">
          <div className="flex gap-3 md:gap-4 transition-all duration-500 ease-in-out">
            {visibleProducts.map((product) => (
              <div
                key={product._id}
                className="min-w-[44vw] max-w-[46vw] md:min-w-[200px] md:max-w-[220px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10  hover:bg-gray-100 transition"
        >
          <FaChevronRight size={16} />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition duration-300 ${
                i === currentPage ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
