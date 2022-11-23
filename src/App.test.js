import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './pages/home/home';

test('renders portfolio image', () => {
  render(<Home />);
  const portfolioImg = screen.getByAltText(/Billy/)
  expect(portfolioImg).toBeInTheDocument();
});
