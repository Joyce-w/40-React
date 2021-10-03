import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'
import {MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import SnackOrBoozeApi from "../Api"
//smoke test 
it("should render w/o crashing", () => {
    render(<MemoryRouter><App/></MemoryRouter>)
})

//snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<MemoryRouter><App/></MemoryRouter>)
    expect(asFragment()).toMatchSnapshot();
})

it("should test whether form submits and goes to / route", () => {
    const {getByText} =render(
      <MemoryRouter initialEntries={['/newItem']}>
        <App/>
      </MemoryRouter>)
    fireEvent.click(getByText('Submit'))
    expect(getByText('Welcome', {exact:false})).toBeInTheDocument();
  })

it("should redirect to /snacks for invalid param ", async () => {
    const {getByText, debug} =render(
        <MemoryRouter initialEntries={['/Snacks/nachos']}>
          <App/>
        </MemoryRouter>)
        debug();
        expect(getByText('Snacks Menu', {exact:false})).toBeInTheDocument();
});
