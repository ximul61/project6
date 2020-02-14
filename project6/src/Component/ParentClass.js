import React, {Component} from 'react';
import MouseClickEvent from "./MouseClickEvent";

class ParentClass extends Component {
    constructor(props) {
        super(props);
        this.state={
            ParentName:5
        }
        this.greetParent=this.greetParent.bind(this)
        this.changeHandle=this.changeHandle.bind(this)
    }

    greetParent(){
        this.setState({
            ParentName:this.state.ParentName-1
        })
        console.log("Button1")
    }
    changeHandle(){
        this.setState(prevState=>({
                ParentName:prevState.ParentName+1
            }
        ))
    }
    render() {
        return (
            <div>
                <MouseClickEvent valuf={this.greetParent} valuf2={this.changeHandle} count2={this.state.ParentName}/>
            </div>
        );
    }
}

export default ParentClass;