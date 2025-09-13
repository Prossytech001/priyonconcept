// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react'; // or use your own icons

// export default function AdminLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`fixed z-30 inset-y-0 left-0 transform ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition duration-200 ease-in-out bg-white w-64 shadow-lg lg:translate-x-0 lg:static lg:inset-0`}
//       >
//         <div className="h-full p-4 space-y-4 border-r">
//           <h2 className="text-lg font-bold">Admin Panel</h2>
//           <nav className="flex flex-col space-y-2">
//             <Link href="/admin/dashboard" className="text-gray-700 hover:text-black">Dashboard</Link>
//             <Link href="/admin/products" className="text-gray-700 hover:text-black">Products</Link>
//             <Link href="/admin/orders" className="text-gray-700 hover:text-black">Orders</Link>
//             <Link href="/admin/upload" className="text-gray-700 hover:text-black">Upload</Link>
//             {/* Add more links as needed */}
//           </nav>
//         </div>
//       </div>

//       {/* Mobile header */}
//       <div className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white shadow-md flex items-center justify-between px-4 h-14">
//         <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//           {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//         <h1 className="font-bold text-lg">Admin</h1>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-y-auto mt-14 lg:mt-0 p-4">
//         {children}
//       </div>
//     </div>
//   );
// }
'use client';
import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  return (


    <div className="flex h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <aside className="hidden md:block w-64 fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 border-r z-40">
        <AdminSidebar />
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 md:ml-64 w-full">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-950">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
