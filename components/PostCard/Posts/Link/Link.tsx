import React, { useState } from 'react';
import { CgLink } from 'react-icons/cg';

const postType = 'link';

const Link = () => {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  return (
    <div className="m-4 relative">
      <div className="relative my-4">
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
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Paste link here"
        className="w-full h-11 shadow-border rounded focus:outline-none pl-2 pr-14"
        value={link}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </div>
  );
};

export default Link;

export const TabHead = () => (
  <>
    <CgLink />
    <p>Link</p>
  </>
);
