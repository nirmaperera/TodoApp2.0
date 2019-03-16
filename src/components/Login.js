import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';

import Form from './Form';

class Login extends Component {
    state = {
        username: undefined,
        cookie: undefined
    };

    getAuth = (event) => {
        event.preventDefault();

        let username = event.target.elements.username.value;

        //case where username is empty
        if (!username) {
            alert('Please fill out username');
            return this.props.history.push('/login');
        }
        this.setState({
            username: username
        });

        axios
            .post('https://hunter-todo-api.herokuapp.com/auth', { username: username })
            .then((response) => {
                console.log(response);
                this.setState({ cookie: response.data.token });
                console.log('Your token:', this.state.cookie);
                console.log('Your username:', this.state.username);
                this.props.history.push({
                    pathname: '/todo',
                    state: { username: this.state.username, cookie: this.state.cookie }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <Form getAuth={this.getAuth} />
                <div className="redirect">
                    <NavLink to="/register"> Don't have a account?</NavLink>
                    <NavLink to="/"> Back to Profile</NavLink>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);
