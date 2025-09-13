// import "@/styles/globals.css";
// import { CartProvider } from '../context/CartContext';

// export default function App({ Component, pageProps }) {
//   return<CartProvider>
//       <Component {...pageProps} />
//     </CartProvider>;
// }
// import "../styles/globals.css";
// import { CartProvider } from "@/components/context/CartContext";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// function MyApp({ Component, pageProps }) {
//   return (
//     <CartProvider>
//       <Navbar />
//       <Component {...pageProps} />
//       <Footer />
//     </CartProvider>
//   );
// }

// export default MyApp;
import "../styles/globals.css";
import { CartProvider } from "@/components/context/CartContext";
import { UserProvider } from "@/components/context/UserContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

function MyApp({ Component, pageProps }) {

  const pathname = usePathname();

  // Hide layout for admin routes
  const isAdminRoute = pathname?.startsWith('/admin');
  return (
    <CartProvider>
      <UserProvider>
        {!isAdminRoute && <Navbar />}
        <Component {...pageProps} />
       {!isAdminRoute && <Footer />}
      </UserProvider>
    </CartProvider>
  );
}

export default MyApp;
