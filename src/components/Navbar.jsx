import { useState } from 'react';
import { FaBars, FaSearch, FaBookmark, FaChevronDown } from 'react-icons/fa';
import { IoSearchOutline as Search } from 'react-icons/io5';
import { LuBookmark } from 'react-icons/lu';
import { PiCaretDown } from 'react-icons/pi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 sm:px-10 px-5">
      <h2 className="font-roboto font-regular text-lg  pr-2">Travelsy</h2>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="text-xl text-gray-700" />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-5 text-sm font-roboto font-normal text-gray-700">
        <li>Camping Locations</li>
        <li>Activities</li>
        <li>Equipment</li>
        <li>Blogs</li>
      </ul>

      {/* Buttons and icons for desktop */}
      <div className="hidden md:flex gap-4 items-center">
        <button className="flex items-center bg-orange-600 px-5 rounded-full gap-1 text-white py-2">
          <FaBookmark />
          Reservations
        </button>
        <Search className="text-xl" />

        <div className="flex items-center gap-3">
          <div className="relative rounded-full bg-gray-400 h-9 w-9">
            <img className="h-full w-full rounded-full" src="/hm (2).jpg"/>
            <div className="w-3 h-3 bg-red-600 absolute top-0 -right-1 rounded-full "></div>
          </div>
          <PiCaretDown className="text-md" />
        </div>
      </div>

      {/* Mobile menu (toggle visibility based on state) */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-5 py-5 text-gray-700 shadow-lg md:hidden">
          <li>Camping Locations</li>
          <li>Activities</li>
          <li>Equipment</li>
          <li>Blogs</li>
          <button className="flex items-center bg-orange-600 px-5 rounded-full gap-1 text-white py-2">
          <LuBookmark/>
            Reservations
          </button>
          <FaSearch className="text-xl" />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
