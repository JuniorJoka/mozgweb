import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './FilterWidget.stories';

describe('FilterWidget', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);
  });
});
