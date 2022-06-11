import React from 'react';
import { BsCoin, BsCompass, BsNewspaper, BsSearch, BsShield } from 'react-icons/bs';
import { CgCalendarToday, CgChevronDown, CgTrending } from 'react-icons/cg';
import {
  MdHelpOutline,
  MdInfoOutline,
  MdOutlineBolt,
  MdOutlineSpeaker,
  MdSettings,
} from 'react-icons/md';
import Button from '../Button';

const DropNav = () => {
  return (
    <div className="w-full h-screen md:hidden text-white bg-slate-900 flex justify-center">
      <div className="w-full px-4 pt-10">
        <div className="relative my-2 ">
          <BsSearch className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Mozg"
            className="rounded-3xl h-8 w-full bg-slate-700 focus:outline-none px-5 pl-9"
          />
        </div>

        <div className="mx-2 space-y-2 overflow-y-scroll scrollbar-hide">
          <div className="flex items-center space-x-2 h-10">
            <BsCoin className="w-5 h-5" />
            <p>Coins</p>
          </div>
          <div className="flex items-center space-x-2 h-10">
            <BsShield className="w-5 h-5" />
            <p>Premium</p>
          </div>
          <div className="flex items-center space-x-2 h-10">
            <MdOutlineBolt className="w-5 h-5" />
            <p>Powerups</p>
          </div>
          <div className="flex items-center space-x-2 h-10">
            <BsCompass className="w-5 h-5" />
            <p>Explore</p>
          </div>
          <div className="flex items-center space-x-2 h-10">
            <CgTrending className="w-5 h-5" />
            <p>Popular Posts</p>
          </div>
          <div className="flex items-center space-x-2 h-10">
            <MdSettings className="w-5 h-5" />
            <p>Settings</p>
          </div>
          <div className="flex items-center space-x-2 h-10">
            <MdHelpOutline className="w-5 h-5" />
            <p>Help Center</p>
          </div>
          <div className="flex items-center space-x-2 h-10">
            <MdInfoOutline className="w-5 h-5" />
            <p>More</p>
          </div>
          <div className="flex items-center space-x-2 h-10 justify-between">
            <div className="flex space-x-2">
              <BsNewspaper className="w-5 h-5" />
              <p>Terms & Policies</p>
            </div>
            <CgChevronDown />
          </div>
          <Button label="Sign Up or Login" extended />
        </div>
      </div>
    </div>
  );
};

export default DropNav;
