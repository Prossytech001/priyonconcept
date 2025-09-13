// context/UserContext.js
// 'use client';
// import { createContext, useEffect, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
//           credentials: 'include',
//         });
//         if (res.ok) {
//           const data = await res.json();
//           setUser(data);
//         } else {
//           setUser(null);
//         }
//       } catch (err) {
//         setUser(null);
//       } finally {
//         setChecking(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, checking, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
// 'use client';
// import { createContext, useEffect, useState } from 'react';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
//           credentials: 'include',
//         });
//         if (res.ok) {
//           const data = await res.json();
//           setUser(data);
//         } else {
//           setUser(null);
//         }
//       } catch {
//         setUser(null);
//       } finally {
//         setChecking(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, checking, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
'use client';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      setChecking(true); // reset when route changes
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
          credentials: 'include',
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setChecking(false);
      }
    };

    fetchUser();
  }, [router.pathname]); // 👈 re-run when route changes (like after login)

  return (
    <UserContext.Provider value={{ user, checking, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
