import React from "react";
import img1 from "../assets/image-retro-pcs.jpg";
import img2 from "../assets/image-top-laptops.jpg";
import img3 from "../assets/image-gaming-growth.jpg";

export const Footer = () => {
  return (
    <div className="md:w-3/4 mx-auto flex flex-col md:flex-row gap-8 mt-10 p-4 md:p-0">
      <div className="md:w-1/3 flex">
        <div className="w-1/3">
          <img src={img1} alt="retro pcs" className="object-cover h-[150px]" />
        </div>
        <div className="w-2/3 px-4 md:px-0">
          <p className="text-2xl text-grayishBlue font-bold">01</p>
          <h3 className="text-xl font-bold mt-2">
            <a href="#" className="hover:text-softRed">
              Reviving Retro PCs
            </a>
          </h3>
          <p className="text-darkGrayish mt-2">
            What happens when the old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="md:w-1/3 flex">
        <div className="w-1/3">
          <img src={img2} alt="retro pcs" className="object-cover h-[150px]" />
        </div>
        <div className="w-2/3 px-4 md:px-0">
          <p className="text-2xl text-grayishBlue font-bold">02</p>
          <h3 className="text-xl font-bold mt-2">
            <a href="#" className="hover:text-softRed">
              Top 10 Laptops of 2022
            </a>
          </h3>
          <p className="text-darkGrayish mt-2">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 flex">
        <div className="w-1/3">
          <img src={img3} alt="retro pcs" className="object-cover h-[150px]" />
        </div>
        <div className="w-2/3 px-4 md:px-0">
          <p className="text-2xl text-grayishBlue font-bold">03</p>
          <h3 className="text-xl font-bold mt-2">
            <a href="#" className="hover:text-softRed">
              The Growth of Gaming
            </a>
          </h3>
          <p className="text-darkGrayish mt-2">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};
