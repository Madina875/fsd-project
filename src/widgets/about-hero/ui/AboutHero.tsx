import { memo } from "react";
import abouthero from "@/shared/assets/Group 2.png";

export const AboutHero = memo(() => {
  return (
    <div
      className="container rounded-[24px] mt-[32px] min-h-[250px] bg-center flex flex-col items-center justify-center bg-[#EAF1EB]"
      style={{ backgroundImage: `url(${abouthero})` }}
    >
      <p className="text-5xl font-medium mb-5">Who we are and what we do</p>
      <p className="px-75 text-gray-800 text-center">
        Here you can find a lot of interesting and useful information that you
        need in gardening and creating a beautiful garden
      </p>
    </div>
  );
});
