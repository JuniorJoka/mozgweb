import React from 'react';

export interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  outlined?: boolean;
  extended?: boolean;
  coloredOutline?: boolean;
}
