import React from 'react';
import { ToastProps } from './Toast.type';

const Toast = ({ type, msg }: ToastProps) => {
  let color = '';

  switch (type) {
    case 'success':
      color = 'bg-teal-500';
      break;
    case 'warning':
      color = 'bg-yellow-500';
      break;
    case 'error':
      color = 'bg-rose-500';
      break;
  }

  return (
    <div className="w-auto mx-8 md:w-[40ch] bg-white shadow-border rounded flex">
      <div className={`w-2 ${color} rounded-l`} />
      <div className="p-4">
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Toast;
