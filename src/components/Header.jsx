import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { SlBasket } from 'react-icons/sl';
import { CiHeart } from 'react-icons/ci';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-green-600 font-bold text-xl">
            <img src={Logo} alt="" />
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? 'text-green-600 border-b-2' : ''
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/all"
              className={({ isActive }) =>
                isActive ? 'text-green-600 border-b-2' : ''
              }
            >
              ABOUT PRODUCT
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'text-green-600 border-b-2' : ''
              }
            >
              OUR BLOG
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? 'text-green-600 border-b-2' : ''
              }
            >
              CONTACTS
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <input
            placeholder="Search"
            className="hidden sm:inline-block border rounded-full px-3 py-1 text-sm"
          />
          <button className="p-2 rounded-md">
            <CiHeart />
          </button>
          <button className="p-2 rounded-md text-green">
            <SlBasket />
          </button>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
