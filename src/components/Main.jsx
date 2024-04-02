import React from "react";
import imgDesktop from "../assets/image-web-3-desktop.jpg";
import imgMobile from "../assets/image-web-3-mobile.jpg";

const Main = () => {
  return (
    <div className="md:w-3/4 mx-auto flex flex-col md:flex-row gap-16 mt-20">
      <div className="md:w-2/3">
        <div className="flex flex-col">
          <div className="w-full p-4 md:p-0">
            <img src={imgDesktop} alt="" className="hidden md:block" />
            <img src={imgMobile} alt="" className="md:hidden" />
          </div>
          <div className="flex flex-col md:flex-row mt-8 p-4 md:p-0">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-6xl font-black">
                The Bright Future of Web 3.0?
              </h2>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 text-darkGrayish">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="tracking-widest bg-softRed hover:bg-veryDark text-white text-base uppercase py-2 px-8 mt-8">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 p-4 md:p-0">
        <div className="bg-veryDark text-white flex-col">
          <h2 className="text-softOrange text-4xl p-8 font-bold">New</h2>
          <div className="p-8">
            <h3 className="text-lg font-bold">
              <a href="#" className="hover:text-softOrange">
                Hydrogen VS Electric Cars
              </a>
            </h3>
            <p className="text-base text-zinc-400">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <hr className="mt-12" />
          </div>

          <div className="p-8">
            <h3 className="text-lg font-bold">
              <a href="#" className="hover:text-softOrange">
                The Downsides of AI Artistry
              </a>
            </h3>
            <p className="text-base text-zinc-400">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <hr className="mt-12" />
          </div>
          <div className="p-8">
            <h3 className="text-lg font-bold">
              <a href="#" className="hover:text-softOrange">
                Is VC Funding Drying Up?
              </a>{" "}
            </h3>
            <p className="text-base text-zinc-400">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
