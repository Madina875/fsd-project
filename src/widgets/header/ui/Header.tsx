import { memo } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaFacebook, FaRegHeart } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full h-[70px] border-b border-gray-200 flex items-center">
      <div className="container flex items-center justify-between">
        <p className="text-3xl text-[#359740] -tracking-wider uppercase font-bold">
          Seedra
        </p>
        <ul className="uppercase flex gap-8 text-gray-500 font-medium">
          <NavLink
            className={({ isActive }) =>
              `uppercase border-r border-gray-300 pr-5 ${
                isActive ? "text-black underline" : ""
              }`
            }
            to={"/"}
          >
            All Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase border-r border-gray-300 pr-5 ${
                isActive ? "text-black underline" : ""
              }`
            }
            to={"/about"}
          >
            About Seedra
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase border-r border-gray-300 pr-5 ${
                isActive ? "text-black underline" : ""
              }`
            }
            to={"/blog"}
          >
            Our Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `uppercase ${isActive ? "text-black underline" : ""}`
            }
            to={"/contact"}
          >
            Contacts
          </NavLink>
        </ul>

        <div className="flex items-center gap-3 w-[30%]">
          <div className="flex gap-2 text-2xl text-gray-500">
            <RiInstagramFill />
            <FaFacebook />
          </div>
          <div className="flex items-center gap-2 border border-gray-300 rounded-4xl px-5 py-2">
            <CiSearch />
            <input className="outline-none" type="text" placeholder="Search" />
          </div>
          <div className="flex gap-2 text-[20px]">
            <FaRegHeart />
            <BsCart3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
