import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Slide } from '../../../store/carousel';
import AuthCardProps from '../AuthCard.types';

const PasswordReset = ({ set }: AuthCardProps) => {
  return (
    <div className="rounded-3xl h-72 flex w-[540px] shadow-border bg-white">
      <div className="h-full w-full overflow-hidden rounded-l-3xl flex items-center justify-center">
        <div className="h-56 w-80 ">
          <h2 className="font-bold mb-5">Request Password</h2>
          <form>
            <label htmlFor="requestEmail" className="text-sm font-semibold text-slate-600">
              Email address
            </label>
            <br />
            <input
              type="email"
              id="requestEmail"
              placeholder="Your email address"
              className="shadow-border focus:outline-none w-full rounded-lg px-2 h-10 mb-4 mt-1"
            />
            <br />
            <button
              type="submit"
              className="w-full flex h-11 justify-between my-2 bg-blue-500 rounded-full items-center text-white px-4"
            >
              Reset Password <BsArrowRightShort />
            </button>
          </form>
          <p className="text-xs text-slate-500 font-semibold mt-6">
            Remember your password?{' '}
            <button className="underline font-bold text-slate-500" onClick={() => set(Slide.LOGIN)}>
              {' '}
              Login
            </button>
          </p>
        </div>
      </div>
      <div className="w-40  h-full overflow-hidden rounded-r-3xl bg-pink-100" />
    </div>
  );
};
export default PasswordReset;
