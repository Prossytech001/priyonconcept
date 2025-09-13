import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchCategoryProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/category/${slug}`
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching category products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [slug]);

  return (
    <section className="px-4 md:px-10 py-10">
      <h1 className="text-2xl md:text-3xl font-bold capitalize mb-6">
        {slug?.split("-").join(" ")}
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryPage;
