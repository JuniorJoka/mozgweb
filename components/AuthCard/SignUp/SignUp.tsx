import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Slide } from '../../../store/carousel';
import AuthCardProps from '../AuthCard.types';

const Login = ({ set }: AuthCardProps) => {
  return (
    <div className="rounded-3xl h-[32rem] flex w-[540px] shadow-border bg-white">
      <div className="h-full w-full overflow-hidden rounded-l-3xl flex items-center justify-center">
        <div className="h-[28rem] w-80">
          <h2 className="font-bold mb-5">Getting Started with Mozg is easy</h2>
          <form>
            <label htmlFor="username" className="text-sm font-semibold text-slate-600">
              Username*
            </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className="shadow-border focus:outline-none w-full rounded-lg px-2 h-10 mb-4 mt-1"
              placeholder="Your username"
            />
            <label htmlFor="loginEmail" className="text-sm font-semibold text-slate-600">
              Email address*
            </label>
            <br />
            <input
              type="email"
              id="loginEmail"
              placeholder="Your email address"
              className="shadow-border focus:outline-none w-full rounded-lg px-2 h-10 mb-4 mt-1"
            />
            <br />
            <label htmlFor="loginPassword" className="text-sm font-semibold text-slate-600">
              Password*
            </label>
            <br />
            <input
              type="password"
              id="loginPassword"
              placeholder="Enter password"
              className="shadow-border focus:outline-none w-full rounded-lg px-2 h-10 mb-4 mt-1"
            />
            <p className="text-xs text-slate-500 font-semibold my-3">
              {'By clicking the "get started" button below I agree to the'}
              <button className="text-xs text-slate-500 font-bold underline my-1">
                Terms of use?
              </button>
            </p>
            <button
              type="submit"
              className="w-full flex h-11 justify-between my-4 bg-blue-500 rounded-full items-center text-white px-4"
            >
              Get Started
              <BsArrowRightShort />
            </button>
          </form>
          <p className="text-xs text-slate-500 font-semibold">
            Already have an account?{' '}
            <button
              className="underline font-bold text-slate-500 mt-3"
              onClick={() => set(Slide.LOGIN)}
            >
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
export default Login;
