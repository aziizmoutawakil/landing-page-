import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActiveLink = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="flex items-center justify-between fixed w-full z-10 top-0 p-3 bg-[#f4f4f3]">
      <div className="text-xl">
        <img className='w-1/3 ml-5 rounded' src={logo} alt="Logo" />
      </div>
      <div className="flex md:hidden">
        {/* Hamburger menu button (if needed) */}
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-bold mt-5 md:mt-0 md:border-none font-poppins">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
          className={`cursor-pointer block md:inline-block px-3 py-3 md:border-none ${activeLink === 'home' ? 'text-[#f95a08]' : 'hover:text-[#f95a08]'}`}
          onClick={() => handleSetActiveLink('home')}
        >
          Accueil
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
          className={`cursor-pointer block md:inline-block px-3 py-3 md:border-none ${activeLink === 'services' ? 'text-[#f95a08]' : 'hover:text-[#f95a08]'}`}
          onClick={() => handleSetActiveLink('services')}
        >
          Services
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
          className={`cursor-pointer block md:inline-block px-3 py-3 md:border-none ${activeLink === 'about' ? 'text-[#f95a08]' : 'hover:text-[#f95a08]'}`}
          onClick={() => handleSetActiveLink('about')}
        >
          À propos de nous
        </Link>
        <Link
          to="categories"
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
          className={`cursor-pointer block md:inline-block px-3 py-3 md:border-none ${activeLink === 'categories' ? 'text-[#f95a08]' : 'hover:text-[#f95a08]'}`}
          onClick={() => handleSetActiveLink('categories')}
        >
          Catégories
        </Link>
      </div>
      <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
      <Link
          to="footer"
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}
          className="cursor-pointer block md:inline-block px-3 py-3 md:border-none hover:text-[#f95a08]"
          onClick={() => handleSetActiveLink('footer')}
        >
          <div className="flex justify-end font-poppins">
            <div className="flex items-center gap-1 h-10 w-30 mr-5 rounded-full bg-orange-500 hover:bg-[#f95a08] duration-300 text-white font-medium p-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Contactez-nous
            </div>
          </div>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
