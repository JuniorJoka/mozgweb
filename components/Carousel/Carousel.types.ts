import { ReactNode } from 'react';
import { Slide } from '../../store/carousel';

export interface ContentTypes {
  children: ReactNode;
  active: Slide;
  previousActive: Slide;
}
