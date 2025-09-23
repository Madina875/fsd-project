import { memo } from "react";
import { Category } from "../../../entities/category";

export const CategoryList = memo(() => {
  return (
    <div className="container h-[70px] mt-[40px] w-[100%] grid grid-cols-3 md:grid-cols-6 gap-1.5 lg:grid-cols-7 justify-between">
      <Category title="All" />
      <Category title="Bundles" />
      <Category title="Herbs" />
      <Category title="Vegetables" />
      <Category title="Fruits" />
      <Category title="supplies" />
      <Category title="flowers" />
    </div>
  );
});
