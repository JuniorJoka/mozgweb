import React, { PropsWithChildren, Ref } from 'react';
import { OrNull } from './Toolbar.types';

const Toolbar = React.forwardRef(
  ({ ...props }: PropsWithChildren<{}>, ref: Ref<OrNull<HTMLDivElement>>) => (
    <Menu {...props} ref={ref} />
  )
);

const Menu = React.forwardRef(
  ({ ...props }: PropsWithChildren<{}>, ref: Ref<OrNull<HTMLDivElement>>) => (
    <div
      {...props}
      ref={ref}
      className="flex space-x-3 py-4 pl-1 mx-0  border-b-2 border-[#eee] mb-5"
    />
  )
);

Menu.displayName = 'Menu';
Toolbar.displayName = 'Toolbar';

export default Toolbar;
