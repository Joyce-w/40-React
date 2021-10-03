import React from 'react'
import { render } from '@testing-library/react'
//use jest to test for jest matchers
import '@testing-library/jest-dom/extend-expect'
import FoodItem from '../FoodItem'
import SnackOrBoozeApi from "../Api"
import { MemoryRouter, Route , Router} from 'react-router-dom'
import { createMemoryHistory } from 'history'


const getAPI = async() => {
    let snack = await SnackOrBoozeApi.getSnacks();
    return snack;
}

//smoke test
it("should render w/o crashing", async () => {
    //get api data
    let snack = await getAPI();
    render(<MemoryRouter><FoodItem items={snack} cantFind="/snack" /></MemoryRouter>)
})


//snapshot 
//use async because api call is required
it("matches snapshot", async () => {
    //get api data
    let snack = await getAPI();
    const { asFragment} = render(<MemoryRouter><FoodItem items={snack} cantFind="/snack" /></MemoryRouter>)
    expect(asFragment()).toMatchSnapshot();
})

//specialized 

it("should render food item page", async () => {
    let snack = await SnackOrBoozeApi.getSnacks();
    //hit /snack/:snack route
    const history = createMemoryHistory();
    history.push('/Snacks/nachos')
    
    render(<Router history={history}>
        <FoodItem items={snack} cantFind="/snack" />
    </Router>
    )
    /**Cannot hit the item page to test content! >:(( */
})
