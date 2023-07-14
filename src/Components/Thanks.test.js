import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Thanks from './Thanks';
import { type } from '@testing-library/user-event/dist/type';

describe("thankyou page", () => {

    test('renders thankyou', () => {
        render(<MemoryRouter><Thanks/></MemoryRouter>);
        const ty = screen.getByTestId("thankyou");
        expect(ty).toBeInTheDocument();
  })
  
  
  test('renders startover button ', () => {
        render(<MemoryRouter><Thanks/></MemoryRouter>);
        const startOver = screen.getByTestId("start-over");
        expect(startOver).toBeInTheDocument();
  })
})


