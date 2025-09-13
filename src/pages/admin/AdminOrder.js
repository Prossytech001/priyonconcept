// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { format } from 'date-fns';
// import AdminLayout from '@/components/Admin/AdminLayout';

// const AdminOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [filters, setFilters] = useState({ status: '', paymentStatus: '', month: '', search: '' });
//  const api = process.env.NEXT_PUBLIC_API_URL;
//   useEffect(() => {
//     fetchOrders();
//   }, [filters]);

//   const fetchOrders = async () => {
//     try {
//       const query = new URLSearchParams(filters).toString();
//       const res = await axios.get(`${api}/api/admin/orders?${query}`, { withCredentials: true });
//       setOrders(res.data);
//     } catch (err) {
//       console.error('Failed to fetch orders:', err);
//     }
//   };

//   const updateStatus = async (id, status) => {
//     try {
//       await axios.patch(`${api}/api/admin/orders/${id}/status`, { status }, { withCredentials: true });
//       fetchOrders();
//     } catch (err) {
//       alert('Failed to update order status');
//     }
//   };

//   const updatePayment = async (id, paymentStatus) => {
//     try {
//       await axios.patch(`${api}/api/admin/orders/${id}/payment`, { paymentStatus }, { withCredentials: true });
//       fetchOrders();
//     } catch (err) {
//       alert('Failed to update payment status');
//     }
//   };

//   return (
//     <AdminLayout>
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Admin Order Management</h1>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         <input className="border p-2" placeholder="Search by ID or email"
//           onChange={(e) => setFilters({ ...filters, search: e.target.value })} />
//         <select className="border p-2" onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
//           <option value="">All Status</option>
//           <option value="Unconfirmed">Unconfirmed</option>
//           <option value="Processing">Processing</option>
//           <option value="Delivered">Delivered</option>
//           <option value="Cancelled">Cancelled</option>
//         </select>
//         <select className="border p-2" onChange={(e) => setFilters({ ...filters, paymentStatus: e.target.value })}>
//           <option value="">All Payment</option>
//           <option value="Paid">Paid</option>
//           <option value="Pending">Pending</option>
//         </select>
//         <input type="month" className="border p-2" onChange={(e) => setFilters({ ...filters, month: e.target.value })} />
//       </div>

//       <div className="overflow-auto">
//         <table className="min-w-full text-sm border">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-2 border">Order ID</th>
//               <th className="p-2 border">User</th>
//               <th className="p-2 border">Amount</th>
//               <th className="p-2 border">Status</th>
//               <th className="p-2 border">Payment</th>
//               <th className="p-2 border">Date</th>
//               <th className="p-2 border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order._id} className="border hover:bg-gray-50">
//                 <td className="p-2 border text-blue-600 cursor-pointer" onClick={() => setSelectedOrder(order)}>{order._id.slice(-6)}</td>
//                 <td className="p-2 border">{order.user?.name || 'N/A'}<br />{order.user?.email}</td>
//                 <td className="p-2 border">₦{order.totalAmount.toLocaleString()}</td>
//                 <td className="p-2 border">
//                   <select
//                     value={order.status}
//                     onChange={(e) => updateStatus(order._id, e.target.value)}
//                     className="border p-1 rounded"
//                     disabled={order.status === 'Delivered'}
//                   >
//                     <option>Unconfirmed</option>
//                     <option>Processing</option>
//                     <option>Delivered</option>
//                     <option>Cancelled</option>
//                   </select>
//                 </td>
//                 <td className="p-2 border">
//                   <select
//                     value={order.paymentStatus}
//                     onChange={(e) => updatePayment(order._id, e.target.value)}
//                     className="border p-1 rounded"
//                   >
//                     <option>Pending</option>
//                     <option>Paid</option>
//                   </select>
//                 </td>
//                 <td className="p-2 border">{format(new Date(order.createdAt), 'yyyy-MM-dd')}</td>
//                 <td className="p-2 border text-blue-500 cursor-pointer" onClick={() => setSelectedOrder(order)}>View</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {selectedOrder && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-2xl w-full overflow-y-auto max-h-[90vh]">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Order Details</h2>
//               <button className="text-red-500" onClick={() => setSelectedOrder(null)}>✕</button>
//             </div>

//             <div className="mb-4">
//               <p><strong>User:</strong> {selectedOrder.user?.name} ({selectedOrder.user?.email})</p>
//               <p><strong>Shipping:</strong> {selectedOrder.shippingAddress?.name}, {selectedOrder.shippingAddress?.address}, {selectedOrder.shippingAddress?.city}, {selectedOrder.shippingAddress?.state}, {selectedOrder.shippingAddress?.postalCode}</p>
//               <p><strong>Phone:</strong> {selectedOrder.shippingAddress?.phone}</p>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-2">Items</h3>
//               <ul className="space-y-2">
//                 {selectedOrder.items.map((item, idx) => (
//                   <li key={idx} className="flex justify-between border-b pb-1">
//                     <span>{item.name}</span>
//                     <span>{item.quantity} x ₦{item.price.toLocaleString()}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-4">
//               <p><strong>Total:</strong> ₦{selectedOrder.totalAmount.toLocaleString()}</p>
//               <p><strong>Delivery Fee:</strong> ₦{selectedOrder.deliveryFee?.toLocaleString()}</p>
//               <p><strong>Reference:</strong> {selectedOrder.reference || 'N/A'}</p>
//               <p><strong>Status:</strong> {selectedOrder.status}</p>
//               <p><strong>Payment:</strong> {selectedOrder.paymentStatus}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </AdminLayout>
//   );
// };

// export default AdminOrdersPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import AdminLayout from '@/components/Admin/AdminLayout';

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filters, setFilters] = useState({ status: '', month: '', search: '' });
const api = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    fetchOrders();
  }, [filters]);

  const fetchOrders = async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const res = await axios.get(`${api}/api/admin/orders?${query}`, { withCredentials: true });
      setOrders(res.data);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`${api}/api/admin/orders/${id}/status`, { status }, { withCredentials: true });
      fetchOrders();
    } catch (err) {
      alert('Failed to update order status');
    }
  };

  return (
    <AdminLayout>
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Order Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          className="border p-2 w-full"
          placeholder="Search by ID or email"
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <select
          className="border p-2 w-full"
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">All Status</option>
          <option value="Unconfirmed">Unconfirmed</option>
          <option value="Processing">Processing</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="month"
          className="border p-2 w-full"
          onChange={(e) => setFilters({ ...filters, month: e.target.value })}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Order ID</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="border hover:bg-gray-50">
                <td
                  className="p-2 border text-blue-600 cursor-pointer"
                  onClick={() => setSelectedOrder(order)}
                >
                  {order._id.slice(-6)}
                </td>
                <td className="p-2 border">
                  {/* {order.user?.name || 'N/A'}
                  <br />
                  {order.user?.email} */}
                  <td className="p-2 border">
  {order.user?.name || 'N/A'}
  <br />
  {order.user?.email}
</td>

                </td>
                <td className="p-2 border">₦{order.totalAmount.toLocaleString()}</td>
                <td className="p-2 border">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className="border p-1 rounded"
                    disabled={order.status === 'Delivered'}
                  >
                    <option>Unconfirmed</option>
                    <option>Processing</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td className="p-2 border">{format(new Date(order.createdAt), 'yyyy-MM-dd')}</td>
                <td
                  className="p-2 border text-blue-500 cursor-pointer"
                  onClick={() => setSelectedOrder(order)}
                >
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Order Details</h2>
              <button className="text-red-500" onClick={() => setSelectedOrder(null)}>✕</button>
            </div>

            <div className="mb-4">
              {/* <p><strong>User:</strong> {selectedOrder.user?.name} ({selectedOrder.user?.email})</p> 
              */}
             <p>
  <strong>User:</strong>{" "}
  {selectedOrder.user
    ? `${selectedOrder.user.name} (${selectedOrder.user.email})`
    : "Guest Checkout"}
</p>


              <p><strong>Shipping:</strong> {selectedOrder.shippingAddress?.name}, {selectedOrder.shippingAddress?.address}, {selectedOrder.shippingAddress?.city}, {selectedOrder.shippingAddress?.state}, {selectedOrder.shippingAddress?.postalCode}</p>
              <p><strong>Phone:</strong> {selectedOrder.shippingAddress?.phone}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Items</h3>
              <ul className="space-y-2">
                {selectedOrder.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-1">
                    <span>{item.name}</span>
                    <span>{item.quantity} x ₦{item.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p><strong>Total:</strong> ₦{selectedOrder.totalAmount.toLocaleString()}</p>
              <p><strong>Delivery Fee:</strong> ₦{selectedOrder.deliveryFee?.toLocaleString()}</p>
              <p><strong>Reference:</strong> {selectedOrder.reference || 'N/A'}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </AdminLayout>
  );
};

export default AdminOrdersPage;
