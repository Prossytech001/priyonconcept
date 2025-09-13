// 'use client';
// import React from "react";
// import Logo from "@/components/logo/Logo";
// import { ThemeToggle } from "@/components/theme/ThemeToggle";
// import { Button } from "@/components/ui/button";
// import { Bell, LogOut } from "lucide-react";
// import Notification from "../notificaton/Notification";
// import DashboardMobileHeader from "./DashboardMobileHeader";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// const DashboardHeader = () => {
//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/logout`, {}, {
//         withCredentials: true,
//       });
//       router.push("/admin/login");
//     } catch (error) {
//       console.error("Logout failed:", error.response?.data || error.message);
//     }
//   };

//   return (
//     <header className="bg-white dark:bg-gray-900 shadow sticky top-0 left-0 right-0 z-50">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//         <Logo />
//         <div className="flex items-center gap-4">
//           <ThemeToggle />
//           <Notification />
//           <Button
//             size="sm"
//             variant="destructive"
//             onClick={handleLogout}
//             className="flex items-center gap-2"
//           >
//             <LogOut size={16} /> Exit
//           </Button>
//           <DashboardMobileHeader />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default DashboardHeader;
// 'use client';

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import {
//   Home,
//   ClipboardList,
//   Box,
//   Layers,
//   Book,
//   Users,
//   Images,
// } from "lucide-react";

// const DashboardSidebar = () => {
//   const pathname = usePathname();

//   const dashboardLinks = [
//     {
//       link: "/dashboard",
//       label: "Home",
//       icon: <Home size={20} />,
//     },
//     {
//       link: "/dashboard/orders",
//       label: "Orders",
//       icon: <ClipboardList size={20} />,
//     },
//     {
//       link: "/dashboard/products",
//       label: "Products",
//       icon: <Box size={20} />,
//     },
//     {
//       link: "/dashboard/categories",
//       label: "Categories",
//       icon: <Layers size={20} />,
//     },
//     {
//       link: "/dashboard/banners",
//       label: "Banners",
//       icon: <Images size={20} />,
//     },
//     {
//       link: "/dashboard/blogs",
//       label: "Blogs",
//       icon: <Book size={20} />,
//     },
//     {
//       link: "/dashboard/customers",
//       label: "Customers",
//       icon: <Users size={20} />,
//     },
//   ];

//   return (
//     <aside className="w-64 h-full p-4 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 space-y-2">
//       <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
//       <ul className="space-y-1">
//         {dashboardLinks.map(({ link, label, icon }) => {
//           const isActive = pathname === link || pathname.startsWith(link + "/");
//           return (
//             <li key={label}>
//               <Link
//                 href={link}
//                 className={cn(
//                   "flex items-center gap-2 p-2 rounded-md text-gray-800 dark:text-gray-100",
//                   "hover:bg-gray-200 dark:hover:bg-gray-800",
//                   isActive && "bg-gray-200 dark:bg-gray-800 font-semibold"
//                 )}
//               >
//                 {icon}
//                 <span>{label}</span>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// };

// export default DashboardSidebar;
'use client';
import React from 'react';
import AdminMobileMenu from './AdminMobileMenu';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AdminHeader = () => {

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/logout`, {}, {
        withCredentials: true,
      });
      router.push('/admin/AdminLogin'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Failed to logout. Please try again.');
    }
  };
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm border-b">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-3">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm flex items-center gap-1">
            <LogOut size={16} />
            Logout
          </button>
          <AdminMobileMenu />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
