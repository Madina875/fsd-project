import { memo } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full h-[170px] bg-white shadow flex flex-col py-10 items-center">
      <div className="container flex items-center justify-between">
        <ul className="uppercase flex gap-8 text-gray-500 font-medium">
          <NavLink
            className={({ isActive }) =>
              `uppercase border-r border-gray-300 pr-5 ${
                isActive ? "text-[#359740]" : ""
              }`
            }
            to={"/"}
          >
            All Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase border-r border-gray-300 pr-5 ${
                isActive ? "text-[#359740]" : ""
              }`
            }
            to={"/about"}
          >
            About Seedra
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase border-r border-gray-300 pr-5 ${
                isActive ? "text-[#359740]" : ""
              }`
            }
            to={"/blog"}
          >
            Our Blog
          </NavLink>
        </ul>
        <p className="text-3xl text-[#359740] -tracking-wider uppercase font-bold">
          Seedra
        </p>
        <ul className=" capitalize mr-30 ml-15  text-gray-500 ">
          <NavLink
            className={({ isActive }) =>
              ` border-r border-gray-300 pr-10 ${
                isActive ? "text-black underline" : ""
              }`
            }
            to={"/about"}
          >
            Terms&conditions
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` pl-10 ${isActive ? "text-black underline" : ""}`
            }
            to={"/blog"}
          >
            Privacy Policy
          </NavLink>
        </ul>
      </div>
      <hr className="border container mt-5 border-gray-100" />
      <div className="flex justify-between w-full container mt-5">
        <div className="flex gap-5 text-2xl text-[#359740]">
          <RiInstagramFill />
          <FaFacebook />
        </div>
        <p className="text-gray-500">All right reserved</p>
      </div>
    </div>
  );
};

export default memo(Footer);
