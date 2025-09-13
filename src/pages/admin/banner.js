import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/Admin/AdminLayout';

const AdminBanner = () => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [bannerImages, setBannerImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleDelete = async (imageUrl) => {
  const confirm = window.confirm("Delete this banner image?");
  if (!confirm) return;

  try {
    setLoading(true);
    const res = await axios.delete(`${api}/api/admin/settings/banner`, {
      withCredentials: true,
      data: { imageUrl },
    });
    setBannerImages(res.data.bannerImages);
    setMessage("Banner deleted");
  } catch (err) {
    console.error(err);
    setMessage("Failed to delete");
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    axios.get(`${api}/api/admin/settings/banner`, { withCredentials: true })
      .then(res => setBannerImages(res.data.bannerImages || []))
      .catch(() => setBannerImages([]));
  }, []);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    if ((bannerImages.length + selected.length) > 4) {
      alert('You can only have a maximum of 4 banner images.');
      return;
    }
    setFiles(selected);
    setPreviews(selected.map(file => URL.createObjectURL(file)));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach(file => formData.append('bannerImages', file));

    try {
      setLoading(true);
      setMessage('');
      const res = await axios.post(`${api}/api/admin/settings/banner-upload`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setBannerImages(res.data.bannerImages);
      setFiles([]);
      setPreviews([]);
      setMessage('Banners uploaded successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Upload failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Homepage Banners</h1>

        <label className="block mb-2 font-medium">Upload New Banner Images (Max 4 total)</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="mb-4"
        />

        {previews.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {previews.map((src, i) => (
              <img key={i} src={src} alt={`Preview ${i}`} className="rounded shadow object-cover h-32 w-full" />
            ))}
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={loading || files.length === 0}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Uploading...' : 'Upload Banners'}
        </button>

        {message && (
          <p className="mt-4 text-sm text-green-600">{message}</p>
        )}

        {/* {bannerImages.length > 0 && (
          <div className="mt-10">
            <h2 className="font-semibold mb-2">Current Banners:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bannerImages.map((img, i) => (
                <img key={i} src={img} alt={`Banner ${i}`} className="rounded shadow object-cover h-32 w-full" />
              ))}
            </div>
          </div>
        )} */}
        {bannerImages.length > 0 && (
  <div className="mt-10">
    <h2 className="font-semibold mb-2">Current Banners:</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {bannerImages.map((img, i) => (
        <div key={i} className="relative group">
          <img
            src={img}
            alt={`Banner ${i}`}
            className="rounded shadow object-cover h-32 w-full"
          />
          <button
            onClick={() => handleDelete(img)}
            className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition"
            title="Delete"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </AdminLayout>
  );
};

export default AdminBanner;
