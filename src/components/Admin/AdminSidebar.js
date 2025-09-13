// 'use client'

// import React from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Menu, Home, ClipboardList, Box, Layers, Book, Users, Images } from "lucide-react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// const DashboardMobileHeader = () => {
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
//     <div className="lg:hidden">
//       <Sheet>
//         <SheetTrigger className="p-2">
//           <Menu />
//         </SheetTrigger>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Mobile Menu</SheetTitle>
//             <SheetDescription>
//               <ul className="flex flex-col gap-2 pt-4">
//                 {dashboardLinks.map(({ link, label, icon }) => {
//                   const isActive = pathname === link || pathname.startsWith(link + "/");
//                   return (
//                     <li key={label}>
//                       <Link
//                         href={link}
//                         className={cn(
//                           "flex items-center gap-2 p-2 w-full rounded-md transition-colors",
//                           "hover:bg-gray-200 dark:hover:bg-gray-800",
//                           isActive && "bg-slate-300 dark:bg-slate-700 font-medium"
//                         )}
//                       >
//                         {icon}
//                         <span>{label}</span>
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

// export default DashboardMobileHeader;
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Box, ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { label: 'Dashboard', icon: <Home size={18} />, href: '/admin/AdminDashboard' },
  { label: 'Products', icon: <Box size={18} />, href: '/admin/AdminProductDashboard' },
  { label: 'Upload Product', icon: <ClipboardList size={18} />, href: '/admin/AdminProductUpload' },
  { label: 'Orders', icon: <Box size={18} />, href: '/admin/AdminOrder' },
  { label: 'Banner', icon: <Box size={18} />, href: '/admin/banner' },
  { label: 'Delivery', icon: <Box size={18} />, href: '/admin/delivery-fees' },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 space-y-3 h-screen bg-blue-500">
      <h2 className="text-xl font-semibold text-white">ADMIN PANEL</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded-md text-lg text-white',
              pathname === link.href
                ? 'bg-gray-200 dark:bg-gray-700 font-semibold text-black'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black'
            )}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
