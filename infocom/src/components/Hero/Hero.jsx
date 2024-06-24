import React from 'react';
import Lottie from 'react-lottie';
import { CiShop } from "react-icons/ci";
import animationData from '../../assets/animation.json';

function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <section className="bg-white" id='home'>
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl leading-none text-gray-900 tracking-tight md:text-5xl xl:text-6xl">
              Infocom System <br />
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
              Société De Service Informatique Et Telecom <br /> Une Large Gamme De Produits
              <br />
              <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2">
                <a href="https://infocom.ma/fr/" target="_blank" rel="noopener noreferrer">
                  <div className="flex justify-end">
                    <div className="flex items-center justify-center gap-2 h-10 w-60 rounded-full bg-orange-400 text-white hover:bg-[#f95a08] duration-300 p-2 mt-5 font-poppins">
                      <CiShop />
                      Achat En ligne
                    </div>
                  </div>
                </a>
              </div>
            </p>

            <div  className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
          </div>

          <div className="hidden lg:col-span-5 lg:flex">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
