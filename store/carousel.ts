import create from 'zustand';

export enum Slide {
  'LOGIN',
  'REGISTER',
  'FORGET',
}

export default create<CarouselTypes>((set, get) => ({
  active: Slide.LOGIN,
  previousActive: -1,
  setActive: (active: Slide) => {
    set({ previousActive: get().active, active });
  },
}));

export interface CarouselTypes {
  active: Slide;
  previousActive: Slide;
  setActive: (active: Slide) => void;
}
