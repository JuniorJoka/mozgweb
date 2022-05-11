import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './DetailCard.stories';

describe('DetailCard', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByText(Default.args.title)).toBeVisible();
    expect(screen.getByText(`m/${Default.args.community}`)).toBeVisible();
  });

  test('should render "Votes" on 0 voteCount', () => {
    render(<Default {...Default.args} voteCount={0} />);
  });
});
