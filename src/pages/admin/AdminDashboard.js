import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/Admin/AdminLayout';
import { format } from 'date-fns';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f7f'];

const AdminDashboard = () => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [stats, setStats] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [statusChartData, setStatusChartData] = useState([]);

  const [topProducts, setTopProducts] = useState([]);

useEffect(() => {
  fetchDashboard();
  fetchTopProducts();
}, []);

const fetchTopProducts = async () => {
  try {
    const res = await axios.get(`${api}/api/admin/orders/most-ordered`, { withCredentials: true });
    setTopProducts(res.data);
  } catch (err) {
    console.error('Error loading top products:', err);
  }
};


  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(`${api}/api/admin/orders/stats`, { withCredentials: true });
      setStats(res.data);

      setStatusChartData([
        { name: 'Unconfirmed', value: res.data.statusCounts.Unconfirmed || 0 },
        { name: 'Processing', value: res.data.statusCounts.Processing || 0 },
        { name: 'Delivered', value: res.data.statusCounts.Delivered || 0 },
        { name: 'Cancelled', value: res.data.statusCounts.Cancelled || 0 },
      ]);

      const recent = await axios.get(`${api}/api/admin/orders/recent`, { withCredentials: true });
      setRecentOrders(recent.data);
    } catch (err) {
      console.error('Error loading dashboard:', err);
    }
  };

  return (
    <AdminLayout>
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-xl font-bold">{stats?.totalOrders || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h2 className="text-lg font-semibold">Orders Today</h2>
            <p className="text-xl font-bold">{stats?.ordersToday || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h2 className="text-lg font-semibold">Orders This Month</h2>
            <p className="text-xl font-bold">{stats?.ordersThisMonth || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <p className="text-xl font-bold">₦{stats?.totalRevenue?.toLocaleString() || 0}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Order Status Breakdown</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {statusChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Ordered Products */}
<div className="bg-white rounded-lg shadow p-4 mt-8">
  <h3 className="text-lg font-semibold mb-4">Most Ordered Products</h3>
  <div className="overflow-x-auto">
    <table className="min-w-full text-sm border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Image</th>
          <th className="p-2 border">Product</th>
          <th className="p-2 border">Times Ordered</th>
        </tr>
      </thead>
      <tbody>
        {topProducts.map((item, i) => (
          <tr key={i} className="border">
            <td className="p-2 border">
              <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded" />
            </td>
            <td className="p-2 border">{item.title}</td>
            <td className="p-2 border text-center">{item.totalOrdered}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Order ID</th>
                  <th className="p-2 border">Customer</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order._id} className="border">
                    <td className="p-2 border">{order._id.slice(-6)}</td>
                    <td className="p-2 border">{order.user?.name || 'Guest'}</td>
                    <td className="p-2 border">₦{order.totalAmount.toLocaleString()}</td>
                    <td className="p-2 border">{order.status}</td>
                    <td className="p-2 border">{format(new Date(order.createdAt), 'yyyy-MM-dd')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
