// pages/contact.jsx
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <div className="w-full bg-[url('/wd-furniture-background.jpeg')] bg-contain bg-center  py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 ">
          {/* Left Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[var(--black)] text-center md:text-left">
              CONTACT US OR VISIT OUR STORE
            </h2>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Store Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src="/2023-04-10-e1696090884429-340x34-1.jpeg"
                  alt="Kokolet Luxury Store"
                  width={500}
                  height={350}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>

              {/* Contact Info */}
              <div className="w-full md:w-1/2 text-[var(--black)] flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[var(--font-1)]">
                  KOKOLET LUXURY
                </h3>
                <p className="text-sm font-medium">
                  Gateview plaza, plot 11 Admiralty Way, Lekki Phase 1, Lagos,
                  Nigeria
                </p>
                <p className="text-sm">
                  MONDAY – SATURDAY{" "}
                  <span className="font-semibold">10 AM - 8 PM</span>
                </p>
                <p className="text-sm">hello@kokoletluxury.com</p>
                <p className="text-sm">0915 096 5129</p>

                <a
                  href="#"
                  className="mt-2 bg-black text-white text-center py-2 rounded hover:bg-gray-900 transition"
                >
                  LOCATE OUR STORE
                </a>
                <a
                  href="https://wa.me/2349150965129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 transition"
                >
                  WHATSAPP US
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Message Form */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[var(--black)] text-center md:text-left">
              DROP US A MESSAGE
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 px-6 py-2 text-white rounded hover:bg-green-700 transition w-full md:w-[50%] self-end"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
