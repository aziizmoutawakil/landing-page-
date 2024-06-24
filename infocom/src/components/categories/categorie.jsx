import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CiCircleChevRight, CiCircleChevLeft } from 'react-icons/ci';

import zktecologo from '../../assets/zkteco-logo.svg';
import ruitie from '../../assets/ruitie.jpeg';
import imou from '../../assets/imou.jpeg';

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow custom-left-arrow absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
    >
      <CiCircleChevLeft className="text-gray-900 text-2xl" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow custom-right-arrow absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-900 p-2 rounded-full"
    >
      <CiCircleChevRight className=" text-2xl" />
    </button>
  );
};

function Categories() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="categories">
      <section className="py-10" id="services">
        <div className="container mx-auto px-4 bg-white">
          <h2 className="text-6xl text-gray-800  text-center font-poppins"></h2>
        </div>
      </section>

      <Carousel 
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div>
          <img className='pl-4 w-2/6' src={imou} alt="" />
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Canon_wordmark.svg" alt="Canon"/>
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/5/59/Epson_logo.svg" alt="Epson"/>
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Eaton_Corporation_logo.svg" alt="Eaton"/>
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" alt="Lenovo"/>
        </div>
        {/* <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/2/29/HP_New_Logo_2D.svg" alt="HP"/>
        </div> */}
        <div className='flex items-center justify-center'>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Hikvision_logo.svg" alt="Hikvision"/>
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/TPLINK_Logo_2.svg" alt="TP-Link"/>
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahua_Technology_logo.svg" alt="Dahua"/>
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo_Konica_Minolta.svg" alt="Konica Minolta"/>
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src={zktecologo} alt="ZKTeco"/>
        </div>
        <div>
          <img className="hover:opacity-75 w-2/4 hover:scale-105 duration-300" src={ruitie} alt="Ruitie"/>
        </div>
      </Carousel>

      <div className="grid md:grid-cols-4 p-4 place-items-center"></div>
    </div>
  );
}

export default Categories;
