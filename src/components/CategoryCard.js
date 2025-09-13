import { FaShoePrints, FaHatCowboy, FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';

const categoryStyles = {
  'nike-dunk': {
    icon: <FaBasketballBall size={28} />,
    bg: 'from-black to-gray-900',
  },
  'air-force': {
    icon: <FaShoePrints size={28} />,
    bg: 'from-lime-600 to-green-800',
  },
  'accessories': {
    icon: <FaHatCowboy size={28} />,
    bg: 'from-yellow-600 to-amber-800',
  },
  // add more styles as needed
};

const CategoryCard = ({ category }) => {
  const style = categoryStyles[category.slug] || {
    icon: <FaShoePrints size={28} />,
    bg: 'from-gray-700 to-gray-900',
  };

  return (
    <Link href={`/category/${category.slug}`}>
      <div
        className={`rounded-xl p-5 h-[180px] w-full bg-gradient-to-br ${style.bg} text-white shadow-md hover:shadow-xl transition group flex flex-col justify-between`}
      >
        <div className="opacity-80">{style.icon}</div>
        <div>
          <p className="text-xs uppercase tracking-wide opacity-70">Shop</p>
          <h3 className="text-lg font-semibold leading-tight">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
