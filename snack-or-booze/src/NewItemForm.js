import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./NewItemForm.css"

const NewItemForm = () => {
    const initial_item = {
        id: "",
        itemName: "",
        description: "",
        recipe: "",
        serve: ""
    }

    const [item, setItem] = useState(initial_item)

    const handleChange = (e) => {
        const { name, value } = e.target
        setItem(item => ({
            ...item,
            [e.target.name]: e.target.value
        }))
    }
    console.log(item)


    return (
    <Form className="w-25">
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