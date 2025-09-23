import { memo } from "react";
import img from "@/shared/assets/Group 3.png";

export const AboutInfo = memo(() => {
  return (
    <div className="container h-[480px] pl-2 gap-2 flex flex-col lg:flex-row md:flex-col sm:flex-col mt-[57px]">
      <div>
        <h2 className="mb-[31px] text-4xl font-medium w-150">
          Seedra helps to grow fast and efficiant
        </h2>
        <p className="w-120 text-[17px] text-gray-800">
          SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional
          instructions created by PhD Helga George <br />
          <br /> Be sure of our quality - the freshest batches of this season.
          Non-GMO, Heirloom - our seeds were tested and have the best
          germination ratings.
          <br /> Your easy growing experience is our guarantee Spinach commom
          culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
          risotto, and more <br />
          <br /> Proudly sourced in the USA - our garden seeds are grown,
          harvested, and packaged in the USA. We support local farmers and are
          happy to produce this American-made product
        </p>
      </div>
      <div>
        <img src={img} className="object-center object-cover" alt="" />
      </div>
    </div>
  );
});
