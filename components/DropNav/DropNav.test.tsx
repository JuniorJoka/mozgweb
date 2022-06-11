import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Default } from './DropNav.stories';

describe('DropNav', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByPlaceholderText(/search mozg/i)).toBeVisible();
  });
});
