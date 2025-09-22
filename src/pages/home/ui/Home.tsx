import { memo } from "react";
import { Hero } from "../../../widgets/hero";
import { SubHero } from "../../../widgets/subhero";
import { ProductsList } from "../../../widgets/products-list";
import { CategoryList } from "../../../widgets/category-list";

export const Home = memo(() => {
  return (
    <div>
      <Hero />
      <SubHero />
      <div className="container flex justify-between items-center mt-[55px]">
        <h1 className=" text-3xl font-medium">Our Products.</h1>
        <button className="px-4 border py-2 border-gray-200 rounded-[7px] text-green-700">
          View all(12)
        </button>
      </div>
      <CategoryList />
      <ProductsList />
    </div>
  );
});
