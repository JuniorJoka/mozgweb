import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Slide } from '../../../store/carousel';
import AuthCardProps from '../AuthCard.types';

const Login = ({ set, action }: AuthCardProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await action({ login, password });
  };

  return (
    <div className="rounded-3xl h-96 flex w-[540px] shadow-border bg-white">
      <div className="h-full w-full overflow-hidden rounded-l-3xl flex items-center justify-center">
        <div className="h-80 w-80">
          <h2 className="font-bold mb-5">Login to Mozg</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="login" className="text-sm font-semibold text-slate-600">
              login
            </label>
            <br />
            <input
              type="text"
              id="login"
              placeholder="email or username"
              className="shadow-border focus:outline-none w-full rounded-lg px-2 h-10 mb-4 mt-1"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              required
            />
            <br />
            <label htmlFor="loginPassword" className="text-sm font-semibold text-slate-600">
              Password
            </label>
            <br />
            <input
              type="password"
              id="loginPassword"
              placeholder="Enter password"
              className="shadow-border focus:outline-none w-full rounded-lg px-2 h-10 mb-4 mt-1"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <p className="flex justify-end">
              <button
                className="text-xs text-slate-500 font-bold underline my-1"
                onClick={() => set(Slide.FORGET)}
              >
                Forgot your password?
              </button>
            </p>
            <button
              type="submit"
              className="w-full flex h-11 justify-between my-4 bg-blue-500 rounded-full items-center text-white px-4"
            >
              Login
              <BsArrowRightShort />
            </button>
          </form>
          <p className="text-xs text-slate-500 font-semibold">
            {"Don't have a Mozg account?"}
            <button
              className="underline font-bold text-slate-500"
              onClick={() => set(Slide.REGISTER)}
            >
              {' '}
              Sign up
            </button>
          </p>
        </div>
      </div>
      <div className="w-40  h-full overflow-hidden rounded-r-3xl bg-pink-100" />
    </div>
  );
};
export default Login;
