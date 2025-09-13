// import Link from "next/link";
// import { useState, useEffect } from "react";

// const slides = [
//   {
//     image: "/images/hero1.png",
//     title: "Luxury, Redefined",
//     subtitle: "New arrivals",
//   },
//   {
//     image: "/images/hero2.png",
//     title: "Elegant. Bold. You.",
//     subtitle: "Unveil your style",
//   },
// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[75vh] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
//             current === index ? "opacity-100 z-10" : "opacity-0"
//           }`}
//         >
//           <img
//             src={slide.image}
//             className="w-full h-full object-cover"
//             alt=""
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
//             <div className="text-white space-y-3">
//               <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
//               <p className="text-lg">{slide.subtitle}</p>
//               <Link href="/shop">
//                 <button className="mt-3 px-6 py-2 bg-white text-black font-medium rounded-full">
//                   Shop Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HeroSlider() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Fetch banner images from backend
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/settings/banner`)
      .then((res) => {
        const images = res.data.bannerImages || [];
        const formatted = images.map((img) => ({
          image: img,
          title: "Elegant. Bold. You.",
          subtitle: "Unveil your style",
        }));
        setSlides(formatted);
      })
      .catch((err) => {
        console.error("Failed to load banners:", err);
      });
  }, []);

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  if (slides.length === 0) {
    return (
      <div className="w-full h-[75vh] flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading banner...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            current === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt={`Banner ${index + 1}`}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
            <div className="text-white space-y-3 px-4">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.subtitle}</p>
              <Link href="/shop">
                <button className="mt-3 px-6 py-2 bg-white text-black font-medium rounded-full">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
