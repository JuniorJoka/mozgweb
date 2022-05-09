import React, { useState } from 'react';
import { CgLink } from 'react-icons/cg';

const postType = 'link';

const Link = () => {
  const [link, setTitle] = useState('');
  return (
    <div className="m-4 relative">
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
