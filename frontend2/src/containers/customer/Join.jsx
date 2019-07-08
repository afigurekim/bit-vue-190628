import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Join extends Component {
    constructor(props){
        super(props);
        this.state = {
            customerId: '',
            password: '',
            customerName: '',
            phone: '',
            city: ''
        }
    }
    render(){
        return (
            <div>
                <form onSubmit="this.handleSubmit">
                    <Form>
                        <Form.Group controlId="customerId">
                            <Form.Label>CUSTOMER ID</Form.Label>
                            <Form.Control type="text" placeholder="Customer ID" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="customerName">
                            <Form.Label>CUSTOMER NAME</Form.Label>
                            <Form.Control type="text" placeholder="Customer Name" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>PHONE</Form.Label>
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>CITY</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                    </Form>
                    <Button variant="success">가 입</Button>
                    <Button variant="secondary">취 소</Button>
                </form>
            </div>
        );
    }
}
export default Join;