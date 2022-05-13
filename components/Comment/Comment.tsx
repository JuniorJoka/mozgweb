import React from 'react';
import CommentHeaderBar from '../CommentHeadBar';
import CommentActionBar from '../CommentActionBar';
import CommentProps from './Comment.types';

const Comment = ({ username, createdAt, voteCount }: CommentProps) => {
  return (
    <div className="border-l-2 border-gray-200 pl-2 relative">
      <CommentHeaderBar username={username} createdAt={createdAt} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat voluptate architecto
        consequatur reiciendis perspiciatis earum odio corporis provident, modi, quaerat voluptatem.
        Natus itaque cupiditate, eveniet earum fuga nihil et sapiente, provident perferendis,
        deleniti consequatur id qui cumque minima? Iste voluptatum, minus rem necessitatibus
        officiis repellendus quisquam adipisci ipsa dolore!
      </p>
      <CommentActionBar voteCount={voteCount} />
    </div>
  );
};

export default Comment;
