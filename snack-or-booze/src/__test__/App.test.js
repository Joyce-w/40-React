import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

//smoke test 
it("should render w/o crashing", () => {
    render(<App />)
})

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot();
})

//specialized tests
// it("should have text when rendered", function () {
//     const { getByText } = render(<App />)
//     let p = getByText('Welcome', {exact: false})
//     expect(p).toBeInTheDocument();
// })

