import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoggedOut } from './Header.stories';

describe('Header', () => {
  test('should render', () => {
    render(<LoggedOut {...LoggedOut.args} />);

    expect(screen.getByRole('header')).toBeVisible();
  });
});
