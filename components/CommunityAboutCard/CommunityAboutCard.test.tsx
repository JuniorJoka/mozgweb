import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './CommunityAboutCard.stories';

describe('CommunityAboutCard', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByText(Default.args.description)).toBeVisible();
  });
});
