'use client';
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../components/context/UserContext';

const YourOrders = () => {
  const { user, checking } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!checking && user) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/me`, {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          setOrders(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user, checking]);

  if (checking || loading) return <p>Loading your orders...</p>;
  if (!user) return <p>Please log in to see your orders.</p>;
  if (orders.length === 0) return <p>You have no orders yet.</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
      <ul className="space-y-4">
        {orders.map(order => (
          <li key={order._id} className="border p-4 rounded shadow">
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Status:</strong> {order.paymentStatus}</p>
            <p><strong>Total:</strong> ₦{order.totalAmount.toLocaleString()}</p>
            <p><strong>Delivery State:</strong> {order.deliveryState}</p>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
            <div className="mt-2">
              <p className="font-medium">Items:</p>
              <ul className="list-disc list-inside">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} x{item.quantity} – ₦{item.price.toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourOrders;
