import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DetailPage from './DetailPage';


test('render the car detail', () => {
    render(
          <MemoryRouter>
              <DetailPage />
          </MemoryRouter>
      );
    const linkElement = screen.getByTestId("detailed");
    expect(linkElement).toBeInTheDocument();
  });