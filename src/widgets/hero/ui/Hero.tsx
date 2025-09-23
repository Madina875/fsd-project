import { memo } from "react";
import imgcard from "@/shared/assets/Group 1.png";
import { TbFlameFilled } from "react-icons/tb";

export const Hero = memo(() => {
  return (
    <div className="container mt-8 min-h-[455px] flex flex-col md:flex-row bg-[#EAF1EB] rounded-[24px]">
      <div className="w-[65%] lg:pl-19 md:py-10 sm:pt-5 lg:pt-15">
        <h2 className="text-5xl font-medium text-left mb-4">
          SEEDRA Basil Seeds for Indoor and Outdoor Planting
        </h2>
        <p className="pr-22 pb-5">
          Be sure of our quality - the freshest batches of this season. Non-GMO,
          Heirloom - our seeds were tested and have the best germination
          ratings. Your easy growing experience is our guarantee
        </p>
        <div className="flex text-3xl items-center gap-2 my-2">
          <TbFlameFilled className="text-red-400" />
          <strong> $12.56</strong>
          <p className="pl-3 text-[18px] font-medium text-gray-500 line-through">
            $15.56
          </p>
        </div>
        <div className="w-[300px] h-[50px] flex gap-5 mt-6">
          <button className="bg-[#359740] text-white w-[100%] h-[100%] rounded-[8px]">
            Add to Card
          </button>
          <button className="bg-white text-[#359740] w-[100%] h-[100%] rounded-[8px]">
            Discover
          </button>
        </div>
      </div>
      <div className="">
        <img className=" h-[100%] w-[100%]" src={imgcard} alt="" />
      </div>
    </div>
  );
});
