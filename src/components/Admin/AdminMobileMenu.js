'use client';
import { Menu, Home, Box, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';

const links = [
  { label: 'Dashboard', icon: <Home size={18} />, href: '/admin/AdminDashboard' },
  { label: 'Products', icon: <Box size={18} />, href: '/admin/AdminProductDashboard' },
  { label: 'Upload Product', icon: <ClipboardList size={18} />, href: '/admin/AdminProductUpload' },
  { label: 'Orders', icon: <Box size={18} />, href: '/admin/AdminOrder' },
  { label: 'Banner', icon: <Box size={18} />, href: '/admin/banner' },
];

const AdminMobileMenu = () => {
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="p-2 rounded border">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-white dark:bg-gray-900">
          <nav className="mt-6 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700',
                  pathname === link.href && 'bg-gray-200 dark:bg-gray-700'
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminMobileMenu;
