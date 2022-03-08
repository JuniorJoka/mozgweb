import { ButtonProps } from './Button.types';
import React from 'react';

const Button = ({
  label,
  outlined = false,
  extended = false,
  coloredOutline = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`rounded-full outline-none font-bold text-xs py-2 px-4 ${
        outlined
          ? coloredOutline
            ? 'border border-blue-400 text-blue-400'
            : 'shadow-border text-blue-400'
          : 'bg-blue-400 text-white'
      } ${extended ? 'w-full' : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;
