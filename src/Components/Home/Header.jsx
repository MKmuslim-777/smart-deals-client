import React from "react";
import left_Img from "../../assets/bg-hero-left.png";
import right_Img from "../../assets/bg-hero-right.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-br from-[#FFE6FD] to-[#E0F8F5]  w-full">
      <div className="left-site">
        <img src={left_Img} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="md:text-8xl text-center text-4xl font-bold md:mt-0 mt-10">
          Deal Your <span className="text-primary">Products</span>
          <br /> In A <span className="text-primary">Smart</span> Way
        </h2>

        <p className="text-center mt-7 text-xl font-semibold">
          SmartDeals helps you sell, resell, and shop from trusted local Sellers
          - all in one place!
        </p>

        <div className="text-center my-10 ">
          <div className="join">
            <div className="shadow-md rounded-full">
              <label className="input validator join-item md:w-[450px] w-[250px] rounded-l-full bg-white border-none outline-none">
                <input
                  type="text"
                  placeholder="search For Products, Categories..."
                  required
                />
              </label>
            </div>
            <button className="btn btn-neutral join-item bg-primary border-none rounded-r-full">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="text-center flex md:flex-row flex-col">
          <button className="btn btn-primary rounded-md ">
            Watch All Products
          </button>
          <button className="btn btn-outline  border border-primary rounded-md md:ml-3.5 text-primary md:mt-0 mt-4 md:mb-0 mb-10">
            Post an Product
          </button>
        </div>
      </div>
      <div className="right-site">
        <img src={right_Img} alt="" />
      </div>
    </div>
  );
};

export default Header;
