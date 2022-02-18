import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class Addstart extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:8000/api/start/",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:null,
                fname:event.target.fname.value,
                lname:event.target.lname.value,
                business:event.target.business.value,
                address:event.target.address.value,
                state:event.target.state.value,
                code:event.target.code.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Button
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

    <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="fname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="fame" required 
                        placeholder="First Name"/>
                    </Form.Group>
                    <Form.Group controlId="lname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lname" required 
                        placeholder="Last Name"/>
                    </Form.Group>
                    <Form.Group controlId="business">
                        <Form.Label>Business</Form.Label>
                        <Form.Control type="text" name="business" required 
                        placeholder="Business"/>
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" required 
                        placeholder="Address"/>
                    </Form.Group>
                    <Form.Group controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name="state" required 
                        placeholder="State"/>
                    </Form.Group>
                    <Form.Group controlId="code">
                        <Form.Label>State Code</Form.Label>
                        <Form.Control type="text" name="code" required 
                        placeholder="State Code"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Value
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}