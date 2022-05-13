import React from 'react';
import { BsChat, BsGift, BsHandThumbsDown, BsHandThumbsUp } from 'react-icons/bs';
import CommentActionBarProps from './CommentActionBar.types';

const CommentActionBar = ({ voteCount }: CommentActionBarProps) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center py-2 space-x-2">
        <button className=" flex items-center">
          <BsHandThumbsUp />
        </button>
        <p className="">{voteCount ? voteCount : 'vote'}</p>
        <button className="flex items-center">
          <BsHandThumbsDown />
        </button>
      </div>
      <div className="">
        <button className=" flex items-center space-x-2">
          <BsChat />
          <p>Reply</p>
        </button>
      </div>
      <div className="flex itmes-center">
        <button className=" flex items-center">
          <BsGift />
        </button>
      </div>
    </div>
  );
};

export default CommentActionBar;
