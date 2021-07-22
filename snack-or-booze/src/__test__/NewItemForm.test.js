import React from 'react'
import { render, fireEvent } from '@testing-library/react'
//use jest to test for jest matchers
import '@testing-library/jest-dom/extend-expect'
import NewItemForm from '../NewItemForm'
import {MemoryRouter} from 'react-router-dom'


//smoke test
it("should render w/o crashing", () => {
    render(<NewItemForm/> )
})

//snapshot test
it("should match snapshot", () =>{
  const {asFragment} = render(<NewItemForm/>)
  expect(asFragment()).toMatchSnapshot();

})

//specialized testing
it("should display form", () => {
  const {getByLabelText, getByText} = render(<NewItemForm/>)
  expect(getByLabelText('Select')).toBeInTheDocument();
  expect(getByLabelText('Description')).toBeInTheDocument();
  expect(getByText('Submit')).toBeInTheDocument();
})

