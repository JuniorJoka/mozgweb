import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Extended, Primary, Secondary, ColoredOutline } from './Button.stories';

describe('Button', () => {
  test('should render primary button', () => {
    render(<Primary {...Primary.args} />);

    expect(screen.getByRole('button')).toHaveTextContent(Primary.args.label);
  });

  test('should render secondary button', () => {
    render(<Secondary {...Secondary.args} />);

    expect(screen.getByRole('button')).toHaveTextContent(Secondary.args.label);
  });

  test('should render extended button', () => {
    render(<Extended {...Extended.args} />);

    expect(screen.getByRole('button')).toHaveTextContent(Extended.args.label);
  });

  test('should render colored outline', () => {
    render(<ColoredOutline {...ColoredOutline.args} />);

    expect(screen.getByRole('button')).toHaveTextContent(ColoredOutline.args.label);
  });
});
