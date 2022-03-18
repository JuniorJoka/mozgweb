import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './PostWidget.stories';

describe('Post Widget', () => {
  test('should render ', () => {
    render(<Default {...Default.args} />);
  });
});
