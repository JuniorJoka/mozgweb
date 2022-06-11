import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export default create<StoreTypes>(
  devtools(
    persist(
      (set) => ({
        jwtToken: '',
        setJwtToken: (value: string) => set({ jwtToken: value }),

        user: undefined,
        setUser: (user?: User) => {
          if (!user) {
            set({ user: undefined });
          } else {
            set({ user });
          }
        },
      }),
      { name: 'logged' }
    )
  )
);

export interface StoreTypes {
  jwtToken: string;
  setJwtToken: (value: string) => void;
  user: User;
  setUser: (user?: User) => void;
}

export interface User {
  id: string;
  email: string;
  username: string;
}
