import { memo } from "react";
import { IoNewspaperOutline } from "react-icons/io5";

export const Category = memo(({ title }: any) => {
  return (
    <div className="border border-gray-200 uppercase flex gap-2 items-center px-5 rounded-[8px]">
      <IoNewspaperOutline className="text-green-600" /> {title}
    </div>
  );
});
