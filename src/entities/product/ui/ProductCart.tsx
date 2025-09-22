import { memo } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import img3 from "@/shared/assets/image 1.png";

export const ProductCart = memo(() => {
  return (
    <div className="min-h-[500px] min-w-[350px] border-2 rounded-[10px] border-gray-200 p-[26px]">
      <div
        className=" h-[63%] flex items-start justify-end p-2 bg-center bg-cover rounded-2xl"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <FaRegHeart className="text-yellow-400 border size-11 p-[8px] border-gray-200 rounded-full" />
      </div>
      <div>
        <div className="flex gap-1 items-center text-yellow-300 mt-5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p className="text-black pl-2">(123)</p>
        </div>
        <h3 className="font-medium text-[19px] mt-2">
          Seedra Cilantro Seeds for Planting Indoor and Outdoor
        </h3>
        <div className="text-[25px] items-center flex justify-between mt-5 px-2">
          <strong>$12.56</strong>
          <IoCartOutline className="text-green-600 border size-9 p-[5px] border-gray-200 rounded-[6px]" />
        </div>
      </div>
    </div>
  );
});
