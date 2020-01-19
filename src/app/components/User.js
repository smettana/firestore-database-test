import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    state = {
        info: {}
    }

    componentDidMount(){
        const id = +this.props.match.params.id;
        const { users } = this.props;
        const userInfo = users.filter(user => user.id === id)[0];
        
        this.setState({
            info: userInfo
        });
    }
    render() {

        const {firstName, lastName, phone, isActive} = this.state.info;
        console.log(firstName)
        return (
            <div className="page-wrapper">
                <div className="user-info">
                    <h1>User info</h1>
                    <p>First name: <b>{firstName}</b></p>
                    <p>Last name: <b>{lastName}</b></p>
                    <p>Phone: <b>{phone}</b></p>
                    <p>Is active: <b>{isActive ? 'Active' : 'Not active'}</b></p>
                </div>
            </div>
        );
    }
}


export default connect(state => ({
    users: state.users,
}))(User)

