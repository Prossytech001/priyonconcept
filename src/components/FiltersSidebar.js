// import React from 'react';

// const FiltersSidebar = ({ filters, setFilters }) => {
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFilters((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? (checked ? 'true' : '') : value,
//       page: 1, // Reset pagination on filter change
//     }));
//   };

//   return (
//     <aside className="w-full md:w-64 p-4 border-r bg-white">
//       <h2 className="text-xl font-semibold mb-4">Filters</h2>

//       {/* Search */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Search</label>
//         <input
//           type="text"
//           name="search"
//           value={filters.search}
//           onChange={handleChange}
//           placeholder="e.g. lace gown"
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       {/* Price Range */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Price Range</label>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             name="minPrice"
//             value={filters.minPrice}
//             onChange={handleChange}
//             placeholder="Min"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="maxPrice"
//             value={filters.maxPrice}
//             onChange={handleChange}
//             placeholder="Max"
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>

//       {/* Size */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Size</label>
//         <select
//           name="size"
//           value={filters.size}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">All Sizes</option>
//           <option value="S">S</option>
//           <option value="M">M</option>
//           <option value="L">L</option>
//           <option value="XL">XL</option>
//         </select>
//       </div>

//       {/* Category */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Category</label>
//         <input
//           type="text"
//           name="category"
//           value={filters.category}
//           onChange={handleChange}
//           placeholder="e.g. Dresses"
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       {/* In Stock */}
//       <div className="mb-2">
//         <label className="inline-flex items-center text-sm">
//           <input
//             type="checkbox"
//             name="inStock"
//             checked={filters.inStock === 'true'}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           In Stock Only
//         </label>
//       </div>

//       {/* Featured */}
//       <div className="mb-6">
//         <label className="inline-flex items-center text-sm">
//           <input
//             type="checkbox"
//             name="featured"
//             checked={filters.featured === 'true'}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Featured Only
//         </label>
//       </div>
//     </aside>
//   );
// };

// export default FiltersSidebar;
// import React, { useState } from 'react';

// const FiltersSidebar = ({ filters, setFilters, applyFilters }) => {
//   const [localFilters, setLocalFilters] = useState(filters);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setLocalFilters((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? (checked ? 'true' : '') : value,
//     }));
//   };

//   const handleSearch = () => {
//     setFilters((prev) => ({
//       ...prev,
//       search: localFilters.search,
//       page: 1,
//     }));
//   };

//   const handleApplyFilters = () => {
//     setFilters((prev) => ({
//       ...prev,
//       ...localFilters,
//       page: 1,
//     }));
//   };

//   return (
//     <aside className="w-full md:w-64 p-4 border-r bg-white rounded-xl shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Filters</h2>

//       {/* Search */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Search</label>
//         <div className="flex gap-2">
//           <input
//             type="text"
//             name="search"
//             value={localFilters.search}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Search products"
//           />
//           <button
//             onClick={handleSearch}
//             className="px-3 py-2 bg-black text-white rounded"
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Price Range */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Price Range</label>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             name="minPrice"
//             value={localFilters.minPrice}
//             onChange={handleChange}
//             placeholder="Min"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="maxPrice"
//             value={localFilters.maxPrice}
//             onChange={handleChange}
//             placeholder="Max"
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>

//       {/* Size */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Size</label>
//         <select
//           name="size"
//           value={localFilters.size}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">All Sizes</option>
//           <option value="S">S</option>
//           <option value="M">M</option>
//           <option value="L">L</option>
//           <option value="XL">XL</option>
//           <option value="44">44</option>
//           <option value="45.5">45.5</option>
//           <option value="46">46</option>
//         </select>
//       </div>

//       {/* Category */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Category</label>
//         <input
//           type="text"
//           name="category"
//           value={localFilters.category}
//           onChange={handleChange}
//           placeholder="e.g. Jordan"
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       {/* In Stock */}
//       <div className="mb-2">
//         <label className="inline-flex items-center text-sm">
//           <input
//             type="checkbox"
//             name="inStock"
//             checked={localFilters.inStock === 'true'}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           In Stock Only
//         </label>
//       </div>

//       {/* Featured */}
//       <div className="mb-4">
//         <label className="inline-flex items-center text-sm">
//           <input
//             type="checkbox"
//             name="featured"
//             checked={localFilters.featured === 'true'}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Featured Only
//         </label>
//       </div>

//       <button
//         onClick={handleApplyFilters}
//         className="w-full bg-black text-white py-2 rounded"
//       >
//         Apply Filters
//       </button>
//     </aside>
//   );
// };

// export default FiltersSidebar;
// import React, { useState } from 'react';

// const FiltersSidebar = ({ filters, setFilters, applyFilters }) => {
//   const [localFilters, setLocalFilters] = useState(filters || {});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setLocalFilters((prev) => ({
//       ...prev,
//       [name]:
//         type === 'checkbox'
//           ? checked
//             ? 'true'
//             : ''
//           : type === 'number'
//           ? Number(value)
//           : value.trim(),
//     }));
//   };

//   const handleSearch = () => {
//     setFilters((prev) => ({
//       ...prev,
//       search: localFilters.search,
//       page: 1,
//     }));
//   };

//   const handleApplyFilters = () => {
//     setFilters((prev) => ({
//       ...prev,
//       ...localFilters,
//       page: 1,
//     }));
//     if (applyFilters) applyFilters();
//   };

//   const handleReset = () => {
//     const empty = {
//       search: '',
//       minPrice: '',
//       maxPrice: '',
//       size: '',
//       category: '',
//       inStock: '',
//       featured: '',
//     };
//     setLocalFilters(empty);
//     setFilters({ page: 1 });
//   };

//   return (
//     <aside className="w-full md:w-64 p-4 border-r bg-white rounded-xl shadow-sm">
//       <h2 className="text-xl font-semibold mb-4">Filters</h2>

//       {/* 🔍 Search */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Search</label>
//         <div className="flex gap-2">
//           <input
//             type="text"
//             name="search"
//             value={localFilters.search || ''}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Search products"
//           />
//           <button
//             onClick={handleSearch}
//             className="px-3 py-2 bg-black text-white rounded"
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* 💰 Price Range */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Price Range</label>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             name="minPrice"
//             value={localFilters.minPrice || ''}
//             onChange={handleChange}
//             placeholder="Min"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="number"
//             name="maxPrice"
//             value={localFilters.maxPrice || ''}
//             onChange={handleChange}
//             placeholder="Max"
//             className="w-full p-2 border rounded"
//           />
//         </div>
//       </div>

//       {/* 📏 Size */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Size</label>
//         <select
//           name="size"
//           value={localFilters.size || ''}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">All Sizes</option>
//           <option value="S">S</option>
//           <option value="M">M</option>
//           <option value="L">L</option>
//           <option value="XL">XL</option>
//           <option value="44">44</option>
//           <option value="45.5">45.5</option>
//           <option value="46">46</option>
//         </select>
//       </div>

//       {/* 🗂 Category */}
//       <div className="mb-4">
//         <label className="block text-sm mb-1">Category</label>
//         <input
//           type="text"
//           name="category"
//           value={localFilters.category || ''}
//           onChange={handleChange}
//           placeholder="e.g. Jordan"
//           className="w-full p-2 border rounded"
//         />
//       </div>

//       {/* ✅ In Stock */}
//       <div className="mb-2">
//         <label className="inline-flex items-center text-sm">
//           <input
//             type="checkbox"
//             name="inStock"
//             checked={localFilters.inStock === 'true'}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           In Stock Only
//         </label>
//       </div>

//       {/* ⭐ Featured */}
//       <div className="mb-4">
//         <label className="inline-flex items-center text-sm">
//           <input
//             type="checkbox"
//             name="featured"
//             checked={localFilters.featured === 'true'}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Featured Only
//         </label>
//       </div>

//       {/* 🔘 Actions */}
//       <button
//         onClick={handleApplyFilters}
//         className="w-full bg-black text-white py-2 rounded mb-2"
//       >
//         Apply Filters
//       </button>

//       <button
//         onClick={handleReset}
//         className="w-full bg-gray-100 text-black py-2 rounded text-sm"
//       >
//         Reset Filters
//       </button>
//     </aside>
//   );
// };

// export default FiltersSidebar;
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const FiltersSidebar = ({ filters, setFilters, applyFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters || {});
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLocalFilters((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
            ? 'true'
            : ''
          : type === 'number'
          ? Number(value)
          : value.trim(),
    }));
  };

  const handleSearch = () => {
    setFilters((prev) => ({
      ...prev,
      search: localFilters.search,
      page: 1,
    }));
  };

  const handleApplyFilters = () => {
    setFilters((prev) => ({
      ...prev,
      ...localFilters,
      page: 1,
    }));
    if (applyFilters) applyFilters();
    setMobileOpen(false);
  };

  const handleReset = () => {
    const empty = {
      search: '',
      minPrice: '',
      maxPrice: '',
      size: '',
      category: '',
     
      inStock: '',
      featured: '',
    };
    setLocalFilters(empty);
    setFilters({ page: 1 });
  };

  const FilterContent = () => (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Search */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Search</label>
        <div className="search__inside-wrapper flex gap-2 border p-2 rounded-xl">
          <input
            type="text"
            name="search"
            value={localFilters.search || ''}
            onChange={handleChange}
            className="inputs w-full p-2 border rounded-xl"
            placeholder="Search products"
          />
          <button
            onClick={handleSearch}
            className="apply-filter-button"
          >
            Search
          </button>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-sm mb-1 ">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="minPrice"
            value={localFilters.minPrice || ''}
            onChange={handleChange}
            placeholder="Min"
            className=" inputs w-full p-2 border rounded-xl"
          />
          <span className="self-center">-</span>
          <input
            type="number"
            name="maxPrice"
            value={localFilters.maxPrice || ''}
            onChange={handleChange}
            placeholder="Max"
            className="inputs w-full p-2 border rounded-xl"
          />
        </div>
      </div>

      {/* Size */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Size</label>
        <select
          name="size"
          value={localFilters.size || ''}
          onChange={handleChange}
          className="inputs w-full p-2 border rounded-xl"
        >
          <option value="">All Sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="44">44</option>
          <option value="45.5">45.5</option>
          <option value="46">46</option>
        </select>
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm mb-1">Category</label>
        <input
          type="text"
          name="category"
          value={localFilters.category || ''}
          onChange={handleChange}
          placeholder="e.g. Jordan"
          className="inputs w-full p-2 border rounded-xl"
        />
      </div>

      

      

      {/* In Stock */}
      <div className="mb-2">
        <label className="inline-flex items-center text-sm">
          <input
            type="checkbox"
            name="inStock"
            checked={localFilters.inStock === 'true'}
            onChange={handleChange}
            className="mr-2"
          />
          In Stock Only
        </label>
      </div>

      {/* Featured */}
      <div className="mb-4">
        <label className="inline-flex items-center text-sm">
          <input
            type="checkbox"
            name="featured"
            checked={localFilters.featured === 'true'}
            onChange={handleChange}
            className="mr-2"
          />
          Featured Only
        </label>
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full bg-black text-white py-2 rounded mb-2"
      >
        Apply Filters
      </button>

      <button
        onClick={handleReset}
        className="w-full bg-gray-100 text-black py-2 rounded text-sm"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-end px-4 py-2">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1.5 rounded shadow"
        >
          <FaFilter /> Filter
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden elementor-element-populated md:block w-full md:w-64 border-r bg-white rounded-xl shadow-sm">
        {FilterContent()}
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50  bg-opacity-40 flex">
          <div className="bg-white w-4/5 max-w-sm p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setMobileOpen(false)} className="text-gray-600">
                ✕
              </button>
            </div>
            {FilterContent()}
          </div>
          <div className="flex-grow" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
};

export default FiltersSidebar;
