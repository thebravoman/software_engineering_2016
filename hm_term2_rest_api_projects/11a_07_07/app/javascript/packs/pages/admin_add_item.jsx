import React, {Component} from "react";
import {render} from "react-dom";
import "whatwg-fetch";
import {Button, Form} from "semantic-ui-react";
import FileInput from "react-file-input";

export default class AdminAddItemPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            slug: '',
            description: '',
            price: 0,
            image: '',
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const reader = new FileReader();
        const {name, slug, description, price} = this.state;

        reader.onload = (e) => {
            fetch('/api/shop_items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    shop_item: {
                        name,
                        slug,
                        description,
                        price,
                        image: e.currentTarget.result,
                    }
                })
            })
                .then(response => response.json())
                .then(response => window.location.replace('/catalog/view/' + response.slug))
                .catch(error => console.error(error));
        };

        reader.readAsDataURL(this.state.image);
    }

    handleFormChange(e, data) {
        const {name, value} = data;
        this.setState({
            [name]: value,
        });
    }

    handleImageChange(e) {
        this.setState({
            image: e.target.files[0],
        });
    }

    render() {
        const {name, slug, description, price} = this.state;
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Input placeholder='Name' name="name" value={name} onChange={this.handleFormChange} />
                <Form.Input placeholder="Slug" name="slug" value={slug} onChange={this.handleFormChange} />
                <Form.Input placeholder="Description" name="description" value={description} onChange={this.handleFormChange} />
                <Form.Input placeholder="price" name="price" value={price} onChange={this.handleFormChange} />
                <Form.Field style={{cursor: 'pointer'}}>
                    <FileInput name="image"
                               accept=".jpg,.png,.gif"
                               placeholder="Select Item Image"
                               onChange={this.handleImageChange} />
                </Form.Field>
                <Button type="submit">Add Item</Button>
            </Form>
        );
    }
}

render(
    <AdminAddItemPage />,
    document.getElementById('mount'),
);