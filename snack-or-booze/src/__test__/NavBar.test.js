import React from 'react'
import { render } from '@testing-library/react'
import NavBar from '../NavBar'
import {MemoryRouter} from 'react-router-dom'

//smoke test
it("should render w/o crashing", () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>)
})

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<MemoryRouter />)
    expect(asFragment()).toMatchSnapshot();
})

//specialized tests
// it("should have text when rendered", function () {
//     const { getByText } = render(<MemoryRouter />)
//     let cafeName = getByText('Snack or Booze', {exact: false})
//     expect(cafeName).toBeInTheHTML();
// })

// test("/snacks route", () => {
//       const { getByText } = render((
//     /*only enter  in memory router (page you are currently on)
//     is going to display content in about route*/
//     <MemoryRouter initialEntries={['//snacks']}>
//       <NavBar />
//     </MemoryRouter>
//   ));
//  expect(getByText('Menu')).toBeInTheDocument();
// } )
