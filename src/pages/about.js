import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "/WhatsApp-Image-2023-09-29-at-13.10.31-e1696091564202.jpeg",
  "/WhatsApp-Image-2023-09-29-at-13.10.32-1.jpeg",
  "/WhatsApp-Image-2023-09-29-at-13.10.32-2.jpeg",
  "/WhatsApp-Image-2023-09-29-at-13.10.32-e1696091595254.jpeg",
  "/WhatsApp-Image-2023-09-29-at-13.10.33-2.jpeg",
  "/WhatsApp-Image-2023-09-29-at-13.10.33-3.jpeg",
];

export default function HomePage() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + 4 < galleryImages.length) setStartIndex(startIndex + 1);
  };

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <>
      <div className="bg-[#f5f3ef] w-full  bg-[url('/wd-furniture-background.jpeg')] bg-contain bg-center py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Hero Video or Image */}
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
            <Image
              src="/2023-04-10-e1696090884429-340x34-1.jpeg"
              alt="Video preview"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          {/* Right - Text Content */}
          <div className="flex flex-col gap-4 text-[var(--black)]">
            <h2 className="text-2xl mt-4 mb-4 font-bold">
              KOKOLET LUXURY - ALL ABOUT SNEAKERS
            </h2>
            <p>
              Welcome to Kokolet Luxury, your premier destination for high-end
              sneakers and apparel. Specializing in new and classic Jordans,
              Dunks, Air Force, and more...
            </p>
            <p>
              Driven by a passion for sneaker culture, we are dedicated to
              pushing boundaries and moving the industry forward...
            </p>
            <p>
              Experience the epitome of luxury and sophistication with Kokolet
              Luxury.
            </p>

            <div className="flex flex-wrap gap-4  mt-6">
              <a
                href="#"
                className="bg-green-600 px-4 py-2 text-white rounded hover:bg-green-700"
              >
                SHOP ON INSTAGRAM
              </a>
              <a
                href="#"
                className="bg-green-600 px-4 py-2 text-white rounded hover:bg-green-700"
              >
                CONTACT US
              </a>
              <a
                href="#"
                className="bg-black px-4 py-2 text-white rounded hover:bg-gray-800"
              >
                LOCATE OUR STORE
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="max-w-7xl mx-auto mt-12 relative">
          <div className="overflow-hidden relative">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-full cursor-pointer hover:bg-opacity-100"
              onClick={prevSlide}
            >
              <ChevronLeft size={28} />
            </div>

            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-full cursor-pointer hover:bg-opacity-100"
              onClick={nextSlide}
            >
              <ChevronRight size={28} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryImages
                .slice(startIndex, startIndex + 4)
                .map((img, index) => (
                  <div
                    key={index}
                    className="w-full h-[270px] relative rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${index}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
