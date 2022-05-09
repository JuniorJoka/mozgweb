import React, { useState } from 'react';
import { CgImage } from 'react-icons/cg';

const postType = 'image';

const Image = () => {
  const [title, setTitle] = useState('');

  return (
    <>
      <div className="m-4 relative">
        <input
          type="text"
          name="title"
          id="title"
          maxLength={300}
          placeholder="Title"
          className="w-full h-11 shadow-border rounded focus:outline-none pl-2 pr-14"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="font-bold text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 text-xs">
          <p>{title.length}/300</p>
        </div>
      </div>

      <div className="h-32 m-4 border-dashed border-2 rounded bg-gray-50"></div>
    </>
  );
};

export default Image;

export const TabHead = () => (
  <>
    <CgImage />
    <p>Image</p>
  </>
);
