import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import BookForm from './BookForm';

// test('renders a logo', () => {
//       render(<MemoryRouter><BookForm/></MemoryRouter>);
//       const form = screen.getByTestId("form-book");
//       expect(form).toBeInTheDocument();
// })


it("Filling details and clicking buttons in a Rental form",() => {
    render(
      <MemoryRouter>
        <BookForm />
      </MemoryRouter>
    );

    userEvent.type(screen.getByLabelText("Name"), "hello");
    userEvent.click(screen.getByRole("button", { name: "Checkout" }));
    userEvent.click(screen.getByRole("button", { name: "Choose Another Car" }));
  });

  it("Checking selected car", ()=> {
    render(<MemoryRouter><BookForm/></MemoryRouter>);
    const button = screen.getByTestId("carselected");
    expect(button).toBeInTheDocument();

  })