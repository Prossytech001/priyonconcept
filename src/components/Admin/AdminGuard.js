// components/Admin/AdminGuard.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AdminGuard({ children }) {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(null); // null = loading

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
          withCredentials: true,
        });

        if (res.data?.isAdmin) {
          setIsAllowed(true);
        } else {
          router.replace('/unauthorized');
        }
      } catch (err) {
        router.replace('/admin/AdminLogin');
      }
    };

    checkAdmin();
  }, []);

  if (isAllowed === null) return <div>Loading...</div>;
  return children;
}
