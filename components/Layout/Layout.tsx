import React from 'react';
import LayoutProps from './Layout.types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <main role="main" className="flex justify-center">
      {children}
    </main>
  );
};

export default Layout;
