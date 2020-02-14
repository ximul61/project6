import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css"
import er from './1.svg'
class MouseClickEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {

        return (
            <div>
                <nav style={{backgroundColor: "#37AE9C"}} id="topNav"
                     className="navbar fixed-top navbar-toggleable-sm navbar-inverse">
                    <h1 className="mx-auto" style={{color: "white"}}>Click Counter</h1>
                </nav>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={er}/>
                        <Card.Body>
                            <Card.Title>{this.props.count2}</Card.Title>
                            <Button onClick={this.props.valuf2} variant="primary"  >Go somewhere</Button>

                            <Button style={{marginTop:"10px"}} onClick={this.props.valuf} variant="primary"  >Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default MouseClickEvent;