import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NavBar from '../NavBar'
import {MemoryRouter} from 'react-router-dom'

//smoke test
it("should render w/o crashing", () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>)
})

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<MemoryRouter><NavBar /></MemoryRouter>)
    expect(asFragment()).toMatchSnapshot();
})

//specialized tests
test("Should render NavBar text", function () {
    //render uses 2 () to render + write on multiple lines
    const { getByText } = render((
        <MemoryRouter initialEntries={['/']}>
            <NavBar />
        </MemoryRouter>
    ));
    expect(getByText(`Snack or Booze`)).toBeInTheDocument();
});

