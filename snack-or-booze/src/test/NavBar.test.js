import React from 'react'
import { render } from '@testing-library/react'
import NavBar from '../NavBar'
import {MemoryRouter} from 'react-router-dom'

it("should render w/o crashing", () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>)
})