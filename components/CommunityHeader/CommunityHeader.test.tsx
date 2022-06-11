import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Default } from './CommunityHeader.stories';

describe('CommunityHeader', () => {
  test('should render', () => {
    render(<Default {...Default.args} />);
  });
});
