import { ReactNode } from 'react';

export default interface DialogType {
  show: boolean;
  toggle: VoidFunction;
  children: ReactNode;
}
