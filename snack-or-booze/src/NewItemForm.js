import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./NewItemForm.css"
import SnackOrBoozeApi from "./Api";
import Axios from "axios";
import { useHistory} from "react-router-dom";

const NewItemForm = ({ updateState }) => {
    //inital template for snack form
    const initial_item = {
        category: "snack",
        id: "",
        itemName: "",
        description: "",
        recipe: "",
        serve: ""
    }

    const [item, setItem] = useState(initial_item)
    const history = useHistory();

    //update function on current form data
    const handleChange = (e) => {
        const { name, value } = e.target;

        setItem(item => ({
            ...item,
            [name]: value
        }))
    }

    //handle changes when form is submitted
    const handleSubmit=(e) => {
        // e.preventDefault();
        async function postFood(item) {

            let newItem = {
                "id": item.itemName.split(' ').join('-'),
                "name": item.itemName,
                "description": item.description,
                "recipe": item.description,
                "serve": item.serve
            }
            
            if (item.category === 'snack') {
                await SnackOrBoozeApi.postSnacks(newItem)
                updateState('snack', newItem)
            }
            else{
                await SnackOrBoozeApi.postDrinks(newItem)
                updateState('drink', newItem)
            }
        }
        postFood(item)
        history.push('/')
    }

    return (
    <Form className="w-25">
        <FormGroup>
        <Label for="category">Select</Label>
        <Input onChange={ handleChange} type="select" name="category" id="category">
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
        </Input>
      </FormGroup>
        <FormGroup>
            <Label for="itemName">Name</Label>
                <Input onChange={ handleChange} type="text" name="itemName" id="itemName"  />
        </FormGroup>
        <FormGroup>
            <Label for="description">Description</Label>
            <Input onChange={ handleChange} type="textarea" name="description" id="description"  />
        </FormGroup>
        <FormGroup>
            <Label for="recipe">Recipe</Label>
            <Input onChange={ handleChange} type="textarea" name="recipe" id="recipe" />
        </FormGroup>
        <FormGroup>
            <Label for="serve">Serve</Label>
            <Input onChange={ handleChange} type="textarea" name="serve" id="serve" />
            </FormGroup>
            <Button onClick={handleSubmit }>Submit</Button>
    </Form>
    )
}

export default NewItemForm;