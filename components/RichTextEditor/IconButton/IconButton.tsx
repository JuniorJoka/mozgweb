import React from 'react';
import IconButtonProps from './IconButton.types';

const IconButton = ({ active, reversed, children, ...props }: IconButtonProps) => (
  <span
    {...props}
    className={`cursor-pointer  ${
      reversed ? (active ? 'text-white' : 'text-[#aaa]') : active ? 'text-black' : 'text-[#ccc]'
    }`}
  >
    {children}
  </span>
);

export default IconButton;
