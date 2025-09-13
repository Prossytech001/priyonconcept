// components/AuthForm.js
// import { useState } from "react";
// import { useRouter } from "next/router";

// const AuthForm = ({ type }) => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const isLogin = type === "login";

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const url = isLogin ? "/api/auth/login" : "/api/auth/register";
//     if (!form.email || !form.password || (!isLogin && !form.name)) {
//       alert("Please fill all fields");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//         credentials: "include",
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Something went wrong");

//       router.push("/"); // redirect to home after login/signup
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 shadow-lg border rounded-lg bg-white">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//         {isLogin ? "Login to Kokolet Luxury" : "Create Your Kokolet Account"}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {!isLogin && (
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             placeholder="Your Full Name"
//             className="w-full border px-4 py-2 rounded"
//           />
//         )}
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           placeholder="Email Address"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           placeholder="Password"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-black text-white py-2 rounded hover:opacity-90"
//         >
//           {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
//         </button>
//       </form>
//       <div className="text-center mt-4 text-sm">
//         {isLogin ? (
//           <>
//             Don’t have an account?{" "}
//             <a href="/auth/signup" className="text-green-600 underline">
//               Sign Up
//             </a>
//           </>
//         ) : (
//           <>
//             Already have an account?{" "}
//             <a href="/auth/login" className="text-green-600 underline">
//               Login
//             </a>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const AuthForm = ({ type }) => {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null); // ✅ To display the name after login
//   const router = useRouter();

//   const isLogin = type === "login";

//   useEffect(() => {
//     // ✅ Fetch logged-in user on page load
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
//           credentials: "include",
//         });
//         const data = await res.json();
//         if (res.ok) setUser(data.user);
//       } catch (err) {
//         console.log("User not logged in");
//       }
//     };
//     fetchUser();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const url = isLogin ? "/api/auth/login" : "/api/auth/register";
//     if (!form.email || !form.password || (!isLogin && !form.name)) {
//       alert("Please fill all fields");
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//         credentials: "include", // ✅ Very important for cookies
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Something went wrong");

//       console.log("Login successful", data); // ✅
//       setUser(data.user); // ✅
//       router.push("/");
//     } catch (err) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 shadow-lg border rounded-lg bg-white">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//         {isLogin ? "Login to Kokolet Luxury" : "Create Your Kokolet Account"}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {!isLogin && (
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             placeholder="Your Full Name"
//             className="w-full border px-4 py-2 rounded"
//           />
//         )}
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           placeholder="Email Address"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           placeholder="Password"
//           className="w-full border px-4 py-2 rounded"
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-black text-white py-2 rounded hover:opacity-90"
//         >
//           {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
//         </button>
//       </form>

//       <div className="text-center mt-4 text-sm">
//         {isLogin ? (
//           <>
//             Don’t have an account?{" "}
//             <Link href="/auth/signup" className="text-green-600 underline">
//               Sign Up
//             </Link>
//           </>
//         ) : (
//           <>
//             Already have an account?{" "}
//             <Link href="/auth/login" className="text-green-600 underline">
//               Login
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation"; // ✅ new
import Link from "next/link";

const AuthForm = ({ type }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams(); // ✅

  const isLogin = type === "login";
  const redirect = searchParams.get("redirect"); // ✅

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) setUser(data.user);
      } catch (err) {
        console.log("User not logged in");
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = isLogin ? "/api/auth/login" : "/api/auth/register";
    if (!form.email || !form.password || (!isLogin && !form.name)) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setUser(data.user);
      router.replace(redirect || "/"); // ✅ redirect if set, else to home
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 shadow-lg border rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {isLogin ? "Login to Kokolet Luxury" : "Create Your Kokolet Account"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Full Name"
            className="w-full border px-4 py-2 rounded"
          />
        )}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Password"
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <div className="text-center mt-4 text-sm">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <Link
              href={`/auth/signup${redirect ? `?redirect=${redirect}` : ""}`} // ✅ maintain redirect param
              className="text-green-600 underline"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              href={`/auth/login${redirect ? `?redirect=${redirect}` : ""}`} // ✅ maintain redirect param
              className="text-green-600 underline"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
