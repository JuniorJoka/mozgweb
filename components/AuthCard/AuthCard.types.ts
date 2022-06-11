import { Slide } from '../../store/carousel';

export default interface AuthCardProps {
  set: (slide: Slide) => void;
  action: (input: Action) => Promise<void>;
}

export interface Action {
  login?: string;
  email?: string;
  password?: string;
  username?: string;
}
