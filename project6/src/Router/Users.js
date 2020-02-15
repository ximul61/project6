import React, {Component} from 'react';

class Users extends Component {
    render() {
        console.log(this.props)
        const { params } = this.props.match
        return (
            <div>
                <h1>Users=>{params.id}</h1>
            </div>
        );
    }
}

export default Users;