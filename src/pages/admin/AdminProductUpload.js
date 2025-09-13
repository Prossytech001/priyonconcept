// 'use client';
// import React, { useState } from 'react';
// import axios from 'axios';
// import AdminLayout from '@/components/Admin/AdminLayout'; // Adjust the import path as needed

// const AdminProductUpload = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     slug: '',
//     description: '',
//     category: '',
//     basePrice: '',
//     isNew: false,
//     featured: false,
//     inStock: true,
//     sizeVariants: [
//       { size: '', quantity: '', sku: '', price: '' },
//     ],
//   });

//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSizeChange = (index, e) => {
//     const updated = [...formData.sizeVariants];
//     updated[index][e.target.name] = e.target.value;
//     setFormData({ ...formData, sizeVariants: updated });
//   };

//   const addSizeVariant = () => {
//     setFormData({
//       ...formData,
//       sizeVariants: [...formData.sizeVariants, { size: '', quantity: '', sku: '', price: '' }],
//     });
//   };

//   const removeSizeVariant = (index) => {
//     const updated = [...formData.sizeVariants];
//     updated.splice(index, 1);
//     setFormData({ ...formData, sizeVariants: updated });
//   };

//   const handleImageChange = (e) => {
//     setImages([...e.target.files].slice(0, 4)); // limit to 4
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     const payload = new FormData();
//     for (const key in formData) {
//       if (key === 'sizeVariants') {
//         payload.append('sizeVariants', JSON.stringify(formData[key]));
//       } else {
//         payload.append(key, formData[key]);
//       }
//     }

//     images.forEach((file) => {
//       payload.append('images', file);
//     });

//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/admin/upload/products`,
//         payload,
//         {
//           withCredentials: true,
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );
//       setMessage('✅ Product uploaded successfully');
//       setFormData({
//         name: '',
//         slug: '',
//         description: '',
//         category: '',
//         basePrice: '',
//         isNew: false,
//         featured: false,
//         inStock: true,
//         sizeVariants: [{ size: '', quantity: '', sku: '', price: '' }],
//       });
//       setImages([]);
//     } catch (err) {
//       setMessage(`❌ Upload failed: ${err.response?.data?.message || err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AdminLayout>
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Upload New Product</h2>
//       {message && <p className="mb-3 text-sm">{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="input" required />
//         <input name="slug" placeholder="Slug (unique)" value={formData.slug} onChange={handleChange} className="input" required />
//         <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="input" />
//         <input name="basePrice" type="number" placeholder="Base Price" value={formData.basePrice} onChange={handleChange} className="input" />
//         <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="input" />

//         <div className="flex gap-4 mt-2 mb-4">
//           <label><input type="checkbox" name="isNew" checked={formData.isNew} onChange={handleChange} /> New</label>
//           <label><input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} /> Featured</label>
//           <label><input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} /> In Stock</label>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-2">Size Variants</h4>
//           {formData.sizeVariants.map((variant, index) => (
//             <div key={index} className="flex gap-2 mb-2">
//               <input type="number" name="size" placeholder="Size" value={variant.size} onChange={(e) => handleSizeChange(index, e)} className="input" />
//               <input type="number" name="quantity" placeholder="Qty" value={variant.quantity} onChange={(e) => handleSizeChange(index, e)} className="input" />
//               <input type="text" name="sku" placeholder="SKU" value={variant.sku} onChange={(e) => handleSizeChange(index, e)} className="input" />
//               <input type="number" name="price" placeholder="Price" value={variant.price} onChange={(e) => handleSizeChange(index, e)} className="input" />
//               {index > 0 && (
//                 <button type="button" onClick={() => removeSizeVariant(index)} className="text-red-600">Remove</button>
//               )}
//             </div>
//           ))}
//           <button type="button" onClick={addSizeVariant} className="text-blue-600 mb-4">+ Add another</button>
//         </div>

//         <div className="mb-4">
//           <input type="file" accept="image/*" multiple onChange={handleImageChange} />
//           <p className="text-sm text-gray-500">Max 4 images</p>
//         </div>

//         <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
//           {loading ? 'Uploading...' : 'Upload Product'}
//         </button>
//       </form>
//     </div>
//     </AdminLayout>
//   );
// };

// export default AdminProductUpload;
'use client';
import React, { useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/Admin/AdminLayout';

const AdminProductUpload = () => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    category: '',
    basePrice: '',
    isNew: false,
    featured: false,
    inStock: true,
    sizeVariants: [{ size: '', quantity: '', sku: '', price: '' }],
  });

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSizeChange = (index, e) => {
    const updated = [...formData.sizeVariants];
    updated[index][e.target.name] = e.target.value;
    setFormData({ ...formData, sizeVariants: updated });
  };

  const addSizeVariant = () => {
    setFormData((prev) => ({
      ...prev,
      sizeVariants: [...prev.sizeVariants, { size: '', quantity: '', sku: '', price: '' }],
    }));
  };

  const removeSizeVariant = (index) => {
    const updated = [...formData.sizeVariants];
    updated.splice(index, 1);
    setFormData({ ...formData, sizeVariants: updated });
  };

  const handleImageChange = (e) => {
    const selected = [...e.target.files].slice(0, 4);
    setImages(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const payload = new FormData();
    for (const key in formData) {
      if (key === 'sizeVariants') {
        payload.append('sizeVariants', JSON.stringify(formData[key]));
      } else {
        payload.append(key, formData[key]);
      }
    }

    images.forEach((img) => {
      payload.append('images', img);
    });

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/upload/products`,
        payload,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      setMessage('✅ Product uploaded successfully');
      setFormData({
        name: '',
        slug: '',
        description: '',
        category: '',
        basePrice: '',
        isNew: false,
        featured: false,
        inStock: true,
        sizeVariants: [{ size: '', quantity: '', sku: '', price: '' }],
      });
      setImages([]);
    } catch (err) {
      setMessage(`❌ Upload failed: ${err.response?.data?.message || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto p-4 md:p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Upload New Product</h2>
        {message && <p className="text-sm mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="input" />
            <input name="slug" value={formData.slug} onChange={handleChange} placeholder="Slug (unique)" required className="input" />
            <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="input" />
            <input type="number" name="basePrice" value={formData.basePrice} onChange={handleChange} placeholder="Base Price" className="input" />
          </div>

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="input w-full" />

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2"><input type="checkbox" name="isNew" checked={formData.isNew} onChange={handleChange} /> New</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} /> Featured</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} /> In Stock</label>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Size Variants</h4>
            {formData.sizeVariants.map((variant, index) => (
              <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                <input type="text" name="size" value={variant.size} onChange={(e) => handleSizeChange(index, e)} placeholder="Size" className="input" />
                <input type="number" name="quantity" value={variant.quantity} onChange={(e) => handleSizeChange(index, e)} placeholder="Qty" className="input" />
                <input type="text" name="sku" value={variant.sku} onChange={(e) => handleSizeChange(index, e)} placeholder="SKU" className="input" />
                <input type="number" name="price" value={variant.price} onChange={(e) => handleSizeChange(index, e)} placeholder="Price" className="input" />
                {index > 0 && (
                  <button type="button" onClick={() => removeSizeVariant(index)} className="text-red-500 text-sm">Remove</button>
                )}
              </div>
            ))}
            <button type="button" onClick={addSizeVariant} className="text-blue-600 text-sm">+ Add another</button>
          </div>

          <div>
            <input type="file" accept="image/*" multiple onChange={handleImageChange} className="w-full" />
            <p className="text-sm text-gray-500">You can upload up to 4 images</p>
          </div>

          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            {loading ? 'Uploading...' : 'Upload Product'}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminProductUpload;
