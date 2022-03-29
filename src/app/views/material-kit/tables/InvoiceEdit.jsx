import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class InvoiceEdit extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    photo = "anonymous.png";
    imagesrc = `${process.env.REACT_APP_API_URL}/media/` + this.photo;

    handleSubmit(event){
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/invoice/`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                InvoiceId:event.target.InvoiceId.value,
                Name:event.target.Name.value,
                Invoice_no:event.target.Invoice_no.value,
                Invoice_Date:event.target.Invoice_Date.value,
                Payment_Date: event.target.Payment_Date.value,
                Amount: event.target.Amount.value,
                Photo:this.photo,
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


    handleFileSelected(event){
        event.preventDefault();
        this.photo=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(`${process.env.REACT_APP_API_URL}/invoice/SaveFile`,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc=`${process.env.REACT_APP_API_URL}/media/`+result;
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
            Edit Invoice
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="EmployeeId">
                        <Form.Label>InvoiceId</Form.Label>
                        <Form.Control type="text" name="InvoiceId" required 
                        placeholder="InvoiceId"
                        disabled
                        defaultValue={this.props.invid}/>
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        defaultValue={this.props.invname}
                        placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="Invoiceno">
                        <Form.Label>Invoice_No</Form.Label>
                        <Form.Control type="text" name="Name" required 
                        defaultValue={this.props.invno}
                        placeholder="Invoice Number"/>
                    </Form.Group>

                    <Form.Group controlId="Invoice_Date">
                        <Form.Label>Invoice_Date</Form.Label>
                        <Form.Control 
                        type="date"
                        name="Invoice_Date"
                        required
                        placeholder="Invoice_Date"
                        defaultValue={this.props.invdate}
                        />
                    </Form.Group>
                    <Form.Group controlId="Payment_Date">
                        <Form.Label>Payment_Date</Form.Label>
                        <Form.Control 
                        type="date"
                        name="Payment_Date"
                        required
                        placeholder="Payment_Date"
                        defaultValue={this.props.paydate}
                        />
                    </Form.Group>
                    <Form.Group controlId="Amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" name="Amount" required 
                        defaultValue={this.props.amount}
                        placeholder="Amount"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update 
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            <Col sm={6}>
                <Image width="200px" height="200px" 
                src={`${process.env.REACT_APP_API_URL}/media/`+this.props.photo}/>
                <input onChange={this.handleFileSelected} type="File"/>
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