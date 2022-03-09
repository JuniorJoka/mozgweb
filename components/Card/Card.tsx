import React from 'react';
import {
  HiOutlineChatAlt2,
  HiOutlineShare,
  HiOutlineThumbDown,
  HiOutlineThumbUp,
  HiX,
} from 'react-icons/hi';
import { CardProps } from './Card.types';

const Card = (props: CardProps) => {
  const { time, community, commentCount, voteCount, title } = props;
  return (
    <div className="flex rounded  max-w-[640px] text-gray-500 shadow-border">
      <div className="hidden md:block bg-blue-50 bg-opacity-50 py-2 px-3 ">
        <button type="button" className="flex items-center w-full justify-center">
          <HiOutlineThumbUp />
        </button>
        <p className="text-black" data-testid="vote-count">
          {voteCount ? voteCount : 'Vote'}
        </p>
        <button type="button" className="flex items-center justify-center w-full">
          <HiOutlineThumbDown />
        </button>
      </div>
      <div>
        <div className="flex items-center justify-between p-2">
          <div className="flex space-x-2">
            <div className="rounded-full w-7 h-7 bg-blue-50" />
            <p className="font-semibold text-sm text-black">m/{community}</p>
            <p>Posted by u/{'joka'}</p>
            <p>{time}</p>
          </div>
          <div>
            <button type="button" className="md:hidden">
              <HiX />
            </button>
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg text-black p-2">{title}</p>
        </div>
        <div className="flex justify-between py-4 px-2 md:hidden">
          <div className="flex space-x-2">
            <div className="rounded-full flex items-center space-x-2 py-2 px-3 shadow-border">
              <button type="button" className="flex items-center">
                <HiOutlineThumbUp />
              </button>
              <p>{voteCount ? voteCount : 'Vote'}</p>
              <button type="button" className="flex items-center">
                <HiOutlineThumbDown />
              </button>
            </div>
            <button className="rounded-full flex items-center py-2 px-3 shadow-border space-x-2">
              <HiOutlineChatAlt2 />
              <p>{commentCount}</p>
            </button>
          </div>
          <button className="rounded-full flex items-center py-2 px-3 shadow-border">
            <HiOutlineShare />
          </button>
        </div>
        <div className="hidden md:flex">
          <button className="rounded-full flex items-center py-2 px-3 space-x-2">
            <HiOutlineChatAlt2 />
            <p>{commentCount}</p>
          </button>

          <button className="rounded-full flex items-center py-2 px-3 ">
            <HiOutlineShare />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
