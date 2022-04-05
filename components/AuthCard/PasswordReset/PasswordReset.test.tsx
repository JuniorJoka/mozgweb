import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './PasswordReset.stories';
import { Slide } from '../../../store/carousel';

const set = jest.fn();

describe('Auth-PasswordReset', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByPlaceholderText(/your email address/i)).toBeVisible();
    expect(
      screen.getByRole((role, element) => role === 'button' && element.textContent.match(/login/i))
    ).toBeVisible();
  });

  test('should call set func', () => {
    render(<Default {...Default.args} set={set} />);
    const button = screen.getByRole(
      (role, element) => role === 'button' && element.textContent.match(/login/i)
    );

    fireEvent.click(button);

    expect(set).toBeCalledTimes(1);
    expect(set).toBeCalledWith(Slide.LOGIN);
  });
});
