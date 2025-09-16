import ProductCard from "./ProductCard"; // your existing one
import ClothesProductCard from "./ClothesProductCard";

export default function DynamicProductCard({ product }) {
  if (product.category === "Clothes") {
    return <ClothesProductCard product={product} />;
  }
  // Shoes, Slippers, Watches → use original ProductCard
  return <ProductCard product={product} />;
}
