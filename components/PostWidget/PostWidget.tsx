import React from 'react';
import { HiOutlineLink, HiOutlinePhotograph, HiOutlineReceiptTax } from 'react-icons/hi';
import { PostWidgetProps } from './PostWidget.types';

const PostWidget = ({ textPost, mediaPost, linkPost }: PostWidgetProps) => {
  return (
    <div className="md:flex w-[640px] shadow-border rounded p-3 space-x-3 text-gray-400 hidden">
      <div className="w-10 h-10 rounded-full bg-blue-50"></div>
      <div className="flex-grow bg-slate-100 bg-opacity-50 border-2 border-slate-200 cursor-pointer rounded flex items-center px-6 text-gray-400 hover:bg-white hover:border-blue-300">
        Create Post
      </div>
      <div className="flex">
        {textPost && (
          <button
            type="button"
            className="flex items-center hover:bg-slate-100 w-10 justify-center rounded"
          >
            <HiOutlineReceiptTax className="w-7 h-7" />
          </button>
        )}
        {mediaPost && (
          <button
            type="button"
            className="flex items-center hover:bg-slate-100 w-10 justify-center  rounded"
          >
            <HiOutlinePhotograph className="w-7 h-7" />
          </button>
        )}
        {linkPost && (
          <button
            type="button"
            className="flex items-center hover:bg-slate-100 w-10 justify-center  rounded"
          >
            <HiOutlineLink className="w-7 h-7" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PostWidget;
