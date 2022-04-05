import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './SignUp.stories';
import { Slide } from '../../../store/carousel';

const set = jest.fn();

describe('Auth-SignUp', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByPlaceholderText(/your email address/i)).toBeVisible();
    expect(
      screen.getByRole(
        (role, element) => role === 'button' && element.textContent.match(/get started/i)
      )
    ).toBeVisible();
  });

  test('should call set func', () => {
    render(<Default {...Default.args} set={set} />);
    const button = screen.getByRole(
      (role, element) => role === 'button' && element.textContent.match(/login?/i)
    );

    fireEvent.click(button);

    expect(set).toBeCalledTimes(1);
    expect(set).toBeCalledWith(Slide.LOGIN);
  });
});
