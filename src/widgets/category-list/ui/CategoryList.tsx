import { memo } from "react";
import { Category } from "../../../entities/category";

export const CategoryList = memo(() => {
  return (
    <div className="container h-[70px] mt-[40px] w-[100%] flex justify-between">
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
