import React from 'react';
import { BsCoin, BsShield } from 'react-icons/bs';
import { CgCalendarToday, CgToggleOff } from 'react-icons/cg';
import { HiOutlineMoon } from 'react-icons/hi';
import { MdHelpOutline, MdOutlineBolt, MdOutlineLogin, MdOutlineSpeaker } from 'react-icons/md';

const HeaderOptions = () => {
  return (
    <div className="w-52 rounded bg-white shadow-border z-50 font-semibold px-2">
      <div className="mx-2">
        <p className="font-bold text-gray-500 text-xs pt-4">VIEW OPTIONS</p>
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center space-x-2 h-10">
            <HiOutlineMoon className="w-5 h-5" />
            <p>Dark Mode</p>
          </div>
          <CgToggleOff />
        </div>
      </div>
      <div className="mx-2">
        <p className="font-bold text-gray-500 text-xs pt-2">MORE STUFF</p>
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
          <MdOutlineSpeaker className="w-5 h-5" />
          <p>Talk</p>
        </div>
        <div className="flex items-center space-x-2 h-10">
          <CgCalendarToday className="w-5 h-5" />
          <p>Predictions</p>
        </div>
        <div className="flex items-center space-x-2 h-10">
          <MdHelpOutline className="w-5 h-5" />
          <p>Dark Mode</p>
        </div>
      </div>
      <hr className="mx-2" />
      <div className="mx-2 flex items-center space-x-2 h-10">
        <MdOutlineLogin className="w-5 h-5" />
        <p>Login / Sign Up</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
