import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Error, Success, Warning } from './Toast.stories';

describe('Toast', () => {
  test('should render success toast', () => {
    render(<Success {...Success.args} />);
  });

  test('should render warning toast', () => {
    render(<Warning {...Success.args} />);
  });

  test('should render error toast', () => {
    render(<Error {...Success.args} />);
  });
});
