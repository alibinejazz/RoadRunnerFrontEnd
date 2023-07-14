import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from './NavBar';

test('renders a logo', () => {
      render(<MemoryRouter><NavBar/></MemoryRouter>);
      const logo = screen.getByTestId("logo");
      expect(logo).toBeInTheDocument();
})
