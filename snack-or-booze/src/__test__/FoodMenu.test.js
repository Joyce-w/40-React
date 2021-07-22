import React from 'react'
import { render, fireEvent } from '@testing-library/react'
//use jest to test for jest matchers
import '@testing-library/jest-dom/extend-expect'
import FoodMenu from '../FoodMenu'
import SnackOrBoozeApi from "../Api"
import { MemoryRouter } from 'react-router-dom'



const getAPI = async() => {
    let drinks = await SnackOrBoozeApi.getDrinks();
    return drinks;
}

//smoke test
it("should render w/o crashing", async () => {
    //get api data
    let drinks = await getAPI();
    render(<MemoryRouter><FoodMenu items={drinks} category="drink" /></MemoryRouter>)
})

//snapshot 
//use async because api call is required
it("matches snapshot", async () => {
    //get api data
    let drinks = await getAPI();
    const {asFragment} = render(<MemoryRouter><FoodMenu items={drinks} category="drink" /></MemoryRouter>)
    expect(asFragment()).toMatchSnapshot();
})

//specialized testing
it("should display drink menu", async () => {
    //get api data
    let drinks = await getAPI();
    const { getByText } = render(<MemoryRouter><FoodMenu items={drinks} category="drink" /></MemoryRouter>)
    expect(getByText('Martini')).toBeInTheDocument();
    expect(getByText('Menu', {exact: false})).toBeInTheDocument();
});
