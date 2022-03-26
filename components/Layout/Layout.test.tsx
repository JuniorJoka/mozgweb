import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './Layout.stories';

describe('Layout', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByRole('main')).toBeVisible();
  });
});
