import React from 'react';

const Toolbar = ({ children }: { children: React.ReactNode }) => (
  <div className="flex space-x-3 py-4 pl-1 mx-0  border-b-2 border-[#eee] mb-5">{children}</div>
);

export default Toolbar;
