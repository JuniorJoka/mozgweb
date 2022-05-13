import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import CommentHeadBarProps from './CommentHeadBar.types';

const CommentHeadBar = ({ username, createdAt }: CommentHeadBarProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-xs space-x-2">
        <div className="rounded-full h-8 w-8 bg-yellow-400" />
        <p className="text-sm font-semibold">{username}</p>
        <p>{createdAt}</p>
      </div>
      <button className="flex items-center">
        <BsThreeDots />
      </button>
    </div>
  );
};

export default CommentHeadBar;
