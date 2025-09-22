import { memo } from "react";
import imgherosub from "@/shared/assets/Group 2.png";
export const SubHero = memo(() => {
  return (
    <div
      className="container h-[100px] flex flex-col text-center justify-center bg-[#FFE62E17] rounded-[12px] mt-[16px]"
      style={{
        backgroundImage: `url(${imgherosub})`,
        objectFit: "cover",
        objectPosition: "center",
      }}
    >
      <p className="text-2xl font-medium">We sell seeds</p>
      <p className="text-gray-800">
        that always sprout and gardening supplies which never break
      </p>
    </div>
  );
});
