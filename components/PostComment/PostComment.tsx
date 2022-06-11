import React, { useState } from 'react';
import useUser from '../../hooks/useUser';
import PostCommentProps from './PostComment.types';

const PostComment = ({ user }: PostCommentProps) => {
  const [postComment, setPostComment] = useState('');
  if (!user?.username) {
    return <div>Log In to comment</div>;
  }
  return (
    <div className="flex justify-center max-w-[640px] text-gray-500 p-4">
      <div>
        <p>Comment as {user?.username}</p>
        <div className="w-[580px] rounded shadow-border -space-y-1">
          <textarea
            name=""
            id=""
            className="h-44 rounded-none bg-transparent w-full p-1"
            placeholder="What are your thoughs"
            value={postComment}
            onChange={(event) => setPostComment(event.target.value)}
          />
          <div className="bg-blue-100 h-8 rounded-b"></div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
