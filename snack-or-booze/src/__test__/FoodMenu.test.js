import React from 'react'
import { render } from '@testing-library/react'
import FoodMenu from '../FoodMenu'
import {MemoryRouter} from 'react-router-dom'

//smoke test
it("should render w/o crashing", () => {
    render(<FoodMenu/>)
})

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<MemoryRouter />)
    expect(asFragment()).toMatchSnapshot();
})

