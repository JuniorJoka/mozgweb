import { render, screen } from '@testing-library/react';
import React from 'react';
import { Default } from './NoCommunity.stories';

describe('No community', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);

    expect(
      screen.getByRole((role, element) => role === 'button' && element.innerHTML.match(/go home/i))
    ).toBeVisible();
  });
});
