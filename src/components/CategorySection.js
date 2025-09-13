import CategoryCard from "./CategoryCard";

const categories = [
  { name: 'Nike Dunk', slug: 'Duck' },
  { name: 'Air Force', slug: 'air-force' },
  { name: 'Nike Jordans', slug: 'nike-jordans' },
  { name: 'Accessories', slug: 'accessories' },
];

export default function CategorySection() {
  return (
    <section className="px-4 md:px-10 py-10 bg-[#f9f8f6]">
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-center uppercase">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <CategoryCard key={i} category={cat} />
        ))}
      </div>
    </section>
  );
}
