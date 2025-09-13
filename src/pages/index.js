import HeroSlider from "@/components/Heroslider";
import NewArrivals from "@/components/Newarrival";
import CategorySection from "@/components/CategorySection";
import BestSellersSection from "@/components/BestSellersSection";
import HomePage from "../pages/about";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <NewArrivals />
      <CategorySection />
      <BestSellersSection />
      <HomePage />
    </div>
  );
}

// const express = require('express');
// const app = express();
// const checkoutRoutes = require('./routes/checkout');

// app.use(express.json());
// app.use('/api/checkout', checkoutRoutes);
