import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditVendor extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:8000/vendor/',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                VendorId:event.target.VendorId.value,
                Name:event.target.Name.value,
                Address:event.target.Address.value,
                GST:event.target.GST.value,
                Email:event.target.Email.value,
                Pan:event.target.Pan.value,
                Contact:event.target.Contact.value,
                Bank:event.target.Bank.value,
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
            Edit Vendor
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="VendorId">
                        <Form.Label>VendorId</Form.Label>
                        <Form.Control type="text" name="VendorId" required
                        disabled
                        defaultValue={this.props.venid} 
                        placeholder="VendorId"/>
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        defaultValue={this.props.venname}
                        placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="Address" required 
                        defaultValue={this.props.add}
                        placeholder="Address"/>
                    </Form.Group>

                    <Form.Group controlId="GST">
                        <Form.Label>GST</Form.Label>
                        <Form.Control type="text" name="GST" required 
                        defaultValue={this.props.gst}
                        placeholder="GST No"/>
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="Email" required 
                        defaultValue={this.props.email}
                        placeholder="Email"/>
                    </Form.Group>

                    <Form.Group controlId="Pan">
                        <Form.Label>Pan</Form.Label>
                        <Form.Control type="text" name="Pan" required 
                        defaultValue={this.props.pan}
                        placeholder="PAN No"/>
                    </Form.Group>

                    <Form.Group controlId="Contact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" name="Contact" required 
                        defaultValue={this.props.contact}
                        placeholder="Contact"/>
                    </Form.Group>

                    <Form.Group controlId="Account">
                        <Form.Label>Account</Form.Label>
                        <Form.Control type="text" name="Account" required 
                        defaultValue={this.props.acc}
                        placeholder="Account Number"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Department
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