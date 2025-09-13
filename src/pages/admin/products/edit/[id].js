// /src/pages/admin/products/edit/[id].jsx
// 'use client';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const EditProduct = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) return;

//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, {
//           withCredentials: true,
//         });
//         setProduct(res.data);
//       } catch (err) {
//         console.error('Error fetching product:', err.response?.data || err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleUpdate = async () => {
//     // Implement your update logic here
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!product) return <p>Product not found.</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Edit Product</h1>
//       <form onSubmit={handleUpdate}>
//         <input
//           type="text"
//           value={product.name}
//           onChange={(e) => setProduct({ ...product, name: e.target.value })}
//           className="border px-3 py-2 w-full mb-4"
//         />
//         {/* Add more fields as needed */}

//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const EditProduct = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!router.isReady || !id) return;

//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, {
//           withCredentials: true,
//         });
//         setProduct(res.data);
//       } catch (err) {
//         console.error('Error fetching product:', err.response?.data || err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [router.isReady, id]);

//   if (loading) return <p>Loading...</p>;
//   if (!product) return <p>Product not found.</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Edit Product</h1>
//       <form>
//         <input
//           type="text"
//           value={product.name}
//           onChange={(e) => setProduct({ ...product, name: e.target.value })}
//           className="border px-3 py-2 w-full mb-4"
//         />
//         {/* Add other fields */}
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;
// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import axios from 'axios';

// const AdminEditProduct = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [newImage, setNewImage] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, {
//           withCredentials: true,
//         });
//         setProduct(res.data);
//       } catch (err) {
//         console.error('Error loading product:', err.response?.data || err.message);
//         router.push('/admin/products');
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   const handleInputChange = (field, value) => {
//     setProduct((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleVariantChange = (index, field, value) => {
//     const updated = [...product.sizeVariants];
//     updated[index][field] = field === 'size' || field === 'price' || field === 'quantity' ? Number(value) : value;
//     setProduct({ ...product, sizeVariants: updated });
//   };

//   const addVariant = () => {
//     setProduct({ ...product, sizeVariants: [...product.sizeVariants, { size: 0, quantity: 0, price: 0 }] });
//   };

//   const removeVariant = (index) => {
//     const updated = [...product.sizeVariants];
//     updated.splice(index, 1);
//     setProduct({ ...product, sizeVariants: updated });
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setUploading(true);
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
//       const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
//       setProduct({ ...product, images: [...product.images, res.data.secure_url] });
//     } catch (err) {
//       console.error('Image upload failed:', err.message);
//       alert('Failed to upload image');
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteImage = (index) => {
//     const updated = [...product.images];
//     updated.splice(index, 1);
//     setProduct({ ...product, images: updated });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, {
//         ...product,
//         sizeVariants: JSON.stringify(product.sizeVariants),
//       }, {
//         withCredentials: true,
//       });
//       alert('Product updated!');
//       router.push('/admin/products');
//     } catch (err) {
//       console.error('Update failed:', err.response?.data || err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (!product) return <p>Product not found.</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" placeholder="Name" className="w-full border p-2" value={product.name}
//           onChange={(e) => handleInputChange('name', e.target.value)} />
//         <input type="text" placeholder="Slug" className="w-full border p-2" value={product.slug}
//           onChange={(e) => handleInputChange('slug', e.target.value)} />
//         <textarea placeholder="Description" className="w-full border p-2" value={product.description}
//           onChange={(e) => handleInputChange('description', e.target.value)} />
//         <input type="text" placeholder="Category" className="w-full border p-2" value={product.category}
//           onChange={(e) => handleInputChange('category', e.target.value)} />
//         <input type="number" placeholder="Base Price" className="w-full border p-2" value={product.basePrice}
//           onChange={(e) => handleInputChange('basePrice', e.target.value)} />

//         {/* Size Variants */}
//         <div className="space-y-2">
//           <h3 className="font-semibold">Size Variants</h3>
//           {product.sizeVariants.map((v, i) => (
//             <div key={i} className="grid grid-cols-4 gap-2 items-center">
//               <input type="number" placeholder="Size" className="border p-1" value={v.size}
//                 onChange={(e) => handleVariantChange(i, 'size', e.target.value)} />
//               <input type="number" placeholder="Qty" className="border p-1" value={v.quantity}
//                 onChange={(e) => handleVariantChange(i, 'quantity', e.target.value)} />
//               <input type="number" placeholder="Price" className="border p-1" value={v.price}
//                 onChange={(e) => handleVariantChange(i, 'price', e.target.value)} />
//               <button type="button" onClick={() => removeVariant(i)} className="text-red-600">Remove</button>
//             </div>
//           ))}
//           <button type="button" onClick={addVariant} className="text-blue-600">+ Add Variant</button>
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block font-semibold mb-2">Images</label>
//           <div className="flex gap-2 flex-wrap">
//             {product.images.map((img, i) => (
//               <div key={i} className="relative">
//                 <img src={img} alt="product" className="w-20 h-20 object-cover rounded" />
//                 <button type="button" onClick={() => handleDeleteImage(i)} className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">x</button>
//               </div>
//             ))}
//             {product.images.length < 4 && (
//               <input type="file" onChange={handleImageUpload} disabled={uploading} className="mt-2" />
//             )}
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <label>
//             <input type="checkbox" checked={product.inStock}
//               onChange={(e) => handleInputChange('inStock', e.target.checked)} />
//             <span className="ml-2">In Stock</span>
//           </label>
//           <label>
//             <input type="checkbox" checked={product.featured}
//               onChange={(e) => handleInputChange('featured', e.target.checked)} />
//             <span className="ml-2">Featured</span>
//           </label>
//           <label>
//             <input type="checkbox" checked={product.isNew}
//               onChange={(e) => handleInputChange('isNew', e.target.checked)} />
//             <span className="ml-2">New</span>
//           </label>
//         </div>

//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update Product</button>
//       </form>
//     </div>
//   );
// };

// export default AdminEditProduct;
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AdminEditProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    category: '',
    basePrice: '',
    isNew: false,
    featured: false,
    inStock: true,
    sizeVariants: [],
  });
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch product
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, {
          withCredentials: true,
        });
        setProduct(res.data);
        setFormData({ ...res.data });
        setImages(res.data.images || []);
      } catch (err) {
        console.error('Error fetching product:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = async () => {
    const uploadedUrls = [];
    for (const file of newImages) {
      const form = new FormData();
      form.append('file', file);
      form.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
      form.append('folder', 'samples/ecommerce');

      const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, form);
      uploadedUrls.push(res.data.secure_url);
    }
    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const uploaded = await handleImageUpload();
      const updatedImages = [...images, ...uploaded];

      const payload = {
        ...formData,
        images: updatedImages,
        sizeVariants: JSON.stringify(formData.sizeVariants),
      };

      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/products/${id}`, payload, {
        withCredentials: true,
      });

      alert('Product updated successfully!');
      router.push('/admin/products');
    } catch (err) {
      console.error('Update failed:', err.response?.data || err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-4">Loading product...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-blue-500 p-2 rounded-lg"
          required
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
          className="w-full border border-blue-500 p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-blue-500 p-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-blue-500 p-2 rounded"
        />
        <input
          type="number"
          name="basePrice"
          placeholder="Base Price"
          value={formData.basePrice}
          onChange={handleChange}
          className="w-full border  border-blue-500 p-2 rounded"
          required
        />

        <div className="flex items-center gap-4">
          <label>
            <input type="checkbox" name="isNew" checked={formData.isNew} onChange={handleChange} />
            <span className="ml-2">Is New</span>
          </label>
          <label>
            <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} />
            <span className="ml-2">Featured</span>
          </label>
          <label>
            <input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} />
            <span className="ml-2">In Stock</span>
          </label>
        </div>

        <div>
          <label className="block mb-1">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setNewImages([...e.target.files])}
            className="block border  border-blue-500 p-2 rounded"
          />
          <div className="flex flex-wrap mt-2 gap-2">
            {images.map((url, i) => (
              <img key={i} src={url} alt="product" className="w-16 h-16 object-cover rounded" />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Update Product'}
        </button>
      </form>
    
    <div>
  <h2 className="text-lg font-medium mb-2">Size Variants</h2>
  {formData.sizeVariants.map((variant, index) => (
    <div key={index} className="flex gap-2 mb-2">
      <input
        type="number"
        placeholder="Size"
        value={variant.size}
        onChange={(e) => {
          const updated = [...formData.sizeVariants];
          updated[index].size = Number(e.target.value);
          setFormData({ ...formData, sizeVariants: updated });
        }}
        className="border border-blue-500 p-2 w-1/4 rounded"
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={variant.quantity}
        onChange={(e) => {
          const updated = [...formData.sizeVariants];
          updated[index].quantity = Number(e.target.value);
          setFormData({ ...formData, sizeVariants: updated });
        }}
        className="border border-blue-500 p-2 w-1/4 rounded"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={variant.price}
        onChange={(e) => {
          const updated = [...formData.sizeVariants];
          updated[index].price = Number(e.target.value);
          setFormData({ ...formData, sizeVariants: updated });
        }}
        className="border border-blue-500 p-2 w-1/4 rounded"
      />
      <button
        type="button"
        onClick={() => {
          const updated = formData.sizeVariants.filter((_, i) => i !== index);
          setFormData({ ...formData, sizeVariants: updated });
        }}
        className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
      >
        ✕
      </button>
    </div>
  ))}

  <button
    type="button"
    onClick={() =>
      setFormData({
        ...formData,
        sizeVariants: [...formData.sizeVariants, { size: '', quantity: 0, price: 0 }],
      })
    }
    className="bg-green-500 text-white px-3 py-1 rounded mt-2"
  >
    + Add Size
  </button>
</div>
</div>

  );
};

export default AdminEditProduct;
