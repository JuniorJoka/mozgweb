import { HiMenuAlt1, HiOutlinePencil } from 'react-icons/hi';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { CgChevronDown } from 'react-icons/cg';
import React from 'react';
import Button from '../Button';

const Header = ({ user }) => {
  return (
    <header
      role="header"
      className="fixed h-10 w-full flex justify-between items-center bg-slate-900 md:bg-white px-5 py-8 md:border-b-[1px] md:border-black md:border-opacity-20 z-50"
    >
      <div className="flex items-center">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1 className="text-white text-xl font-extrabold md:text-black">Mozg</h1>
      </div>
      <div className="relative">
        <input
          type="text"
          className="bg-blue-50 w-[30rem] h-10 rounded-md pl-10 focus:outline-none pr-4"
          placeholder="Search Mozg"
        />
        <BsSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
      <div className="hidden md:flex space-x-2">
        {user ? (
          <button
            type="button"
            className="hover:shadow-border py-1 px-5 flex w-44 h-10 items-center justify-between rounded"
          >
            <p className="w-36 truncate flex justify-start">{user.username}</p>
            <CgChevronDown />
          </button>
        ) : (
          <>
            <Button label="log in" outlined />
            <Button label="Sign up" />
            <button
              type="button"
              className="hover:shadow-border py-1 px-5 flex items-center rounded"
            >
              <BsPerson className="w-7 h-7" />
              <CgChevronDown />
            </button>
          </>
        )}
      </div>
      <div className="md:hidden space-x-2">
        <button type="button">
          <HiOutlinePencil className="text-white" />
        </button>
        <button type="button">
          <HiMenuAlt1 className="text-white " />
        </button>
      </div>
    </header>
  );
};
export default Header;
