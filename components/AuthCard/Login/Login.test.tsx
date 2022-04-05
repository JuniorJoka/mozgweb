import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './Login.stories';
import { Slide } from '../../../store/carousel';

const set = jest.fn();
describe('Auth-Login', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByPlaceholderText(/your email address/i)).toBeVisible();
    expect(
      screen.getByRole((role, element) => role === 'button' && element.textContent.match(/login/i))
    ).toBeVisible();
  });

  test('should call set func', () => {
    render(<Default {...Default.args} set={set} />);
    const forgetButton = screen.getByRole(
      (role, element) => role === 'button' && element.textContent.match(/forgot your password?/i)
    );

    const registerButton = screen.getByRole(
      (role, element) => role === 'button' && element.textContent.match(/sign up/i)
    );

    fireEvent.click(forgetButton);
    fireEvent.click(registerButton);

    expect(set).toBeCalledTimes(2);
    expect(set).toBeCalledWith(Slide.FORGET);
  });
});
