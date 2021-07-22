import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'
import {MemoryRouter} from 'react-router-dom'

//smoke test 
it("should render w/o crashing", () => {
    render(<MemoryRouter><App/></MemoryRouter>)
})

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<MemoryRouter><App/></MemoryRouter>)
    expect(asFragment()).toMatchSnapshot();
})

