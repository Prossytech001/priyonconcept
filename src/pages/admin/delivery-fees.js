import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "@/components/Admin/AdminLayout";

const AdminDeliveryFees = () => {
  const [fees, setFees] = useState([]);
  const [country, setCountry] = useState("");
  const [stateName, setStateName] = useState("");
  const [fee, setFee] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const res = await axios.get(`${api}/api/admin/delivery-fees`);
      setFees(res.data);
    } catch (err) {
      console.error("Error fetching delivery fees:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!country || !stateName || !fee) return;

    try {
      setLoading(true);
      await axios.post(
        `${api}/api/admin/delivery-fees`,
        {
          country,
          state: stateName,
          fee: parseInt(fee),
        },
        { withCredentials: true }
      );
      resetForm();
      fetchFees();
    } catch (err) {
      console.error("Error saving fee:", err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setCountry("");
    setStateName("");
    setFee("");
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/api/admin/delivery-fees/${id}`, {
        withCredentials: true,
      });
      fetchFees();
    } catch (err) {
      console.error("Error deleting fee:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Manage Delivery Fees</h1>

        <form onSubmit={handleSubmit} className="mb-6 space-y-3">
          <div className="flex gap-3">
            <input
              type="text"
              className="border p-2 flex-1"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <input
              type="text"
              className="border p-2 flex-1"
              placeholder="State"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              required
            />
            <input
              type="number"
              className="border p-2 w-28"
              placeholder="Fee"
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {editingId ? "Update" : "Save"}
          </button>
        </form>

        <div className="space-y-2">
          {fees.length === 0 ? (
            <p>No delivery fees added yet.</p>
          ) : (
            fees.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <div>
                  <p className="font-semibold">
                    {item.country} — {item.state}
                  </p>
                  <p>₦{item.fee}</p>
                </div>
                <div className="space-x-2">
                  <button
                    className="text-sm px-3 py-1 border rounded"
                    onClick={() => {
                      setCountry(item.country);
                      setStateName(item.state);
                      setFee(item.fee);
                      setEditingId(item._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-sm px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDeliveryFees;
