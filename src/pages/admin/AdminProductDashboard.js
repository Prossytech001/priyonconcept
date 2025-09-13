// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminLayout from '@/components/Admin/AdminLayout';

// const AdminProductDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState('');
//   const [stockFilter, setStockFilter] = useState('');
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products`, {
//        withCredentials: true,
//       });
//       setProducts(res.data);
//     } catch (err) {
//       console.error('Error fetching products:', err.response?.data || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     if (!confirm('Are you sure you want to delete this product?')) return;
//     try {
//       await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, {
//        withCredentials: true,
//       });
//       setProducts(products.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err.response?.data || err.message);
//     }
//   };

//   const filteredProducts = products.filter((p) => {
//     return (
//       (categoryFilter ? p.category === categoryFilter : true) &&
//       (stockFilter === 'in' ? p.inStock :
//        stockFilter === 'out' ? !p.inStock : true)
//     );
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <AdminLayout>
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* Main Content */}
//       <main className="flex-1 p-4 bg-gray-100">
//         <div className="mb-4 flex flex-col md:flex-row justify-between gap-3">
//           <h1 className="text-2xl font-semibold">All Products</h1>
//           <div className="flex gap-2">
//             <select
//               value={categoryFilter}
//               onChange={(e) => setCategoryFilter(e.target.value)}
//               className="border px-3 py-1 rounded"
//             >
//               <option value="">All Categories</option>
//               {[...new Set(products.map(p => p.category))].map((cat) => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//             <select
//               value={stockFilter}
//               onChange={(e) => setStockFilter(e.target.value)}
//               className="border px-3 py-1 rounded"
//             >
//               <option value="">All Stock</option>
//               <option value="in">In Stock</option>
//               <option value="out">Out of Stock</option>
//             </select>
//           </div>
//         </div>

//         {loading ? (
//           <p>Loading...</p>
//         ) : filteredProducts.length === 0 ? (
//           <p>No products found.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white rounded shadow-md">
//               <thead className="bg-gray-200 text-left">
//                 <tr>
//                   <th className="p-3">Image</th>
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Category</th>
//                   <th className="p-3">Price</th>
//                   <th className="p-3">Stock</th>
//                   <th className="p-3">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map((product) => (
//                   <tr key={product._id} className="border-t">
//                     <td className="p-3">
//                       {product.images?.[0] ? (
//                         <img src={product.images[0]} alt="product" className="w-16 h-16 object-cover rounded" />
//                       ) : (
//                         <span className="text-gray-500">No image</span>
//                       )}
//                     </td>
//                     <td className="p-3">{product.name}</td>
//                     <td className="p-3">{product.category}</td>
//                     <td className="p-3">${product.basePrice}</td>
//                     <td className="p-3">
//                       {product.inStock ? (
//                         <span className="text-green-600 font-semibold">In</span>
//                       ) : (
//                         <span className="text-red-600 font-semibold">Out</span>
//                       )}
//                     </td>
//                     <td className="p-3 space-x-2">
//                       <button
//                         onClick={() => deleteProduct(product._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                       <a
//                         href={`/admin/products/edit/${product._id}`}
//                         className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                       >
//                         Edit
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </main>
//     </div>
//     </AdminLayout>
//   );
// };

// export default AdminProductDashboard;
// 'use client';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminLayout from '@/components/Admin/AdminLayout';

// const AdminProductDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState('');
//   const [stockFilter, setStockFilter] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products`, {
//         params: {
//           category: categoryFilter || undefined,
//           inStock: stockFilter === 'in' ? true : stockFilter === 'out' ? false : undefined,
//           page,
//           limit: 10,
//         },
//         withCredentials: true,
//       });
//       setProducts(res.data.products);
//       setTotalPages(res.data.pages);
//     } catch (err) {
//       console.error('Error fetching products:', err.response?.data || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     if (!confirm('Are you sure you want to delete this product?')) return;
//     try {
//       await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, {
//         withCredentials: true,
//       });
//       fetchProducts(); // refetch after deletion
//     } catch (err) {
//       console.error('Delete error:', err.response?.data || err.message);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [page, categoryFilter, stockFilter]);

//   return (
//     <AdminLayout>
//       <div className="flex flex-col md:flex-row h-screen">
//         <main className="flex-1 p-4 bg-gray-100">
//           <div className="mb-4 flex flex-col md:flex-row justify-between gap-3">
//             <h1 className="text-2xl font-semibold">All Products</h1>
//             <div className="flex gap-2">
//               <select
//                 value={categoryFilter}
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 className="border px-3 py-1 rounded"
//               >
//                 <option value="">All Categories</option>
//                 {[...new Set(products.map(p => p.category))].map((cat) => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//               <select
//                 value={stockFilter}
//                 onChange={(e) => setStockFilter(e.target.value)}
//                 className="border px-3 py-1 rounded"
//               >
//                 <option value="">All Stock</option>
//                 <option value="in">In Stock</option>
//                 <option value="out">Out of Stock</option>
//               </select>
//             </div>
//           </div>

//           {loading ? (
//             <p>Loading...</p>
//           ) : products.length === 0 ? (
//             <p>No products found.</p>
//           ) : (
//             <>
//               <div className="overflow-x-auto">
//                 <table className="w-full bg-white rounded shadow-md">
//                   <thead className="bg-gray-200 text-left">
//                     <tr>
//                       <th className="p-3">Image</th>
//                       <th className="p-3">Name</th>
//                       <th className="p-3">Category</th>
//                       <th className="p-3">Price</th>
//                       <th className="p-3">Stock</th>
//                       <th className="p-3">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {products.map((product) => (
//                       <tr key={product._id} className="border-t">
//                         <td className="p-3">
//                           {product.images?.[0] ? (
//                             <img src={product.images[0]} alt="product" className="w-16 h-16 object-cover rounded" />
//                           ) : (
//                             <span className="text-gray-500">No image</span>
//                           )}
//                         </td>
//                         <td className="p-3">{product.name}</td>
//                         <td className="p-3">{product.category}</td>
//                         <td className="p-3">${product.basePrice}</td>
//                         <td className="p-3">
//                           {product.inStock ? (
//                             <span className="text-green-600 font-semibold">In</span>
//                           ) : (
//                             <span className="text-red-600 font-semibold">Out</span>
//                           )}
//                         </td>
//                         <td className="p-3 space-x-2">
//                           <button
//                             onClick={() => deleteProduct(product._id)}
//                             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                           >
//                             Delete
//                           </button>
//                           <a
//                             href={`/admin/products/edit/${product._id}`}
//                             className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                           >
//                             Edit
//                           </a>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Pagination Controls */}
//               <div className="flex justify-between items-center mt-4">
//                 <button
//                   onClick={() => setPage((p) => Math.max(p - 1, 1))}
//                   disabled={page === 1}
//                   className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//                 >
//                   Prev
//                 </button>
//                 <span>Page {page} of {totalPages}</span>
//                 <button
//                   onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//                   disabled={page === totalPages}
//                   className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}
//         </main>
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminProductDashboard;
'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/Admin/AdminLayout';
import Link from 'next/link';

const AdminProductDashboard = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products`, {
        params: {
          category: categoryFilter || undefined,
          inStock: stockFilter === 'in' ? true : stockFilter === 'out' ? false : undefined,
          search: searchTerm || undefined,
          page,
          limit: 10,
        },
        withCredentials: true,
      });
      setProducts(res.data.products);
      setTotalPages(res.data.pages);
      setTotalCount(res.data.total);
    } catch (err) {
      console.error('Error fetching products:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, {
        withCredentials: true,
      });
      fetchProducts(); // refresh
    } catch (err) {
      console.error('Delete error:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, categoryFilter, stockFilter, searchTerm]);

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row h-screen">
        <main className="flex-1 p-4 bg-gray-100">
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-semibold">All Products</h1>
            <p className="text-sm text-gray-600">Total: {totalCount} items</p>
          </div>

          <div className="mb-4 flex flex-col sm:flex-row gap-3 flex-wrap">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-blue-500 px-3 py-2 rounded w-full sm:w-auto"
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-blue-500 px-3 py-2 rounded w-full sm:w-auto"
            >
              <option value="">All Categories</option>
              {[...new Set(products.map(p => p.category))].map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="border border-blue-500 px-3 py-2 rounded w-full sm:w-auto"
            >
              <option value="">All Stock</option>
              <option value="in">In Stock</option>
              <option value="out">Out of Stock</option>
            </select>

            <Link href='/admin/AdminProductUpload' className="bg-blue-600 text-white px-4 py-2 rounded">Add product</Link>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded shadow-sm">
                  <thead className="bg-gray-200 text-left text-sm">
                    <tr>
                      <th className="p-3">Image</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Price</th>
                      <th className="p-3">Stock</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id} className="border-t text-sm">
                        <td className="p-3">
                          {product.images?.[0] ? (
                            <img
                              src={product.images[0]}
                              alt="product"
                              className="w-16 h-16 object-cover rounded"
                            />
                          ) : (
                            <span className="text-gray-500">No image</span>
                          )}
                        </td>
                        <td className="p-3">{product.name}</td>
                        <td className="p-3">{product.category}</td>
                        <td className="p-3">${product.basePrice}</td>
                        <td className="p-3">
                          {product.inStock ? (
                            <span className="text-green-600 font-semibold">In</span>
                          ) : (
                            <span className="text-red-600 font-semibold">Out</span>
                          )}
                        </td>
                        <td className="p-3 space-x-2">
                          <button
                            onClick={() => deleteProduct(product._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                          <a
                            href={`/admin/products/edit/${product._id}`}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-4 text-sm">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <span>
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </AdminLayout>
  );
};

export default AdminProductDashboard;
