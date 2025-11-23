import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:justify-between">
        <nav className="flex flex-col md:flex-row gap-4 md:gap-25 text-sm items-center text-center">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'text-green-600 border-b-2' : ''
            }
          >
            ALL PRODUCTS
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-green-600 border-b-2' : ''
            }
          >
            ABOUT SEEDRA
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? 'text-green-600 border-b-2' : ''
            }
          >
            OUR BLOG
          </NavLink>
          <div className="mb-4 md:mb-0 flex items-center justify-center md:justify-start">
            <img src={Logo} alt="Logo" className="w-[125px]" />
          </div>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto border-t-1 flex justify-center pt-6 border-[#359740]">
        All rights reserved
      </div>
    </footer>
  );
};

export default memo(Footer);
