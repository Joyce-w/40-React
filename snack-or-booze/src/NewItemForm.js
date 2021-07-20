import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./NewItemForm.css"

const NewItemForm = () => {
    const initial_item = {
        category: null,
        id: "",
        itemName: "",
        description: "",
        recipe: "",
        serve: ""
    }

    const [item, setItem] = useState(initial_item)

    //update function on current form data
    const handleChange = (e) => {
        console.log(e.target.name)
        const { name, value } = e.target;
        console.log(name, value)
        setItem(item => ({
            ...item,
            [name]: value
        }))
    }

console.log(item)
    return (
    <Form className="w-25">
        <FormGroup>
        <Label for="category">Select</Label>
        <Input type="select" name="category" id="category">
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </Input>
      </FormGroup>
        <FormGroup>
            <Label for="itemName">Name</Label>
                <Input onChange={ handleChange} type="text" name="itemName" id="itemName" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
            <Label for="description">Description</Label>
            <Input onChange={ handleChange} type="textarea" name="description" id="description" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
            <Label for="recipe">Recipe</Label>
            <Input onChange={ handleChange} type="textarea" name="recipe" id="recipe" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
            <Label for="serve">Serve</Label>
            <Input onChange={ handleChange} type="textarea" name="serve" id="serve" placeholder="with a placeholder" />
            </FormGroup>
        <Button>Submit</Button>
    </Form>
    )
}

export default NewItemForm;