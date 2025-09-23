import { memo } from "react";
import { ProductCart } from "@/entities/product";

export const ProductsList = memo(() => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[32px] gap-[30px]">
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <ProductCart />
    </div>
  );
});
