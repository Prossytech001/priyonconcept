// import ProductCard from './ProductCard';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { useRef } from 'react';

// const sampleProducts = [ /* Same product array from before */ ];

// export default function NewArrivals() {
//   const scrollRef = useRef();

//   const scroll = (dir) => {
//     const scrollAmount = 300;
//     scrollRef.current.scrollBy({
//       left: dir === 'left' ? -scrollAmount : scrollAmount,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <section className="px-4 md:px-12 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl md:text-3xl font-bold">OUR NEW ARRIVALS</h2>
//         <a
//           href="/products"
//           className="text-green-700 text-sm font-semibold underline underline-offset-4"
//         >
//           ⊕ View All
//         </a>
//       </div>

//       <div className="relative">
//         {/* Arrows */}
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
//         >
//           <FaChevronLeft />
//         </button>

//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-2"
//         >
//           {sampleProducts.map((item, i) => (
//             <ProductCard key={i} product={item} />
//           ))}
//         </div>

//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
//         >
//           <FaChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// }
// import { useEffect, useState, useRef } from 'react';
// import ProductCard from './ProductCard'; // adjust path if needed
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// export default function NewArrivals() {
//   const [products, setProducts] = useState([]);
//   const scrollRef = useRef();

//   useEffect(() => {
//    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?isNew=true`)
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error('Failed to fetch new arrivals:', err));
//   }, []);

//   const scroll = (dir) => {
//     const container = scrollRef.current;
//     const scrollAmount = 300;
//     container.scrollBy({
//       left: dir === 'left' ? -scrollAmount : scrollAmount,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <section className="px-4 md:px-12 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl md:text-3xl font-bold">OUR NEW ARRIVALS</h2>
//         <a
//           href="/products"
//           className="text-green-700 text-sm font-semibold underline underline-offset-4"
//         >
//           ⊕ View All
//         </a>
//       </div>

//       {products.length === 0 ? (
//         <p className="text-gray-500 text-sm">No new arrivals found.</p>
//       ) : (
//         <div className="relative">
//           {/* Scroll Arrows */}
//           <button
//             onClick={() => scroll('left')}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
//           >
//             <FaChevronLeft />
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-2"
//           >
//             {products.map((product) => (
//               <ProductCard key={product._id} product={product} />
//             ))}
//           </div>

//           <button
//             onClick={() => scroll('right')}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }
// import { useEffect, useRef, useState } from 'react';
// import ProductCard from './ProductCard';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// export default function NewArrivals({ products }) {
//   const scrollRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);

//   const itemWidth = 220; // Width of one product + margin
//   const visibleCount = 4; // how many fit in viewport

//   const scrollToIndex = (index) => {
//     const container = scrollRef.current;
//     if (!container) return;
//     container.scrollTo({
//       left: index * itemWidth,
//       behavior: 'smooth',
//     });
//     setActiveIndex(index);
//   };

//   const handleNext = () => {
//     const maxIndex = Math.ceil(products.length - visibleCount);
//     const newIndex = activeIndex >= maxIndex ? 0 : activeIndex + 1;
//     scrollToIndex(newIndex);
//   };

//   const handlePrev = () => {
//     const maxIndex = Math.ceil(products.length - visibleCount);
//     const newIndex = activeIndex <= 0 ? maxIndex : activeIndex - 1;
//     scrollToIndex(newIndex);
//   };

//   // Auto-scroll every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [activeIndex, products]);

//   return (
//     <section className="px-4 md:px-12 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl md:text-3xl font-bold">OUR NEW ARRIVALS</h2>
//         <a
//           href="/products"
//           className="text-green-700 text-sm font-semibold underline underline-offset-4"
//         >
//           ⊕ View All
//         </a>
//       </div>

//       <div className="relative">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition hidden md:block"
//         >
//           <FaChevronLeft className="text-gray-700 text-sm" />
//         </button>

//         {/* Scrollable Container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth px-2 md:px-6 pb-2 no-scrollbar"
//         >
//           {products.map((product) => (
//             <div key={product._id} style={{ minWidth: `${itemWidth}px` }}>
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition hidden md:block"
//         >
//           <FaChevronRight className="text-gray-700 text-sm" />
//         </button>
//       </div>

//       {/* Dot Indicators */}
//       <div className="mt-4 flex justify-center gap-2">
//         {Array.from({ length: Math.ceil(products.length - visibleCount + 1) }).map((_, i) => (
//           <button
//             key={i}
//             onClick={() => scrollToIndex(i)}
//             className={`w-2.5 h-2.5 rounded-full ${
//               activeIndex === i ? 'bg-black' : 'bg-gray-300'
//             } transition-all`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
// import { useEffect, useRef, useState } from 'react';
// import ProductCard from './ProductCard';

// export default function NewArrivals({ products = [] }) {
//   const scrollRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemWidth = 200; // same as product card min width
//   const visibleCount = 4; // Adjust for responsiveness if needed

//   // Auto-scroll every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex, products]);

//   const handleNext = () => {
//     const newIndex = (currentIndex + 1) % products.length;
//     scrollToIndex(newIndex);
//   };

//   const handlePrev = () => {
//     const newIndex = (currentIndex - 1 + products.length) % products.length;
//     scrollToIndex(newIndex);
//   };

//   const scrollToIndex = (index) => {
//     if (!scrollRef.current) return;

//     scrollRef.current.scrollTo({
//       left: index * itemWidth,
//       behavior: 'smooth',
//     });
//     setCurrentIndex(index);
//   };

//   if (products.length === 0) {
//     return (
//       <div className="text-center py-10 text-gray-400">No new arrivals yet.</div>
//     );
//   }

//   return (
//     <div className="relative  px-4 md:px-6 py-10">
//       <h2 className="text-xl font-bold px-4 md:px-6 mb-4">New Arrivals</h2>

//       {/* Product Slider */}
//       <div className="relative overflow-hidden">
//         {/* Arrow Buttons */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hidden md:block"
//         >
//           ‹
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hidden md:block"
//         >
//           ›
//         </button>

//         {/* Product Scrollable Row */}
//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth px-4 md:px-6 pb-2 no-scrollbar"
//         >
//           {products.map((product) => (
//             <div key={product._id} style={{ minWidth: `${itemWidth}px` }}>
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-4 gap-2">
//         {products.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => scrollToIndex(index)}
//             className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
//               index === currentIndex ? 'bg-black' : 'bg-gray-300'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from 'react';
// import ProductCard from './ProductCard'; // make sure this is your working ProductCard

// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const NewArrivals = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?isNew=true&limit=20`);
//         const data = await res.json();
//         setProducts(data);
//       } catch (err) {
//         console.error('Error fetching new arrivals:', err);
//       }
//     };

//     fetchNewArrivals();
//   }, []);

//   // Auto-scroll every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPage((prev) => (prev + 1) % Math.ceil(products.length / itemsPerPage));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [products]);

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const visibleProducts = products.slice(
//     currentPage * itemsPerPage,
//     currentPage * itemsPerPage + itemsPerPage
//   );

//   return (
//     <>
//     <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-8 mb-6">OUR NEW ARRIVALS</h2>

//     <section className="flex justify-between align-middle mt-10 px-4 md:px-8">
//       <div className="  flex gap-3 items-center pr-2">
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
//             }
//             className="p-2 bg-white rounded-full shadow hover:scale-105"
//           >
//             <FaChevronLeft />
//           </button>
//         </div>

//       <div className="relative">
//         {/* Product Scroll Container */}
//         <div className="flex gap-4 transition-all duration-500 overflow-hidden">
//           {visibleProducts.map((product) => (
//             <div key={product._id} className="min-w-[200px]">
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>

//         {/* Optional Arrow Navigation */}
//         {/* Pagination Dots */}
//       <div className="flex justify-center mt-4 gap-2">
//         {Array.from({ length: totalPages }).map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i)}
//             className={`w-2.5 h-2.5 rounded-full transition ${
//               i === currentPage ? 'bg-black' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>

//       </div>

//         <div className="  flex gap-3 items-center pr-2">
//        <button
//             onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
//             className="p-2 bg-white rounded-full shadow hover:scale-105"
//           >
//             <FaChevronRight />
//           </button>
//           </div>
//     </section>
//     </>
//   );
// };

// export default NewArrivals;
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
